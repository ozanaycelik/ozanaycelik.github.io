/*
 * Site içeriği — tek kaynak.
 * Her metin { tr, en, de } biçimindedir. Yeni bir proje/iş eklemek için
 * ilgili diziye bir nesne eklemek yeterlidir; HTML'e dokunmaya gerek yok.
 */
window.SITE = {
  person: {
    name: "Ozanay Çelik",
    email: "ozanay.celik@gmail.com",
    location: { tr: "Pendik / İstanbul", en: "Pendik / Istanbul, Türkiye", de: "Pendik / Istanbul, Türkei" },
    github: "https://github.com/ozanaycelik",
    linkedin: "https://www.linkedin.com/in/ozanay-%C3%A7elik-531038185/"
  },

  ui: {
    nav: {
      about: { tr: "Hakkımda", en: "About", de: "Über mich" },
      skills: { tr: "Yetkinlikler", en: "Skills", de: "Kompetenzen" },
      experience: { tr: "Deneyim", en: "Experience", de: "Erfahrung" },
      projects: { tr: "Projeler", en: "Projects", de: "Projekte" },
      education: { tr: "Eğitim", en: "Education", de: "Ausbildung" },
      contact: { tr: "İletişim", en: "Contact", de: "Kontakt" }
    },
    role: {
      tr: "Uyarlama ve Entegrasyon Takım Lideri · Yazılım Geliştirici",
      en: "Customization & Integration Team Lead · Software Developer",
      de: "Teamleiter Anpassung & Integration · Softwareentwickler"
    },
    heroLead: {
      tr: "Logo ERP çevresinde uyarlama, entegrasyon ve kurumsal yazılım geliştiriyorum. Satış, üretim, finans ve e-ticaret süreçlerini birbirine konuşturan, sahada gerçekten kullanılan çözümler üretiyorum.",
      en: "I build customizations, integrations and business software around Logo ERP — solutions that connect sales, production, finance and e-commerce, and that people actually use every day.",
      de: "Ich entwickle Anpassungen, Integrationen und Unternehmenssoftware rund um Logo ERP — Lösungen, die Vertrieb, Produktion, Finanzen und E-Commerce verbinden und im Alltag wirklich genutzt werden."
    },
    available: { tr: "Yeni projelere açığım", en: "Open to new projects", de: "Offen für neue Projekte" },
    ctaContact: { tr: "İletişime geç", en: "Get in touch", de: "Kontakt aufnehmen" },
    ctaCv: { tr: "CV'yi yazdır / PDF", en: "Print CV / PDF", de: "Lebenslauf drucken / PDF" },
    stats: [
      { value: "6+", label: { tr: "yıl ERP & yazılım", en: "years in ERP & software", de: "Jahre ERP & Software" } },
      { value: "50+", label: { tr: "tamamlanan proje", en: "projects delivered", de: "abgeschlossene Projekte" } },
      { value: "15+", label: { tr: "platform entegrasyonu", en: "platform integrations", de: "Plattform-Integrationen" } }
    ],
    sections: {
      about: { tr: "Hakkımda", en: "About me", de: "Über mich" },
      skills: { tr: "Yetkinlikler", en: "Skills & expertise", de: "Kompetenzen" },
      skillsLead: {
        tr: "Uçtan uca: iş analizinden veritabanına, servisten kullanıcı testine.",
        en: "End to end: from business analysis to database, from service to user acceptance.",
        de: "Von Anfang bis Ende: von der Geschäftsanalyse über die Datenbank bis zum Abnahmetest."
      },
      experience: { tr: "İş deneyimi", en: "Work experience", de: "Berufserfahrung" },
      projects: { tr: "Öne çıkan projeler", en: "Selected projects", de: "Ausgewählte Projekte" },
      integrations: { tr: "Entegrasyon yaptığım platformlar", en: "Platforms I have integrated", de: "Integrierte Plattformen" },
      opensource: { tr: "GitHub'daki çalışmalar", en: "On GitHub", de: "Auf GitHub" },
      education: { tr: "Eğitim", en: "Education", de: "Ausbildung" },
      certificates: { tr: "Sertifikalar", en: "Certificates", de: "Zertifikate" },
      languages: { tr: "Diller", en: "Languages", de: "Sprachen" },
      contact: { tr: "İletişim", en: "Contact", de: "Kontakt" },
      contactLead: {
        tr: "Logo uyarlama, entegrasyon veya özel yazılım ihtiyacınız için bana yazabilirsiniz.",
        en: "Write to me for Logo customization, integration or custom software.",
        de: "Schreiben Sie mir für Logo-Anpassungen, Integrationen oder individuelle Software."
      }
    },
    labels: {
      present: { tr: "Günümüz", en: "Present", de: "Heute" },
      email: { tr: "E-posta", en: "Email", de: "E-Mail" },
      location: { tr: "Adres", en: "Location", de: "Standort" },
      copy: { tr: "Kopyala", en: "Copy", de: "Kopieren" },
      copied: { tr: "Kopyalandı", en: "Copied", de: "Kopiert" },
      viewRepo: { tr: "Repo", en: "Repo", de: "Repo" },
      theme: { tr: "Temayı değiştir", en: "Toggle theme", de: "Design wechseln" },
      language: { tr: "Dil", en: "Language", de: "Sprache" },
      menu: { tr: "Menü", en: "Menu", de: "Menü" },
      skip: { tr: "İçeriğe geç", en: "Skip to content", de: "Zum Inhalt springen" },
      footer: { tr: "Tüm hakları saklıdır.", en: "All rights reserved.", de: "Alle Rechte vorbehalten." },
      backTop: { tr: "Yukarı", en: "Top", de: "Nach oben" }
    }
  },

  about: {
    tr: [
      "İktisat eğitimi aldım; ERP eğitimini tamamladıktan sonra Logo ERP danışmanı olarak başladım. Danışmanlık sürecinde yazılımın nasıl üretildiğine merak saldım ve kariyerimi yazılım geliştirmeye taşıdım.",
      "ERP, CRM, Flow, e-Devlet, e-ticaret ve depo yönetimi süreçlerini içeriden bildiğim için son kullanıcının ihtiyacını hızlı anlıyor, bunu doğrudan çalışan bir projeye dönüştürebiliyorum. Bugün BTI Yazılım'da uyarlama ve entegrasyon ekibini yönetiyor, kurumsal kaynak kod yönetimini GitHub üzerinde kurguluyorum.",
      "OPET, Trendyol, Marwiz, RobotPOS, EBA, Bulut Tahsilat ve SBS gibi platformlarla entegrasyonlar geliştirdim. Sorumluluk sahibi, hedef odaklı ve öğrenmeyi hiç bırakmayan biriyim."
    ],
    en: [
      "I studied economics and, after completing an ERP specialist program, started as a Logo ERP consultant. Consulting made me curious about how software is built, so I moved my career into software development.",
      "Because I know ERP, CRM, Flow, e-Government, e-commerce and warehouse processes from the inside, I understand end-user needs quickly and turn them directly into working solutions. Today I lead the customization & integration team at BTI Yazılım and set up the company's source-code management on GitHub.",
      "I have built integrations with platforms such as OPET, Trendyol, Marwiz, RobotPOS, EBA, Bulut Tahsilat and SBS. I am responsible, goal-driven and never stop learning."
    ],
    de: [
      "Ich habe Volkswirtschaft studiert und nach einem ERP-Fachprogramm als Logo-ERP-Berater begonnen. In der Beratung wuchs meine Neugier darauf, wie Software entsteht — so bin ich in die Softwareentwicklung gewechselt.",
      "Da ich ERP-, CRM-, Flow-, E-Government-, E-Commerce- und Lagerprozesse von innen kenne, verstehe ich die Anforderungen der Anwender schnell und setze sie direkt in funktionierende Lösungen um. Heute leite ich bei BTI Yazılım das Team für Anpassung & Integration und habe das Quellcode-Management des Unternehmens auf GitHub aufgebaut.",
      "Ich habe Integrationen mit Plattformen wie OPET, Trendyol, Marwiz, RobotPOS, EBA, Bulut Tahsilat und SBS entwickelt. Ich bin verantwortungsbewusst, zielorientiert und lerne ständig dazu."
    ]
  },

  skills: [
    {
      icon: "erp",
      title: { tr: "ERP & Logo Ekosistemi", en: "ERP & Logo ecosystem", de: "ERP & Logo-Ökosystem" },
      items: ["Logo Tiger 3", "Tiger 3 Enterprise", "Logo GO 3", "Logo CRM", "Logo Flow", "Logo Object Designer (LOD)", "Logo Objects / UnityObjects", "Logo Object Service", "e-Fatura · e-Arşiv · e-İrsaliye", "e-Defter · e-Mutabakat"],
      note: {
        tr: "Üretim, planlama, muhasebe, finans, maliyet ve CRM modüllerinde uyarlama ve ana veri kurgusu.",
        en: "Customization and master-data design across production, planning, accounting, finance, costing and CRM.",
        de: "Anpassung und Stammdatenaufbau in Produktion, Planung, Buchhaltung, Finanzen, Kostenrechnung und CRM."
      }
    },
    {
      icon: "code",
      title: { tr: "Backend & .NET", en: "Backend & .NET", de: "Backend & .NET" },
      items: ["C#", ".NET / .NET Framework", "ASP.NET Core Web API", "ASP.NET MVC", "Entity Framework Core", "Windows Service", "DevExpress", ".NET MAUI"],
      note: {
        tr: "Onion mimari, SOLID ve temiz kod ilkeleriyle bakımı kolay servisler.",
        en: "Maintainable services built on onion architecture, SOLID and clean-code principles.",
        de: "Wartbare Services nach Onion-Architektur, SOLID und Clean-Code-Prinzipien."
      }
    },
    {
      icon: "db",
      title: { tr: "Veritabanı & Veri", en: "Database & data", de: "Datenbank & Daten" },
      items: ["Microsoft SQL Server", "T-SQL", "PL/SQL", "PostgreSQL", "Trigger · Function · Stored Procedure", "SQL Database Mail", "Veri analizi"],
      note: {
        tr: "MCP sertifikalı T-SQL; bütçe, üretim, maliyet ve satış analiz raporları.",
        en: "MCP-certified in T-SQL; budget, production, cost and sales analysis reporting.",
        de: "MCP-zertifiziert in T-SQL; Budget-, Produktions-, Kosten- und Vertriebsanalysen."
      }
    },
    {
      icon: "plug",
      title: { tr: "Entegrasyon", en: "Integration", de: "Integration" },
      items: ["REST API geliştirme", "SOAP / Web Service", "JSON · XML", "E-ticaret pazaryerleri", "POS & istasyon sistemleri", "Tahsilat & banka servisleri", "WMS entegrasyonu"],
      note: {
        tr: "Dış sistemlerden Logo'ya ve Logo'dan dış sistemlere güvenilir, izlenebilir veri akışı.",
        en: "Reliable, traceable data flow from external systems into Logo and back.",
        de: "Zuverlässiger, nachvollziehbarer Datenfluss zwischen externen Systemen und Logo."
      }
    },
    {
      icon: "web",
      title: { tr: "Web & Mobil", en: "Web & mobile", de: "Web & Mobile" },
      items: ["HTML5", "CSS3", "JavaScript", "Flutter / Dart", ".NET MAUI"],
      note: {
        tr: "Yönetim panelleri, sipariş ekranları ve küçük mobil uygulamalar.",
        en: "Admin panels, order screens and small mobile apps.",
        de: "Admin-Oberflächen, Bestellmasken und kleine mobile Apps."
      }
    },
    {
      icon: "team",
      title: { tr: "Süreç & Liderlik", en: "Process & leadership", de: "Prozesse & Führung" },
      items: ["İş analizi", "Proje planlama", "Kullanıcı kabul testi", "Git & GitHub Organization", "Ekip eğitimi & mentorluk", "Raporlama (Excel / Office)"],
      note: {
        tr: "Analizden canlıya geçişe kadar projenin tamamını üstlenebiliyorum.",
        en: "I can own a project from analysis all the way to go-live.",
        de: "Ich verantworte Projekte von der Analyse bis zum Go-live."
      }
    }
  ],

  experience: [
    {
      company: "BTI Yazılım",
      period: { from: "2024-05", to: null },
      title: { tr: "Uyarlama ve Entegrasyon Takım Lideri", en: "Customization & Integration Team Lead", de: "Teamleiter Anpassung & Integration" },
      place: "İstanbul",
      bullets: {
        tr: [
          "Şirketin tüm yazılım projelerini GitHub üzerinde organize edip sunucularda yedeklenmesini sağladım; kurumsal GitHub organizasyon yapısını kurdum.",
          "İrili ufaklı 50'yi aşkın projeyi başarıyla tamamladım.",
          "Edding sipariş planlama; Sonorous ve Gönenli Süt üretim planlama; Omniens e-ticaret entegrasyonu; Valeo için GECO HR onay modülü.",
          "3 kişilik ekibe yazılım süreçlerini sıfırdan öğrettim; hem eğitici hem üretici rolde yer aldım."
        ],
        en: [
          "Organized all of the company's software projects on GitHub with server-side backups and set up the corporate GitHub organization.",
          "Successfully delivered more than 50 projects of various sizes.",
          "Edding order planning; Sonorous and Gönenli Süt production planning; Omniens e-commerce integration; GECO HR approval module for Valeo.",
          "Taught software processes from scratch to a team of three, acting as both mentor and developer."
        ],
        de: [
          "Alle Softwareprojekte des Unternehmens auf GitHub organisiert, serverseitige Backups eingeführt und die GitHub-Organisation aufgebaut.",
          "Mehr als 50 Projekte unterschiedlicher Größe erfolgreich abgeschlossen.",
          "Edding Auftragsplanung; Sonorous und Gönenli Süt Produktionsplanung; Omniens E-Commerce-Integration; GECO-HR-Freigabemodul für Valeo.",
          "Ein dreiköpfiges Team von Grund auf in Softwareprozessen geschult — als Mentor und Entwickler zugleich."
        ]
      }
    },
    {
      company: "Elifsoft",
      period: { from: "2023-03", to: "2024-05" },
      title: { tr: "Yazılım Geliştirici (Backend)", en: "Software Developer (Backend)", de: "Softwareentwickler (Backend)" },
      link: "https://app.elifsoft.com.tr/",
      bullets: {
        tr: [
          "Grup şirketlerinin yakıt takibi, araç filo yönetimi, market yönetimi gibi tüm faaliyetlerini tek elden yöneten uygulamanın backend altyapısını kurguladım ve geliştirdim.",
          "Proje analizlerini yürüttüm; yetkilendirme ve onay süreçlerini yazdım, uygulamanın Logo ile entegrasyonunu geliştirdim."
        ],
        en: [
          "Designed and built the backend of a platform that manages all group-company operations — fuel tracking, fleet management, market management and more — in one place.",
          "Ran project analyses, wrote authorization and approval workflows and developed the Logo integration."
        ],
        de: [
          "Backend einer Plattform konzipiert und entwickelt, die alle Aktivitäten der Unternehmensgruppe — Kraftstoff-Tracking, Fuhrpark, Marktverwaltung u. a. — zentral steuert.",
          "Projektanalysen durchgeführt, Berechtigungs- und Freigabeprozesse umgesetzt und die Logo-Integration entwickelt."
        ]
      }
    },
    {
      company: "BTI Yazılım",
      period: { from: "2021-08", to: "2023-03" },
      title: { tr: "Yazılım Geliştirici", en: "Software Developer", de: "Softwareentwickler" },
      bullets: {
        tr: [
          "C# ve Logo Object Designer (LOD) ile uygulamalar geliştirdim; analizden kullanıcı testine tüm süreci yönettim.",
          "Bulut Tahsilat entegrasyonu: Windows servis olarak çalışan, 3 firmada (Mega Metal, Berg Metal, Ekol Gıda) aktif Logo veri aktarım paketi.",
          "Hekim Yapı maliyet uygulaması; Elektro Kalori ve Enka Sanayi için e-ticaret ve mobil REST API'leri; Arvato WMS → Logo aktarımı.",
          "BTI Faster: Logo'daki tüm modüllere Excel'den veri aktarımı sağlayan şirket içi araç."
        ],
        en: [
          "Built applications with C# and Logo Object Designer (LOD), managing every stage from analysis to user testing.",
          "Cloud collection integration: a Windows-service package transferring data into Logo, live at 3 companies (Mega Metal, Berg Metal, Ekol Food).",
          "Hekim Yapı costing app; REST APIs for e-commerce and mobile at Elektro Kalori and Enka Sanayi; Arvato WMS → Logo transfer.",
          "BTI Faster: an in-house tool importing data from Excel into every Logo module."
        ],
        de: [
          "Anwendungen mit C# und Logo Object Designer (LOD) entwickelt und alle Phasen von der Analyse bis zum Anwendertest verantwortet.",
          "Cloud-Inkasso-Integration: ein Windows-Dienst, der Daten an Logo überträgt — produktiv bei 3 Unternehmen (Mega Metal, Berg Metal, Ekol Food).",
          "Kostenrechnungs-App für Hekim Yapı; REST-APIs für E-Commerce und Mobile bei Elektro Kalori und Enka Sanayi; Arvato WMS → Logo.",
          "BTI Faster: internes Tool für Excel-Importe in alle Logo-Module."
        ]
      }
    },
    {
      company: "BTI Yazılım",
      period: { from: "2020-01", to: "2021-08" },
      title: { tr: "ERP Danışmanı", en: "ERP Consultant", de: "ERP-Berater" },
      bullets: {
        tr: [
          "Logo ERP'de CRM, üretim, planlama, muhasebe, finans ve maliyet muhasebesi modüllerinde proje ve destek süreçlerinde çalıştım.",
          "Proje süreçlerini planladım, ana veri setlerini oluşturdum, firma yapısına göre uyarlamalar yaptım.",
          "SQL ile otomatik e-posta, trigger ve fonksiyonlarla iş süreçleri; bütçe, üretim ve maliyet raporlaması."
        ],
        en: [
          "Worked on implementation and support across CRM, production, planning, accounting, finance and cost-accounting modules in Logo ERP.",
          "Planned project processes, built master data and customized the system to each company's structure.",
          "Automated emails from SQL, business logic with triggers and functions; budget, production and cost reporting."
        ],
        de: [
          "Einführung und Support in den Logo-ERP-Modulen CRM, Produktion, Planung, Buchhaltung, Finanzen und Kostenrechnung.",
          "Projektabläufe geplant, Stammdaten aufgebaut und das System an die Unternehmensstruktur angepasst.",
          "Automatische E-Mails aus SQL, Geschäftslogik mit Triggern und Funktionen; Budget-, Produktions- und Kostenreports."
        ]
      }
    },
    {
      company: "Smartpro Teknoloji",
      period: { from: "2019-09", to: "2019-12" },
      title: { tr: "ERP Eğitimi (Stajyer)", en: "ERP Trainee", de: "ERP-Trainee" },
      place: "İstanbul",
      bullets: {
        tr: ["İŞKUR destekli ERP uzmanlık programı kapsamında Logo ERP modülleri üzerinde uygulamalı eğitim."],
        en: ["Hands-on training on Logo ERP modules within the state-supported ERP specialist program."],
        de: ["Praxisnahe Ausbildung in Logo-ERP-Modulen im Rahmen des staatlich geförderten ERP-Fachprogramms."]
      }
    }
  ],

  projects: [
    { name: "Migros İştirakleri", tag: { tr: "Logo ERP uyarlama ve entegrasyon uygulamaları", en: "Logo ERP customization & integration apps", de: "Logo-ERP-Anpassungs- & Integrationslösungen" }, stack: ["Logo", "C#", "MSSQL"] },
    { name: "Edding", tag: { tr: "Sipariş planlama", en: "Order planning", de: "Auftragsplanung" }, stack: ["C#", "Logo", "MSSQL"] },
    { name: "Sonorous · Gönenli Süt", tag: { tr: "Üretim planlama", en: "Production planning", de: "Produktionsplanung" }, stack: ["Logo", "LOD", "MSSQL"] },
    { name: "Omniens", tag: { tr: "E-ticaret entegrasyonu", en: "E-commerce integration", de: "E-Commerce-Integration" }, stack: ["REST", "Logo Objects"] },
    { name: "Valeo · GECO HR", tag: { tr: "İK onay modülü", en: "HR approval module", de: "HR-Freigabemodul" }, stack: ["C#", "Workflow"] },
    { name: "Bulut Tahsilat", tag: { tr: "Windows servis · 3 firmada canlı", en: "Windows service · live at 3 firms", de: "Windows-Dienst · bei 3 Firmen live" }, stack: ["C#", "Windows Service", "Logo"] },
    { name: "Arvato WMS", tag: { tr: "WMS → Logo aktarımı", en: "WMS → Logo transfer", de: "WMS → Logo-Transfer" }, stack: ["REST", "Logo Objects"] },
    { name: "Elektro Kalori · Enka", tag: { tr: "E-ticaret & mobil API", en: "E-commerce & mobile API", de: "E-Commerce- & Mobile-API" }, stack: ["ASP.NET Web API"] },
    { name: "Hekim Yapı", tag: { tr: "Maliyet hesaplama", en: "Cost calculation", de: "Kostenkalkulation" }, stack: ["C#", "MSSQL"] },
    { name: "BMW", tag: { tr: "Detaylı satış analiz raporları", en: "Detailed sales analysis reports", de: "Detaillierte Vertriebsanalysen" }, stack: ["T-SQL", "Reporting"] },
    { name: "BTI Faster", tag: { tr: "Excel → tüm Logo modülleri", en: "Excel → all Logo modules", de: "Excel → alle Logo-Module" }, stack: ["C#", "Logo Objects"] }
  ],

  integrations: ["OPET", "Trendyol", "Shopify", "Entegra", "Marwiz", "RobotPOS", "EBA", "Bulut Tahsilat", "SBS", "GECO HR", "Arvato WMS", "e-Logo", "TKGM", "TCMB"],

  repos: [
    { name: "ParselSorgulama", url: "https://github.com/ozanaycelik/ParselSorgulama", lang: "C#",
      desc: { tr: "TKGM servisleriyle parsel ve koordinat sorgulayan .NET 7 kütüphanesi (NuGet paketi).", en: ".NET 7 library querying parcels and coordinates via TKGM services (NuGet package).", de: ".NET-7-Bibliothek für Flurstück- und Koordinatenabfragen über TKGM-Dienste (NuGet-Paket)." } },
    { name: "ETicaretAPI", url: "https://github.com/ozanaycelik/ETicaretAPI", lang: "C#",
      desc: { tr: "Onion mimari, EF Core ve Code First ile e-ticaret API'si.", en: "E-commerce API with onion architecture, EF Core and Code First.", de: "E-Commerce-API mit Onion-Architektur, EF Core und Code First." } },
    { name: "E-Fatura Mükellef Kontrol", url: "https://github.com/ozanaycelik/E-Fatura-M-kellef-Kontrol", lang: "C#",
      desc: { tr: "VKN/TCKN ile e-Logo web servisi üzerinden e-fatura mükellefiyet sorgusu.", en: "E-invoice taxpayer check by tax ID via the e-Logo web service.", de: "Prüfung der E-Rechnungspflicht per Steuernummer über den e-Logo-Webservice." } },
    { name: "LogoErpAktarım", url: "https://github.com/ozanaycelik/LogoErpAktar-m", lang: "C#",
      desc: { tr: "Logo Object Service ile malzeme kartı aktarımı.", en: "Material card transfer via Logo Object Service.", de: "Materialstamm-Übertragung über den Logo Object Service." } },
    { name: "tcmb_kur_app", url: "https://github.com/ozanaycelik/tcmb_kur_app", lang: "Dart",
      desc: { tr: "TCMB günlük kurlarını okuyan Flutter uygulaması.", en: "Flutter app reading the Central Bank's daily exchange rates.", de: "Flutter-App für die Tageskurse der türkischen Zentralbank." } },
    { name: "MobileOrderApp", url: "https://github.com/ozanaycelik/MobileOrderApp", lang: "C#",
      desc: { tr: ".NET MAUI ile örnek mobil sipariş uygulaması.", en: "Sample mobile ordering app built with .NET MAUI.", de: "Beispiel-Bestell-App mit .NET MAUI." } }
  ],

  education: [
    { school: { tr: "İstanbul Üniversitesi · AUZEF", en: "Istanbul University · AUZEF", de: "Universität Istanbul · AUZEF" },
      degree: { tr: "Ön lisans · Bilgisayar Programcılığı", en: "Associate degree · Computer Programming", de: "Associate Degree · Computerprogrammierung" }, years: "2022 – 2024" },
    { school: { tr: "Pamukkale Üniversitesi · Denizli", en: "Pamukkale University · Denizli", de: "Pamukkale-Universität · Denizli" },
      degree: { tr: "Lisans · İktisat", en: "Bachelor's · Economics", de: "Bachelor · Volkswirtschaft" }, years: "2014 – 2019" },
    { school: { tr: "Özel Marmara Koleji · İstanbul", en: "Private Marmara College · Istanbul", de: "Privates Marmara-Kolleg · Istanbul" },
      degree: { tr: "Lise (İngilizce)", en: "High school (English-medium)", de: "Gymnasium (englischsprachig)" }, years: "2009 – 2014" }
  ],

  certificates: [
    { name: "MCP — Querying Data with Transact-SQL", issuer: "Microsoft" },
    { name: { tr: "ERP Uzmanlık Eğitimi", en: "ERP Specialist Training", de: "ERP-Fachausbildung" }, issuer: { tr: "İŞKUR / ÇSGB destekli", en: "Supported by İŞKUR / MoLSS", de: "Gefördert von İŞKUR / Arbeitsministerium" }, year: "2019" },
    { name: { tr: "Logo uyarlama araçları", en: "Logo customization tools", de: "Logo-Anpassungswerkzeuge" }, issuer: "Logo" },
    { name: "Logo CRM · GO 3 · Tiger 3 · Tiger 3 Enterprise", issuer: "Logo" }
  ],

  languages: [
    { name: { tr: "Türkçe", en: "Turkish", de: "Türkisch" }, level: { tr: "Ana dil", en: "Native", de: "Muttersprache" }, value: 100 },
    { name: { tr: "İngilizce", en: "English", de: "Englisch" }, level: { tr: "B1 · Orta", en: "B1 · Intermediate", de: "B1 · Mittelstufe" }, value: 55 },
    { name: { tr: "Almanca", en: "German", de: "Deutsch" }, level: { tr: "A1 · Başlangıç", en: "A1 · Beginner", de: "A1 · Anfänger" }, value: 20 }
  ]
};
