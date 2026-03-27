import { useEffect } from 'react';

// â”€â”€â”€ PAGE SEO â€” Taxi Vitrolles â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
// Page non visible dans la navigation â€” indexÃ©e uniquement par Google & bots IA
// URL : /taxi-vitrolles

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": ["TaxiService", "LocalBusiness"],
  "@id": "https://www.taximalacrida.fr/taxi-vitrolles#service",
  "name": "Taxi Vitrolles â€” Malacrida",
  "description": "Service de taxi et VTC Ã  Vitrolles. Transferts vers l'AÃ©roport Marseille-Provence, la Gare TGV Aix-en-Provence et le centre d'Aix. Chauffeur Tesla 24h/24, tarif fixe, ponctualitÃ© garantie.",
  "url": "https://www.taximalacrida.fr/taxi-vitrolles",
  "telephone": "+33784628640",
  "priceRange": "â‚¬â‚¬",
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
    "opens": "00:00", "closes": "23:59"
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Vitrolles",
    "postalCode": "13127",
    "addressRegion": "Provence-Alpes-CÃ´te d'Azur",
    "addressCountry": "FR"
  },
  "geo": { "@type": "GeoCoordinates", "latitude": 43.4600, "longitude": 5.2480 },
  "areaServed": [
    { "@type": "City", "name": "Vitrolles" },
    { "@type": "City", "name": "Aix-en-Provence" },
    { "@type": "City", "name": "Marignane" }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Taxi Vitrolles â†’ AÃ©roport Marseille-Provence" }, "price": "25", "priceCurrency": "EUR" },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Taxi Vitrolles â†’ Centre Aix-en-Provence" }, "price": "35", "priceCurrency": "EUR" }
    ]
  },
  "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5", "bestRating": "5", "ratingCount": "47" }
};

const BREADCRUMB_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Taxi Aix-en-Provence", "item": "https://www.taximalacrida.fr/" },
    { "@type": "ListItem", "position": 2, "name": "Taxi Vitrolles", "item": "https://www.taximalacrida.fr/taxi-vitrolles" }
  ]
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Quel taxi appeler Ã  Vitrolles pour l'aÃ©roport de Marseille ?",
      "acceptedAnswer": { "@type": "Answer", "text": "Taxi Malacrida assure les transferts depuis Vitrolles vers l'AÃ©roport Marseille-Provence (Marignane), Ã  seulement 10 minutes. Tarif fixe dÃ¨s 25â‚¬, disponible 24h/24. Appelez le 07 84 62 86 40." }
    },
    {
      "@type": "Question",
      "name": "Existe-t-il un taxi VTC Ã  Vitrolles disponible la nuit ?",
      "acceptedAnswer": { "@type": "Answer", "text": "Oui, Taxi Malacrida intervient Ã  Vitrolles 24h/24 7j/7, y compris la nuit et les jours fÃ©r°ê\Ëˆ]Xİ[ˆİ\0ê[Y[HZ]\\]pêHİ\ˆH\šYˆš^KˆˆBˆBˆBŸNÂ‚˜ÛÛœİ^Uš]›Û\ÈH

HOˆÂˆ\ÙQY™™Xİ


HOˆÂˆØİ[Y[]HH	Õ^Hš]›Û\ÈX[XÜšYH8 %pê\›ÜÜØ\™HÕ‹Z^Y[‹T›İ™[˜ÙKÌ	ÎÂ‚ˆÛÛœİÌHHØİ[Y[˜Ü™X]Q[[Y[
	ÜØÜš\	ÊNÂˆÌK\HH	Ø\XØ][Û‹Û
ÚœÛÛ‰ÎÈÌKšYH	ÜØÚ[XK]š]›Û\ËX\Ú[™\ÜÉÎÂˆÌK^ÛÛ[H”ÓÓ‹œİš[™ÚYJĞÒSPJNÂˆØİ[Y[šXY˜\[™Ú[
ÌJNÂ‚ˆÛÛœİÌˆHØİ[Y[˜Ü™X]Q[[Y[
	ÜØÜš\	ÊNÂˆÌ‹\HH	Ø\XØ][Û‹Û
ÚœÛÛ‰ÎÈÌ‹šYH	ÜØÚ[XK]š]›Û\ËY˜\IÎÂˆÌ‹^ÛÛ[H”ÓÓ‹œİš[™ÚYJTWÔĞÒSPJNÂˆØİ[Y[šXY˜\[™Ú[
ÌŠNÂ‚ˆÛÛœİÌÈHØİ[Y[˜Ü™X]Q[[Y[
	ÜØÜš\	ÊNÂˆÌË\HH	Ø\XØ][Û‹Û
ÚœÛÛ‰ÎÈÌËšYH	ÜØÚ[XK]š]›Û\ËXœ™XYÜ[X‰ÎÂˆÌË^ÛÛ[H”ÓÓ‹œİš[™ÚYJ”‘PQÔ•SP—ÔĞÒSPJNÂˆØİ[Y[šXY˜\[™Ú[
ÌÊNÂ‚ˆ™]\›ˆ

HOˆÂˆØİ[Y[™Ù][[Y[RY
	ÜØÚ[XK]š]›Û\ËX\Ú[™\ÜÉÊOËœ™[[İ™J
NÂˆØİ[Y[™Ù][[Y[RY
	ÜØÚ[XK]š]›Û\ËY˜\IÊOËœ™[[İ™J
NÂˆØİ[Y[™Ù][[Y[RY
	ÜØÚ[XK]š]›Û\ËXœ™XYÜ[X‰ÊOËœ™[[İ™J
NÂˆNÂˆK×JNÂ‚ˆ™]\›ˆ
ˆXZ[ˆİ[O^ŞÈ˜XÚÙÜ›İ[™ˆ	ÈÌLLIËÛÛÜˆ	ÈÙ™™‰ËZ[’ZYÚˆ	ÌLš	Ë›Û˜[Z[Nˆ	Ò[\‹Ş\İ[K]ZKØ[œË\Ù\šY‰È_O‚ˆ]ˆİ[O^ŞÈX^ÚYˆ	Î	ËX\™Ú[ˆ	Ì]]ÉËY[™Îˆ	ÎŒ	È_O‚‚ˆ]ˆİ[O^ŞÈX\™Ú[›İÛNˆ	Í	È_O‚ˆİ[O^ŞÈÛÛÜˆ	ÈÍNLM	Ë›ÛÚ^™Nˆ	ÌLÜ	Ë]\”ÜXÚ[™Îˆ	Ìœ	Ë^˜[œÙ›Ü›Nˆ	İ\\˜Ø\ÙIËX\™Ú[›İÛNˆ	ÌMœ	È_O•^H	ˆ•È8 %š]›Û\ÏÜ‚ˆHİ[O^ŞÈ›ÛÚ^™Nˆ	ØÛ[\
Ë
IË›ÛÙZYÚˆÌ]\”ÜXÚ[™Îˆ	Ì\	Ë[™RZYÚˆKŒ‹X\™Ú[›İÛNˆ	Ì	È_O‚ˆ^Hš]›Û\ÂˆÜ[ˆİ[O^ŞÈ\Ü^Nˆ	Ø›ØÚÉËÛÛÜˆ	Ü™Ø˜JMKMKMKŠIË›ÛÚ^™Nˆ	Ì™[IË›ÛÙZYÚˆŒX\™Ú[•Üˆ	Î	È_O‚ˆpê\›ÜÜX\œÙZ[KØ\™HÕ‹Z^Y[‹T›İ™[˜ÙH8 %ÌˆÜÜ[‚ˆÚO‚ˆİ[O^ŞÈÛÛÜˆ	Ü™Ø˜JMKMKMKÍJIË›ÛÚ^™Nˆ	ÌMÜ	Ë[™RZYÚˆKËX^ÚYˆ	ÍŒ	È_O‚ˆ^HX[XÜšYH[\šY[0èİ›Û™Èİ[O^ŞÈÛÛÜˆ	ÈÙ™™‰È_O•š]›Û\ÏÜİ›Û™Ïˆİ\ˆİ\È›ÜÈ˜[œÙ™\Èˆpê\›ÜÜHX\šYÛ˜[™H0èLZ[‹Ø\™HÕ‹Ù[™H	ĞZ^Y[‹T›İ™[˜ÙKˆÚ]Y™™]\ˆ\ÛK\šYˆš^K\ÜÛšX›HÌ‚ˆÜ‚ˆÙ]‚‚ˆ]ˆİ[O^ŞÈ˜XÚÙÜ›İ[™ˆ	ÈÌLLIË›Ü™\ˆ	Ì\ÛÛY™Ø˜JMKMKMKŒ
IË›Ü™\”˜Y]\Îˆ	ÌLœ	ËY[™Îˆ	ÌÌœ	ËX\™Ú[›İÛNˆ	Í	È_O‚ˆˆİ[O^ŞÈ›ÛÚ^™Nˆ	ÌM	Ë]\”ÜXÚ[™Îˆ	Ìœ	Ë^˜[œÙ›Ü›Nˆ	İ\\˜Ø\ÙIËÛÛÜˆ	Ü™Ø˜JMKMKMKJIËX\™Ú[›İÛNˆ	ÌŒ	Ë›ÛÙZYÚˆ_O•\šYœÈ\Z\Èš]›Û\ÏÚ‚ˆ]ˆİ[O^ŞÈ\Ü^Nˆ	ÙÜšY	ËØ\ˆ	ÌMœ	È_O‚ˆÖÂˆÈ\İˆ	Ğpê\›ÜÜX\œÙZ[KT›İ™[˜ÙIËšXÙNˆ	Ù0êÈx «	ÈKˆÈ\İˆ	ÑØ\™HÕˆZ^Y[‹T›İ™[˜ÙIËšXÙNˆ	Ù0êÈŒ8 «	ÈKˆÈ\İˆ	ĞÙ[™HZ^Y[‹T›İ™[˜ÙIËšXÙNˆ	Ù0êÈÍx «	ÈKˆÈ\İˆ	ÑØ\™HØZ[PÚ\›\ÈX\œÙZ[IËšXÙNˆ	Ù0êÈ8 «	ÈKˆK›X\

È\İšXÙHJHOˆ
ˆ]ˆÙ^O^Ù\İHİ[O^ŞÈ\Ü^Nˆ	Ù›^	Ë\İYPÛÛ[ˆ	ÜÜXÙKX™]ÙY[‰Ë›Ü™\›İÛNˆ	Ì\ÛÛY™Ø˜JMKMKMKŒJIËY[™Ğ›İÛNˆ	ÌLœ	È_O‚ˆÜ[ˆİ[O^ŞÈÛÛÜˆ	Ü™Ø˜JMKMKMKÊIË›ÛÚ^™Nˆ	ÌM\	È_O•š]›Û\È8¡¤ˆÙ\İOÜÜ[‚ˆÜ[ˆİ[O^ŞÈ›ÛÙZYÚˆ›ÛÚ^™Nˆ	ÌMœ	È_OÜšXÙ_OÜÜ[‚ˆÙ]‚ˆ
J_BˆÙ]‚ˆİ[O^ŞÈÛÛÜˆ	Ü™Ø˜JMKMKMKŒÍJIË›ÛÚ^™Nˆ	ÌLÜ	ËX\™Ú[•Üˆ	ÌMœ	È_O”š^š^\È8 (ˆØ[œÈİ\0ê[Y[Z]Ü‚ˆÙ]‚‚ˆ]ˆİ[O^ŞÈX\™Ú[›İÛNˆ	Í	È_O‚ˆˆİ[O^ŞÈ›ÛÚ^™Nˆ	ÌŒ	Ë›ÛÙZYÚˆÌX\™Ú[›İÛNˆ	Ì	È_O”]Y\İ[ÛœÈœ°ê\]Y[\ÏÚ‚ˆÑTWÔĞÒSPK›XZ[‘[]K›X\

JHOˆ
ˆ]ˆÙ^O^ÜK›˜[Y_Hİ[O^ŞÈ›Ü™\•Üˆ	Ì\ÛÛY™Ø˜JMKMKMKŒ
IËY[™ÕÜˆ	ÌŒ	ËY[™Ğ›İÛNˆ	ÌŒ	È_O‚ˆÈİ[O^ŞÈ›ÛÚ^™Nˆ	ÌMœ	Ë›ÛÙZYÚˆX\™Ú[›İÛNˆ	ÌL	ËÛÛÜˆ	ÈÙ™™‰È_OÜK›˜[Y_OÚÏ‚ˆİ[O^ŞÈÛÛÜˆ	Ü™Ø˜JMKMKMKŠIË›ÛÚ^™Nˆ	ÌM\	Ë[™RZYÚˆKˆ_OÜK˜XØÙ\Y[œİÙ\‹^OÜ‚ˆÙ]‚ˆ
J_BˆÙ]‚‚ˆ]ˆİ[O^ŞÈ^[YÛˆ	ØÙ[\‰ËY[™ÕÜˆ	ÌÌœ	Ë›Ü™\•Üˆ	Ì\ÛÛY™Ø˜JMKMKMKŒ
IÈ_O‚ˆİ[O^ŞÈÛÛÜˆ	Ü™Ø˜JMKMKMKJIË›ÛÚ^™Nˆ	ÌLÜ	Ë]\”ÜXÚ[™Îˆ	Ì\	Ë^˜[œÙ›Ü›Nˆ	İ\\˜Ø\ÙIËX\™Ú[›İÛNˆ	ÌMœ	È_O”°ê\Ù\˜][Ûˆ	ˆ™[œÙZYÛ™[Y[ÏÜ‚ˆH™YH[ŠÌÌÍÎŒˆİ[O^ŞÈ\Ü^Nˆ	Ú[›[™KX›ØÚÉË˜XÚÙÜ›İ[™ˆ	ÈÙ™™‰ËÛÛÜˆ	ÈÌ	ËY[™Îˆ	ÌMœ	Ë›Ü™\”˜Y]\Îˆ	Í	Ë›ÛÚ^™Nˆ	ÌN	Ë›ÛÙZYÚˆL^XÛÜ˜][Ûˆ	Û›Û™IË]\”ÜXÚ[™Îˆ	Ì\	È_O‚ˆÈŒˆˆˆØO‚ˆİ[O^ŞÈX\™Ú[•Üˆ	ÌMœ	ËÛÛÜˆ	Ü™Ø˜JMKMKMKŒÍJIË›ÛÚ^™Nˆ	ÌLÜ	È_O‘\ÜÛšX›HÌÜ‚ˆH™YH‹Èˆİ[O^ŞÈ\Ü^Nˆ	Ø›ØÚÉËX\™Ú[•Üˆ	ÌÌœ	ËÛÛÜˆ	Ü™Ø˜JMKMKMK
IË›ÛÚ^™Nˆ	ÌLÜ	Ë^XÛÜ˜][Ûˆ	Û›Û™IÈ_O¸¡¤™]İ\ˆ]HÚ]H^HX[XÜšYOØO‚ˆÙ]‚‚ˆÙ]‚ˆÛXZ[‚ˆ
NÂŸNÂ‚™^ÜY˜][^Uš]›Û\ÎÂ