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
    "robot": "robot.service", "robot.service": "robot.service", "robot.buy": "robot.buy",
    "robot.hem": "robot.hem", "robot.lyx": "robot.lyx",
    "hack": "garden.hack", "garden.hack": "garden.hack",
    "gras": "garden.gras", "garden.gras": "garden.gras",
    "sno": "garden.sno", "garden.sno": "garden.sno",
    "altan": "garden.altan", "garden.altan": "garden.altan",
    "beskar": "garden.beskar", "garden.beskar": "garden.beskar",
    "anlaggning": "garden.anlaggning", "garden.anlaggning": "garden.anlaggning",
    "mark": "garden.mark", "garden.mark": "garden.mark",
    "trad": "garden.trad", "garden.trad": "garden.trad",
    "plantera": "garden.plantera", "garden.plantera": "garden.plantera",
    "ogras": "garden.ogras", "garden.ogras": "garden.ogras",
    "lovkrattning": "host.stad", "ovriga": "ovriga", "ovriga-tjanster": "ovriga",
    "host": "host.stad", "host.stad": "host.stad",
    "brf": "brf", "foretag": "foretag",
    "bygg": "bygg.altan", "bygg.altan": "bygg.altan",
    "bygg.staket": "bygg.staket", "bygg.renovering": "bygg.renovering",
    "kontakt": "kontakt"
  };

  var LANDINGS = {
    "robot.service": { greeting: "Hej! Hur vill du ha hjälp med roboten — service, vinter eller köpa?", ask: "Hur vill du ha hjälp med roboten — service, vinter eller köpa?", what: "Robotgräsklippare" },
    "robot.buy": { greeting: "Hej! Hur vill du ha hjälp med roboten — service, vinter eller köpa?", ask: "Hur vill du ha hjälp med roboten — service, vinter eller köpa?", what: "Köpa robot" },
    "garden.hack": { greeting: "Hej! Hur vill du ha hjälp med häcken — längd, höjd, när?", ask: "Hur vill du ha hjälp med häcken — längd, höjd, när?", what: "Häckklippning" },
    "garden.gras": { greeting: "Hej! Hur vill du ha hjälp med gräset — en gång, abonnemang, när?", ask: "Hur vill du ha hjälp med gräset — en gång, abonnemang, när?", what: "Gräsklippning" },
    "garden.sno": { greeting: "Hej! Hur vill du ha hjälp med snön — privat, BRF, hur ofta?", ask: "Hur vill du ha hjälp med snön — privat, BRF, hur ofta?", what: "Snöröjning" },
    "garden.altan": { greeting: "Hej! Hur vill du ha hjälp med altanen — ungefär hur stor är ytan?", ask: "Hur vill du ha hjälp med altanen — ungefär hur stor är ytan?", what: "Altantvätt" },
    "garden.beskar": { greeting: "Hej! Hur vill du ha hjälp med beskärningen — buskar, träd, när?", ask: "Hur vill du ha hjälp med beskärningen — buskar, träd, när?", what: "Beskärning" },
    "garden.anlaggning": { greeting: "Hej! Hur vill du ha hjälp med ny gräsmatta — rulle, sådd, platsbesök?", ask: "Hur vill du ha hjälp med ny gräsmatta — rulle, sådd, platsbesök?", what: "Anläggning" },
    "garden.mark": { greeting: "Hej! Hur vill du ha hjälp med markarbetet — sten, mur eller schakt?", ask: "Hur vill du ha hjälp med markarbetet — sten, mur eller schakt?", what: "Markarbete" },
    "garden.trad": { greeting: "Hej! Hur vill du ha hjälp med trädet — fälla, forsla bort virket?", ask: "Hur vill du ha hjälp med trädet — fälla, forsla bort virket?", what: "Trädfällning" },
    "garden.plantera": { greeting: "Hej! Hur vill du ha hjälp med planteringen — blommor, buskar eller träd?", ask: "Hur vill du ha hjälp med planteringen — blommor, buskar eller träd?", what: "Plantering" },
    "garden.ogras": { greeting: "Hej! Hur vill du ha hjälp med ogräset — rabatt eller mellan sten?", ask: "Hur vill du ha hjälp med ogräset — rabatt eller mellan sten?", what: "Ogräsrensning" },
    "ovriga": { greeting: "Hej! Vad behöver du hjälp med — berätta kort vad vi ska ta?", ask: "Vad behöver du hjälp med — berätta kort vad vi ska ta?", what: "Övriga tjänster" },
    "host.stad": { greeting: "Hej! Hur vill du ha hjälp i höst — löv, rabatter, infart?", ask: "Hur vill du ha hjälp i höst — löv, rabatter, infart?", what: "Höststädning" },
    "brf": { greeting: "Hej! Hur vill ni ha hjälp i föreningen — grönt, snö eller komplett?", ask: "Hur vill ni ha hjälp i föreningen — grönt, snö eller komplett?", what: "BRF-skötsel" },
    "bygg.altan": { greeting: "Hej! Hur vill du ha hjälp av WEFIX Bygg — altan, staket, dränering eller renovering?", ask: "Hur vill du ha hjälp av WEFIX Bygg — altan, staket, dränering eller renovering?", what: "WEFIX Bygg" },
    "bygg.staket": { greeting: "Hej! Hur vill du ha hjälp av WEFIX Bygg — altan, staket, dränering eller renovering?", ask: "Hur långt ska staketet vara, och när?", what: "Staket" },
    "bygg.renovering": { greeting: "Hej! Hur vill du ha hjälp av WEFIX Bygg — altan, staket, dränering eller renovering?", ask: "Vad ska vi titta på — och när?", what: "Renovering" },
    "kontakt": { greeting: "Hej! Vad kan vi hjälpa dig med?", ask: "Berätta kort vad du vill ha hjälp med.", what: "" }
  };

  var PRICE_RE = /pris|kostar|kostnad|hur mycket|vad kostar|kronor|offertpris|dyrt|billigt/;
  var HUMAN_RE = /\b(ring|ringa|uppring|återuppring|människa|mattias|samtal|telefonera)\b|riktig person|prata med n[åa]gon|en m[äa]nniska/;
  var JOBAPP_RE = /s[öo]ker jobb|jobba hos|anställning|sommarjobb|vill jobba/;
  var JAIL_RE = /systemprompt|ignore (all|previous)|visa alla kunder|kundregister|fieldly|sellfinity|api[- ]?nyckel|jailbreak/;
  var FAR_RE = /stockholm|malm[öo]|uppsala|ume[åa]|sk[åa]ne|sundsvall|lule[åa]|helsingborg/;

  var form = document.getElementById("composer");
  var input = document.getElementById("chat-input");
  var messagesEl = document.getElementById("messages");
  var offersEl = document.getElementById("offers");
  var privacyEl = document.getElementById("privacy-line");
  if (!form || !input || !messagesEl || !offersEl) return;

  var started = false;
  var mode = "idle";
  var collectStep = null;
  var draft = { name: "", phone: "", email: "", address: "", what: "", when: "", intent: "", detail: "", utm: { source: "", campaign: "", content: "" }, gclid: "" };
  var visibleCodes = [];
  var landingBooted = false;

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c];
    });
  }
  function offerByCode(code) {
    var i;
    for (i = 0; i < OFFERS.length; i++) if (OFFERS[i].code === code) return OFFERS[i];
    for (i = 0; i < ROBOT_EXTRA.length; i++) if (ROBOT_EXTRA[i].code === code) return ROBOT_EXTRA[i];
    return null;
  }
  function addMsg(role, text) {
    var p = document.createElement("p");
    p.className = "msg " + role;
    p.textContent = text;
    messagesEl.appendChild(p);
    messagesEl.scrollTop = messagesEl.scrollHeight;
  }
  function startChat() {
    if (started) return;
    started = true;
    var greet = messagesEl.querySelector(".greeting");
    if (greet) greet.classList.remove("greeting");
    if (privacyEl) privacyEl.hidden = true;
  }
  function setGreeting(text) {
    var greet = messagesEl.querySelector(".greeting") || messagesEl.querySelector(".msg.bot");
    if (greet) greet.textContent = text;
    else addMsg("bot", text);
  }
  function showOffers(list, max) {
    var cap = max || 3;
    var shown = list.slice(0, cap);
    offersEl.innerHTML = "";
    visibleCodes = [];
    shown.forEach(function (o) {
      if (!o) return;
      visibleCodes.push(o.code);
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "orb orb-offer";
      btn.setAttribute("data-code", o.code);
      btn.innerHTML = '<p class="t">' + esc(o.title) + "</p><p class=\"l1\">" + esc(o.line1) + "</p><p class=\"l2\">" + esc(o.line2) + "</p>";
      btn.addEventListener("click", function () { pickOffer(o); });
      offersEl.appendChild(btn);
    });
  }
  function firstAsk(code) {
    var land = LANDINGS[code];
    if (land && land.ask) return land.ask;
    var o = offerByCode(code);
    if (o) return "Berätta kort vad du vill ha hjälp med kring " + o.title.toLowerCase() + ".";
    return "Berätta kort vad du vill ha hjälp med.";
  }
  function isRobotCode(code) { return String(code || "").indexOf("robot.") === 0; }
  function appendWhat(text) {
    if (!text) return;
    if (draft.what) draft.what = draft.what + ". " + text; else draft.what = text;
    if (draft.detail) draft.detail = draft.detail + ". " + text; else draft.detail = text;
  }
  function askName() { collectStep = "name"; addMsg("bot", "Vad heter du?"); }
  function pickOffer(o) {
    startChat();
    draft.intent = o.code;
    draft.what = o.title;
    addMsg("user", o.title);
    mode = "collect";
    if (isRobotCode(o.code)) { collectStep = "model"; addMsg("bot", "Vilken robot eller modell har du?"); input.focus(); return; }
    if (collectStep === "detail" && landingBooted) { input.focus(); return; }
    collectStep = "detail";
    addMsg("bot", firstAsk(o.code));
    input.focus();
  }
  function findOffers(raw) {
    var t = raw.toLowerCase();
    var hits = [];
    var seen = {};
    var buyRobot = t.indexOf("köpa robot") !== -1 || t.indexOf("kopa robot") !== -1;
    var robotish = /\brobot\b|automower|robotgräs|robotgras/.test(t);
    var hasHack = t.indexOf("häck") !== -1 || t.indexOf("hack") !== -1;
    var hasAltanBygg = t.indexOf("bygga altan") !== -1 || t.indexOf("ny altan") !== -1;
    OFFERS.forEach(function (o) {
      var match = false, score = 0;
      o.keywords.forEach(function (kw) {
        if (t.indexOf(kw.toLowerCase()) !== -1) { match = true; score = Math.max(score, kw.length); }
      });
      if (!match) return;
      if (o.code === "garden.gras") {
        if (robotish || buyRobot) return;
        if (hasHack && t.indexOf("gräs") === -1 && t.indexOf("gras") === -1) return;
      }
      if (o.code === "robot.service" && buyRobot && !/\bservice\b|vinter/.test(t)) return;
      if (o.code === "garden.altan" && hasAltanBygg) return;
      if (!seen[o.code]) { seen[o.code] = true; hits.push({ offer: o, score: score }); }
    });
    hits.sort(function (a, b) { return b.score - a.score; });
    var out = hits.map(function (h) { return h.offer; });
    if (out.some(function (o) { return o.code === "robot.service"; })) {
      var bas = out.filter(function (o) { return o.code === "robot.service"; })[0];
      var rest = out.filter(function (o) { return o.code !== "robot.service" && o.code !== "robot.buy"; });
      out = [bas].concat(ROBOT_EXTRA).concat(rest);
    }
    return out.slice(0, 3);
  }
  function looksLikePhone(s) { var d = s.replace(/\D/g, ""); return d.length >= 8 && d.length <= 12; }
  function looksLikeEmail(s) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(s).trim()); }
  function isSkip(s) { return /^(nej|hoppa|hoppa över|skip|-|–|vet inte|ingen|n\/a|valfritt)$/i.test(String(s).trim()); }
  function finishDraft() { mode = "done"; collectStep = null; window.__wefixDraft = draft; addMsg("bot", "Utkast sparat. En kollega tar det."); }
  function collectFrom(text) {
    if (collectStep === "robot_choice") {
      var typed = findOffers(text);
      if (typed.length) { showOffers(isRobotCode(typed[0].code) ? robotOfferList() : typed, 4); addMsg("bot", "Klicka på en boll."); return; }
      appendWhat(text); collectStep = "model"; addMsg("bot", "Vilken robot eller modell har du?"); return;
    }
    if (collectStep === "model") { appendWhat(text); askName(); return; }
    if (collectStep === "detail") { appendWhat(text); askName(); return; }
    if (collectStep === "name") {
      if (looksLikePhone(text) && !draft.phone) { draft.phone = text; addMsg("bot", "Tack. Vad heter du?"); return; }
      draft.name = text; collectStep = "phone"; addMsg("bot", "Vilket telefonnummer når vi dig på?"); return;
    }
    if (collectStep === "phone") { draft.phone = text; collectStep = "email"; addMsg("bot", "Vilken e-postadress ska vi använda?"); return; }
    if (collectStep === "email") {
      if (!looksLikeEmail(text) && !isSkip(text)) { addMsg("bot", "Det ser inte ut som en e-postadress. Kan du skriva den igen?"); return; }
      if (!isSkip(text)) draft.email = text.trim();
      collectStep = "address"; addMsg("bot", "Vilken adress gäller det? (valfritt)"); return;
    }
    if (collectStep === "address") {
      if (!isSkip(text)) draft.address = text;
      if (/\b(vecka|måndag|tisdag|onsdag|torsdag|fredag|lördag|söndag|snart|asap|vår|höst|vinter|sommar|\d{1,2}\/\d{1,2})\b/i.test(text)) draft.when = text;
      finishDraft(); return;
    }
    if (collectStep === "phone_only") {
      draft.phone = text; mode = "done"; collectStep = null; window.__wefixDraft = draft; addMsg("bot", "Tack. En kollega ringer upp.");
    }
  }
  function queryParams() { try { return new URLSearchParams(location.search || ""); } catch (e) { return new URLSearchParams(""); } }
  function captureUtm() {
    var q = queryParams();
    draft.utm.source = q.get("utm_source") || "";
    draft.utm.campaign = q.get("utm_campaign") || "";
    draft.utm.content = q.get("utm_content") || "";
    draft.gclid = q.get("gclid") || "";
  }
  function wantsBuy() {
    var q = queryParams();
    var blob = ((location.pathname || "") + " " + (location.search || "")).toLowerCase();
    var bodyIntent = (document.body.getAttribute("data-intent") || "").toLowerCase();
    if (q.get("intent") === "robot.buy" || bodyIntent === "robot.buy") return true;
    return /\bbuy\b|kopa|köpa/.test(blob);
  }
  function intentFromUrl() {
    var bodyIntent = document.body.getAttribute("data-intent");
    if (bodyIntent) return INTENT_ALIAS[bodyIntent] || bodyIntent;
    var q = queryParams();
    var qi = q.get("intent");
    if (qi) return INTENT_ALIAS[qi] || qi;
    var path = (location.pathname || "").toLowerCase();
    var keys = [
      ["robotgrasklippare", "robot.service"], ["hackklippning", "garden.hack"],
      ["grasklippning", "garden.gras"], ["snorodjning", "garden.sno"],
      ["altantvatt", "garden.altan"], ["beskarning", "garden.beskar"],
      ["anlaggning", "garden.anlaggning"], ["markarbete", "garden.mark"],
      ["tradfallning", "garden.trad"], ["plantering", "garden.plantera"],
      ["ograsrensning", "garden.ogras"], ["lovkrattning", "host.stad"],
      ["ovriga-tjanster", "ovriga"], ["wefix-bygg", "bygg.altan"],
      ["host", "host.stad"], ["brf", "brf"]
    ];
    var i;
    for (i = 0; i < keys.length; i++) if (path.indexOf(keys[i][0]) !== -1) return keys[i][1];
    return "";
  }
  function robotOfferList() {
    var list = [offerByCode("robot.service")].concat(ROBOT_EXTRA);
    if (wantsBuy() || draft.intent === "robot.buy") list.push(offerByCode("robot.buy"));
    return list.filter(Boolean);
  }
  function offersForIntent(code) {
    if (isRobotCode(code)) return robotOfferList();
    if (code === "bygg.altan" || code === "bygg.staket" || code === "bygg.renovering") {
      return [offerByCode("bygg.altan"), offerByCode("bygg.staket"), offerByCode("bygg.renovering")].filter(Boolean);
    }
    if (code === "kontakt" || code === "ovriga") return [];
    var o = offerByCode(code);
    return o ? [o] : [];
  }
  function bootLanding() {
    captureUtm();
    var intent = intentFromUrl();
    if (!intent) return;
    var land = LANDINGS[intent] || LANDINGS.kontakt;
    draft.intent = intent;
    if (land.what) draft.what = land.what;
    landingBooted = true;
    startChat();
    setGreeting(land.greeting);
    var cards = offersForIntent(intent);
    if (cards.length) showOffers(cards, isRobotCode(intent) ? 4 : 3);
    mode = "collect";
    if (isRobotCode(intent)) { collectStep = "robot_choice"; }
    else { collectStep = "detail"; }
    input.focus();
  }
  function reply(text) {
    var t = text.toLowerCase();
    if (JAIL_RE.test(t)) { addMsg("bot", "Det kan vi inte hjälpa till med här. Ring 010-33 00 640."); return; }
    if (JOBAPP_RE.test(t)) { addMsg("bot", "Kul att du vill jobba med oss. Mejla info@wefixab.se med namn och hur vi når dig. Inte ett säljärende."); return; }
    if (PRICE_RE.test(t)) {
      if (mode === "collect" && collectStep && collectStep !== "phone_only") { addMsg("bot", "Vi sätter inget pris i chatten. En kollega hör av sig."); return; }
      mode = "collect"; collectStep = "name"; addMsg("bot", "Vi sätter inget pris i chatten. En kollega hör av sig. Vad heter du?"); return;
    }
    if (HUMAN_RE.test(t) && !(mode === "collect" && collectStep && collectStep !== "phone_only")) {
      mode = "collect"; collectStep = "phone_only"; addMsg("bot", "Självklart. Vilket nummer ska WEFIX ringa?"); return;
    }
    if (FAR_RE.test(t) && mode !== "collect") {
      mode = "collect"; collectStep = "phone_only"; addMsg("bot", "Det låter lite utanför vårt vanliga område. Lämna ett nummer så hör en kollega av sig."); return;
    }
    if (mode === "collect" && collectStep) { collectFrom(text); return; }
    if (mode === "done") { addMsg("bot", "Utkastet är sparat hos oss i den här rutan. Behöver du ändra något, skriv det — eller ring 010-33 00 640."); return; }
    var found = findOffers(text);
    if (found.length) {
      showOffers(found); mode = "chat";
      if (found.length === 1) addMsg("bot", "Det låter som " + found[0].title.toLowerCase() + ". Klicka på bollen eller berätta mer.");
      else addMsg("bot", "Vi kan ta det. Klicka på en boll eller berätta mer.");
      return;
    }
    mode = "chat";
    var asks = ["Berätta gärna mer — häck, gräs, robot eller något annat?", "Vad ska vi titta på i trädgården?", "Vilken adress gäller det, så vi vet om vi är i närheten?"];
    addMsg("bot", asks[Math.floor(Math.random() * asks.length)]);
  }
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var text = (input.value || "").trim();
    if (!text) return;
    startChat();
    addMsg("user", text);
    input.value = "";
    reply(text);
  });
  bootLanding();
})();
