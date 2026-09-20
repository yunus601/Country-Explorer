// Comprehensive fallback dataset for Country Explorer
// Formatted precisely to match REST Countries v5 schema

export const FALLBACK_COUNTRIES = [
  {
    uuid: "ca-001",
    codes: { alpha_2: "CA", alpha_3: "CAN" },
    names: {
      common: "Canada",
      official: "Canada",
      native: { eng: { common: "Canada", official: "Canada" }, fra: { common: "Canada", official: "Canada" } }
    },
    flag: {
      url_png: "https://flagcdn.com/w320/ca.png",
      url_svg: "https://flagcdn.com/ca.svg"
    },
    population: 38929902,
    region: "Americas",
    subregion: "North America",
    capitals: [{ name: "Ottawa", lat: 45.4215, lng: -75.6972 }],
    languages: [{ name: "English", code: "eng" }, { name: "French", code: "fra" }],
    currencies: [{ code: "CAD", name: "Canadian Dollar", symbol: "$" }],
    area: { kilometers: 9984670, miles: 3855100 },
    coordinates: { lat: 56.1304, lng: -106.3468 },
    tlds: [".ca"],
    timezones: ["UTC-08:00", "UTC-07:00", "UTC-06:00", "UTC-05:00", "UTC-04:00", "UTC-03:30"]
  },
  {
    uuid: "ar-002",
    codes: { alpha_2: "AR", alpha_3: "ARG" },
    names: {
      common: "Argentina",
      official: "Argentine Republic",
      native: { spa: { common: "Argentina", official: "República Argentina" } }
    },
    flag: {
      url_png: "https://flagcdn.com/w320/ar.png",
      url_svg: "https://flagcdn.com/ar.svg"
    },
    population: 45808747,
    region: "Americas",
    subregion: "South America",
    capitals: [{ name: "Buenos Aires", lat: -34.6037, lng: -58.3816 }],
    languages: [{ name: "Spanish", code: "spa" }],
    currencies: [{ code: "ARS", name: "Argentine Peso", symbol: "$" }],
    area: { kilometers: 2780400, miles: 1073518 },
    coordinates: { lat: -38.4161, lng: -63.6167 },
    tlds: [".ar"],
    timezones: ["UTC-03:00"]
  },
  {
    uuid: "us-003",
    codes: { alpha_2: "US", alpha_3: "USA" },
    names: {
      common: "United States",
      official: "United States of America",
      native: { eng: { common: "United States", official: "United States of America" } }
    },
    flag: {
      url_png: "https://flagcdn.com/w320/us.png",
      url_svg: "https://flagcdn.com/us.svg"
    },
    population: 333287557,
    region: "Americas",
    subregion: "North America",
    capitals: [{ name: "Washington, D.C.", lat: 38.8951, lng: -77.0364 }],
    languages: [{ name: "English", code: "eng" }],
    currencies: [{ code: "USD", name: "United States Dollar", symbol: "$" }],
    area: { kilometers: 9372610, miles: 3618783 },
    coordinates: { lat: 37.0902, lng: -95.7129 },
    tlds: [".us"],
    timezones: ["UTC-12:00", "UTC-08:00", "UTC-07:00", "UTC-06:00", "UTC-05:00"]
  },
  {
    uuid: "br-004",
    codes: { alpha_2: "BR", alpha_3: "BRA" },
    names: {
      common: "Brazil",
      official: "Federative Republic of Brazil",
      native: { por: { common: "Brasil", official: "República Federativa do Brasil" } }
    },
    flag: {
      url_png: "https://flagcdn.com/w320/br.png",
      url_svg: "https://flagcdn.com/br.svg"
    },
    population: 215313498,
    region: "Americas",
    subregion: "South America",
    capitals: [{ name: "Brasília", lat: -15.7975, lng: -47.8919 }],
    languages: [{ name: "Portuguese", code: "por" }],
    currencies: [{ code: "BRL", name: "Brazilian Real", symbol: "R$" }],
    area: { kilometers: 8515767, miles: 3287957 },
    coordinates: { lat: -14.235, lng: -51.9253 },
    tlds: [".br"],
    timezones: ["UTC-04:00", "UTC-03:00"]
  },
  {
    uuid: "gb-005",
    codes: { alpha_2: "GB", alpha_3: "GBR" },
    names: {
      common: "United Kingdom",
      official: "United Kingdom of Great Britain and Northern Ireland",
      native: { eng: { common: "United Kingdom", official: "United Kingdom of Great Britain and Northern Ireland" } }
    },
    flag: {
      url_png: "https://flagcdn.com/w320/gb.png",
      url_svg: "https://flagcdn.com/gb.svg"
    },
    population: 67736802,
    region: "Europe",
    subregion: "Northern Europe",
    capitals: [{ name: "London", lat: 51.5074, lng: -0.1278 }],
    languages: [{ name: "English", code: "eng" }],
    currencies: [{ code: "GBP", name: "British Pound", symbol: "£" }],
    area: { kilometers: 242900, miles: 93784 },
    coordinates: { lat: 55.3781, lng: -3.436 },
    tlds: [".uk"],
    timezones: ["UTC±00:00", "UTC+01:00"]
  },
  {
    uuid: "de-006",
    codes: { alpha_2: "DE", alpha_3: "DEU" },
    names: {
      common: "Germany",
      official: "Federal Republic of Germany",
      native: { deu: { common: "Deutschland", official: "Bundesrepublik Deutschland" } }
    },
    flag: {
      url_png: "https://flagcdn.com/w320/de.png",
      url_svg: "https://flagcdn.com/de.svg"
    },
    population: 83794000,
    region: "Europe",
    subregion: "Western Europe",
    capitals: [{ name: "Berlin", lat: 52.52, lng: 13.405 }],
    languages: [{ name: "German", code: "deu" }],
    currencies: [{ code: "EUR", name: "Euro", symbol: "€" }],
    area: { kilometers: 357114, miles: 137882 },
    coordinates: { lat: 51.1657, lng: 10.4515 },
    tlds: [".de"],
    timezones: ["UTC+01:00"]
  },
  {
    uuid: "fr-007",
    codes: { alpha_2: "FR", alpha_3: "FRA" },
    names: {
      common: "France",
      official: "French Republic",
      native: { fra: { common: "France", official: "République française" } }
    },
    flag: {
      url_png: "https://flagcdn.com/w320/fr.png",
      url_svg: "https://flagcdn.com/fr.svg"
    },
    population: 68070690,
    region: "Europe",
    subregion: "Western Europe",
    capitals: [{ name: "Paris", lat: 48.8566, lng: 2.3522 }],
    languages: [{ name: "French", code: "fra" }],
    currencies: [{ code: "EUR", name: "Euro", symbol: "€" }],
    area: { kilometers: 551695, miles: 213011 },
    coordinates: { lat: 46.2276, lng: 2.2137 },
    tlds: [".fr"],
    timezones: ["UTC+01:00"]
  },
  {
    uuid: "jp-008",
    codes: { alpha_2: "JP", alpha_3: "JPN" },
    names: {
      common: "Japan",
      official: "Japan",
      native: { jpn: { common: "日本", official: "日本国" } }
    },
    flag: {
      url_png: "https://flagcdn.com/w320/jp.png",
      url_svg: "https://flagcdn.com/jp.svg"
    },
    population: 125124989,
    region: "Asia",
    subregion: "Eastern Asia",
    capitals: [{ name: "Tokyo", lat: 35.6762, lng: 139.6503 }],
    languages: [{ name: "Japanese", code: "jpn" }],
    currencies: [{ code: "JPY", name: "Japanese Yen", symbol: "¥" }],
    area: { kilometers: 377975, miles: 145937 },
    coordinates: { lat: 36.2048, lng: 138.2529 },
    tlds: [".jp"],
    timezones: ["UTC+09:00"]
  },
  {
    uuid: "in-009",
    codes: { alpha_2: "IN", alpha_3: "IND" },
    names: {
      common: "India",
      official: "Republic of India",
      native: { hin: { common: "भारत", official: "भारत गणराज्य" }, eng: { common: "India", official: "Republic of India" } }
    },
    flag: {
      url_png: "https://flagcdn.com/w320/in.png",
      url_svg: "https://flagcdn.com/in.svg"
    },
    population: 1408044253,
    region: "Asia",
    subregion: "Southern Asia",
    capitals: [{ name: "New Delhi", lat: 28.6139, lng: 77.209 }],
    languages: [{ name: "Hindi", code: "hin" }, { name: "English", code: "eng" }],
    currencies: [{ code: "INR", name: "Indian Rupee", symbol: "₹" }],
    area: { kilometers: 3287263, miles: 1269219 },
    coordinates: { lat: 20.5937, lng: 78.9629 },
    tlds: [".in"],
    timezones: ["UTC+05:30"]
  },
  {
    uuid: "ng-010",
    codes: { alpha_2: "NG", alpha_3: "NGA" },
    names: {
      common: "Nigeria",
      official: "Federal Republic of Nigeria",
      native: { eng: { common: "Nigeria", official: "Federal Republic of Nigeria" } }
    },
    flag: {
      url_png: "https://flagcdn.com/w320/ng.png",
      url_svg: "https://flagcdn.com/ng.svg"
    },
    population: 218541212,
    region: "Africa",
    subregion: "Western Africa",
    capitals: [{ name: "Abuja", lat: 9.0765, lng: 7.3986 }],
    languages: [{ name: "English", code: "eng" }],
    currencies: [{ code: "NGN", name: "Nigerian Naira", symbol: "₦" }],
    area: { kilometers: 923768, miles: 356669 },
    coordinates: { lat: 9.082, lng: 8.6753 },
    tlds: [".ng"],
    timezones: ["UTC+01:00"]
  },
  {
    uuid: "eg-011",
    codes: { alpha_2: "EG", alpha_3: "EGY" },
    names: {
      common: "Egypt",
      official: "Arab Republic of Egypt",
      native: { ara: { common: "مصر", official: "جمهورية مصر العربية" } }
    },
    flag: {
      url_png: "https://flagcdn.com/w320/eg.png",
      url_svg: "https://flagcdn.com/eg.svg"
    },
    population: 104258327,
    region: "Africa",
    subregion: "Northern Africa",
    capitals: [{ name: "Cairo", lat: 30.0444, lng: 31.2357 }],
    languages: [{ name: "Arabic", code: "ara" }],
    currencies: [{ code: "EGP", name: "Egyptian Pound", symbol: "E£" }],
    area: { kilometers: 1002450, miles: 387048 },
    coordinates: { lat: 26.8206, lng: 30.8025 },
    tlds: [".eg"],
    timezones: ["UTC+02:00"]
  },
  {
    uuid: "za-012",
    codes: { alpha_2: "ZA", alpha_3: "ZAF" },
    names: {
      common: "South Africa",
      official: "Republic of South Africa",
      native: { eng: { common: "South Africa", official: "Republic of South Africa" } }
    },
    flag: {
      url_png: "https://flagcdn.com/w320/za.png",
      url_svg: "https://flagcdn.com/za.svg"
    },
    population: 59893885,
    region: "Africa",
    subregion: "Southern Africa",
    capitals: [{ name: "Pretoria", lat: -25.7479, lng: 28.2293 }],
    languages: [{ name: "Zulu", code: "zul" }, { name: "Xhosa", code: "xho" }, { name: "Afrikaans", code: "afr" }, { name: "English", code: "eng" }],
    currencies: [{ code: "ZAR", name: "South African Rand", symbol: "R" }],
    area: { kilometers: 1221037, miles: 471445 },
    coordinates: { lat: -30.5595, lng: 22.9375 },
    tlds: [".za"],
    timezones: ["UTC+02:00"]
  },
  {
    uuid: "au-013",
    codes: { alpha_2: "AU", alpha_3: "AUS" },
    names: {
      common: "Australia",
      official: "Commonwealth of Australia",
      native: { eng: { common: "Australia", official: "Commonwealth of Australia" } }
    },
    flag: {
      url_png: "https://flagcdn.com/w320/au.png",
      url_svg: "https://flagcdn.com/au.svg"
    },
    population: 25687041,
    region: "Oceania",
    subregion: "Australia and New Zealand",
    capitals: [{ name: "Canberra", lat: -35.2809, lng: 149.13 }],
    languages: [{ name: "English", code: "eng" }],
    currencies: [{ code: "AUD", name: "Australian Dollar", symbol: "$" }],
    area: { kilometers: 7692024, miles: 2969907 },
    coordinates: { lat: -25.2744, lng: 133.7751 },
    tlds: [".au"],
    timezones: ["UTC+08:00", "UTC+09:30", "UTC+10:00"]
  },
  {
    uuid: "nz-014",
    codes: { alpha_2: "NZ", alpha_3: "NZL" },
    names: {
      common: "New Zealand",
      official: "New Zealand",
      native: { eng: { common: "New Zealand", official: "New Zealand" } }
    },
    flag: {
      url_png: "https://flagcdn.com/w320/nz.png",
      url_svg: "https://flagcdn.com/nz.svg"
    },
    population: 5124100,
    region: "Oceania",
    subregion: "Australia and New Zealand",
    capitals: [{ name: "Wellington", lat: -41.2865, lng: 174.7762 }],
    languages: [{ name: "English", code: "eng" }, { name: "Māori", code: "mri" }],
    currencies: [{ code: "NZD", name: "New Zealand Dollar", symbol: "$" }],
    area: { kilometers: 270467, miles: 104428 },
    coordinates: { lat: -40.9006, lng: 174.886 },
    tlds: [".nz"],
    timezones: ["UTC+12:00", "UTC+13:00"]
  },
  {
    uuid: "fj-015",
    codes: { alpha_2: "FJ", alpha_3: "FJI" },
    names: {
      common: "Fiji",
      official: "Republic of Fiji",
      native: { eng: { common: "Fiji", official: "Republic of Fiji" } }
    },
    flag: {
      url_png: "https://flagcdn.com/w320/fj.png",
      url_svg: "https://flagcdn.com/fj.svg"
    },
    population: 896444,
    region: "Oceania",
    subregion: "Melanesia",
    capitals: [{ name: "Suva", lat: -18.1416, lng: 178.4419 }],
    languages: [{ name: "English", code: "eng" }, { name: "Fijian", code: "fij" }],
    currencies: [{ code: "FJD", name: "Fijian Dollar", symbol: "$" }],
    area: { kilometers: 18274, miles: 7056 },
    coordinates: { lat: -17.7134, lng: 178.065 },
    tlds: [".fj"],
    timezones: ["UTC+12:00"]
  },
  {
    uuid: "it-016",
    codes: { alpha_2: "IT", alpha_3: "ITA" },
    names: {
      common: "Italy",
      official: "Italian Republic",
      native: { ita: { common: "Italia", official: "Repubblica Italiana" } }
    },
    flag: {
      url_png: "https://flagcdn.com/w320/it.png",
      url_svg: "https://flagcdn.com/it.svg"
    },
    population: 58870762,
    region: "Europe",
    subregion: "Southern Europe",
    capitals: [{ name: "Rome", lat: 41.9028, lng: 12.4964 }],
    languages: [{ name: "Italian", code: "ita" }],
    currencies: [{ code: "EUR", name: "Euro", symbol: "€" }],
    area: { kilometers: 301336, miles: 116346 },
    coordinates: { lat: 41.8719, lng: 12.5674 },
    tlds: [".it"],
    timezones: ["UTC+01:00"]
  },
  {
    uuid: "es-017",
    codes: { alpha_2: "ES", alpha_3: "ESP" },
    names: {
      common: "Spain",
      official: "Kingdom of Spain",
      native: { spa: { common: "España", official: "Reino de España" } }
    },
    flag: {
      url_png: "https://flagcdn.com/w320/es.png",
      url_svg: "https://flagcdn.com/es.svg"
    },
    population: 47415750,
    region: "Europe",
    subregion: "Southern Europe",
    capitals: [{ name: "Madrid", lat: 40.4168, lng: -3.7038 }],
    languages: [{ name: "Spanish", code: "spa" }],
    currencies: [{ code: "EUR", name: "Euro", symbol: "€" }],
    area: { kilometers: 505992, miles: 195365 },
    coordinates: { lat: 40.4637, lng: -3.7492 },
    tlds: [".es"],
    timezones: ["UTC+01:00"]
  },
  {
    uuid: "mx-018",
    codes: { alpha_2: "MX", alpha_3: "MEX" },
    names: {
      common: "Mexico",
      official: "United Mexican States",
      native: { spa: { common: "México", official: "Estados Unidos Mexicanos" } }
    },
    flag: {
      url_png: "https://flagcdn.com/w320/mx.png",
      url_svg: "https://flagcdn.com/mx.svg"
    },
    population: 128455567,
    region: "Americas",
    subregion: "North America",
    capitals: [{ name: "Mexico City", lat: 19.4326, lng: -99.1332 }],
    languages: [{ name: "Spanish", code: "spa" }],
    currencies: [{ code: "MXN", name: "Mexican Peso", symbol: "$" }],
    area: { kilometers: 1964375, miles: 758449 },
    coordinates: { lat: 23.6345, lng: -102.5528 },
    tlds: [".mx"],
    timezones: ["UTC-06:00"]
  },
  {
    uuid: "kr-019",
    codes: { alpha_2: "KR", alpha_3: "KOR" },
    names: {
      common: "South Korea",
      official: "Republic of Korea",
      native: { kor: { common: "대한민국", official: "대한민국" } }
    },
    flag: {
      url_png: "https://flagcdn.com/w320/kr.png",
      url_svg: "https://flagcdn.com/kr.svg"
    },
    population: 51780579,
    region: "Asia",
    subregion: "Eastern Asia",
    capitals: [{ name: "Seoul", lat: 37.5665, lng: 126.978 }],
    languages: [{ name: "Korean", code: "kor" }],
    currencies: [{ code: "KRW", name: "South Korean Won", symbol: "₩" }],
    area: { kilometers: 100210, miles: 38691 },
    coordinates: { lat: 35.9078, lng: 127.7669 },
    tlds: [".kr"],
    timezones: ["UTC+09:00"]
  },
  {
    uuid: "ke-020",
    codes: { alpha_2: "KE", alpha_3: "KEN" },
    names: {
      common: "Kenya",
      official: "Republic of Kenya",
      native: { eng: { common: "Kenya", official: "Republic of Kenya" }, swa: { common: "Kenya", official: "Jamhuri ya Kenya" } }
    },
    flag: {
      url_png: "https://flagcdn.com/w320/ke.png",
      url_svg: "https://flagcdn.com/ke.svg"
    },
    population: 54027487,
    region: "Africa",
    subregion: "Eastern Africa",
    capitals: [{ name: "Nairobi", lat: -1.2921, lng: 36.8219 }],
    languages: [{ name: "English", code: "eng" }, { name: "Swahili", code: "swa" }],
    currencies: [{ code: "KES", name: "Kenyan Shilling", symbol: "Sh" }],
    area: { kilometers: 580367, miles: 224081 },
    coordinates: { lat: -0.0236, lng: 37.9062 },
    tlds: [".ke"],
    timezones: ["UTC+03:00"]
  },
  {
    uuid: "se-021",
    codes: { alpha_2: "SE", alpha_3: "SWE" },
    names: {
      common: "Sweden",
      official: "Kingdom of Sweden",
      native: { swe: { common: "Sverige", official: "Konungariket Sverige" } }
    },
    flag: {
      url_png: "https://flagcdn.com/w320/se.png",
      url_svg: "https://flagcdn.com/se.svg"
    },
    population: 10452326,
    region: "Europe",
    subregion: "Northern Europe",
    capitals: [{ name: "Stockholm", lat: 59.3293, lng: 18.0686 }],
    languages: [{ name: "Swedish", code: "swe" }],
    currencies: [{ code: "SEK", name: "Swedish Krona", symbol: "kr" }],
    area: { kilometers: 450295, miles: 173860 },
    coordinates: { lat: 60.1282, lng: 18.6435 },
    tlds: [".se"],
    timezones: ["UTC+01:00"]
  },
  {
    uuid: "ch-022",
    codes: { alpha_2: "CH", alpha_3: "CHE" },
    names: {
      common: "Switzerland",
      official: "Swiss Confederation",
      native: { deu: { common: "Schweiz", official: "Schweizerische Eidgenossenschaft" } }
    },
    flag: {
      url_png: "https://flagcdn.com/w320/ch.png",
      url_svg: "https://flagcdn.com/ch.svg"
    },
    population: 8697723,
    region: "Europe",
    subregion: "Western Europe",
    capitals: [{ name: "Bern", lat: 46.948, lng: 7.4474 }],
    languages: [{ name: "German", code: "deu" }, { name: "French", code: "fra" }, { name: "Italian", code: "ita" }],
    currencies: [{ code: "CHF", name: "Swiss Franc", symbol: "CHF" }],
    area: { kilometers: 41285, miles: 15940 },
    coordinates: { lat: 46.8182, lng: 8.2275 },
    tlds: [".ch"],
    timezones: ["UTC+01:00"]
  },
  {
    uuid: "nl-023",
    codes: { alpha_2: "NL", alpha_3: "NLD" },
    names: {
      common: "Netherlands",
      official: "Kingdom of the Netherlands",
      native: { nld: { common: "Nederland", official: "Koninkrijk der Nederlanden" } }
    },
    flag: {
      url_png: "https://flagcdn.com/w320/nl.png",
      url_svg: "https://flagcdn.com/nl.svg"
    },
    population: 17533044,
    region: "Europe",
    subregion: "Western Europe",
    capitals: [{ name: "Amsterdam", lat: 52.3676, lng: 4.9041 }],
    languages: [{ name: "Dutch", code: "nld" }],
    currencies: [{ code: "EUR", name: "Euro", symbol: "€" }],
    area: { kilometers: 41850, miles: 16158 },
    coordinates: { lat: 52.1326, lng: 5.2913 },
    tlds: [".nl"],
    timezones: ["UTC+01:00"]
  },
  {
    uuid: "gh-024",
    codes: { alpha_2: "GH", alpha_3: "GHA" },
    names: {
      common: "Ghana",
      official: "Republic of Ghana",
      native: { eng: { common: "Ghana", official: "Republic of Ghana" } }
    },
    flag: {
      url_png: "https://flagcdn.com/w320/gh.png",
      url_svg: "https://flagcdn.com/gh.svg"
    },
    population: 32833031,
    region: "Africa",
    subregion: "Western Africa",
    capitals: [{ name: "Accra", lat: 5.6037, lng: -0.187 }],
    languages: [{ name: "English", code: "eng" }],
    currencies: [{ code: "GHS", name: "Ghanaian Cedi", symbol: "₵" }],
    area: { kilometers: 238533, miles: 92098 },
    coordinates: { lat: 7.9465, lng: -1.0232 },
    tlds: [".gh"],
    timezones: ["UTC±00:00"]
  },
  {
    uuid: "ma-025",
    codes: { alpha_2: "MA", alpha_3: "MAR" },
    names: {
      common: "Morocco",
      official: "Kingdom of Morocco",
      native: { ara: { common: "المغرب", official: "المملكة المغربية" } }
    },
    flag: {
      url_png: "https://flagcdn.com/w320/ma.png",
      url_svg: "https://flagcdn.com/ma.svg"
    },
    population: 37457971,
    region: "Africa",
    subregion: "Northern Africa",
    capitals: [{ name: "Rabat", lat: 34.0209, lng: -6.8416 }],
    languages: [{ name: "Arabic", code: "ara" }],
    currencies: [{ code: "MAD", name: "Moroccan Dirham", symbol: "DH" }],
    area: { kilometers: 446550, miles: 172414 },
    coordinates: { lat: 31.7917, lng: -7.0926 },
    tlds: [".ma"],
    timezones: ["UTC+01:00"]
  },
  {
    uuid: "sg-026",
    codes: { alpha_2: "SG", alpha_3: "SGP" },
    names: {
      common: "Singapore",
      official: "Republic of Singapore",
      native: { eng: { common: "Singapore", official: "Republic of Singapore" } }
    },
    flag: {
      url_png: "https://flagcdn.com/w320/sg.png",
      url_svg: "https://flagcdn.com/sg.svg"
    },
    population: 5637000,
    region: "Asia",
    subregion: "South-Eastern Asia",
    capitals: [{ name: "Singapore", lat: 1.2897, lng: 103.8501 }],
    languages: [{ name: "English", code: "eng" }, { name: "Malay", code: "msa" }, { name: "Chinese", code: "zho" }],
    currencies: [{ code: "SGD", name: "Singapore Dollar", symbol: "$" }],
    area: { kilometers: 728, miles: 281 },
    coordinates: { lat: 1.3521, lng: 103.8198 },
    tlds: [".sg"],
    timezones: ["UTC+08:00"]
  },
  {
    uuid: "no-027",
    codes: { alpha_2: "NO", alpha_3: "NOR" },
    names: {
      common: "Norway",
      official: "Kingdom of Norway",
      native: { nor: { common: "Norge", official: "Kongeriket Norge" } }
    },
    flag: {
      url_png: "https://flagcdn.com/w320/no.png",
      url_svg: "https://flagcdn.com/no.svg"
    },
    population: 5434319,
    region: "Europe",
    subregion: "Northern Europe",
    capitals: [{ name: "Oslo", lat: 59.9139, lng: 10.7522 }],
    languages: [{ name: "Norwegian", code: "nor" }],
    currencies: [{ code: "NOK", name: "Norwegian Krone", symbol: "kr" }],
    area: { kilometers: 323802, miles: 125021 },
    coordinates: { lat: 60.472, lng: 8.4689 },
    tlds: [".no"],
    timezones: ["UTC+01:00"]
  },
  {
    uuid: "co-028",
    codes: { alpha_2: "CO", alpha_3: "COL" },
    names: {
      common: "Colombia",
      official: "Republic of Colombia",
      native: { spa: { common: "Colombia", official: "República de Colombia" } }
    },
    flag: {
      url_png: "https://flagcdn.com/w320/co.png",
      url_svg: "https://flagcdn.com/co.svg"
    },
    population: 51874024,
    region: "Americas",
    subregion: "South America",
    capitals: [{ name: "Bogotá", lat: 4.711, lng: -74.0721 }],
    languages: [{ name: "Spanish", code: "spa" }],
    currencies: [{ code: "COP", name: "Colombian Peso", symbol: "$" }],
    area: { kilometers: 1141748, miles: 440831 },
    coordinates: { lat: 4.5709, lng: -74.2973 },
    tlds: [".co"],
    timezones: ["UTC-05:00"]
  },
  {
    uuid: "pg-029",
    codes: { alpha_2: "PG", alpha_3: "PNG" },
    names: {
      common: "Papua New Guinea",
      official: "Independent State of Papua New Guinea",
      native: { eng: { common: "Papua New Guinea", official: "Independent State of Papua New Guinea" } }
    },
    flag: {
      url_png: "https://flagcdn.com/w320/pg.png",
      url_svg: "https://flagcdn.com/pg.svg"
    },
    population: 9949437,
    region: "Oceania",
    subregion: "Melanesia",
    capitals: [{ name: "Port Moresby", lat: -9.4438, lng: 147.1803 }],
    languages: [{ name: "English", code: "eng" }, { name: "Tok Pisin", code: "tpi" }],
    currencies: [{ code: "PGK", name: "Papua New Guinean Kina", symbol: "K" }],
    area: { kilometers: 462840, miles: 178704 },
    coordinates: { lat: -6.314993, lng: 143.95555 },
    tlds: [".pg"],
    timezones: ["UTC+10:00"]
  },
  {
    uuid: "tr-030",
    codes: { alpha_2: "TR", alpha_3: "TUR" },
    names: {
      common: "Turkey",
      official: "Republic of Türkiye",
      native: { tur: { common: "Türkiye", official: "Türkiye Cumhuriyeti" } }
    },
    flag: {
      url_png: "https://flagcdn.com/w320/tr.png",
      url_svg: "https://flagcdn.com/tr.svg"
    },
    population: 85279553,
    region: "Asia",
    subregion: "Western Asia",
    capitals: [{ name: "Ankara", lat: 39.9334, lng: 32.8597 }],
    languages: [{ name: "Turkish", code: "tur" }],
    currencies: [{ code: "TRY", name: "Turkish Lira", symbol: "₺" }],
    area: { kilometers: 783562, miles: 302535 },
    coordinates: { lat: 38.9637, lng: 35.2433 },
    tlds: [".tr"],
    timezones: ["UTC+03:00"]
  }
];
