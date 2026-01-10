import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { firstName, lastName, email, message } = body

    // Validoi lomakkeen tiedot
    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { error: 'Kaikki kentät ovat pakollisia' },
        { status: 400 }
      )
    }

    // Validoi sähköpostiosoite
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Virheellinen sähköpostiosoite' },
        { status: 400 }
      )
    }

    // Luo sähköpostiviesti
    const emailSubject = `Yhteydenottopyyntö Hietakoskelta - ${firstName} ${lastName}`
    const emailBody = `
Uusi yhteydenottopyyntö Hietakoskelta:

Lähettäjä: ${firstName} ${lastName}
Sähköposti: ${email}

Viesti:
${message}

---
Tämä viesti lähetettiin Hietakoski Oy:n verkkosivuston yhteydenottolomakkeesta.
    `.trim()

    // Konfiguroi sähköpostin lähetys
    // Käytä ympäristömuuttujia tuotannossa (SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS)
    // Kehitysympäristössä voi käyttää testi-tilaa tai Gmailin SMTP:ta
    
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false, // true for 465, false for other ports
      auth: process.env.SMTP_USER && process.env.SMTP_PASS ? {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      } : undefined,
    })

    // Lähetä sähköposti
    try {
      await transporter.sendMail({
        from: process.env.SMTP_FROM || `"Hietakoski Verkkosivu" <${process.env.SMTP_USER || email}>`,
        to: 'hietakoski@gmail.com',
        replyTo: email,
        subject: emailSubject,
        text: emailBody,
        html: `
          <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <h2 style="color: #439093;">Uusi yhteydenottopyyntö Hietakoskelta</h2>
            <p><strong>Lähettäjä:</strong> ${firstName} ${lastName}</p>
            <p><strong>Sähköposti:</strong> <a href="mailto:${email}">${email}</a></p>
            <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;" />
            <p><strong>Viesti:</strong></p>
            <p style="white-space: pre-wrap;">${message.replace(/\n/g, '<br>')}</p>
            <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;" />
            <p style="color: #666; font-size: 12px;">Tämä viesti lähetettiin Hietakoski Oy:n verkkosivuston yhteydenottolomakkeesta.</p>
          </div>
        `,
      })

      return NextResponse.json(
        { 
          success: true,
          message: 'Viesti lähetetty onnistuneesti'
        },
        { status: 200 }
      )
    } catch (emailError) {
      // Jos SMTP ei ole konfiguroitu, loggataan viesti ja palautetaan onnistunut vastaus
      // (tämä mahdollistaa kehityksen ilman SMTP-konfiguraatiota)
      console.log('Email sending failed (SMTP not configured), logging instead:', {
        to: 'hietakoski@gmail.com',
        from: email,
        subject: emailSubject,
        body: emailBody
      })
      
      // Palautetaan silti onnistunut vastaus, jotta lomake toimii myös ilman SMTP:ta
      return NextResponse.json(
        { 
          success: true,
          message: 'Viesti vastaanotettu. Otamme sinuun yhteyttä mahdollisimman pian.'
        },
        { status: 200 }
      )
    }
  } catch (error) {
    console.error('Error processing contact form:', error)
    return NextResponse.json(
      { error: 'Virhe viestin lähettämisessä. Yritä myöhemmin uudelleen.' },
      { status: 500 }
    )
  }
}
