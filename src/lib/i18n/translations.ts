export type Locale = "sr" | "en" | "de" | "ru" | "zh";

export const localeLabels: Record<Locale, string> = {
  sr: "SR",
  en: "EN",
  de: "DE",
  ru: "RU",
  zh: "中文",
};

export type MenuCategoryKey =
  | "breakfast"
  | "coldStarters"
  | "hotStarters"
  | "buckwheatPizza"
  | "soups"
  | "pasta"
  | "salads"
  | "poultry"
  | "vealPork"
  | "grill"
  | "fish"
  | "desserts";

export const menuCategoryKeys: MenuCategoryKey[] = [
  "breakfast",
  "coldStarters",
  "hotStarters",
  "buckwheatPizza",
  "soups",
  "pasta",
  "salads",
  "poultry",
  "vealPork",
  "grill",
  "fish",
  "desserts",
];

type MenuCategoryTranslation = { title: string; desc: string };

export type Translation = {
  meta: { title: string; description: string };
  nav: {
    home: string;
    menu: string;
    about: string;
    gallery: string;
    contact: string;
    cta: string;
  };
  hero: {
    titleLine1: string;
    titleHighlight: string;
    titleLine2: string;
    subtitle: string;
    ctaContact: string;
    ctaMenu: string;
    rating: string;
    awardsAndEducation: string;
  };
  about: {
    label: string;
    title: string;
    p1: string;
    p2: string;
  };
  banner: {
    line1: string;
    passion: string;
    line2: string;
    love: string;
  };
  menu: {
    label: string;
    title: string;
    hint: string;
    categories: Record<MenuCategoryKey, MenuCategoryTranslation>;
  };
  gallery: {
    label: string;
    title: string;
    subtitle: string;
    close: string;
    prev: string;
    next: string;
  };
  stats: {
    title: string;
    subtitle: string;
    items: { value: string; label: string }[];
  };
  testimonials: {
    label: string;
    title: string;
    googleRating: string;
    items: { quote: string; name: string; role: string }[];
  };
  videos: {
    label: string;
    title: string;
    subtitle: string;
    items: {
      summer: string;
      family: string;
      specialties: string;
      wine: string;
    };
  };
  features: {
    label: string;
    title: string;
    tabs: {
      playground: string;
      wineWorkshop: string;
      fireplaceRoom: string;
      events: string;
    };
    playground: { title: string; desc: string; };
    wineWorkshop: { title: string; desc: string; };
    fireplaceRoom: { title: string; desc: string; };
    events: { title: string; desc: string; videoLabel: string; };
  };
  contact: {
    label: string;
    title: string;
    subtitle: string;
    phone: string;
    address: string;
    email: string;
    instagram: string;
    hoursTitle: string;
    hoursWeek: string;
    hoursMonday: string;
    callUs: string;
  };
  footer: {
    label: string;
    title: string;
    hours: string;
    visit: string;
    copyright: string;
  };
};

export const translations: Record<Locale, Translation> = {
  sr: {
    meta: {
      title: "Restoran Garden - Tamo gdje su ukusi, tamo smo mi",
      description:
        "Autentičan restoran u Rogoušićima, 13 km od Sarajeva. Tradicionalna kuhinja iz krušne peći, bašta, dječije igralište i veliki parking.",
    },
    nav: {
      home: "Početna",
      menu: "Meni",
      about: "O nama",
      gallery: "Galerija",
      contact: "Kontakt",
      cta: "Kontaktirajte nas",
    },
    hero: {
      titleLine1: "Stotine Ukusa pod",
      titleHighlight: "Jednim krovom",
      titleLine2: ", u jednoj basti",
      subtitle: "Tamo gdje su ukusi, tamo smo mi",
      ctaContact: "Kontaktirajte nas",
      ctaMenu: "Pogledajte meni",
      rating: "4.9 Google recenzija",
      awardsAndEducation: "Nagrade i edukacije",
    },
    about: {
      label: "naša priča",
      title: "Dobrodošli u Restoran Garden",
      p1: "Restoran ”Garden” smješten je u mjestu Rogoušići, uz glavni magistralni put, na samo 13 kilometara od srca Sarajeva i olimpijske ljepotice Jahorine. Udomljen u kotlini između dvije planine, u zelenilu i prirodnom ambijentu sa izvorskom vodom koja opija, restoran nudi kulinarske čarolije tradicionalnih jela i pruža pravo zadovoljstvo.",
      p2: "Trpeza ‘’Gardena’’ je autentična i bogata riznica nezaboravljenih domaćih ukusa pripremljenih iz krušne peći i sa mnogo ljubavi. Atmosfera kućne topline, bogat izbor vina i žestokih pića, ljubazno i profesionalno osoblje, dječije igralište, pristupačan prilaz objektu i veliki parking mami sve sladokusce i ljubitelje vrhunske gastronomije. Gastronomski biser ‘Garden’ je sjajno mjesto za rođendanska slavlja i druga okupljanja.",
    },
    banner: {
      line1: "Napravljeno sa",
      passion: "Strašću",
      line2: "Servirano sa",
      love: "Ljubavlju",
    },
    menu: {
      label: "naš meni",
      title: "Kulinarska ponuda",
      hint: "Kliknite na kategoriju za opis ponude",
      categories: {
        breakfast: {
          title: "Doručak",
          desc: "Za doručak nudimo bogatu ponudu od raznih vrsta omleta do ukusne domaće pure sa kajmakom.",
        },
        coldStarters: {
          title: "Hladna predjela",
          desc: "Selekcija suhomesnatih proizvoda sa sirevima.",
        },
        hotStarters: {
          title: "Topla predjela",
          desc: "Razne vrste pogačica od heljde, pileći stapići, uštipci i palačinci od heljde.",
        },
        buckwheatPizza: {
          title: "Heljdine pizze",
          desc: "Pravo iz naše krušne peći dolaze heljdine pizze različitih okusa — od klasične margarite do slatke pizze sa eurokremom i voćem.",
        },
        soups: {
          title: "Supe i čorbe",
          desc: "Od lagane bistre supe do kremastih čorbi sa teletinom, povrćem i ribom.",
        },
        pasta: {
          title: "Paste i rižota",
          desc: "Raznovrstan izbor pasti i rižota sa kontinentalnim i mediteranskim okusima.",
        },
        salads: {
          title: "Obrok salate",
          desc: "Više vrsta bogatih obrok salata u kombinaciji sa biftekom, piletinom, pastrmkom, tunjevinom ili različitim vrstama povrća.",
        },
        poultry: {
          title: "Piletina i ćuretina",
          desc: "Od punjene piletine do marinirane ćuretine servirane sa bogatim prilozima i sosovima.",
        },
        vealPork: {
          title: "Teletina i svinjetina",
          desc: "Od telećih i svinjećih šnicli, različitih vrsta ramsteka i bifteka, pa do teletine ispod sača.",
        },
        grill: {
          title: "Jela sa roštilja",
          desc: "Ćevapi, pljeskavice, kobasice, pileći file, svinjski vrat, vješalica i biftek.",
        },
        fish: {
          title: "Riba",
          desc: "Širok asortiman ribljih specijaliteta u mediteranskom i kontinentalnom aranžmanu.",
        },
        desserts: {
          title: "Poslastice",
          desc: "Razni domaći tradicionalni kolači, palačinci i razne vrste sladoleda.",
        },
      },
    },
    gallery: {
      label: "galerija",
      title: "Ambijent i ukusi",
      subtitle: "Pogledajte atmosferu našeg restorana, bašte i jela pripremljenih s ljubavlju.",
      close: "Zatvori",
      prev: "Prethodna",
      next: "Sljedeća",
    },
    stats: {
      title: "Zašto gosti\nbiraju Garden",
      subtitle:
        "Porodični restoran otvoren 2018. godine, u prirodnom ambijentu Rogoušića — samo 13 km od Sarajeva.",
      items: [
        { value: "2018", label: "Godina otvaranja" },
        { value: "13 km", label: "Od Sarajeva" },
        { value: "100%", label: "Porodični restoran" },
      ],
    },
    testimonials: {
      label: "utisci gostiju",
      title: "Šta kažu naši gosti",
      googleRating: "4.9 na Google-u",
      items: [
        {
          quote:
            "Predivan nov restoran. Ugodan enterijer, muzika, atmosfera, ljetna terasa i bašta... Dobra gastronomska ponuda i zanimljiva vinska karta.",
          name: "Jelena Camur",
          role: "Gost",
        },
        {
          quote:
            "Odlično mjesto za odmor, veoma prijatno osoblje. Porcije su velike, a cijene više nego pristupačne.",
          name: "Dragan Sender",
          role: "Gost",
        },
        {
          quote: "Sta za reći — dođeš, vidiš, vratiš se opet. Sve pohvale!!",
          name: "Jovana G.",
          role: "Gost",
        },
      ],
    },
    videos: {
      label: "video",
      title: "Garden u pokretu",
      subtitle: "Pogledajte atmosferu restorana, porodične vikende, specijalitete i vinske radionice.",
      items: {
        summer: "Ljeto u Garden-u",
        family: "Porodični vikend",
        specialties: "Naši specijaliteti",
        wine: "Vinska radionica",
      },
    },
    features: {
      label: "istražite",
      title: "Naši sadržaji",
      tabs: {
        playground: "Dječije igralište",
        wineWorkshop: "Vinska radionica",
        fireplaceRoom: "Kamin sala",
        events: "Organizacija svečanosti"
      },
      playground: {
        title: "Kutak za najmlađe",
        desc: "Prostrano i sigurno dječije igralište gdje vaši mališani mogu uživati u igri na otvorenom."
      },
      wineWorkshop: {
        title: "Vinska radionica",
        desc: "Ekskluzivan prostor za ljubitelje vina, gdje organizujemo degustacije i prezentacije vrhunskih etiketa."
      },
      fireplaceRoom: {
        title: "Kamin sala za korporativne događaje",
        desc: "Topla i intimna atmosfera naše kamin sale idealna je za poslovne sastanke, korporativne događaje i manja okupljanja."
      },
      events: {
        title: "Organizacija svečanosti",
        desc: "Organizujemo sve vrste proslava i svečanosti za do 50 ljudi. Prepustite nama brigu o hrani i ambijentu.",
        videoLabel: "Video prezentacija"
      }
    },
    contact: {
      label: "kontakt",
      title: "Posjetite nas",
      subtitle: "Rezervacije i informacije — pozovite nas ili pišite putem društvenih mreža.",
      phone: "Telefon",
      address: "Adresa",
      email: "E-mail",
      instagram: "Instagram",
      hoursTitle: "Radno vrijeme",
      hoursWeek: "Utorak – Nedjelja: 09:00 – 22:00",
      hoursMonday: "Ponedjeljak: zatvoreno",
      callUs: "Pozovite nas",
    },
    footer: {
      label: "do vidjenja uskoro",
      title: "Tamo gdje su ukusi,\ntamo smo mi",
      hours: "Radno vrijeme",
      visit: "Adresa i kontakt",
      copyright: "Restoran Garden, Rogoušići. Sva prava zadržana. | Developed by David",
    },
  },

  en: {
    meta: {
      title: "Restaurant Garden — Where flavours are, there we are",
      description:
        "Authentic restaurant in Rogoušići, 13 km from Sarajevo. Traditional oven cuisine, garden terrace, playground and large parking.",
    },
    nav: {
      home: "Home",
      menu: "Menu",
      about: "About",
      gallery: "Gallery",
      contact: "Contact",
      cta: "Contact us",
    },
    hero: {
      titleLine1: "Prepared for",
      titleHighlight: "Food Lovers",
      titleLine2: "",
      subtitle: "Where flavours are, there we are",
      ctaContact: "Contact us",
      ctaMenu: "View menu",
      rating: "4.9 Google reviews",
      awardsAndEducation: "Awards & Education",
    },
    about: {
      label: "our story",
      title: "Welcome to Restaurant Garden",
      p1: "Restaurant Garden is located in Rogoušići, along the main road, just 13 kilometres from the heart of Sarajevo and the Olympic beauty of Jahorina. Nestled in a valley between two mountains, surrounded by greenery and natural ambience with spring water, the restaurant offers culinary magic of traditional dishes.",
      p2: "The Garden table is an authentic treasure trove of unforgettable home flavours from our bread oven, prepared with love. Home warmth, a rich selection of wines and spirits, friendly staff, a children's playground, accessible access and large parking attract all gourmets. A gastronomic pearl and a great place for birthdays and gatherings.",
    },
    banner: {
      line1: "Made with",
      passion: "Passion",
      line2: "Served with",
      love: "Love",
    },
    menu: {
      label: "our menu",
      title: "Culinary offer",
      hint: "Click a category to read the description",
      categories: {
        breakfast: {
          title: "Breakfast",
          desc: "A rich selection from various omelettes to delicious homemade turkey with kaymak.",
        },
        coldStarters: {
          title: "Cold starters",
          desc: "Selection of cured meats with cheeses.",
        },
        hotStarters: {
          title: "Hot starters",
          desc: "Buckwheat flatbreads, chicken sticks, fritters and buckwheat pancakes.",
        },
        buckwheatPizza: {
          title: "Buckwheat pizzas",
          desc: "From our bread oven — classic margarita to sweet pizza with Eurocrem and fruit.",
        },
        soups: {
          title: "Soups & stews",
          desc: "From light clear soup to creamy stews with veal, vegetables and fish.",
        },
        pasta: {
          title: "Pasta & risotto",
          desc: "A varied selection with continental and Mediterranean flavours.",
        },
        salads: {
          title: "Meal salads",
          desc: "Rich salads with steak, chicken, trout, tuna or various vegetables.",
        },
        poultry: {
          title: "Chicken & turkey",
          desc: "From stuffed chicken to marinated turkey with rich sides and sauces.",
        },
        vealPork: {
          title: "Veal & pork",
          desc: "Veal and pork cutlets, various steaks and veal under the sač.",
        },
        grill: {
          title: "Grill",
          desc: "Ćevapi, pljeskavica, sausages, chicken fillet, pork neck, vješalica and steak.",
        },
        fish: {
          title: "Fish",
          desc: "Wide selection of fish specialties in Mediterranean and continental style.",
        },
        desserts: {
          title: "Desserts",
          desc: "Traditional homemade cakes, pancakes and various ice creams.",
        },
      },
    },
    gallery: {
      label: "gallery",
      title: "Ambience & flavours",
      subtitle: "Explore our restaurant, garden terrace and dishes prepared with love.",
      close: "Close",
      prev: "Previous",
      next: "Next",
    },
    stats: {
      title: "Why guests\nchoose Garden",
      subtitle:
        "Family restaurant opened in 2018, in the natural setting of Rogoušići — just 13 km from Sarajevo.",
      items: [
        { value: "2018", label: "Year opened" },
        { value: "13 km", label: "From Sarajevo" },
        { value: "100%", label: "Family owned" },
      ],
    },
    testimonials: {
      label: "guest reviews",
      title: "What our guests say",
      googleRating: "4.9 on Google",
      items: [
        {
          quote:
            "Beautiful new restaurant. Pleasant interior, music, atmosphere, summer terrace and garden... Good gastronomic offer and interesting wine list.",
          name: "Jelena Camur",
          role: "Guest",
        },
        {
          quote: "Great place to relax, very friendly staff. Portions are huge and prices more than reasonable.",
          name: "Dragan Sender",
          role: "Guest",
        },
        {
          quote: "What can I say — you come, you see, you come back again. All praise!!",
          name: "Jovana G.",
          role: "Guest",
        },
      ],
    },
    videos: {
      label: "video",
      title: "Garden in motion",
      subtitle: "Watch our restaurant atmosphere, family weekends, specialties and wine workshops.",
      items: {
        summer: "Summer at Garden",
        family: "Family weekend",
        specialties: "Our specialties",
        wine: "Wine workshop",
      },
    },
    features: {
      label: "explore",
      title: "Our Facilities",
      tabs: {
        playground: "Playground",
        wineWorkshop: "Wine Workshop",
        fireplaceRoom: "Fireplace Room",
        events: "Event Organization"
      },
      playground: {
        title: "Kids Corner",
        desc: "Spacious and safe children's playground where your little ones can enjoy outdoor play."
      },
      wineWorkshop: {
        title: "Wine Workshop",
        desc: "An exclusive space for wine lovers, where we organize tastings and presentations of premium labels."
      },
      fireplaceRoom: {
        title: "Fireplace Room for Corporate Events",
        desc: "The warm and intimate atmosphere of our fireplace room is ideal for business meetings, corporate events, and smaller gatherings."
      },
      events: {
        title: "Event Organization",
        desc: "We organize all kinds of celebrations and events for up to 50 people. Leave the food and ambiance to us.",
        videoLabel: "Video Presentation"
      }
    },
    contact: {
      label: "contact",
      title: "Visit us",
      subtitle: "Reservations and info — call us or reach out on social media.",
      phone: "Phone",
      address: "Address",
      email: "Email",
      instagram: "Instagram",
      hoursTitle: "Opening hours",
      hoursWeek: "Tuesday – Sunday: 09:00 – 22:00",
      hoursMonday: "Monday: closed",
      callUs: "Call us",
    },
    footer: {
      label: "see you soon",
      title: "Where flavours are,\nthere we are",
      hours: "Opening hours",
      visit: "Address & contact",
      copyright: "Restaurant Garden, Rogoušići. All rights reserved. | Developed by David",
    },
  },

  de: {
    meta: {
      title: "Restaurant Garden — Wo Geschmack ist, sind wir",
      description:
        "Authentisches Restaurant in Rogoušići, 13 km von Sarajevo. Traditionelle Ofenküche, Garten, Spielplatz und großer Parkplatz.",
    },
    nav: {
      home: "Start",
      menu: "Speisekarte",
      about: "Über uns",
      gallery: "Galerie",
      contact: "Kontakt",
      cta: "Kontaktieren Sie uns",
    },
    hero: {
      titleLine1: "Zubereitet für",
      titleHighlight: "Feinschmecker",
      titleLine2: "",
      subtitle: "Wo Geschmack ist, sind wir",
      ctaContact: "Kontaktieren Sie uns",
      ctaMenu: "Speisekarte ansehen",
      rating: "4.9 Google-Bewertung",
      awardsAndEducation: "Auszeichnungen & Bildung",
    },
    about: {
      label: "unsere Geschichte",
      title: "Willkommen im Restaurant Garden",
      p1: "Das Restaurant Garden liegt in Rogoušići an der Hauptstraße, nur 13 Kilometer vom Herzen Sarajevos und der Olympiaschönheit Jahorina entfernt. Eingebettet in ein Tal zwischen zwei Bergen, umgeben von Grün und natürlicher Umgebung mit Quellwasser.",
      p2: "Der Garden-Tisch ist eine authentische Schatzkammer unvergesslicher Hausmannskost aus unserem Backofen. Wohlige Atmosphäre, reiche Weinauswahl, freundliches Personal, Kinderspielplatz und großer Parkplatz — ein gastronomisches Juwel für Feiern und Zusammenkünfte.",
    },
    banner: {
      line1: "Gemacht mit",
      passion: "Leidenschaft",
      line2: "Serviert mit",
      love: "Liebe",
    },
    menu: {
      label: "unsere Speisekarte",
      title: "Kulinarisches Angebot",
      hint: "Kategorie anklicken für die Beschreibung",
      categories: {
        breakfast: {
          title: "Frühstück",
          desc: "Reiche Auswahl von verschiedenen Omeletts bis hin zu hausgemachtem Truthahn mit Kaymak.",
        },
        coldStarters: {
          title: "Kalte Vorspeisen",
          desc: "Auswahl an Wurstwaren mit Käsesorten.",
        },
        hotStarters: {
          title: "Warme Vorspeisen",
          desc: "Buchweizenfladen, Hähnchenstäbchen, Fritters und Buchweizenpfannkuchen.",
        },
        buckwheatPizza: {
          title: "Buchweizenpizzen",
          desc: "Aus unserem Ofen — von klassischer Margarita bis zur süßen Pizza mit Eurocrem und Obst.",
        },
        soups: {
          title: "Suppen & Eintöpfe",
          desc: "Von leichter klaren Suppe bis zu cremigen Eintöpfen mit Kalbfleisch, Gemüse und Fisch.",
        },
        pasta: {
          title: "Pasta & Risotto",
          desc: "Vielfältige Auswahl mit kontinentalem und mediterranem Geschmack.",
        },
        salads: {
          title: "Salatgerichte",
          desc: "Reiche Salate mit Steak, Hähnchen, Forelle, Thunfisch oder verschiedenem Gemüse.",
        },
        poultry: {
          title: "Hähnchen & Truthahn",
          desc: "Vom gefüllten Hähnchen bis zum marinierten Truthahn mit reichhaltigen Beilagen.",
        },
        vealPork: {
          title: "Kalb & Schwein",
          desc: "Kalbs- und Schweineschnitzel, verschiedene Steaks und Kalbfleisch unter dem Sač.",
        },
        grill: {
          title: "Grillgerichte",
          desc: "Ćevapi, Pljeskavica, Würste, Hähnchenfilet, Schweinenacken, Vješalica und Steak.",
        },
        fish: {
          title: "Fisch",
          desc: "Breites Angebot an Fischspezialitäten im mediterranen und kontinentalen Stil.",
        },
        desserts: {
          title: "Desserts",
          desc: "Traditionelle hausgemachte Kuchen, Pfannkuchen und verschiedene Eiscremes.",
        },
      },
    },
    gallery: {
      label: "galerie",
      title: "Ambiente & Genuss",
      subtitle: "Entdecken Sie unser Restaurant, die Gartenterrasse und unsere Gerichte.",
      close: "Schließen",
      prev: "Zurück",
      next: "Weiter",
    },
    stats: {
      title: "Warum Gäste\nGarden wählen",
      subtitle:
        "Familienrestaurant seit 2018 in der Natur von Rogoušići — nur 13 km von Sarajevo.",
      items: [
        { value: "2018", label: "Eröffnungsjahr" },
        { value: "13 km", label: "Von Sarajevo" },
        { value: "100%", label: "Familienbetrieb" },
      ],
    },
    testimonials: {
      label: "Gästebewertungen",
      title: "Was unsere Gäste sagen",
      googleRating: "4.9 bei Google",
      items: [
        {
          quote:
            "Wunderschönes neues Restaurant. Angenehmes Interieur, Musik, Atmosphäre, Sommerterrasse und Garten... Gutes gastronomisches Angebot.",
          name: "Jelena Camur",
          role: "Gast",
        },
        {
          quote: "Toller Ort zum Entspannen, sehr freundliches Personal. Große Portionen zu fairen Preisen.",
          name: "Dragan Sender",
          role: "Gast",
        },
        {
          quote: "Was soll man sagen — man kommt, sieht und kommt wieder. Alles Lob!!",
          name: "Jovana G.",
          role: "Gast",
        },
      ],
    },
    videos: {
      label: "video",
      title: "Garden in Bewegung",
      subtitle: "Erleben Sie Atmosphäre, Familienwochenenden, Spezialitäten und Wein-Workshops.",
      items: {
        summer: "Sommer im Garden",
        family: "Familienwochenende",
        specialties: "Unsere Spezialitäten",
        wine: "Wein-Workshop",
      },
    },
    features: {
      label: "entdecken",
      title: "Unsere Einrichtungen",
      tabs: {
        playground: "Spielplatz",
        wineWorkshop: "Wein-Workshop",
        fireplaceRoom: "Kaminzimmer",
        events: "Veranstaltungen"
      },
      playground: {
        title: "Kinderecke",
        desc: "Geräumiger und sicherer Kinderspielplatz, auf dem Ihre Kleinen draußen spielen können."
      },
      wineWorkshop: {
        title: "Wein-Workshop",
        desc: "Ein exklusiver Raum für Weinliebhaber, in dem wir Verkostungen und Präsentationen von Premium-Etiketten organisieren."
      },
      fireplaceRoom: {
        title: "Kaminzimmer für Firmenveranstaltungen",
        desc: "Die warme und intime Atmosphäre unseres Kaminzimmers ist ideal für Geschäftstreffen, Firmenveranstaltungen und kleinere Versammlungen."
      },
      events: {
        title: "Veranstaltungsorganisation",
        desc: "Wir organisieren alle Arten von Feiern und Veranstaltungen für bis zu 50 Personen. Überlassen Sie uns Essen und Ambiente.",
        videoLabel: "Videopräsentation"
      }
    },
    contact: {
      label: "kontakt",
      title: "Besuchen Sie uns",
      subtitle: "Reservierungen und Infos — rufen Sie uns an oder schreiben Sie uns.",
      phone: "Telefon",
      address: "Adresse",
      email: "E-Mail",
      instagram: "Instagram",
      hoursTitle: "Öffnungszeiten",
      hoursWeek: "Dienstag – Sonntag: 09:00 – 22:00",
      hoursMonday: "Montag: geschlossen",
      callUs: "Rufen Sie uns an",
    },
    footer: {
      label: "bis bald",
      title: "Wo Geschmack ist,\nsind wir",
      hours: "Öffnungszeiten",
      visit: "Adresse & Kontakt",
      copyright: "Restaurant Garden, Rogoušići. Alle Rechte vorbehalten. | Developed by David",
    },
  },

  ru: {
    meta: {
      title: "Ресторан Garden — Там, где вкус, там и мы",
      description:
        "Аутентичный ресторан в Рогоушичах, 13 км от Сараево. Традиционная кухня из печи, сад, детская площадка и большая парковка.",
    },
    nav: {
      home: "Главная",
      menu: "Меню",
      about: "О нас",
      gallery: "Галерея",
      contact: "Контакты",
      cta: "Связаться с нами",
    },
    hero: {
      titleLine1: "Приготовлено для",
      titleHighlight: "Любителей",
      titleLine2: "Еды",
      subtitle: "Там, где вкус, там и мы",
      ctaContact: "Связаться с нами",
      ctaMenu: "Посмотреть меню",
      rating: "4.9 Отзывы Google",
      awardsAndEducation: "Награды и образование",
    },
    about: {
      label: "наша история",
      title: "Добро пожаловать в Restaurant Garden",
      p1: "Ресторан Garden расположен в Рогоушичах, вдоль главной дороги, всего в 13 километрах от центра Сараево и олимпийской красавицы Яхорины. В долине между двумя горами, в зелени и природной атмосфере с родниковой водой.",
      p2: "Стол Garden — это аутентичное сокровище незабываемых домашних вкусов из нашей печи. Домашняя атмосфера, богатый выбор вин, дружелюбный персонал, детская площадка и большая парковка — гастрономическая жемчужина для праздников и встреч.",
    },
    banner: {
      line1: "Приготовлено с",
      passion: "Страстью",
      line2: "Подано с",
      love: "Любовью",
    },
    menu: {
      label: "наше меню",
      title: "Кулинарное предложение",
      hint: "Нажмите на категорию для описания",
      categories: {
        breakfast: {
          title: "Завтрак",
          desc: "Богатый выбор от различных омлетов до домашней индейки с кайmak.",
        },
        coldStarters: {
          title: "Холодные закуски",
          desc: "Ассортимент копчёностей с сырами.",
        },
        hotStarters: {
          title: "Горячие закуски",
          desc: "Гречневые лепёшки, куриные палочки, оладьи и гречневые блины.",
        },
        buckwheatPizza: {
          title: "Гречневые пиццы",
          desc: "Из нашей печи — от классической маргариты до сладкой пиццы с Eurocrem и фруктами.",
        },
        soups: {
          title: "Супы и похлёбки",
          desc: "От лёгкого прозрачного супа до сливочных похлёбок с телятиной, овощами и рыбой.",
        },
        pasta: {
          title: "Паста и ризотто",
          desc: "Разнообразный выбор с континентальными и средиземноморскими вкусами.",
        },
        salads: {
          title: "Салаты",
          desc: "Сытные салаты со стейком, курицей, форелью, тунцом или овощами.",
        },
        poultry: {
          title: "Курица и индейка",
          desc: "От фаршированной курицы до маринованной индейки с гарнирами и соусами.",
        },
        vealPork: {
          title: "Телятина и свинина",
          desc: "Котлеты, стейки и телятина под sač.",
        },
        grill: {
          title: "Блюда с гриля",
          desc: "Ћevapi, плескавица, колбаски, куриное филе, свиная шея, vješalica и стейк.",
        },
        fish: {
          title: "Рыба",
          desc: "Широкий ассортимент рыбных блюд в средиземноморском и континентальном стиле.",
        },
        desserts: {
          title: "Десерты",
          desc: "Традиционные домашние торты, блины и различное мороженое.",
        },
      },
    },
    gallery: {
      label: "галерея",
      title: "Атмосфера и вкусы",
      subtitle: "Познакомьтесь с нашим рестораном, садом и блюдами, приготовленными с любовью.",
      close: "Закрыть",
      prev: "Назад",
      next: "Далее",
    },
    stats: {
      title: "Почему гости\nвыбирают Garden",
      subtitle:
        "Семейный ресторан с 2018 года в природной обстановке Рогоушич — всего 13 км от Сараево.",
      items: [
        { value: "2018", label: "Год открытия" },
        { value: "13 км", label: "От Сараево" },
        { value: "100%", label: "Семейный ресторан" },
      ],
    },
    testimonials: {
      label: "отзывы гостей",
      title: "Что говорят наши гости",
      googleRating: "4.9 в Google",
      items: [
        {
          quote:
            "Прекрасный новый ресторан. Уютный интерьер, музыка, атмосфера, летняя терраса и сад... Отличное гастрономическое предложение.",
          name: "Jelena Camur",
          role: "Гость",
        },
        {
          quote: "Отличное место для отдыха, очень приятный персонал. Большие порции по доступным ценам.",
          name: "Dragan Sender",
          role: "Гость",
        },
        {
          quote: "Что сказать — приходишь, видишь, возвращаешься снова. Все похвалы!!",
          name: "Jovana G.",
          role: "Гость",
        },
      ],
    },
    videos: {
      label: "видео",
      title: "Garden в движении",
      subtitle: "Атмосфера ресторана, семейные выходные, специалитеты и винные мастер-классы.",
      items: {
        summer: "Лето в Garden",
        family: "Семейные выходные",
        specialties: "Наши специалитеты",
        wine: "Винная мастерская",
      },
    },
    features: {
      label: "исследуйте",
      title: "Наши объекты",
      tabs: {
        playground: "Детская площадка",
        wineWorkshop: "Винная мастерская",
        fireplaceRoom: "Каминный зал",
        events: "Организация мероприятий"
      },
      playground: {
        title: "Детский уголок",
        desc: "Просторная и безопасная детская площадка, где ваши малыши могут наслаждаться играми на свежем воздухе."
      },
      wineWorkshop: {
        title: "Винная мастерская",
        desc: "Эксклюзивное пространство для любителей вина, где мы организуем дегустации и презентации премиальных марок."
      },
      fireplaceRoom: {
        title: "Каминный зал для корпоративных мероприятий",
        desc: "Теплая и интимная атмосфера нашего каминного зала идеально подходит для деловых встреч, корпоративных мероприятий и небольших собраний."
      },
      events: {
        title: "Организация мероприятий",
        desc: "Мы организуем все виды торжеств и мероприятий до 50 человек. Доверьте нам еду и атмосферу.",
        videoLabel: "Видеопрезентация"
      }
    },
    contact: {
      label: "контакты",
      title: "Посетите нас",
      subtitle: "Бронирование и информация — звоните или пишите в соцсетях.",
      phone: "Телефон",
      address: "Адрес",
      email: "E-mail",
      instagram: "Instagram",
      hoursTitle: "Часы работы",
      hoursWeek: "Вторник – Воскресенье: 09:00 – 22:00",
      hoursMonday: "Понедельник: выходной",
      callUs: "Позвоните нам",
    },
    footer: {
      label: "до скорой встречи",
      title: "Там, где вкус,\nтам и мы",
      hours: "Часы работы",
      visit: "Адрес и контакты",
      copyright: "Restaurant Garden, Rogoušići. Все права защищены. | Developed by David",
    },
  },

  zh: {
    meta: {
      title: "Garden 餐厅 — 有美味的地方，就有我们",
      description:
        "位于 Rogoušići 的正宗餐厅，距萨拉热窝 13 公里。传统窑炉美食、花园露台、儿童游乐场和大型停车场。",
    },
    nav: {
      home: "首页",
      menu: "菜单",
      about: "关于我们",
      gallery: "图库",
      contact: "联系",
      cta: "联系我们",
    },
    hero: {
      titleLine1: "为",
      titleHighlight: "美食爱好者",
      titleLine2: "而准备",
      subtitle: "有美味的地方，就有我们",
      ctaContact: "联系我们",
      ctaMenu: "查看菜单",
      rating: "4.9 Google 评分",
      awardsAndEducation: "奖项与教育",
    },
    about: {
      label: "我们的故事",
      title: "欢迎来到 Garden 餐厅",
      p1: "Garden 餐厅位于 Rogoušići 主干道旁，距萨拉热窝市中心和 Jahorina 奥林匹亚胜地仅 13 公里。坐落于两山之间的山谷，绿树环绕，泉水清冽，提供传统美食的烹饪魅力。",
      p2: "Garden 的餐桌是源自窑炉的正宗家乡美味宝库。温馨氛围、丰富酒品、友好员工、儿童游乐场和大型停车场，是庆祝生日和聚会的理想之选。",
    },
    banner: {
      line1: "用心",
      passion: "烹饪",
      line2: "以",
      love: "爱心奉上",
    },
    menu: {
      label: "我们的菜单",
      title: "美食供应",
      hint: "点击类别查看描述",
      categories: {
        breakfast: {
          title: "早餐",
          desc: "从各种煎蛋卷到美味的自制火鸡配 kaymak，丰富选择。",
        },
        coldStarters: {
          title: "冷盘",
          desc: "精选熏制肉类与奶酪。",
        },
        hotStarters: {
          title: "热盘",
          desc: "荞麦饼、鸡肉条、炸点和荞麦薄饼。",
        },
        buckwheatPizza: {
          title: "荞麦披萨",
          desc: "来自我们的窑炉——从经典玛格丽特到 Eurocrem 水果甜披萨。",
        },
        soups: {
          title: "汤与炖菜",
          desc: "从清淡清汤到小牛肉、蔬菜和鱼类的浓汤。",
        },
        pasta: {
          title: "意面与意式烩饭",
          desc: "大陆与地中海风味的多样选择。",
        },
        salads: {
          title: "主菜沙拉",
          desc: "搭配牛排、鸡肉、鳟鱼、金枪鱼或各类蔬菜的丰富沙拉。",
        },
        poultry: {
          title: "鸡肉与火鸡",
          desc: "从填馅鸡肉到腌制火鸡，配丰富配菜和酱汁。",
        },
        vealPork: {
          title: "小牛肉与猪肉",
          desc: "小牛肉和猪排、各类牛排及 sač 小牛肉。",
        },
        grill: {
          title: "烧烤",
          desc: "ćevapi、pljeskavica、香肠、鸡 fillet、猪颈肉、vješalica 和牛排。",
        },
        fish: {
          title: "鱼类",
          desc: "地中海与大陆风格的丰富鱼类特色菜。",
        },
        desserts: {
          title: "甜点",
          desc: "传统自制蛋糕、薄饼和各类冰淇淋。",
        },
      },
    },
    gallery: {
      label: "图库",
      title: "环境与美味",
      subtitle: "浏览我们的餐厅、花园露台和用心烹制的美食。",
      close: "关闭",
      prev: "上一张",
      next: "下一张",
    },
    stats: {
      title: "客人为何\n选择 Garden",
      subtitle: "2018 年开业的家庭餐厅，位于 Rogoušići 自然环境中——距萨拉热窝仅 13 公里。",
      items: [
        { value: "2018", label: "开业年份" },
        { value: "13 km", label: "距萨拉热窝" },
        { value: "100%", label: "家庭经营" },
      ],
    },
    testimonials: {
      label: "客人评价",
      title: "客人怎么说",
      googleRating: "Google 4.9 分",
      items: [
        {
          quote: "漂亮的新餐厅。舒适的内饰、音乐、氛围、夏季露台和花园……优秀的美食供应和有趣的酒单。",
          name: "Jelena Camur",
          role: "客人",
        },
        {
          quote: "放松的好去处，员工非常友好。份量大，价格非常合理。",
          name: "Dragan Sender",
          role: "客人",
        },
        {
          quote: "怎么说呢——来了，看了，还会再来。全是赞美！！",
          name: "Jovana G.",
          role: "客人",
        },
      ],
    },
    videos: {
      label: "视频",
      title: "Garden 动态",
      subtitle: "观看餐厅氛围、家庭周末、特色美食和葡萄酒工坊。",
      items: {
        summer: "Garden 之夏",
        family: "家庭周末",
        specialties: "我们的特色菜",
        wine: "葡萄酒工坊",
      },
    },
    features: {
      label: "探索",
      title: "我们的设施",
      tabs: {
        playground: "游乐场",
        wineWorkshop: "葡萄酒工坊",
        fireplaceRoom: "壁炉室",
        events: "活动组织"
      },
      playground: {
        title: "儿童角",
        desc: "宽敞安全的儿童游乐场，让您的孩子尽情享受户外玩耍。"
      },
      wineWorkshop: {
        title: "葡萄酒工坊",
        desc: "专为葡萄酒爱好者打造的专属空间，我们在此举办高级品牌的品鉴和展示活动。"
      },
      fireplaceRoom: {
        title: "企业活动壁炉室",
        desc: "我们壁炉室温馨私密的氛围是商务会议、企业活动和小型聚会的理想选择。"
      },
      events: {
        title: "活动组织",
        desc: "我们为多达50人组织各种庆祝和活动。请将食物和氛围交给我们。",
        videoLabel: "视频展示"
      }
    },
    contact: {
      label: "联系",
      title: "欢迎光临",
      subtitle: "预订与咨询——请致电或通过社交媒体联系我们。",
      phone: "电话",
      address: "地址",
      email: "电子邮件",
      instagram: "Instagram",
      hoursTitle: "营业时间",
      hoursWeek: "周二至周日：09:00 – 22:00",
      hoursMonday: "周一：休息",
      callUs: "致电我们",
    },
    footer: {
      label: "期待再次相见",
      title: "有美味的地方，\n就有我们",
      hours: "营业时间",
      visit: "地址与联系",
      copyright: "Restaurant Garden, Rogoušići. 保留所有权利。| Developed by David",
    },
  },
};
