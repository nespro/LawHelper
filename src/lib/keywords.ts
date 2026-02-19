/**
 * German stop-words: articles, prepositions, pronouns, conjunctions, auxiliaries.
 * Aggressively filtered so only meaningful content words remain.
 */
const STOP_WORDS = new Set([
  // Pronouns
  "ich", "du", "er", "sie", "es", "wir", "ihr", "uns", "euch",
  "mein", "meine", "meinen", "meinem", "meiner", "meines",
  "dein", "deine", "deinen", "deinem", "deiner", "deines",
  "sein", "seine", "seinen", "seinem", "seiner", "seines",
  "ihre", "ihren", "ihrem", "ihrer", "ihres",
  "unser", "unsere", "unseren", "unserem", "unserer", "unseres",
  "euer", "eure", "euren", "eurem", "eurer", "eures",
  "sich", "mir", "mich", "dir", "dich", "ihm", "ihn", "ihnen",
  // Articles
  "der", "die", "das", "den", "dem", "des",
  "ein", "eine", "einer", "einem", "einen", "eines",
  "kein", "keine", "keinen", "keinem", "keiner", "keines",
  // Conjunctions & particles
  "und", "oder", "aber", "doch", "sondern", "weil", "wenn", "dass", "ob",
  "als", "wie", "wo", "was", "wer", "wem", "wen", "welche", "welcher", "welches",
  "also", "zwar", "denn", "damit", "obwohl", "falls", "nachdem", "bevor",
  "sowohl", "weder", "noch", "entweder",
  // Prepositions
  "in", "an", "auf", "mit", "von", "zu", "für", "bei", "nach", "über",
  "unter", "vor", "zwischen", "durch", "gegen", "ohne", "um", "aus",
  "ab", "bis", "seit", "während", "wegen", "trotz", "statt", "neben",
  "ausser", "innerhalb", "ausserhalb", "hinter",
  // Auxiliaries & modals
  "ist", "sind", "war", "waren", "bin", "bist", "sei", "seid", "gewesen",
  "hat", "haben", "hatte", "hatten", "habe", "hast", "gehabt",
  "wird", "werden", "wurde", "wurden", "worden",
  "kann", "können", "konnte", "konnten", "könnte", "könnten",
  "muss", "müssen", "musste", "müsste",
  "soll", "sollen", "sollte", "sollten",
  "darf", "dürfen", "durfte", "dürfte",
  "will", "wollen", "wollte", "wollten",
  "mag", "möchte", "möchten", "mögen",
  "würde", "würden", "lassen", "lässt",
  // Common verbs (non-content)
  "sein", "gibt", "gab", "geben", "gegeben",
  "machen", "tun", "gehen", "ging", "gegangen",
  "kommen", "kam", "gekommen", "sagen", "gesagt",
  "wissen", "weiss", "wusste",
  "brauche", "brauchen", "braucht",
  "möchte", "möchten", "würde", "würden",
  // Adverbs & misc
  "nicht", "noch", "schon", "auch", "nur", "sehr", "mehr", "so",
  "ja", "nein", "hier", "da", "dort", "jetzt", "dann", "immer", "nie",
  "alle", "alles", "viel", "wenig", "ganz", "gar", "etwas",
  "mal", "schon", "eben", "halt", "eigentlich", "etwa", "fast",
  "bitte", "danke", "okay", "hallo", "grüezi",
  "man", "frau", "herr", "leute", "jemand", "niemand",
  "einfach", "genau", "wirklich", "ziemlich", "total",
  // Question helpers
  "warum", "wieso", "weshalb", "wann", "wohin", "woher", "wofür",
  // English stop words (in case of mixed input)
  "the", "and", "for", "are", "but", "not", "you", "this", "that",
  "with", "have", "from", "can", "what", "how",
]);

/**
 * Comprehensive synonym map: everyday German → legal search keywords.
 *
 * This is the core of the NLP matching – it bridges the gap between how
 * normal people describe their problems and the legal terminology used
 * in article keywords.
 */
const SYNONYM_MAP: Record<string, string[]> = {
  // ─── VERKEHR & UNFÄLLE ───
  "auto": ["autounfall", "verkehrsunfall", "unfall", "auto kauf mangel"],
  "autounfall": ["autounfall", "verkehrsunfall", "unfall verursacht", "unfall schuldfrage"],
  "gefahren": ["verkehrsunfall", "autounfall", "unfall", "fahrerflucht"],
  "aufgefahren": ["verkehrsunfall", "autounfall", "unfall verursacht", "auffahrunfall"],
  "unfall": ["unfall", "verkehrsunfall", "autounfall", "schadenersatz", "haftung"],
  "crash": ["verkehrsunfall", "autounfall", "unfall"],
  "kollision": ["verkehrsunfall", "autounfall", "unfall verursacht"],
  "aufprall": ["verkehrsunfall", "autounfall", "unfall"],
  "velo": ["velo unfall", "verkehrsunfall", "unfall"],
  "fahrrad": ["velo unfall", "verkehrsunfall", "unfall"],
  "motorrad": ["verkehrsunfall", "unfall", "autounfall"],
  "fussgänger": ["verkehrsunfall", "unfall", "körperverletzung"],
  "geschwindigkeit": ["geschwindigkeitsüberschreitung", "blitzer", "busse erhalten"],
  "blitzer": ["blitzer", "geschwindigkeitsüberschreitung", "busse erhalten", "ordnungsbusse"],
  "busse": ["busse erhalten", "ordnungsbusse", "blitzer"],
  "führerschein": ["führerschein entzug", "ausweis entzogen", "fahrverbot"],
  "ausweis": ["führerschein entzug", "ausweis entzogen"],
  "fahrverbot": ["fahrverbot", "führerschein entzug", "administrativmassnahme"],
  "alkohol": ["alkohol am steuer", "führerschein entzug"],
  "betrunken": ["alkohol am steuer", "führerschein entzug"],
  "drogen": ["drogen am steuer", "führerschein entzug"],
  "parkiert": ["parkbusse", "falschparken"],
  "parkbusse": ["parkbusse", "falschparken", "ordnungsbusse"],
  "abgeschleppt": ["abschleppen auto", "parkbusse"],
  "fahrerflucht": ["fahrerflucht vorwurf", "unfall verursacht"],
  "motorschaden": ["motorschaden", "auto kauf mangel", "garantie auto"],

  // ─── EHE & SCHEIDUNG ───
  "heirat": ["ehe", "eheschliessung", "heirat", "ziviltrauung"],
  "heiraten": ["ehe", "eheschliessung", "heirat", "ziviltrauung"],
  "hochzeit": ["ehe", "eheschliessung", "heirat", "ziviltrauung"],
  "verheiratet": ["ehe", "verheiratet", "eheschliessung"],
  "ehemann": ["ehe", "ehepartner", "unterhalt ehepartner"],
  "ehefrau": ["ehe", "ehepartner", "unterhalt ehepartner", "alimente ehefrau"],
  "ehe": ["ehe", "eheschliessung", "ehevertrag"],
  "scheidung": ["scheidung", "einvernehmliche scheidung", "streitige scheidung"],
  "scheiden": ["scheidung", "einvernehmliche scheidung"],
  "geschieden": ["scheidung", "nachehelicher unterhalt"],
  "trennung": ["trennung", "scheidung", "ehetrennung", "gerichtliche trennung"],
  "trennen": ["trennung", "scheidung", "ehetrennung"],
  "getrennt": ["trennung", "scheidung", "gerichtliche trennung"],
  "ehevertrag": ["ehevertrag", "gütertrennung", "errungenschaftsbeteiligung"],
  "gütertrennung": ["gütertrennung", "ehevertrag", "vermögensaufteilung"],
  "unterhalt": ["unterhalt", "nachehelicher unterhalt", "kinderunterhalt", "alimente"],
  "alimente": ["alimente", "kinderunterhalt", "unterhalt kind", "alimentenzahlung"],
  "alimenten": ["alimente", "kinderunterhalt", "unterhalt kind", "alimentenzahlung"],
  "ehebruch": ["ehebruch", "untreue", "fremdgehen", "scheidung"],
  "fremdgegangen": ["ehebruch", "untreue", "fremdgehen"],
  "betrogen": ["ehebruch", "untreue", "fremdgehen", "online betrug", "fake shop", "betrug"],
  "gewalt": ["häusliche gewalt", "körperverletzung", "eheschutz"],
  "geschlagen": ["häusliche gewalt", "körperverletzung", "eheschutz"],
  "prügel": ["häusliche gewalt", "körperverletzung"],
  "bedroht": ["häusliche gewalt", "eheschutz"],
  "eheschutz": ["eheschutz", "eheschutzverfahren", "gerichtliche trennung"],
  "pensionskasse": ["pensionskasse teilung", "vorsorgeausgleich", "säule 2 teilung"],
  "vorsorge": ["vorsorgeausgleich", "pensionskasse teilung", "vorsorgeauftrag"],

  // ─── KINDER & SORGERECHT ───
  "kind": ["kind", "sorgerecht", "kinderunterhalt", "elterliche sorge", "kindesschutz"],
  "kinder": ["kinder", "sorgerecht", "kinderunterhalt", "elterliche sorge"],
  "baby": ["baby unterhalt", "kinderunterhalt", "unterhalt kind"],
  "sorgerecht": ["sorgerecht", "elterliche sorge", "gemeinsames sorgerecht", "alleiniges sorgerecht"],
  "obhut": ["obhut", "alleinige obhut", "sorgerecht"],
  "besuchsrecht": ["besuchsrecht", "umgangsrecht", "besuchsregelung"],
  "besuchen": ["besuchsrecht", "umgangsrecht", "besuchsregelung"],
  "vater": ["vater", "vaterschaftsanerkennung", "vaterschaftsklage", "sorgerecht"],
  "vaterschaft": ["vaterschaftsanerkennung", "vaterschaftsklage", "vater feststellen"],
  "mutter": ["sorgerecht", "elterliche sorge", "mutterschaft"],
  "adoption": ["adoption", "adoptieren", "stiefkind adoption"],
  "adoptieren": ["adoption", "adoptieren", "stiefkind adoption"],
  "pflegefamilie": ["pflegefamilie", "kindesschutz", "obhutsentzug"],
  "kesb": ["kesb", "kindesschutz", "beistandschaft", "kesb entscheid"],
  "jugendamt": ["jugendamt", "kesb", "kindesschutz", "sozialdienst kind"],
  "kindeswohl": ["kindeswohl", "kindesschutz", "kesb", "gefährdungsmeldung"],
  "umzug": ["umzug mit kind", "aufenthaltsort kind"],
  "ferienregelung": ["ferienregelung", "besuchsrecht", "besuchsregelung"],
  "entführt": ["kind entführt", "internationales sorgerecht"],

  // ─── ERBRECHT ───
  "erbe": ["erbe", "erbschaft", "nachlass", "erben"],
  "erben": ["erbe", "erbschaft", "erben", "gesetzliche erben"],
  "erbschaft": ["erbschaft", "erbe", "nachlass"],
  "geerbt": ["erbe", "erbschaft", "haus geerbt", "wohnung geerbt"],
  "vererben": ["testament", "erbvertrag", "erbschaft"],
  "testament": ["testament", "letztwillige verfügung"],
  "nachlass": ["nachlass", "erbschaft", "nachlassverwalter", "nachlass inventar"],
  "pflichtteil": ["pflichtteil", "pflichtteil verletzung", "pflichtteilsanspruch"],
  "enterbung": ["enterbung", "erben ausschliessen", "pflichtteil"],
  "enterben": ["enterbung", "erben ausschliessen"],
  "enterbt": ["enterbung", "erben ausschliessen", "pflichtteil verletzung"],
  "erbstreit": ["erbstreit", "erben streit", "nachlassstreit", "erbengemeinschaft"],
  "erbteilung": ["erbteilung", "erbe teilen", "erbengemeinschaft"],
  "erbvertrag": ["erbvertrag", "erbvorbezug"],
  "erbvorbezug": ["erbvorbezug", "schenkung anrechnung"],
  "willensvollstrecker": ["willensvollstrecker", "nachlassverwalter"],
  "ausschlagen": ["erbe ausschlagen", "erbschaft ablehnen"],
  "gestorben": ["erbe", "erbschaft", "nachlass", "todesfall"],
  "tod": ["erbe", "erbschaft", "nachlass", "todesfall"],
  "todesfall": ["erbe", "erbschaft", "nachlass", "todesfall"],
  "verstorben": ["erbe", "erbschaft", "nachlass"],

  // ─── MIETRECHT ───
  "miete": ["miete", "mietvertrag", "mietzins"],
  "mieten": ["miete", "mietvertrag", "wohnung mieten"],
  "wohnung": ["wohnung", "mietvertrag", "miete", "wohnung mieten"],
  "vermieter": ["vermieter", "vermieterin", "mietvertrag", "kündigung wohnung", "kündigung mietvertrag"],
  "mieter": ["mieter", "mietvertrag", "miete"],
  "kündigung wohnung": ["kündigung wohnung", "kündigung mietvertrag", "kündigungsfrist wohnung"],
  "rausgeworfen": ["kündigung wohnung", "fristlose kündigung wohnung", "rausgeworfen wohnung", "zwangsräumung"],
  "rausgeschmissen": ["kündigung wohnung", "fristlose kündigung wohnung", "rausgeworfen wohnung"],
  "räumung": ["zwangsräumung", "räumungsklage", "ausweisung"],
  "kaution": ["kaution", "mietkaution", "depot wohnung", "kaution zurück"],
  "depot": ["kaution", "mietkaution", "depot wohnung"],
  "nebenkosten": ["nebenkosten", "abrechnung nebenkosten"],
  "heizkosten": ["nebenkosten", "abrechnung nebenkosten"],
  "schimmel": ["schimmel", "mängel wohnung", "mietzinsreduktion"],
  "heizung": ["heizung kaputt", "mängel wohnung"],
  "lärm": ["lärm nachbar", "ruhestörung", "nachbar lärm"],
  "ruhestörung": ["ruhestörung", "lärm nachbar", "nachbar lärm"],
  "untermiete": ["untervermietung", "untermieter"],
  "airbnb": ["airbnb wohnung", "untervermietung"],
  "eigenbedarf": ["eigenbedarf kündigung", "kündigung anfechten"],
  "mietzins": ["mietzins", "mietzinserhöhung", "mietzinsreduktion", "mietzins missbräuchlich"],
  "mietzinserhöhung": ["mietzinserhöhung", "mietzins missbräuchlich"],
  "schlichtung": ["schlichtungsbehörde miete", "mietgericht"],
  "mietgericht": ["mietgericht", "schlichtungsbehörde miete", "kündigung anfechten"],

  // ─── ARBEITSRECHT ───
  "arbeit": ["arbeitsvertrag", "arbeitsverhältnis", "arbeitnehmer"],
  "arbeiten": ["arbeitsvertrag", "arbeitsverhältnis"],
  "job": ["arbeitsvertrag", "arbeitsverhältnis", "kündigung job"],
  "stelle": ["arbeitsvertrag", "arbeitsverhältnis", "kündigung job"],
  "chef": ["arbeitgeber", "chef", "kündigung job"],
  "arbeitgeber": ["arbeitgeber", "arbeitsvertrag", "arbeitsverhältnis"],
  "gekündigt": ["kündigung", "gekündigt"],
  "entlassen": ["kündigung", "fristlose kündigung", "entlassen", "sofortige entlassung"],
  "fristlos": ["fristlose kündigung", "sofortige entlassung"],
  "rausgeschmisse": ["fristlose kündigung", "kündigung job", "entlassen"],
  "usegschmisse": ["fristlose kündigung", "kündigung job", "entlassen"],
  "probezeit": ["probezeit", "kündigung in probezeit"],
  "lohn": ["lohn", "lohn nicht bezahlt", "lohn ausstehend"],
  "gehalt": ["lohn", "lohn nicht bezahlt", "lohn ausstehend"],
  "salair": ["lohn", "lohn nicht bezahlt"],
  "bezahlt": ["lohn nicht bezahlt", "rechnung nicht bezahlt", "zahlung nicht erfolgt"],
  "bonus": ["bonus", "gratifikation", "13 lohn"],
  "13.": ["13 lohn", "gratifikation"],
  "dreizehnter": ["13 lohn", "gratifikation"],
  "überstunden": ["überstunden", "überzeit", "arbeitszeit"],
  "ferien": ["ferien", "ferienanspruch", "ferien nicht gewährt"],
  "urlaub": ["ferien", "ferienanspruch", "mutterschaft", "vaterschaftsurlaub"],
  "zeugnis": ["arbeitszeugnis", "zwischenzeugnis", "zeugnis arbeit"],
  "arbeitszeugnis": ["arbeitszeugnis", "zwischenzeugnis", "zeugnis arbeit"],
  "mobbing": ["mobbing", "belästigung arbeit", "persönlichkeitsschutz"],
  "belästigung": ["belästigung arbeit", "sexuelle belästigung", "mobbing"],
  "diskriminierung": ["diskriminierung arbeit", "gleichstellung"],
  "schwanger": ["mutterschaft", "kündigungsschutz", "krank während kündigung"],
  "mutterschaft": ["mutterschaft", "mutterschaftsurlaub"],
  "krank": ["krankgeschrieben", "arbeitsunfähig", "krank während kündigung", "krankentaggeld"],
  "krankgeschrieben": ["krankgeschrieben", "arbeitsunfähig", "krank während kündigung"],
  "arztzeugnis": ["arztzeugnis", "krankgeschrieben", "arbeitsunfähig"],
  "konkurrenzverbot": ["konkurrenzverbot", "wettbewerbsverbot"],
  "teilzeit": ["teilzeit", "pensum", "arbeitszeit"],
  "kündigungsfrist": ["kündigungsfrist job", "kündigungsfrist wohnung"],

  // ─── VERTRAGSRECHT ───
  "vertrag": ["vertrag", "kaufvertrag", "vertragsrecht"],
  "kaufvertrag": ["kaufvertrag", "kauf", "gewährleistung"],
  "garantie": ["garantie", "gewährleistung", "mängelrüge"],
  "mangel": ["mangel", "mängelrüge", "gewährleistung", "mängel wohnung"],
  "mangelhaft": ["mangel", "mängelrüge", "schlechterfüllung"],
  "defekt": ["mangel", "ware defekt", "garantie"],
  "kaputt": ["mangel", "mängelrüge", "gewährleistung", "heizung kaputt"],
  "reklamation": ["mängelrüge", "gewährleistung", "mangel"],
  "reklamieren": ["mängelrüge", "gewährleistung", "mangel"],
  "rücktritt": ["rücktritt vom vertrag", "vertrag rücktritt"],
  "widerrufen": ["vertrag widerrufen", "widerrufsrecht"],
  "stornieren": ["vertrag widerrufen", "rücktritt vom vertrag"],
  "offerte": ["offerte", "angebot", "vertrag"],
  "angebot": ["angebot", "offerte", "vertrag"],
  "mahnung": ["mahnung", "zahlungsverzug", "betreibung"],
  "betreibung": ["betreibung", "zahlungsbefehl", "inkasso"],
  "rechnung": ["rechnung nicht bezahlt", "mahnung", "zahlungsverzug"],
  "abo": ["abo kündigen", "abo falle", "automatische verlängerung"],
  "abonnement": ["abo kündigen", "abo falle", "kündigung vertrag"],
  "leasing": ["leasing", "kreditvertrag", "ratenzahlung"],
  "verjährung": ["verjährung", "frist abgelaufen", "verjährungsfrist"],
  "verjährt": ["verjährung", "frist abgelaufen"],
  "frist": ["frist abgelaufen", "verjährung", "kündigungsfrist"],

  // ─── HAFTPFLICHT & SCHADENERSATZ ───
  "haftung": ["haftung", "schadenersatz", "haftpflicht"],
  "haftpflicht": ["haftpflichtversicherung", "haftung", "schadenersatz"],
  "schaden": ["schaden", "schadenersatz", "sachschaden"],
  "schadenersatz": ["schadenersatz", "haftung", "genugtuung"],
  "schadensersatz": ["schadenersatz", "haftung", "genugtuung"],
  "genugtuung": ["genugtuung", "schmerzensgeld", "körperverletzung"],
  "schmerzensgeld": ["schmerzensgeld", "genugtuung", "körperverletzung"],
  "verletzt": ["körperverletzung", "unfall", "schadenersatz"],
  "verletzung": ["körperverletzung", "unfall", "schadenersatz", "persönlichkeitsverletzung"],
  "fahrlässig": ["fahrlässigkeit", "verschulden", "haftung"],
  "schuld": ["verschulden", "schuldfrage", "haftung", "schulden", "forderung"],
  "schuldig": ["verschulden", "schuldfrage", "haftung"],
  "versicherung": ["versicherung", "haftpflichtversicherung", "versicherung zahlt nicht"],

  // ─── EIGENTUM & NACHBARRECHT ───
  "haus": ["haus", "grundstück", "eigentum", "grundeigentum", "haus geerbt"],
  "eigentum": ["eigentum", "grundeigentum", "eigentumsübertragung"],
  "grundstück": ["grundstück", "grundeigentum", "kauf grundstück"],
  "immobilie": ["grundstück", "haus", "eigentum", "immobilie"],
  "grundbuch": ["grundbuch", "grundeigentum", "eigentumsübertragung"],
  "hypothek": ["hypothek", "grundpfand", "hypothek kündigung"],
  "nachbar": ["nachbar", "nachbarstreit", "nachbar lärm", "nachbarrecht"],
  "zaun": ["zaun streit", "grenze grundstück", "grenzabstand"],
  "grenze": ["grenze grundstück", "grenzabstand", "zaun streit"],
  "baum": ["baum zu hoch", "äste über grenze", "nachbarstreit"],
  "äste": ["äste über grenze", "baum zu hoch", "nachbarstreit"],
  "bellen": ["hund bellt", "haustier nachbar", "ruhestörung"],
  "hund": ["hundebiss", "tierhalter haftung", "haustier", "hund bellt"],
  "katze": ["katze schaden", "tierhalter haftung", "haustier"],
  "tier": ["tierhalter haftung", "haustier schaden"],
  "stockwerkeigentum": ["stockwerkeigentum", "eigentumswohnung", "miteigentum"],
  "eigentumswohnung": ["stockwerkeigentum", "eigentumswohnung"],
  "wegrecht": ["wegrecht", "dienstbarkeit", "wegerecht streit"],
  "wohnrecht": ["wohnrecht", "nutzniessung"],

  // ─── SCHULDEN & BETREIBUNG ───
  "schulden": ["schulden", "betreibung", "forderung", "inkasso"],
  // "schuld" already defined above in Haftpflicht section
  "inkasso": ["inkasso", "inkassobüro", "betreibung", "mahnverfahren"],
  "zahlungsbefehl": ["zahlungsbefehl", "betreibung", "rechtsvorschlag"],
  "rechtsvorschlag": ["rechtsvorschlag", "betreibung", "zahlungsbefehl"],
  "pfändung": ["pfändung", "lohnpfändung", "kontopfändung"],
  "gepfändet": ["pfändung", "lohnpfändung", "kontopfändung"],
  "konkurs": ["konkurs", "privatkonkurs", "firma konkurs"],
  "verlustschein": ["verlustschein", "betreibung"],
  "gläubiger": ["gläubiger", "forderung", "betreibung"],
  "schuldner": ["schuldner", "schulden", "betreibung"],

  // ─── ERWACHSENENSCHUTZ ───
  "beistandschaft": ["beistandschaft", "beistand eingesetzt", "kesb"],
  "beistand": ["beistandschaft", "beistand eingesetzt", "vertretungsbeistandschaft"],
  "vorsorgeauftrag": ["vorsorgeauftrag", "urteilsunfähig"],
  "patientenverfügung": ["patientenverfügung", "medizinische entscheidung stellvertretung"],
  "demenz": ["demenz entscheidung", "urteilsunfähig", "umfassende beistandschaft", "betreuung alter"],
  "zwangseinweisung": ["zwangseinweisung", "fürsorgerische unterbringung", "psychiatrische einweisung"],
  "psychiatrie": ["psychiatrische einweisung", "fürsorgerische unterbringung", "zwangseinweisung"],
  "eingewiesen": ["zwangseinweisung", "fürsorgerische unterbringung", "psychiatrische einweisung"],

  // ─── PERSÖNLICHKEITSSCHUTZ & DATENSCHUTZ ───
  "beleidigung": ["persönlichkeitsverletzung", "ehrverletzung", "üble nachrede"],
  "beleidigt": ["persönlichkeitsverletzung", "ehrverletzung", "üble nachrede"],
  "rufschädigung": ["rufschädigung", "üble nachrede", "verleumdung", "persönlichkeitsverletzung"],
  "verleumdung": ["verleumdung", "üble nachrede", "ehrverletzung"],
  "foto": ["foto ohne erlaubnis", "bild veröffentlicht", "persönlichkeitsverletzung"],
  "bild": ["bild veröffentlicht", "foto ohne erlaubnis"],
  "video": ["video veröffentlicht", "persönlichkeitsverletzung"],
  "datenschutz": ["datenschutz", "personenbezogene daten", "datenschutzverletzung"],
  "daten": ["datenschutz", "personenbezogene daten", "daten löschen"],
  "überwachung": ["überwachung arbeit", "kamera arbeitsplatz", "tracking ohne zustimmung"],
  "kamera": ["kamera arbeitsplatz", "kamera nachbar", "überwachung"],
  "aufgenommen": ["aufnahme ohne erlaubnis", "gespräch aufgenommen"],
  "geheim": ["geheimhaltung", "arztgeheimnis", "bankgeheimnis"],

  // ─── BAURECHT & WERKVERTRAG ───
  "bau": ["bauvertrag", "werkvertrag", "baumängel"],
  "bauen": ["bauvertrag", "werkvertrag", "baubewilligung"],
  "handwerker": ["handwerker", "werkvertrag", "werklohn"],
  "baumangel": ["baumängel", "baumangel", "mängel am bau"],
  "baumängel": ["baumängel", "mängel am bau", "nachbesserung bau"],
  "pfusch": ["baumängel", "mängel am bau", "schlechterfüllung"],
  "architekt": ["architekt haftung", "bauleitung fehler"],
  "baubewilligung": ["baubewilligung", "baubewilligung problem"],
  "bauhandwerker": ["bauhandwerkerpfandrecht", "werkvertrag"],

  // ─── KONSUMENTENSCHUTZ ───
  "betrug": ["online betrug", "fake shop", "betrug konto"],
  // "betrogen" already defined above in Ehe section
  "fake": ["fake shop", "fake profil", "online betrug"],
  "geliefert": ["nicht geliefert", "lieferverzug"],
  "bestellt": ["nicht geliefert", "online kauf", "fernabsatz"],
  "rückgabe": ["rückgaberecht", "widerrufsrecht"],
  "umtausch": ["rückgaberecht", "widerrufsrecht", "garantie"],
  "gutschein": ["gutschein abgelaufen", "anzahlung verloren"],
  "flug": ["flug annulliert", "flug verspätung", "reise abgesagt"],
  "reise": ["reise abgesagt", "reiseveranstalter haftung", "flug annulliert"],
  "hotel": ["hotel mangel", "reise abgesagt", "hotel storniert"],
  "kreditkarte": ["kreditkarte belastung unberechtigt", "kartenmissbrauch"],

  // ─── BANK & FINANZEN ───
  "bank": ["bank haftung", "bank kündigt konto", "kontosperre"],
  "konto": ["kontosperre", "konto blockiert", "bank kündigt konto"],
  "kredit": ["kreditvertrag", "kredit nicht bewilligt", "darlehen"],
  "darlehen": ["darlehen privat", "kreditvertrag"],
  "zins": ["verzugszins", "zins zu hoch", "wucherzins"],
  "wucher": ["wucherzins", "zins zu hoch"],
  "phishing": ["phishing", "betrug konto", "kartenmissbrauch"],
  "gehackt": ["konto gehackt", "phishing", "betrug konto"],
  "bitcoin": ["bitcoin betrug", "krypto verlust"],
  "krypto": ["krypto verlust", "bitcoin betrug"],

  // ─── INTERNET & DIGITAL ───
  "internet": ["online", "cybermobbing", "datenschutz", "online betrug"],
  "online": ["online betrug", "online beleidigung", "online kauf"],
  "cybermobbing": ["cybermobbing", "online beleidigung", "persönlichkeitsverletzung"],
  "social": ["social media beleidigung", "social media konto gesperrt"],
  "instagram": ["social media beleidigung", "social media konto gesperrt", "persönlichkeitsverletzung"],
  "facebook": ["social media beleidigung", "social media konto gesperrt", "persönlichkeitsverletzung"],
  "tiktok": ["social media beleidigung", "social media konto gesperrt"],
  "google": ["google bewertung streit", "bewertung löschen"],
  "bewertung": ["bewertung löschen", "google bewertung streit"],
  "urheberrecht": ["urheberrecht bild", "musik ohne erlaubnis"],
  "download": ["download illegal vorwurf", "torrent abmahnung"],
  "torrent": ["torrent abmahnung", "download illegal vorwurf"],
  "domain": ["domain streit", "it vertrag streit"],
  "software": ["software lizenz streit", "it vertrag streit"],

  // ─── GESELLSCHAFTSRECHT ───
  "firma": ["firma", "aktiengesellschaft", "gmbh", "firma konkurs"],
  "ag": ["aktiengesellschaft", "verwaltungsrat", "generalversammlung"],
  "aktiengesellschaft": ["aktiengesellschaft", "verwaltungsrat", "generalversammlung"],
  "gmbh": ["gmbh", "gmbh gründen", "gesellschafter streit"],
  "verwaltungsrat": ["verwaltungsrat", "verwaltungsrat pflichten", "sorgfaltspflicht verwaltungsrat"],
  "geschäftsführer": ["haftung geschäftsführer", "gmbh", "organhaftung"],
  "generalversammlung": ["generalversammlung", "gv beschluss anfechten"],
  "dividende": ["dividende nicht ausbezahlt", "gewinnverwendung"],
  "aktionär": ["aktionär streit", "generalversammlung", "dividende"],
  "gesellschafter": ["gesellschafter streit", "gmbh", "abfindung gesellschafter"],
  "gründen": ["gmbh gründen", "verein gründen", "stiftung gründen"],

  // ─── VEREINSRECHT ───
  "verein": ["verein", "verein gründen", "statuten verein", "vereinsversammlung"],
  "stiftung": ["stiftung", "stiftung gründen", "stiftungsrat haftung"],
  "statuten": ["statuten verein", "statuten ändern"],
  "mitglied": ["mitglied ausschliessen", "vereinsversammlung"],

  // ─── MEDIZIN & PATIENTENRECHTE ───
  "arzt": ["arztfehler", "behandlungsfehler", "behandlungsvertrag"],
  "ärztin": ["arztfehler", "behandlungsfehler", "behandlungsvertrag"],
  "arztfehler": ["arztfehler", "behandlungsfehler", "medizinische haftung"],
  "operation": ["operation komplikation", "aufklärungspflicht verletzt", "behandlungsfehler"],
  "diagnose": ["falsche diagnose", "arztfehler", "behandlungsfehler"],
  "spital": ["spital haftung", "behandlungsfehler", "pflegefehler"],
  "krankenhaus": ["spital haftung", "behandlungsfehler"],
  "behandlung": ["behandlungsfehler", "behandlungsvertrag", "arztfehler"],
  "medikament": ["medikament schaden", "behandlungsfehler"],
  "impfung": ["impfschaden", "medikament schaden"],
  "impfschaden": ["impfschaden", "medikament schaden", "schadenersatz"],

  // ─── VERSICHERUNG ───
  "krankenkasse": ["krankenkasse problem", "krankenkasse leistung"],
  "prämie": ["prämie nicht bezahlt", "krankenkasse problem"],
  "unfallversicherung": ["unfallversicherung", "unfall arbeit"],
  "invalidenrente": ["invalidenrente", "rentenablehnung", "iv"],
  "rente": ["invalidenrente", "rentenablehnung"],
  "iv": ["iv", "invalidenrente", "rentenablehnung"],
  "ahv": ["ahv", "sozialversicherung"],
  "taggeld": ["taggeldversicherung", "krankentaggeld"],

  // ─── KONKUBINAT ───
  "konkubinat": ["konkubinat", "lebensgemeinschaft", "zusammenleben unverheiratet"],
  "zusammenleben": ["konkubinat", "lebensgemeinschaft", "zusammenleben unverheiratet"],
  "lebenspartner": ["konkubinat", "lebenspartner erbe", "erbe lebenspartner"],
  "partnerin": ["konkubinat", "lebensgemeinschaft", "partnervertrag"],
  "partner": ["konkubinat", "lebensgemeinschaft", "partnervertrag"],
  "unverheiratet": ["konkubinat", "zusammenleben unverheiratet", "trennung unverheiratet"],
  "partnerschaft": ["eingetragene partnerschaft", "partnerschaft eintragen"],

  // ─── HAUSKAUF & IMMOBILIEN ───
  "hauskauf": ["hauskauf", "hauskauf rücktritt", "mangel nach kauf entdeckt"],
  "wohnungskauf": ["hauskauf", "eigentumsübertragung", "grundstückkauf"],
  "notar": ["notar fehler", "handänderung", "grundstückkauf"],
  "makler": ["hauskauf", "immobilie"],
  "reservationsvertrag": ["reservationsvertrag streit", "anzahlung verloren immobilie"],

  // ─── STEUERN ───
  "steuer": ["steuerrechnung", "steuererklärung fehler", "steuerrekurs"],
  "steuern": ["steuerrechnung", "steuererklärung fehler", "steuerrekurs"],
  "steuererklärung": ["steuererklärung fehler", "steuerrechnung"],
  "steuerrechnung": ["steuerrechnung", "steuer nicht bezahlt", "steuernachzahlung"],
  "quellensteuer": ["quellensteuer", "steuer"],
  "kirchensteuer": ["kirchensteuer", "kirchenaustritt"],
  "erbschaftssteuer": ["erbschaftssteuer", "steuer erbe"],
  "mehrwertsteuer": ["mehrwertsteuer problem", "mwst nachforderung"],

  // ─── SOZIALHILFE ───
  "sozialhilfe": ["sozialhilfe kürzung", "sozialhilfe rückforderung", "unterstützung verweigert"],
  "nothilfe": ["nothilfe", "sozialhilfe"],
  "arbeitslosengeld": ["arbeitslosengeld problem", "rav sanktion"],
  "rav": ["rav sanktion", "arbeitslosengeld problem"],
  "arbeitslos": ["arbeitslosengeld problem", "rav sanktion"],

  // ─── MIGRATION ───
  "aufenthaltsbewilligung": ["aufenthaltsbewilligung entzug", "bewilligung b problem"],
  "einbürgerung": ["einbürgerung abgelehnt", "bürgerrecht verweigert"],
  "familiennachzug": ["familiennachzug", "heirat ausländer"],
  "ausweisung": ["ausweisung", "wegweisung"],
  "visa": ["visa verlängerung", "aufenthaltsbewilligung"],
};

/**
 * Extract meaningful keywords from a natural-language query.
 *
 * Strategy:
 * 1. Lowercase + strip punctuation
 * 2. Tokenize
 * 3. Remove stop words
 * 4. Expand via synonym map (single tokens AND bigrams)
 * 5. Return deduplicated set
 */
export function extractKeywords(query: string): string[] {
  const normalized = query
    .toLowerCase()
    .replace(/[.,!?;:()[\]{}"""''„‚«»–—\/\\]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  const tokens = normalized.split(" ").filter((t) => t.length > 1);
  const meaningful = tokens.filter((t) => !STOP_WORDS.has(t));

  // Build bigrams from all tokens (including stop words for phrases like "kündigung wohnung")
  const bigrams: string[] = [];
  for (let i = 0; i < tokens.length - 1; i++) {
    bigrams.push(`${tokens[i]} ${tokens[i + 1]}`);
  }

  // Build trigrams for longer phrases
  const trigrams: string[] = [];
  for (let i = 0; i < tokens.length - 2; i++) {
    trigrams.push(`${tokens[i]} ${tokens[i + 1]} ${tokens[i + 2]}`);
  }

  const expanded = new Set<string>();

  // Add meaningful single tokens + their synonyms
  for (const token of meaningful) {
    expanded.add(token);
    const synonyms = SYNONYM_MAP[token];
    if (synonyms) {
      for (const syn of synonyms) expanded.add(syn);
    }
  }

  // Check bigrams against synonym map
  for (const bigram of bigrams) {
    const synonyms = SYNONYM_MAP[bigram];
    if (synonyms) {
      for (const syn of synonyms) expanded.add(syn);
    }
    // Also add bigram itself if it's composed of meaningful words
    const parts = bigram.split(" ");
    if (parts.every((p) => !STOP_WORDS.has(p))) {
      expanded.add(bigram);
    }
  }

  // Check trigrams against synonym map
  for (const trigram of trigrams) {
    const synonyms = SYNONYM_MAP[trigram];
    if (synonyms) {
      for (const syn of synonyms) expanded.add(syn);
    }
  }

  return Array.from(expanded);
}
