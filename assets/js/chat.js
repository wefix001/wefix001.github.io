/* WEFIX Trädgård — frontend mock. Ingen API, inga priser, inget CRM. */
(function () {
  "use strict";

  var OFFERS = [
    { code: "host.stad", title: "Höststädning", line1: "Löv, rabatter, infart", line2: "Redo för vintern", keywords: ["höststädning", "löv", "höst"] },
    { code: "var.stad", title: "Vårstädning", line1: "Rabatter och gräs", line2: "Start på säsongen", keywords: ["vårstädning", "vårstäd"] },
    { code: "garden.hack", title: "Häckklippning", line1: "Vi mäter och klipper", line2: "Höjd du vill ha", keywords: ["häck"] },
    { code: "garden.gras", title: "Gräsklippning", line1: "En gång eller abonnemang", line2: "Trimning som tillval", keywords: ["gräsklippning", "gräs", "klippning"] },
    { code: "garden.ogras", title: "Ogräsrensning", line1: "Rabatt eller mellan sten", line2: "Utan att skada växterna", keywords: ["ogräs"] },
    { code: "garden.beskar", title: "Beskärning", line1: "Buskar och träd", line2: "Vi säger när det är rätt tid", keywords: ["beskärning", "fruktträd"] },
    { code: "garden.altan", title: "Altantvätt", line1: "Grön påväxt och smuts", line2: "Trädgård, inte Bygg", keywords: ["altantvätt", "tvätta altan", "altan"] },
    { code: "garden.sno", title: "Snöröjning", line1: "Snö och halka", line2: "Maskin eller för hand", keywords: ["snö", "skotta"] },
    { code: "garden.trad", title: "Trädfällning", line1: "Arborist, bit för bit", line2: "Bortforsling om du vill", keywords: ["fälla träd", "trädfällning"] },
    { code: "garden.plantera", title: "Plantering", line1: "Nytt eller fräscha upp", line2: "Från blomma till träd", keywords: ["plantering"] },
    { code: "garden.anlaggning", title: "Anläggning", line1: "Rulle eller sådd", line2: "Vi gör i ordning ytan", keywords: ["anläggning", "ny gräsmatta"] },
    { code: "garden.mark", title: "Markarbete", line1: "Sten, mur eller schakt", line2: "Säg vad som ska göras", keywords: ["markarbete", "stensättning", "mur", "schakt"] },
    { code: "pack.sasong", title: "Paket Säsong", line1: "Tre gånger per år", line2: "Vår, häck, höst", keywords: ["trädgårdsmästare", "paket säsong"] },
    { code: "pack.premium", title: "Paket Premium", line1: "En dag i månaden", line2: "Löpande skötsel", keywords: ["premium"] },
    { code: "pack.snabba", title: "Trädgårdsfix Snabba", line1: "En kort insats", line2: "Buskage, trim, ogräs", keywords: ["snabba", "snabb insats"] },
    { code: "robot.service", title: "Basservice", line1: "Du lämnar i Vallda", line2: "Service och vinter", keywords: ["robot", "automower", "service"] },
    { code: "robot.buy", title: "Köpa robot", line1: "Vi hjälper er välja", line2: "En kollega hör av sig", keywords: ["köpa robot"] },
    { code: "brf", title: "BRF-skötsel", line1: "Grönt, snö eller komplett", line2: "Styrelse får en ticket", keywords: ["förening", "brf"] },
    { code: "foretag", title: "Företag", line1: "Yttre skötsel", line2: "Säg fastighet och behov", keywords: ["företag", "fastighet"] },
    { code: "bygg.altan", title: "Ny altan", line1: "WEFIX Bygg", line2: "Egen ticket, vi puttar över", keywords: ["bygga altan", "ny altan"] },
    { code: "bygg.staket", title: "Staket", line1: "WEFIX Bygg", line2: "Egen ticket", keywords: ["staket", "plank"] },
    { code: "bygg.renovering", title: "Renovering", line1: "WEFIX Bygg", line2: "Egen ticket", keywords: ["renovering"] }
  ];

  var ROBOT_EXTRA = [
    { code: "robot.hem", title: "Hemservice", line1: "Vi hämtar hemma", line2: "Samma omsorg" },
    { code: "robot.lyx", title: "Lyxservice", line1: "Hämtning och extra", line2: "Säg vad du har" }
  ];

  var INTENT_ALIAS = {
    "robot": "robot.service",
    "robot.service": "robot.service",
    "robot.buy": "robot.buy",
    "robot.hem": "robot.hem",
    "robot.lyx": "robot.lyx",
    "hack": "garden.hack",
    "garden.hack": "garden.hack",
    "gras": "garden.gras",
    "garden.gras": "garden.gras",
    "sno": "garden.sno",
    "garden.sno": "garden.sno",
    "altan": "garden.altan",
    "garden.altan": "garden.altan",
    "beskar": "garden.beskar",
    "garden.beskar": "garden.beskar",
    "anlaggning": "garden.anlaggning",
    "garden.anlaggning": "garden.anlaggning",
    "mark": "garden.mark",
    "garden.mark": "garden.mark",
    "trad": "garden.trad",
    "garden.trad": "garden.trad",
    "plantera": "garden.plantera",
    "garden.plantera": "garden.plantera",
    "ogras": "garden.ogras",
    "garden.ogras": "garden.ogras",
    "lovkrattning": "host.stad",
    "ovriga": "ovriga",
    "ovriga-tjanster": "ovriga",
    "host": "host.stad",
    "host.stad": "host.stad",
    "brf": "brf",
    "foretag": "foretag",
    "bygg": "bygg.altan",
    "bygg.altan": "bygg.altan",
    "bygg.staket": "bygg.staket",
    "bygg.renovering": "bygg.renovering",
    "kontakt": "kontakt"
  };

  var LANDINGS = {
    "robot.service": {
      greeting: "Hej! Hur vill du ha hjälp med roboten — service, vinter eller köpa?",
      ask: "Hej! Hur vill du ha hjälp med roboten — service, vinter eller köpa?",
      what: "Robotgräsklippare"
    },
    "robot.buy": {
      greeting: "Hej! Hur vill du ha hjälp med roboten — service, vinter eller köpa?",
      ask: "Hej! Hur vill du ha hjälp med roboten — service, vinter eller köpa?",
      what: "Köpa robot"
    },
    "garden.hack": {
      greeting: "Hej! Hur vill du ha hjälp med häcken — längd, höjd, när?",
      ask: "Hej! Hur vill du ha hjälp med häcken — längd, höjd, när?",
      what: "Häckklippning"
    },
    "garden.gras": {
      greeting: "Hej! Hur vill du ha hjälp med gräset — en gång, abonnemang, när?",
      ask: "Hej! Hur vill du ha hjälp med gräset — en gång, abonnemang, när?",
      what: "Gräsklippning"
    },
    "garden.sno": {
      greeting: "Hej! Hur vill du ha hjälp med snön — privat, BRF, hur ofta?",
      ask: "Hej! Hur vill du ha hjälp med snön — privat, BRF, hur ofta?",
      what: "Snöröjning"
    },
    "garden.altan": {
      greeting: "Hej! Hur vill du ha hjälp med altanen — ungefär hur stor är ytan?",
      ask: "Hej! Hur vill du ha hjälp med altanen — ungefär hur stor är ytan?",
      what: "Altantvätt"
    },
    "garden.beskar": {
      greeting: "Hej! Hur vill du ha hjälp med beskärningen — buskar, träd, när?",
      ask: "Hej! Hur vill du ha hjälp med beskärningen — buskar, träd, när?",
      what: "Beskärning"
    },
    "garden.anlaggning": {
      greeting: "Hej! Hur vill du ha hjälp med ny gräsmatta — rulle, sådd, platsbesök?",
      ask: "Hej! Hur vill du ha hjälp med ny gräsmatta — rulle, sådd, platsbesök?",
      what: "Anläggning"
    },
    "garden.mark": {
      greeting: "Hej! Hur vill du ha hjälp med markarbetet — sten, mur eller schakt?",
      ask: "Hej! Hur vill du ha hjälp med markarbetet — sten, mur eller schakt?",
      what: "Markarbete"
    },
    "garden.trad": {
      greeting: "Hej! Hur vill du ha hjälp med trädet — fälla, forsla bort virket?",
      ask: "Hej! Hur vill du ha hjälp med trädet — fälla, forsla bort virket?",
      what: "Trädfällning"
    },
    "garden.plantera": {
      greeting: "Hej! Hur vill du ha hjälp med planteringen — blommor, buskar eller träd?",
      ask: "Hej! Hur vill du ha hjälp med planteringen — blommor, buskar eller träd?",
      what: "Plantering"
    },
    "garden.ogras": {
      greeting: "Hej! Hur vill du ha hjälp med ogräset — rabatt eller mellan sten?",
      ask: "Hej! Hur vill du ha hjälp med ogräset — rabatt eller mellan sten?",
      what: "Ogräsrensning"
    },
    "ovriga": {
      greeting: "Hej! Vad behöver du hjälp med — berätta kort vad vi ska ta?",
      ask: "Hej! Vad behöver du hjälp med — berätta kort vad vi ska ta?",
      what: "Övriga tjänster"
    },
    "host.stad": {
      greeting: "Hej! Hur vill du ha hjälp i höst — löv, rabatter, infart?",
      ask: "Hej! Hur vill du ha hjälp i höst — löv, rabatter, infart?",
      what: "Höststädning"
    },
    "brf": {
      greeting: "Hej! Hur vill ni ha hjälp i föreningen — grönt, snö eller komplett?",
      ask: "Hej! Hur vill ni ha hjälp i föreningen — grönt, snö eller komplett?",
      what: "BRF-skötsel"
    },
    "bygg.altan": {
      greeting: "Hej! Hur vill du ha hjälp av WEFIX Bygg — altan, staket, dränering eller renovering?",
      ask: "Hej! Hur vill du ha hjälp av WEFIX Bygg — altan, staket, dränering eller renovering?",
      what: "WEFIX Bygg"
    },
    "bygg.staket": {
      greeting: "Hej! Hur långt ska staketet vara, och när?",
      ask: "Hej! Hur långt ska staketet vara, och när?",
      what: "Staket"
    },
    "bygg.renovering": {
      greeting: "Hej! Vad ska vi titta på — och när?",
      ask: "Hej! Vad ska vi titta på — och när?",
      what: "Renovering"
    },
    "kontakt": {
      greeting: "Hej! Vad kan vi hjälpa dig med?",
      ask: "Hej! Vad kan vi hjälpa dig med?",
      what: ""
    }
  };
