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

  var START_GREETING = "Hur kan vi hjälpa dig i trädgården?";
  var LANDINGS = {
    "robot.service": { greeting: "Robotgräsklippare - vad vill du ha hjälp med?", ask: "Robotgräsklippare - vad vill du ha hjälp med?", what: "Robotgräsklippare" },
    "robot.buy": { greeting: "Robotgräsklippare - vad vill du ha hjälp med?", ask: "Robotgräsklippare - vad vill du ha hjälp med?", what: "Köpa robot" },
    "garden.hack": { greeting: "Häckklippning - vad vill du ha hjälp med?", ask: "Häckklippning - vad vill du ha hjälp med?", what: "Häckklippning" },
    "garden.gras": { greeting: "Gräsklippning - vad vill du ha hjälp med?", ask: "Gräsklippning - vad vill du ha hjälp med?", what: "Gräsklippning" },
    "garden.sno": { greeting: "Snöröjning - vad vill du ha hjälp med?", ask: "Snöröjning - vad vill du ha hjälp med?", what: "Snöröjning" },
    "garden.altan": { greeting: "Altantvätt - vad vill du ha hjälp med?", ask: "Altantvätt - vad vill du ha hjälp med?", what: "Altantvätt" },
    "garden.beskar": { greeting: "Beskärning - vad vill du ha hjälp med?", ask: "Beskärning - vad vill du ha hjälp med?", what: "Beskärning" },
    "garden.anlaggning": { greeting: "Anläggning - vad vill du ha hjälp med?", ask: "Anläggning - vad vill du ha hjälp med?", what: "Anläggning" },
    "garden.mark": { greeting: "Markarbete - vad vill du ha hjälp med?", ask: "Markarbete - vad vill du ha hjälp med?", what: "Markarbete" },
    "garden.trad": { greeting: "Trädfällning - vad vill du ha hjälp med?", ask: "Trädfällning - vad vill du ha hjälp med?", what: "Trädfällning" },
    "garden.plantera": { greeting: "Plantering - vad vill du ha hjälp med?", ask: "Plantering - vad vill du ha hjälp med?", what: "Plantering" },
    "garden.ogras": { greeting: "Ogräsrensning - vad vill du ha hjälp med?", ask: "Ogräsrensning - vad vill du ha hjälp med?", what: "Ogräsrensning" },
    "ovriga": { greeting: "Övriga tjänster - vad vill du ha hjälp med?", ask: "Övriga tjänster - vad vill du ha hjälp med?", what: "Övriga tjänster" },
    "host.stad": { greeting: "Lövkrattning - vad vill du ha hjälp med?", ask: "Lövkrattning - vad vill du ha hjälp med?", what: "Höststädning" },
    "brf": { greeting: "BRF - vad vill du ha hjälp med?", ask: "BRF - vad vill du ha hjälp med?", what: "BRF-skötsel" },
    "bygg.altan": { greeting: "WEFIX Bygg - vad vill du ha hjälp med?", ask: "WEFIX Bygg - vad vill du ha hjälp med?", what: "WEFIX Bygg" },
    "bygg.staket": { greeting: "WEFIX Bygg - vad vill du ha hjälp med?", ask: "WEFIX Bygg - vad vill du ha hjälp med?", what: "Staket" },
    "bygg.renovering": { greeting: "WEFIX Bygg - vad vill du ha hjälp med?", ask: "WEFIX Bygg - vad vill du ha hjälp med?", what: "Renovering" },
    "kontakt": { greeting: "Vad kan vi hjälpa dig med?", ask: "Vad kan vi hjälpa dig med?", what: "" }
  };

  var PRICE_RE = /pris|kostar|kostnad|hur mycket|vad kostar|kronor|offertpris|dyrt|billigt/;
  var JOBAPP_RE = /s[öo]ker jobb|jobba hos|anställning|sommarjobb|vill jobba/;
  var JAIL_RE = /systemprompt|ignore (all|previous)|visa alla kunder|kundregister|fieldly|sellfinity|api[- ]?nyckel|jailbreak/;

  var form = document.getElementById("composer");
  var input = document.getElementById("chat-input");
  var messagesEl = document.getElementById("messages");
  var offersEl = document.getElementById("offers");
  var privacyEl = document.getElementById("privacy-line");
  if (!form || !input || !messagesEl || !offersEl) return;

  var Q_NAME = "Vad heter du?";
  var Q_ADDRESS = "Vilken adress gäller det?";
  var Q_PHONE = "Vilket telefonnummer når vi dig på?";
  var Q_EMAIL = "Vilken e-post ska vi använda?";
  var PRICE_LINE = "Vi sätter inget pris i chatten. En kollega hör av sig.";
  var THANKS = "Tack. Vi har tagit emot det du skrev.";

  var started = false;
  var committed = false;
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
    for (i = 0; i < OFFERS.length; i++) { if (OFFERS[i].code === code) return OFFERS[i]; }
    for (i = 0; i < ROBOT_EXTRA.length; i++) { if (ROBOT_EXTRA[i].code === code) return ROBOT_EXTRA[i]; }
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
      var wrap = document.createElement("div");
      wrap.className = "orb-wrap";
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "orb orb-offer";
      btn.setAttribute("data-code", o.code);
      btn.innerHTML = '<p class="t">' + esc(o.title) + "</p><p class=\"l1\">" + esc(o.line1) + "</p><p class=\"l2\">" + esc(o.line2) + "</p>";
      btn.addEventListener("click", function () { pickOffer(o); });
      wrap.appendChild(btn);
      offersEl.appendChild(wrap);
    });
  }
  function isRobotCode(code) { return String(code || "").indexOf("robot.") === 0; }
  function mentionsRobot(raw) {
    var t = String(raw || "").toLowerCase();
    return t.indexOf("robot") !== -1 || t.indexOf("automower") !== -1;
  }
  function appendWhat(text) {
    if (!text) return;
    if (draft.what) draft.what = draft.what + ". " + text; else draft.what = text;
    if (draft.detail) draft.detail = draft.detail + ". " + text; else draft.detail = text;
  }
  function hasBothContacts() { return !!(String(draft.phone || "").trim() && String(draft.email || "").trim()); }
  function currentQuestion() {
    if (collectStep === "name") return Q_NAME;
    if (collectStep === "address") return Q_ADDRESS;
    if (collectStep === "email") return Q_EMAIL;
    return Q_PHONE;
  }
  function askName() { collectStep = "name"; mode = "collect"; addMsg("bot", Q_NAME); }
  function askAddress() { collectStep = "address"; mode = "collect"; addMsg("bot", Q_ADDRESS); }
  function askPhone() { collectStep = "phone"; mode = "collect"; addMsg("bot", Q_PHONE); }
  function askEmail() { collectStep = "email"; mode = "collect"; addMsg("bot", Q_EMAIL); }
  function finishThanks() {
    if (!hasBothContacts()) {
      if (!draft.phone) { askPhone(); return; }
      askEmail();
      return;
    }
    mode = "done";
    collectStep = null;
    window.__wefixDraft = draft;
    addMsg("bot", THANKS);
  }
  function maybeFinish() {
    if (!hasBothContacts()) return false;
    finishThanks();
    return true;
  }
  function nextRequired() {
    if (hasBothContacts()) { finishThanks(); return; }
    if (!draft.phone) { askPhone(); return; }
    askEmail();
  }
  function maybeShowRobotOrbs(text) {
    if (landingBooted && isRobotCode(draft.intent)) {
      showOffers(robotOfferList(), 3);
      return;
    }
    if (!landingBooted && mentionsRobot(text)) {
      showOffers(robotOfferList(), 3);
    }
  }
  function beginCollect(text) {
    committed = true;
    mode = "collect";
    maybeShowRobotOrbs(text);
    if (collectStep) { addMsg("bot", currentQuestion()); return; }
    askName();
  }
  function pickOffer(o) {
    startChat();
    draft.intent = o.code;
    if (!draft.what) draft.what = o.title;
    else appendWhat(o.title);
    addMsg("user", o.title);
    if (mode === "done") { input.focus(); return; }
    if (mode === "collect" && collectStep) {
      addMsg("bot", currentQuestion());
      input.focus();
      return;
    }
    beginCollect(o.title);
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
      var match = false;
      var score = 0;
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
  function looksLikePhone(s) { var d = String(s || "").replace(/\D/g, ""); return d.length >= 8 && d.length <= 12; }
  function looksLikeEmail(s) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(s).trim()); }
  function isSkip(s) { return /^(hoppa|hoppa över|skip|-|–|vet inte|ingen|n\/a|valfritt|)$/i.test(String(s).trim()); }
  function collectFrom(text) {
    if (collectStep === "name") {
      if (looksLikePhone(text) && !draft.phone) draft.phone = text.trim();
      else if (looksLikeEmail(text) && !draft.email) draft.email = text.trim();
      else if (!isSkip(text)) draft.name = text.trim();
      askAddress();
      return;
    }
    if (collectStep === "address") {
      if (looksLikePhone(text) && !draft.phone) draft.phone = text.trim();
      else if (looksLikeEmail(text) && !draft.email) draft.email = text.trim();
      else if (!isSkip(text)) draft.address = text.trim();
      nextRequired();
      return;
    }
    if (collectStep === "phone") {
      if (looksLikeEmail(text) && !draft.email) {
        draft.email = text.trim();
        if (maybeFinish()) return;
        addMsg("bot", Q_PHONE);
        return;
      }
      if (isSkip(text) || !looksLikePhone(text)) { addMsg("bot", Q_PHONE); return; }
      draft.phone = text.trim();
      if (maybeFinish()) return;
      askEmail();
      return;
    }
    if (collectStep === "email") {
      if (looksLikePhone(text) && !draft.phone) {
        draft.phone = text.trim();
        if (maybeFinish()) return;
        addMsg("bot", Q_EMAIL);
        return;
      }
      if (isSkip(text) || !looksLikeEmail(text)) { addMsg("bot", Q_EMAIL); return; }
      draft.email = text.trim();
      if (maybeFinish()) return;
      askPhone();
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
    var keys = [["robotgrasklippare", "robot.service"],["hackklippning", "garden.hack"],["grasklippning", "garden.gras"],["snorodjning", "garden.sno"],["altantvatt", "garden.altan"],["beskarning", "garden.beskar"],["anlaggning", "garden.anlaggning"],["markarbete", "garden.mark"],["tradfallning", "garden.trad"],["plantering", "garden.plantera"],["ograsrensning", "garden.ogras"],["lovkrattning", "host.stad"],["ovriga-tjanster", "ovriga"],["wefix-bygg", "bygg.altan"],["host", "host.stad"],["brf", "brf"]];
    var i;
    for (i = 0; i < keys.length; i++) { if (path.indexOf(keys[i][0]) !== -1) return keys[i][1]; }
    return "";
  }
  function robotOfferList() {
    var list = [offerByCode("robot.service")].concat(ROBOT_EXTRA);
    if (wantsBuy() || draft.intent === "robot.buy") list.push(offerByCode("robot.buy"));
    return list.filter(Boolean);
  }
  function bootLanding() {
    captureUtm();
    var intent = intentFromUrl();
    if (!intent) {
      setGreeting(START_GREETING);
      return;
    }
    var land = LANDINGS[intent] || LANDINGS.kontakt;
    draft.intent = intent;
    if (land.what) draft.what = land.what;
    landingBooted = true;
    setGreeting(land.greeting);
  }
  function reply(text) {
    var t = text.toLowerCase();
    if (JAIL_RE.test(t)) { addMsg("bot", "Det kan vi inte hjälpa till med här. Ring 010-33 00 640."); return; }
    if (JOBAPP_RE.test(t)) { addMsg("bot", "Kul att du vill jobba med oss. Mejla info@wefixab.se med namn och hur vi når dig. Inte ett säljärende."); return; }
    if (PRICE_RE.test(t)) {
      addMsg("bot", PRICE_LINE);
      if (mode === "done") return;
      if (mode === "collect" && collectStep) { addMsg("bot", currentQuestion()); return; }
      if (committed) { beginCollect(text); return; }
      if (landingBooted) { committed = true; beginCollect(text); return; }
      return;
    }
    if (mode === "collect" && collectStep) { collectFrom(text); return; }
    if (mode === "done") {
      addMsg("bot", "Vi har tagit emot det du skrev. Ring 010-33 00 640 om du vill ändra något.");
      return;
    }
    appendWhat(text);
    if (!draft.intent) {
      var found = findOffers(text);
      if (found.length) draft.intent = found[0].code;
    }
    beginCollect(text);
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
