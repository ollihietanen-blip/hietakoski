# Hero-kuvan ohjeet

## Kuvan vaatimukset

### Koko ja resoluutio
- **Suositeltu koko**: 1920x1080px (16:9 aspect ratio)
- **Minimikoko**: 1920px leveys
- **Idealikoko**: 2560x1440px tai suurempi (4K)
- **Aspect ratio**: 16:9 (landscape)

### Tiedostomuoto
- **Suositeltu**: WebP (paras pakkaus)
- **Vaihtoehdot**: JPG (korkea laatu, 90%+), PNG (jos tarvitaan läpinäkyvyys)

### Sisältö ja tyyli
- **Aihe**: Suomen arkkitehtuuri, modernit talot, rakennukset
- **Tyyli**: Ammattimainen, moderni, laadukas
- **Valaistus**: Tasainen, ei liian kontrastinen
- **Värit**: Sopii Nordic Fresh -väripalettiin (slate-blue, aged-copper)

### Tekninen
- **Paino**: Alle 500KB optimoitu (WebP)
- **Kohdistus**: Keskitys tai yläosa (teksti tulee päälle)
- **Kuvan sijainti**: `public/images/hero.jpg` tai `public/images/hero.webp`

## Käyttö

Kun olet lisännyt kuvan `public/images/` kansioon, päivitä `components/Hero.tsx`:

```tsx
<Image
  src="/images/hero.jpg"  // tai /images/hero.webp
  alt="Finnish architecture"
  fill
  className="object-cover object-center"
  priority
  quality={90}
/>
```

## Vinkit

- Vältä liian tummia tai liian vaaleita kuvia (overlay tekee kuvan tummemmaksi)
- Varmista että kuva toimii eri näyttöko'oissa (responsiivinen)
- Testaa että teksti on luettavissa kuvan päällä

