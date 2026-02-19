import { LegalArticle } from "@/lib/types";

/**
 * Structured dataset of Swiss legal articles with keyword mappings
 * derived from the comprehensive keyword database covering all major civil-law topics.
 *
 * Fedlex base URLs:
 *   ZGB   → https://www.fedlex.admin.ch/eli/cc/24/233_245_233/de
 *   OR    → https://www.fedlex.admin.ch/eli/cc/27/317_321_377/de
 *   SVG   → https://www.fedlex.admin.ch/eli/cc/1959/679_705_685/de
 *   SchKG → https://www.fedlex.admin.ch/eli/cc/11/529_488_529/de
 */

const ZGB = "https://www.fedlex.admin.ch/eli/cc/24/233_245_233/de";
const OR = "https://www.fedlex.admin.ch/eli/cc/27/317_321_377/de";
const SVG = "https://www.fedlex.admin.ch/eli/cc/1959/679_705_685/de";
const SchKG = "https://www.fedlex.admin.ch/eli/cc/11/529_488_529/de";

export const articles: LegalArticle[] = [
  // ──────────────────────────────────────────────
  // EHE & SCHEIDUNG
  // ──────────────────────────────────────────────
  {
    code: "ZGB",
    article_number: "Art. 94",
    title: "Ehefähigkeit",
    summary:
      "Regelt die Voraussetzungen für die Eheschliessung: Urteilsfähigkeit und Mindestalter.",
    keywords: [
      "ehe", "heirat", "verheiratet", "eheschliessung", "ziviltrauung",
      "ehefähigkeit", "heiraten",
    ],
    category: "Ehe & Scheidung",
    fedlex_url: `${ZGB}#art_94`,
  },
  {
    code: "ZGB",
    article_number: "Art. 97",
    title: "Eheschliessung – Verfahren",
    summary:
      "Beschreibt das Verfahren der Eheschliessung vor dem Zivilstandsamt.",
    keywords: [
      "ehe", "heirat", "eheschliessung", "ziviltrauung", "standesamt",
      "trauung", "hochzeit",
    ],
    category: "Ehe & Scheidung",
    fedlex_url: `${ZGB}#art_97`,
  },
  {
    code: "ZGB",
    article_number: "Art. 111",
    title: "Scheidung auf gemeinsames Begehren",
    summary:
      "Ermöglicht die einvernehmliche Scheidung, wenn beide Ehegatten den Antrag gemeinsam stellen.",
    keywords: [
      "scheidung", "einvernehmliche scheidung", "scheidungsvereinbarung",
      "trennung", "ehetrennung", "konvention scheidung", "scheidig", "scheide",
      "scheidungskosten", "anwalt scheidung", "anwalt familie",
      "lasse scheiden", "scheiden lassen", "will scheidung",
    ],
    category: "Ehe & Scheidung",
    fedlex_url: `${ZGB}#art_111`,
  },
  {
    code: "ZGB",
    article_number: "Art. 114",
    title: "Scheidungsklage nach Getrenntleben",
    summary:
      "Erlaubt die Scheidungsklage nach mindestens zwei Jahren Getrenntleben.",
    keywords: [
      "scheidung", "streitige scheidung", "getrenntleben", "trennung",
      "scheidungsklage", "zerrüttung", "scheidig",
    ],
    category: "Ehe & Scheidung",
    fedlex_url: `${ZGB}#art_114`,
  },
  {
    code: "ZGB",
    article_number: "Art. 115",
    title: "Scheidungsklage aus wichtigen Gründen",
    summary:
      "Ermöglicht die vorzeitige Scheidungsklage bei Unzumutbarkeit der Ehe.",
    keywords: [
      "scheidung", "häusliche gewalt", "ehebruch", "untreue", "fremdgehen",
      "unzumutbarkeit", "gewalt ehe",
    ],
    category: "Ehe & Scheidung",
    fedlex_url: `${ZGB}#art_115`,
  },
  {
    code: "ZGB",
    article_number: "Art. 120",
    title: "Güterrechtliche Auseinandersetzung",
    summary:
      "Regelt die Aufteilung des Vermögens bei der Scheidung.",
    keywords: [
      "gütertrennung", "vermögensaufteilung", "errungenschaftsbeteiligung",
      "gütergemeinschaft", "ehevertrag", "haus nach scheidung",
      "wohnung nach scheidung", "gemeinsames konto auflösen",
      "gemeinsame schulden ehe",
    ],
    category: "Ehe & Scheidung",
    fedlex_url: `${ZGB}#art_120`,
  },
  {
    code: "ZGB",
    article_number: "Art. 122",
    title: "Teilung der beruflichen Vorsorge",
    summary:
      "Regelt die Aufteilung der Pensionskassenansprüche bei Scheidung.",
    keywords: [
      "vorsorgeausgleich", "pensionskasse teilung", "säule 2 teilung",
      "säule 3a teilung", "bvg teilung", "vorsorge scheidung",
    ],
    category: "Ehe & Scheidung",
    fedlex_url: `${ZGB}#art_122`,
  },
  {
    code: "ZGB",
    article_number: "Art. 125",
    title: "Nachehelicher Unterhalt",
    summary:
      "Bestimmt den Unterhaltsanspruch eines Ehegatten nach der Scheidung.",
    keywords: [
      "unterhalt ehepartner", "nachehelicher unterhalt", "alimente ehefrau",
      "alimente ehemann", "trennungsunterhalt", "unterhalt nach scheidung",
    ],
    category: "Ehe & Scheidung",
    fedlex_url: `${ZGB}#art_125`,
  },
  {
    code: "ZGB",
    article_number: "Art. 172",
    title: "Eheschutz",
    summary:
      "Ermöglicht gerichtliche Massnahmen zum Schutz der ehelichen Gemeinschaft.",
    keywords: [
      "eheschutz", "eheschutzverfahren", "gerichtliche trennung",
      "familiengericht", "bezirksgericht familie", "familienstreit",
      "mediationsverfahren",
    ],
    category: "Ehe & Scheidung",
    fedlex_url: `${ZGB}#art_172`,
  },
  {
    code: "ZGB",
    article_number: "Art. 181",
    title: "Güterrecht – Allgemeine Bestimmungen",
    summary:
      "Definiert die güterrechtlichen Grundsätze zwischen Ehegatten.",
    keywords: [
      "ehevertrag", "gütertrennung", "errungenschaftsbeteiligung",
      "gütergemeinschaft", "vermögen ehe", "haftung ehepartner",
    ],
    category: "Ehe & Scheidung",
    fedlex_url: `${ZGB}#art_181`,
  },

  // ──────────────────────────────────────────────
  // KINDER & SORGERECHT
  // ──────────────────────────────────────────────
  {
    code: "ZGB",
    article_number: "Art. 252",
    title: "Kindesverhältnis – Entstehung",
    summary:
      "Regelt die Begründung des Kindesverhältnisses zur Mutter und zum Vater.",
    keywords: [
      "vater anerkennung", "vater feststellen", "vaterschaftsanerkennung",
      "kindesverhältnis", "abstammung",
    ],
    category: "Kinder & Sorgerecht",
    fedlex_url: `${ZGB}#art_252`,
  },
  {
    code: "ZGB",
    article_number: "Art. 261",
    title: "Vaterschaftsklage",
    summary:
      "Ermöglicht die gerichtliche Feststellung der Vaterschaft.",
    keywords: [
      "vaterschaftsklage", "vater feststellen", "vaterschaft",
      "vaterschaftsanerkennung", "vaterschaftstest",
    ],
    category: "Kinder & Sorgerecht",
    fedlex_url: `${ZGB}#art_261`,
  },
  {
    code: "ZGB",
    article_number: "Art. 264",
    title: "Adoption",
    summary:
      "Regelt die Voraussetzungen und das Verfahren der Adoption.",
    keywords: [
      "adoption", "adoptieren", "stiefkind adoption", "kind annehmen",
    ],
    category: "Kinder & Sorgerecht",
    fedlex_url: `${ZGB}#art_264`,
  },
  {
    code: "ZGB",
    article_number: "Art. 276",
    title: "Unterhaltspflicht der Eltern",
    summary:
      "Verpflichtet die Eltern, für den Unterhalt des Kindes aufzukommen.",
    keywords: [
      "kinderunterhalt", "unterhalt kind", "alimente kind",
      "alimentenzahlung", "baby unterhalt", "unterhaltspflicht",
    ],
    category: "Kinder & Sorgerecht",
    fedlex_url: `${ZGB}#art_276`,
  },
  {
    code: "ZGB",
    article_number: "Art. 285",
    title: "Unterhaltsbeitrag – Bemessung",
    summary:
      "Bestimmt die Kriterien für die Berechnung des Kindesunterhalts.",
    keywords: [
      "kinderunterhalt", "alimente kind", "unterhaltsbeitrag",
      "alimentenberechnung", "kinderzulage", "familienzulage",
    ],
    category: "Kinder & Sorgerecht",
    fedlex_url: `${ZGB}#art_285`,
  },
  {
    code: "ZGB",
    article_number: "Art. 296",
    title: "Elterliche Sorge – Grundsätze",
    summary:
      "Definiert die elterliche Sorge und die Pflichten der Eltern gegenüber dem Kind.",
    keywords: [
      "sorgerecht", "elterliche sorge", "gemeinsames sorgerecht",
      "alleiniges sorgerecht", "obhut", "alleinige obhut",
    ],
    category: "Kinder & Sorgerecht",
    fedlex_url: `${ZGB}#art_296`,
  },
  {
    code: "ZGB",
    article_number: "Art. 298",
    title: "Gemeinsame elterliche Sorge",
    summary:
      "Regelt die gemeinsame elterliche Sorge auch bei unverheirateten Eltern.",
    keywords: [
      "gemeinsames sorgerecht", "elterliche sorge", "sorgerecht unverheiratet",
      "wechselmodell", "sorgerecht teilen",
    ],
    category: "Kinder & Sorgerecht",
    fedlex_url: `${ZGB}#art_298`,
  },
  {
    code: "ZGB",
    article_number: "Art. 273",
    title: "Persönlicher Verkehr (Besuchsrecht)",
    summary:
      "Gewährleistet das Recht auf persönlichen Verkehr zwischen Eltern und Kind.",
    keywords: [
      "besuchsrecht", "umgangsrecht", "besuchsregelung", "ferienregelung",
      "kind nicht herausgegeben", "kontaktrecht",
    ],
    category: "Kinder & Sorgerecht",
    fedlex_url: `${ZGB}#art_273`,
  },
  {
    code: "ZGB",
    article_number: "Art. 301a",
    title: "Aufenthaltsort des Kindes",
    summary:
      "Regelt die Bestimmung des Aufenthaltsortes und den Umzug mit dem Kind.",
    keywords: [
      "umzug mit kind", "ausland mit kind", "wohnt das kind",
      "aufenthaltsort kind", "schulwahl kind",
    ],
    category: "Kinder & Sorgerecht",
    fedlex_url: `${ZGB}#art_301a`,
  },
  {
    code: "ZGB",
    article_number: "Art. 307",
    title: "Kindesschutzmassnahmen",
    summary:
      "Ermächtigt die KESB, geeignete Massnahmen zum Schutz des Kindeswohls zu treffen.",
    keywords: [
      "kesb", "kindesschutz", "kindeswohl", "gefährdungsmeldung",
      "kind wegnehmen", "obhutsentzug", "erziehungsfähigkeit",
      "streit um kind", "jugendamt", "sozialdienst kind",
    ],
    category: "Kinder & Sorgerecht",
    fedlex_url: `${ZGB}#art_307`,
  },
  {
    code: "ZGB",
    article_number: "Art. 308",
    title: "Beistandschaft für Kinder",
    summary:
      "Regelt die Errichtung einer Beistandschaft zur Unterstützung der Eltern.",
    keywords: [
      "beistandschaft kind", "kesb", "beistand", "kindesschutz",
      "kind misshandlung", "kind vernachlässigung",
    ],
    category: "Kinder & Sorgerecht",
    fedlex_url: `${ZGB}#art_308`,
  },
  {
    code: "ZGB",
    article_number: "Art. 310",
    title: "Entzug des Aufenthaltsbestimmungsrechts",
    summary:
      "Ermöglicht die Unterbringung des Kindes ausserhalb der Familie bei Gefährdung.",
    keywords: [
      "kind wegnehmen", "obhutsentzug", "pflegefamilie",
      "fremdplatzierung", "kindeswohl gefährdet",
    ],
    category: "Kinder & Sorgerecht",
    fedlex_url: `${ZGB}#art_310`,
  },

  // ──────────────────────────────────────────────
  // ERBRECHT
  // ──────────────────────────────────────────────
  {
    code: "ZGB",
    article_number: "Art. 457",
    title: "Gesetzliche Erben – Verwandte",
    summary:
      "Bestimmt die gesetzliche Erbfolge unter Verwandten (Parentelsystem).",
    keywords: [
      "erbe", "erbschaft", "gesetzliche erben", "kinder erben",
      "eltern erben", "erbquote", "nachlass", "erben",
      "erbschaftssteuer", "steuer erbe", "haus geerbt",
      "wohnung geerbt", "firma geerbt", "konkubinat erbe",
      "lebenspartner erbe",
    ],
    category: "Erbrecht",
    fedlex_url: `${ZGB}#art_457`,
  },
  {
    code: "ZGB",
    article_number: "Art. 462",
    title: "Überlebender Ehegatte",
    summary:
      "Regelt den Erbanspruch des überlebenden Ehegatten.",
    keywords: [
      "ehegatte erbe", "erbe ehepartner", "überlebender ehegatte",
      "witwe erbe", "witwer erbe",
    ],
    category: "Erbrecht",
    fedlex_url: `${ZGB}#art_462`,
  },
  {
    code: "ZGB",
    article_number: "Art. 471",
    title: "Pflichtteil",
    summary:
      "Definiert den minimalen Erbanspruch (Pflichtteil) für bestimmte Erben.",
    keywords: [
      "pflichtteil", "pflichtteil verletzung", "pflichtteilsanspruch",
      "erben ausschliessen", "pflichtanteil",
    ],
    category: "Erbrecht",
    fedlex_url: `${ZGB}#art_471`,
  },
  {
    code: "ZGB",
    article_number: "Art. 477",
    title: "Enterbung",
    summary:
      "Ermöglicht die Enterbung eines Pflichtteilserben aus bestimmten Gründen.",
    keywords: [
      "enterbung", "erben ausschliessen", "enterben",
      "pflichtteil entziehen",
    ],
    category: "Erbrecht",
    fedlex_url: `${ZGB}#art_477`,
  },
  {
    code: "ZGB",
    article_number: "Art. 498",
    title: "Testament – Errichtung",
    summary:
      "Regelt die Formen und Voraussetzungen für die Errichtung eines Testaments.",
    keywords: [
      "testament", "letztwillige verfügung", "handschriftliches testament",
      "öffentliches testament",
    ],
    category: "Erbrecht",
    fedlex_url: `${ZGB}#art_498`,
  },
  {
    code: "ZGB",
    article_number: "Art. 512",
    title: "Erbvertrag",
    summary:
      "Ermöglicht vertragliche Vereinbarungen über die Erbfolge.",
    keywords: [
      "erbvertrag", "erbverzicht", "erbvorbezug",
      "schenkung anrechnung",
    ],
    category: "Erbrecht",
    fedlex_url: `${ZGB}#art_512`,
  },
  {
    code: "ZGB",
    article_number: "Art. 517",
    title: "Willensvollstrecker",
    summary:
      "Regelt die Einsetzung und Aufgaben des Willensvollstreckers.",
    keywords: [
      "willensvollstrecker", "nachlassverwalter", "testamentsvollstrecker",
      "nachlass inventar",
    ],
    category: "Erbrecht",
    fedlex_url: `${ZGB}#art_517`,
  },
  {
    code: "ZGB",
    article_number: "Art. 560",
    title: "Erwerb der Erbschaft",
    summary:
      "Bestimmt den Zeitpunkt und die Wirkung des Erbschaftserwerbs.",
    keywords: [
      "erbe annehmen", "erbschaft", "nachlass", "erbschein",
      "erbschaft erwerben",
    ],
    category: "Erbrecht",
    fedlex_url: `${ZGB}#art_560`,
  },
  {
    code: "ZGB",
    article_number: "Art. 566",
    title: "Ausschlagung der Erbschaft",
    summary:
      "Ermöglicht es, eine Erbschaft innerhalb von drei Monaten auszuschlagen.",
    keywords: [
      "erbe ausschlagen", "erbschaft ablehnen", "überschuldeter nachlass",
      "nachlass konkurs", "erbschaft ausschlagen",
    ],
    category: "Erbrecht",
    fedlex_url: `${ZGB}#art_566`,
  },
  {
    code: "ZGB",
    article_number: "Art. 602",
    title: "Erbengemeinschaft",
    summary:
      "Regelt die Rechte und Pflichten der Erbengemeinschaft bis zur Teilung.",
    keywords: [
      "erbengemeinschaft", "erben streit", "erbstreit", "nachlassstreit",
      "erbe teilen", "erbteilung", "erben auszahlen",
    ],
    category: "Erbrecht",
    fedlex_url: `${ZGB}#art_602`,
  },
  {
    code: "ZGB",
    article_number: "Art. 522",
    title: "Herabsetzungsklage",
    summary:
      "Ermöglicht Pflichtteilserben, Verfügungen anzufechten, die den Pflichtteil verletzen.",
    keywords: [
      "pflichtteil verletzung", "herabsetzung", "vermächtnis", "legat",
      "anteil erbe", "pflichtteilsanspruch",
    ],
    category: "Erbrecht",
    fedlex_url: `${ZGB}#art_522`,
  },

  // ──────────────────────────────────────────────
  // MIETRECHT
  // ──────────────────────────────────────────────
  {
    code: "OR",
    article_number: "Art. 253",
    title: "Mietvertrag – Begriff",
    summary:
      "Definiert den Mietvertrag als entgeltliche Überlassung einer Sache zum Gebrauch.",
    keywords: [
      "mietvertrag", "wohnung mieten", "miete", "mietzins", "mieter",
      "vermieter", "vermieterin",
    ],
    category: "Mietrecht",
    fedlex_url: `${OR}#art_253`,
  },
  {
    code: "OR",
    article_number: "Art. 256",
    title: "Pflichten des Vermieters",
    summary:
      "Verpflichtet den Vermieter, die Sache in gebrauchstauglichem Zustand zu übergeben und zu erhalten.",
    keywords: [
      "vermieter", "mängel wohnung", "schimmel", "heizung kaputt",
      "renovation", "umbau", "lärm nachbar", "ruhestörung", "baulärm",
      "hausordnung", "tierhaltung wohnung", "haustier erlaubt",
    ],
    category: "Mietrecht",
    fedlex_url: `${OR}#art_256`,
  },
  {
    code: "OR",
    article_number: "Art. 257d",
    title: "Zahlungsrückstand des Mieters",
    summary:
      "Regelt die Kündigung bei Zahlungsverzug des Mieters nach Nachfristansetzung.",
    keywords: [
      "miete nicht bezahlt", "zahlungsrückstand", "mietzins",
      "mietzins hinterlegen", "kündigung wohnung",
    ],
    category: "Mietrecht",
    fedlex_url: `${OR}#art_257d`,
  },
  {
    code: "OR",
    article_number: "Art. 257e",
    title: "Sicherheitsleistung (Mietkaution)",
    summary:
      "Regelt die Mietkaution und deren Hinterlegung auf einem Sperrkonto.",
    keywords: [
      "kaution", "mietkaution", "depot wohnung", "kaution zurück",
      "mietdepot konto",
    ],
    category: "Mietrecht",
    fedlex_url: `${OR}#art_257e`,
  },
  {
    code: "OR",
    article_number: "Art. 259a",
    title: "Mängel an der Mietsache",
    summary:
      "Gibt dem Mieter Rechte bei Mängeln: Beseitigung, Mietzinsherabsetzung oder Kündigung.",
    keywords: [
      "mängel wohnung", "schimmel", "heizung kaputt", "schäden wohnung",
      "haftung mieter", "wohnungsübergabe", "übergabeprotokoll",
    ],
    category: "Mietrecht",
    fedlex_url: `${OR}#art_259a`,
  },
  {
    code: "OR",
    article_number: "Art. 261",
    title: "Veräusserung der Mietsache",
    summary:
      "Regelt die Auswirkungen eines Eigentümerwechsels auf den Mietvertrag (Kauf bricht Miete nicht).",
    keywords: [
      "eigentümerwechsel", "verkauf haus mieter", "neuer vermieter",
      "mietvertrag übernahme",
    ],
    category: "Mietrecht",
    fedlex_url: `${OR}#art_261`,
  },
  {
    code: "OR",
    article_number: "Art. 262",
    title: "Untermiete",
    summary:
      "Regelt die Voraussetzungen für die Untervermietung.",
    keywords: [
      "untervermietung", "untermieter", "airbnb wohnung",
    ],
    category: "Mietrecht",
    fedlex_url: `${OR}#art_262`,
  },
  {
    code: "OR",
    article_number: "Art. 266a",
    title: "Kündigung – Ordentliche Fristen",
    summary:
      "Bestimmt die ordentlichen Kündigungsfristen und -termine für Mietverhältnisse.",
    keywords: [
      "kündigung wohnung", "kündigung mietvertrag", "kündigungsfrist wohnung",
      "auszug", "rausgeworfen wohnung", "muss ausziehen", "wohnung verlassen",
      "kündigung", "gekündigt", "vermieter kündigt", "mieter kündigung",
    ],
    category: "Mietrecht",
    fedlex_url: `${OR}#art_266a`,
  },
  {
    code: "OR",
    article_number: "Art. 266g",
    title: "Ausserordentliche Kündigung (wichtige Gründe)",
    summary:
      "Ermöglicht die vorzeitige Auflösung des Mietverhältnisses aus wichtigen Gründen.",
    keywords: [
      "fristlose kündigung wohnung", "rausgeworfen wohnung",
      "ausserordentliche kündigung", "wichtige gründe kündigung",
    ],
    category: "Mietrecht",
    fedlex_url: `${OR}#art_266g`,
  },
  {
    code: "OR",
    article_number: "Art. 269",
    title: "Missbräuchliche Mietzinse",
    summary:
      "Schützt den Mieter vor missbräuchlich hohen Mietzinsen.",
    keywords: [
      "mietzinserhöhung", "mietzins senkung", "mietzinsreduktion",
      "mietzins missbräuchlich", "mietzins zu hoch",
    ],
    category: "Mietrecht",
    fedlex_url: `${OR}#art_269`,
  },
  {
    code: "OR",
    article_number: "Art. 271",
    title: "Kündigungsschutz",
    summary:
      "Schützt den Mieter vor missbräuchlichen Kündigungen.",
    keywords: [
      "kündigung anfechten", "eigenbedarf kündigung", "kündigungsschutz miete",
      "mietgericht", "schlichtungsbehörde miete", "kündigung", "gekündigt",
      "vermieter kündigt", "kündigung ungültig",
    ],
    category: "Mietrecht",
    fedlex_url: `${OR}#art_271`,
  },
  {
    code: "OR",
    article_number: "Art. 272",
    title: "Erstreckung des Mietverhältnisses",
    summary:
      "Ermöglicht dem Mieter, eine Erstreckung des Mietverhältnisses zu verlangen.",
    keywords: [
      "erstreckung", "kündigung anfechten", "ausweisung",
      "zwangsräumung", "räumungsklage",
    ],
    category: "Mietrecht",
    fedlex_url: `${OR}#art_272`,
  },
  {
    code: "OR",
    article_number: "Art. 257a",
    title: "Nebenkosten",
    summary:
      "Regelt die Nebenkostenpflicht und die Abrechnungsmodalitäten.",
    keywords: [
      "nebenkosten", "abrechnung nebenkosten", "heizkosten",
      "nebenkostenabrechnung",
    ],
    category: "Mietrecht",
    fedlex_url: `${OR}#art_257a`,
  },

  // ──────────────────────────────────────────────
  // ARBEITSRECHT
  // ──────────────────────────────────────────────
  {
    code: "OR",
    article_number: "Art. 319",
    title: "Einzelarbeitsvertrag – Begriff",
    summary:
      "Definiert den Einzelarbeitsvertrag als entgeltliche Arbeitsleistung im Dienst des Arbeitgebers.",
    keywords: [
      "arbeitsvertrag", "arbeitsverhältnis", "arbeitgeber", "arbeitnehmer",
      "angestellt", "job", "stelle", "firma", "chef",
    ],
    category: "Arbeitsrecht",
    fedlex_url: `${OR}#art_319`,
  },
  {
    code: "OR",
    article_number: "Art. 321c",
    title: "Überstundenarbeit",
    summary:
      "Regelt die Pflicht zur Leistung von Überstunden und deren Vergütung.",
    keywords: [
      "überstunden", "überzeit", "arbeitszeit", "mehrarbeit",
    ],
    category: "Arbeitsrecht",
    fedlex_url: `${OR}#art_321c`,
  },
  {
    code: "OR",
    article_number: "Art. 322",
    title: "Lohn",
    summary:
      "Regelt den Lohnanspruch des Arbeitnehmers.",
    keywords: [
      "lohn", "lohn nicht bezahlt", "lohn ausstehend", "lohn verspätet",
      "bonus", "gratifikation", "13 lohn",
    ],
    category: "Arbeitsrecht",
    fedlex_url: `${OR}#art_322`,
  },
  {
    code: "OR",
    article_number: "Art. 324a",
    title: "Lohnfortzahlung bei Verhinderung",
    summary:
      "Sichert die Lohnfortzahlung bei Krankheit, Unfall und anderen unverschuldeten Verhinderungen.",
    keywords: [
      "krank während kündigung", "krankgeschrieben", "arbeitsunfähig",
      "arztzeugnis", "lohnfortzahlung", "krankentaggeld", "unfall arbeit",
    ],
    category: "Arbeitsrecht",
    fedlex_url: `${OR}#art_324a`,
  },
  {
    code: "OR",
    article_number: "Art. 328",
    title: "Persönlichkeitsschutz des Arbeitnehmers",
    summary:
      "Verpflichtet den Arbeitgeber zum Schutz der Persönlichkeit des Arbeitnehmers.",
    keywords: [
      "mobbing", "belästigung arbeit", "sexuelle belästigung",
      "diskriminierung arbeit", "gleichstellung", "persönlichkeitsschutz",
    ],
    category: "Arbeitsrecht",
    fedlex_url: `${OR}#art_328`,
  },
  {
    code: "OR",
    article_number: "Art. 329a",
    title: "Ferien",
    summary:
      "Bestimmt den jährlichen Ferienanspruch des Arbeitnehmers.",
    keywords: [
      "ferien", "ferienanspruch", "ferien nicht gewährt", "urlaub",
    ],
    category: "Arbeitsrecht",
    fedlex_url: `${OR}#art_329a`,
  },
  {
    code: "OR",
    article_number: "Art. 329f",
    title: "Mutterschaftsurlaub",
    summary:
      "Gewährleistet den Anspruch auf 14 Wochen Mutterschaftsurlaub.",
    keywords: [
      "mutterschaft", "mutterschaftsurlaub", "schwangerschaft arbeit",
    ],
    category: "Arbeitsrecht",
    fedlex_url: `${OR}#art_329f`,
  },
  {
    code: "OR",
    article_number: "Art. 329g",
    title: "Vaterschaftsurlaub",
    summary:
      "Gewährt dem Vater einen Anspruch auf zwei Wochen Vaterschaftsurlaub.",
    keywords: [
      "vaterschaftsurlaub", "vaterschaft urlaub", "geburt urlaub",
    ],
    category: "Arbeitsrecht",
    fedlex_url: `${OR}#art_329g`,
  },
  {
    code: "OR",
    article_number: "Art. 330a",
    title: "Arbeitszeugnis",
    summary:
      "Gewährt dem Arbeitnehmer das Recht auf ein Arbeitszeugnis.",
    keywords: [
      "zeugnis arbeit", "arbeitszeugnis", "zwischenzeugnis",
    ],
    category: "Arbeitsrecht",
    fedlex_url: `${OR}#art_330a`,
  },
  {
    code: "OR",
    article_number: "Art. 335",
    title: "Kündigung des Arbeitsverhältnisses",
    summary:
      "Regelt die ordentliche Kündigung des Arbeitsverhältnisses.",
    keywords: [
      "kündigung job", "gekündigt", "entlassen", "kündigungsfrist job",
      "kündigt worde", "usegschmisse", "kündigung arbeit",
      "arbeit verloren", "stelle verloren", "rausgeschmissen arbeit",
    ],
    category: "Arbeitsrecht",
    fedlex_url: `${OR}#art_335`,
  },
  {
    code: "OR",
    article_number: "Art. 335b",
    title: "Kündigung in der Probezeit",
    summary:
      "Regelt die Kündigung während der Probezeit mit verkürzter Frist.",
    keywords: [
      "probezeit", "kündigung in probezeit", "probezeit kündigung",
    ],
    category: "Arbeitsrecht",
    fedlex_url: `${OR}#art_335b`,
  },
  {
    code: "OR",
    article_number: "Art. 336",
    title: "Missbräuchliche Kündigung",
    summary:
      "Definiert, wann eine Kündigung als missbräuchlich gilt, und gewährt Entschädigung.",
    keywords: [
      "missbräuchliche kündigung", "kündigungsschutz", "ungerechtfertigte kündigung",
      "arbeitsgericht", "arbeitsstreit",
    ],
    category: "Arbeitsrecht",
    fedlex_url: `${OR}#art_336`,
  },
  {
    code: "OR",
    article_number: "Art. 336c",
    title: "Kündigung zur Unzeit (Sperrfristen)",
    summary:
      "Verbietet die Kündigung während Krankheit, Militärdienst oder Schwangerschaft.",
    keywords: [
      "krank während kündigung", "sperrfrist", "kündigungsschutz",
      "schwangerschaft kündigung",
    ],
    category: "Arbeitsrecht",
    fedlex_url: `${OR}#art_336c`,
  },
  {
    code: "OR",
    article_number: "Art. 337",
    title: "Fristlose Kündigung",
    summary:
      "Erlaubt die sofortige Auflösung des Arbeitsverhältnisses aus wichtigem Grund.",
    keywords: [
      "fristlose kündigung", "sofortige entlassung",
      "fristlose entlassung", "wichtiger grund kündigung",
      "fristlos entlassen", "sofort entlassen", "auf der stelle entlassen",
    ],
    category: "Arbeitsrecht",
    fedlex_url: `${OR}#art_337`,
  },
  {
    code: "OR",
    article_number: "Art. 340",
    title: "Konkurrenzverbot",
    summary:
      "Regelt die Zulässigkeit und die Grenzen von Konkurrenzverboten.",
    keywords: [
      "konkurrenzverbot", "wettbewerbsverbot", "konkurrenzklausel",
    ],
    category: "Arbeitsrecht",
    fedlex_url: `${OR}#art_340`,
  },

  // ──────────────────────────────────────────────
  // KAUFVERTRAG & VERTRAGSRECHT
  // ──────────────────────────────────────────────
  {
    code: "OR",
    article_number: "Art. 1",
    title: "Abschluss des Vertrages",
    summary:
      "Grundsatz: Ein Vertrag kommt durch übereinstimmende Willensäusserung zustande.",
    keywords: [
      "vertrag", "offerte", "angebot", "annahme", "vertragsabschluss",
    ],
    category: "Kaufvertrag & Vertragsrecht",
    fedlex_url: `${OR}#art_1`,
  },
  {
    code: "OR",
    article_number: "Art. 18",
    title: "Auslegung des Vertrages",
    summary:
      "Verträge sind nach dem tatsächlichen Willen der Parteien auszulegen.",
    keywords: [
      "vertrag", "vertragsauslegung", "kleingedrucktes", "agb",
    ],
    category: "Kaufvertrag & Vertragsrecht",
    fedlex_url: `${OR}#art_18`,
  },
  {
    code: "OR",
    article_number: "Art. 23",
    title: "Irrtum beim Vertragsabschluss",
    summary:
      "Ermöglicht die Anfechtung eines Vertrages bei wesentlichem Irrtum.",
    keywords: [
      "vertrag widerrufen", "vertrag rücktritt", "rücktritt vom vertrag",
      "irrtum", "vertrag anfechten",
    ],
    category: "Kaufvertrag & Vertragsrecht",
    fedlex_url: `${OR}#art_23`,
  },
  {
    code: "OR",
    article_number: "Art. 97",
    title: "Nichterfüllung von Vertragspflichten",
    summary:
      "Regelt die Haftung bei Nichterfüllung oder mangelhafter Erfüllung eines Vertrages.",
    keywords: [
      "vertrag nicht erfüllt", "nichtleistung", "schlechterfüllung",
      "vertragsbruch", "schadenersatz",
    ],
    category: "Kaufvertrag & Vertragsrecht",
    fedlex_url: `${OR}#art_97`,
  },
  {
    code: "OR",
    article_number: "Art. 102",
    title: "Verzug des Schuldners",
    summary:
      "Regelt den Eintritt des Schuldnerverzugs und dessen Rechtsfolgen.",
    keywords: [
      "verzug", "lieferverzug", "zahlung nicht erfolgt",
      "rechnung nicht bezahlt", "mahnung", "zahlungsverzug",
    ],
    category: "Kaufvertrag & Vertragsrecht",
    fedlex_url: `${OR}#art_102`,
  },
  {
    code: "OR",
    article_number: "Art. 107",
    title: "Rücktritt vom Vertrag bei Verzug",
    summary:
      "Ermöglicht den Rücktritt vom Vertrag nach Nachfristansetzung.",
    keywords: [
      "rücktritt vom vertrag", "vertrag kündigen", "kündigung vertrag",
      "vertrag auflösen",
    ],
    category: "Kaufvertrag & Vertragsrecht",
    fedlex_url: `${OR}#art_107`,
  },
  {
    code: "OR",
    article_number: "Art. 184",
    title: "Kaufvertrag – Begriff",
    summary:
      "Definiert den Kaufvertrag als Austausch von Sache gegen Preis.",
    keywords: [
      "kaufvertrag", "online kauf", "kauf", "fernabsatz", "ware",
    ],
    category: "Kaufvertrag & Vertragsrecht",
    fedlex_url: `${OR}#art_184`,
  },
  {
    code: "OR",
    article_number: "Art. 197",
    title: "Gewährleistung beim Kauf",
    summary:
      "Verpflichtet den Verkäufer zur Haftung für Mängel der verkauften Sache.",
    keywords: [
      "mangel", "mängelrüge", "garantie", "gewährleistung",
      "nachbesserung", "ersatzlieferung", "preisreduktion", "wandelung",
    ],
    category: "Kaufvertrag & Vertragsrecht",
    fedlex_url: `${OR}#art_197`,
  },
  {
    code: "OR",
    article_number: "Art. 127",
    title: "Verjährungsfrist – 10 Jahre",
    summary:
      "Die allgemeine Verjährungsfrist für Forderungen beträgt 10 Jahre.",
    keywords: [
      "verjährung", "frist abgelaufen", "verjährungsfrist",
    ],
    category: "Kaufvertrag & Vertragsrecht",
    fedlex_url: `${OR}#art_127`,
  },
  {
    code: "OR",
    article_number: "Art. 128",
    title: "Kürzere Verjährungsfristen",
    summary:
      "Bestimmte Forderungen verjähren bereits nach 5 Jahren.",
    keywords: [
      "verjährung", "frist abgelaufen", "verjährungsfrist", "miete verjährt",
      "lohn verjährt",
    ],
    category: "Kaufvertrag & Vertragsrecht",
    fedlex_url: `${OR}#art_128`,
  },

  // ──────────────────────────────────────────────
  // HAFTPFLICHT & SCHADENERSATZ
  // ──────────────────────────────────────────────
  {
    code: "OR",
    article_number: "Art. 41",
    title: "Haftung aus unerlaubter Handlung",
    summary:
      "Wer einem anderen widerrechtlich Schaden zufügt, ist zum Ersatz verpflichtet.",
    keywords: [
      "haftung", "schaden", "schadenersatz", "unerlaubte handlung",
      "verschulden", "fahrlässigkeit", "absicht", "widerrechtlich",
      "körperverletzung", "sachschaden", "ausservertragliche haftung",
      "kausalität", "haftpflichtversicherung", "regress",
      "solidarhaftung", "mitverschulden",
    ],
    category: "Haftpflicht & Schadenersatz",
    fedlex_url: `${OR}#art_41`,
  },
  {
    code: "OR",
    article_number: "Art. 43",
    title: "Schadenersatz – Bestimmung",
    summary:
      "Das Gericht bestimmt Art und Grösse des Schadenersatzes.",
    keywords: [
      "schadenersatz", "schadenberechnung", "ersatzforderung",
      "sachschaden", "körperverletzung", "schaden berechnen",
    ],
    category: "Haftpflicht & Schadenersatz",
    fedlex_url: `${OR}#art_43`,
  },
  {
    code: "OR",
    article_number: "Art. 44",
    title: "Herabsetzung des Schadenersatzes",
    summary:
      "Der Schadenersatz kann herabgesetzt werden bei Mitverschulden des Geschädigten.",
    keywords: [
      "mitverschulden", "herabsetzung", "schadenersatz reduktion",
    ],
    category: "Haftpflicht & Schadenersatz",
    fedlex_url: `${OR}#art_44`,
  },
  {
    code: "OR",
    article_number: "Art. 47",
    title: "Genugtuung",
    summary:
      "Bei Körperverletzung oder Tod kann das Gericht eine Genugtuung zusprechen.",
    keywords: [
      "genugtuung", "schmerzensgeld", "körperverletzung",
      "persönlichkeitsverletzung", "verletzung", "verletzt",
    ],
    category: "Haftpflicht & Schadenersatz",
    fedlex_url: `${OR}#art_47`,
  },
  {
    code: "OR",
    article_number: "Art. 55",
    title: "Geschäftsherrenhaftung",
    summary:
      "Der Geschäftsherr haftet für Schäden, die seine Angestellten verursachen.",
    keywords: [
      "geschäftsherrenhaftung", "arbeitgeber haftung", "solidarhaftung",
      "haftung arbeitgeber",
    ],
    category: "Haftpflicht & Schadenersatz",
    fedlex_url: `${OR}#art_55`,
  },
  {
    code: "OR",
    article_number: "Art. 58",
    title: "Werkeigentümerhaftung",
    summary:
      "Der Eigentümer eines Gebäudes oder Werks haftet für Schäden durch mangelhafte Anlage oder Unterhalt.",
    keywords: [
      "werkmangel", "gebäude haftung", "werkeigentümerhaftung",
      "bauschaden", "produktehaftung",
    ],
    category: "Haftpflicht & Schadenersatz",
    fedlex_url: `${OR}#art_58`,
  },
  {
    code: "OR",
    article_number: "Art. 49",
    title: "Verletzung der Persönlichkeit – Genugtuung",
    summary:
      "Bei widerrechtlicher Persönlichkeitsverletzung kann eine Geldsumme als Genugtuung verlangt werden.",
    keywords: [
      "persönlichkeitsverletzung", "genugtuung", "rufschädigung",
      "ehrverletzung", "schmerzensgeld behandlung",
    ],
    category: "Haftpflicht & Schadenersatz",
    fedlex_url: `${OR}#art_49`,
  },

  // ──────────────────────────────────────────────
  // EIGENTUM & SACHRECHT
  // ──────────────────────────────────────────────
  {
    code: "ZGB",
    article_number: "Art. 641",
    title: "Eigentum – Inhalt",
    summary:
      "Der Eigentümer kann über seine Sache frei verfügen.",
    keywords: [
      "eigentum", "besitz", "eigentumsrecht", "eigentumsübertragung",
    ],
    category: "Eigentum & Sachrecht",
    fedlex_url: `${ZGB}#art_641`,
  },
  {
    code: "ZGB",
    article_number: "Art. 655",
    title: "Grundeigentum",
    summary:
      "Definiert das Grundeigentum und die Eintragung im Grundbuch.",
    keywords: [
      "grundstück", "haus", "wohnung eigentum", "grundeigentum",
      "kauf grundstück", "verkauf haus",
    ],
    category: "Eigentum & Sachrecht",
    fedlex_url: `${ZGB}#art_655`,
  },
  {
    code: "ZGB",
    article_number: "Art. 684",
    title: "Nachbarrecht – Übermässige Einwirkungen",
    summary:
      "Verbietet übermässige Einwirkungen auf das Nachbargrundstück (Lärm, Rauch etc.).",
    keywords: [
      "nachbar lärm", "ruhestörung", "lärm nachbar", "nachbarstreit",
      "grenze grundstück", "zaun streit", "musik zu laut",
      "grill rauch", "baum zu hoch", "äste über grenze",
      "sicht versperrt", "kamera nachbar", "grenzabstand",
      "garten streit", "haustier nachbar", "hund bellt",
      "wegerecht streit", "zufahrt blockiert",
    ],
    category: "Nachbarrecht",
    fedlex_url: `${ZGB}#art_684`,
  },
  {
    code: "ZGB",
    article_number: "Art. 679",
    title: "Haftung des Grundeigentümers",
    summary:
      "Der Grundeigentümer haftet für Schäden bei Überschreitung seines Eigentumsrechts.",
    keywords: [
      "haftung grundeigentümer", "nachbar schaden",
      "wasser läuft über", "hangrutschung nachbar",
    ],
    category: "Nachbarrecht",
    fedlex_url: `${ZGB}#art_679`,
  },
  {
    code: "ZGB",
    article_number: "Art. 712a",
    title: "Stockwerkeigentum",
    summary:
      "Regelt das Stockwerkeigentum als Sonderform des Miteigentums.",
    keywords: [
      "stockwerkeigentum", "eigentumswohnung", "miteigentum",
      "gemeinschaftseigentum",
    ],
    category: "Eigentum & Sachrecht",
    fedlex_url: `${ZGB}#art_712a`,
  },
  {
    code: "ZGB",
    article_number: "Art. 730",
    title: "Dienstbarkeiten",
    summary:
      "Regelt Grunddienstbarkeiten (Wegrechte, Leitungsrechte etc.).",
    keywords: [
      "wegrecht", "dienstbarkeit", "leitungsrecht", "servitut",
    ],
    category: "Eigentum & Sachrecht",
    fedlex_url: `${ZGB}#art_730`,
  },
  {
    code: "ZGB",
    article_number: "Art. 745",
    title: "Nutzniessung",
    summary:
      "Der Nutzniesser hat das Recht auf Besitz, Gebrauch und Nutzung einer Sache.",
    keywords: [
      "nutzniessung", "nutzungsrecht", "fruchtgenuss",
    ],
    category: "Eigentum & Sachrecht",
    fedlex_url: `${ZGB}#art_745`,
  },
  {
    code: "ZGB",
    article_number: "Art. 776",
    title: "Wohnrecht",
    summary:
      "Berechtigt den Inhaber, in einem Gebäude zu wohnen.",
    keywords: [
      "wohnrecht", "wohnrecht eintragen", "recht zu wohnen",
    ],
    category: "Eigentum & Sachrecht",
    fedlex_url: `${ZGB}#art_776`,
  },
  {
    code: "ZGB",
    article_number: "Art. 793",
    title: "Grundpfandrecht",
    summary:
      "Regelt die Hypothek als Grundpfandrecht zur Sicherung einer Forderung.",
    keywords: [
      "hypothek", "pfandrecht", "grundpfand", "grundbuch",
    ],
    category: "Eigentum & Sachrecht",
    fedlex_url: `${ZGB}#art_793`,
  },
  {
    code: "ZGB",
    article_number: "Art. 837",
    title: "Bauhandwerkerpfandrecht",
    summary:
      "Gewährt Handwerkern und Unternehmern ein gesetzliches Pfandrecht am Grundstück.",
    keywords: [
      "bauhandwerkerpfandrecht", "pfandrecht eintragen",
      "handwerker pfandrecht", "bau pfandrecht",
    ],
    category: "Eigentum & Sachrecht",
    fedlex_url: `${ZGB}#art_837`,
  },

  // ──────────────────────────────────────────────
  // SCHULDEN & BETREIBUNG (OR + SchKG)
  // ──────────────────────────────────────────────
  {
    code: "OR",
    article_number: "Art. 68",
    title: "Erfüllung – Grundsätze",
    summary:
      "Regelt die Grundsätze der Vertragserfüllung und der Zahlungspflicht.",
    keywords: [
      "schuld", "schulden", "forderung", "rechnung offen",
      "zahlungspflicht", "gläubiger", "schuldner",
    ],
    category: "Schulden & Betreibung",
    fedlex_url: `${OR}#art_68`,
  },
  {
    code: "OR",
    article_number: "Art. 104",
    title: "Verzugszins",
    summary:
      "Bei Zahlungsverzug ist ein Verzugszins von mindestens 5% geschuldet.",
    keywords: [
      "verzugszins", "zinsforderung", "zahlungsverzug", "zins zu hoch",
    ],
    category: "Schulden & Betreibung",
    fedlex_url: `${OR}#art_104`,
  },
  {
    code: "SchKG",
    article_number: "Art. 67",
    title: "Betreibungsbegehren",
    summary:
      "Der Gläubiger kann beim Betreibungsamt die Betreibung einleiten.",
    keywords: [
      "betreibung", "betreibungsamt", "betreibungsbegehren",
      "inkasso", "forderung eintreiben", "gläubiger",
      "schulden eintreiben",
    ],
    category: "Schulden & Betreibung",
    fedlex_url: `${SchKG}#art_67`,
  },
  {
    code: "SchKG",
    article_number: "Art. 69",
    title: "Zahlungsbefehl",
    summary:
      "Das Betreibungsamt stellt dem Schuldner einen Zahlungsbefehl zu.",
    keywords: [
      "zahlungsbefehl", "betreibung", "betreibungsamt",
      "schuldner", "forderung", "mahnung", "mahnverfahren",
    ],
    category: "Schulden & Betreibung",
    fedlex_url: `${SchKG}#art_69`,
  },
  {
    code: "SchKG",
    article_number: "Art. 74",
    title: "Rechtsvorschlag",
    summary:
      "Der Schuldner kann innert 10 Tagen Rechtsvorschlag erheben und die Betreibung bestreiten.",
    keywords: [
      "rechtsvorschlag", "betreibung bestreiten", "zahlungsbefehl",
      "einsprache betreibung", "betreibung stoppen",
    ],
    category: "Schulden & Betreibung",
    fedlex_url: `${SchKG}#art_74`,
  },
  {
    code: "SchKG",
    article_number: "Art. 89",
    title: "Pfändung",
    summary:
      "Kann der Schuldner nicht zahlen, werden seine Vermögenswerte gepfändet.",
    keywords: [
      "pfändung", "lohnpfändung", "kontopfändung", "vermögen pfänden",
      "existenzminimum", "betreibung", "gepfändet",
    ],
    category: "Schulden & Betreibung",
    fedlex_url: `${SchKG}#art_89`,
  },
  {
    code: "SchKG",
    article_number: "Art. 92",
    title: "Unpfändbare Vermögenswerte",
    summary:
      "Bestimmte Gegenstände und Einkünfte sind vom Gesetz her unpfändbar (Existenzminimum).",
    keywords: [
      "unpfändbar", "existenzminimum", "pfändung", "lohnpfändung",
      "grundbedarf", "betreibungsrechtliches minimum",
    ],
    category: "Schulden & Betreibung",
    fedlex_url: `${SchKG}#art_92`,
  },
  {
    code: "SchKG",
    article_number: "Art. 149",
    title: "Verlustschein",
    summary:
      "Kann eine Forderung nicht vollständig gedeckt werden, erhält der Gläubiger einen Verlustschein.",
    keywords: [
      "verlustschein", "betreibung erfolglos", "forderung ungedeckt",
      "schulden bleiben", "restschuld",
    ],
    category: "Schulden & Betreibung",
    fedlex_url: `${SchKG}#art_149`,
  },
  {
    code: "SchKG",
    article_number: "Art. 159",
    title: "Konkursbegehren",
    summary:
      "Regelt die Voraussetzungen für die Eröffnung eines Konkursverfahrens.",
    keywords: [
      "konkurs", "privatkonkurs", "konkursbegehren",
      "zahlungsunfähig", "insolvenz", "schuldensanierung",
    ],
    category: "Schulden & Betreibung",
    fedlex_url: `${SchKG}#art_159`,
  },
  {
    code: "SchKG",
    article_number: "Art. 333",
    title: "Nachlassvertrag",
    summary:
      "Ermöglicht einen aussergerichtlichen oder gerichtlichen Vergleich mit den Gläubigern.",
    keywords: [
      "nachlassstundung", "schuldensanierung", "zahlungserleichterung",
      "ratenplan", "schulden sanieren", "nachlassvertrag",
      "gläubigervergleich",
    ],
    category: "Schulden & Betreibung",
    fedlex_url: `${SchKG}#art_333`,
  },

  // ──────────────────────────────────────────────
  // KONKUBINAT & LEBENSPARTNERSCHAFT
  // ──────────────────────────────────────────────
  {
    code: "ZGB",
    article_number: "Art. 163",
    title: "Ehelicher Unterhalt (analog Konkubinat)",
    summary:
      "Regelung des gegenseitigen Unterhalts – bei Konkubinat nur analog anwendbar.",
    keywords: [
      "konkubinat", "lebensgemeinschaft", "zusammenleben unverheiratet",
      "unterhalt unverheiratet", "partnervertrag", "konkubinatsvertrag",
      "trennung unverheiratet", "gemeinsame wohnung unverheiratet",
      "gemeinsames konto unverheiratet", "konto trennen",
      "vermögen aufteilen unverheiratet", "haus gemeinsam gekauft",
      "schenkung partner", "darlehen partner", "konkubinat erbrecht",
      "erbe lebenspartner", "todesfall partner unverheiratet",
      "gemeinsames kind unverheiratet", "vaterschaft unverheiratet",
      "sorgerecht unverheiratet", "alimenten unverheiratet",
      "eingetragene partnerschaft", "auflösung partnerschaft",
    ],
    category: "Konkubinat & Lebenspartnerschaft",
    fedlex_url: `${ZGB}#art_163`,
  },

  // ──────────────────────────────────────────────
  // ERWACHSENENSCHUTZ & KESB
  // ──────────────────────────────────────────────
  {
    code: "ZGB",
    article_number: "Art. 360",
    title: "Vorsorgeauftrag",
    summary:
      "Ermöglicht die Regelung der eigenen Vertretung bei Urteilsunfähigkeit.",
    keywords: [
      "vorsorgeauftrag", "urteilsunfähig", "handlungsunfähigkeit",
      "vorsorge", "vertretungsrecht",
    ],
    category: "Erwachsenenschutz & KESB",
    fedlex_url: `${ZGB}#art_360`,
  },
  {
    code: "ZGB",
    article_number: "Art. 370",
    title: "Patientenverfügung",
    summary:
      "Regelt die medizinische Willensäusserung für den Fall der Urteilsunfähigkeit.",
    keywords: [
      "patientenverfügung", "medizinische entscheidung stellvertretung",
      "vorausverfügung", "behandlungswunsch",
    ],
    category: "Erwachsenenschutz & KESB",
    fedlex_url: `${ZGB}#art_370`,
  },
  {
    code: "ZGB",
    article_number: "Art. 390",
    title: "Beistandschaft – Voraussetzungen",
    summary:
      "Die KESB errichtet eine Beistandschaft, wenn eine schutzbedürftige Person Hilfe benötigt.",
    keywords: [
      "beistandschaft erwachsene", "kesb verfahren", "beistand eingesetzt",
      "schutzbedürftigkeit", "vertretungsbeistandschaft",
    ],
    category: "Erwachsenenschutz & KESB",
    fedlex_url: `${ZGB}#art_390`,
  },
  {
    code: "ZGB",
    article_number: "Art. 394",
    title: "Vertretungsbeistandschaft",
    summary:
      "Der Beistand vertritt die betroffene Person in bestimmten Angelegenheiten.",
    keywords: [
      "vertretungsbeistandschaft", "beistandschaft",
      "vermögensverwaltung beistand", "kesb",
    ],
    category: "Erwachsenenschutz & KESB",
    fedlex_url: `${ZGB}#art_394`,
  },
  {
    code: "ZGB",
    article_number: "Art. 398",
    title: "Umfassende Beistandschaft",
    summary:
      "Bei umfassender Hilfsbedürftigkeit wird eine Vollbeistandschaft errichtet.",
    keywords: [
      "umfassende beistandschaft", "vollbeistandschaft",
      "demenz entscheidung", "betreuung alter",
    ],
    category: "Erwachsenenschutz & KESB",
    fedlex_url: `${ZGB}#art_398`,
  },
  {
    code: "ZGB",
    article_number: "Art. 426",
    title: "Fürsorgerische Unterbringung",
    summary:
      "Ermöglicht die Unterbringung einer Person in einer Einrichtung gegen ihren Willen.",
    keywords: [
      "fürsorgerische unterbringung", "fu unterbringung", "zwangseinweisung",
      "psychiatrische einweisung", "unterbringung gegen willen",
    ],
    category: "Erwachsenenschutz & KESB",
    fedlex_url: `${ZGB}#art_426`,
  },
  {
    code: "ZGB",
    article_number: "Art. 450",
    title: "Beschwerde gegen KESB-Entscheide",
    summary:
      "Ermöglicht die Anfechtung von KESB-Entscheiden beim zuständigen Gericht.",
    keywords: [
      "beschwerde gegen kesb", "kesb entscheid", "kesb anfechten",
      "rekurs kesb",
    ],
    category: "Erwachsenenschutz & KESB",
    fedlex_url: `${ZGB}#art_450`,
  },

  // ──────────────────────────────────────────────
  // DATENSCHUTZ & PERSÖNLICHKEITSSCHUTZ
  // ──────────────────────────────────────────────
  {
    code: "ZGB",
    article_number: "Art. 28",
    title: "Schutz der Persönlichkeit",
    summary:
      "Schützt gegen jede widerrechtliche Verletzung der Persönlichkeit.",
    keywords: [
      "persönlichkeitsverletzung", "rufschädigung", "üble nachrede",
      "verleumdung", "ehrverletzung", "intimsphäre", "foto ohne erlaubnis",
      "bild veröffentlicht", "video veröffentlicht",
      "social media beleidigung", "datenschutz",
      "daten missbrauch", "personenbezogene daten", "auskunftsrecht daten",
      "daten löschen", "daten berichtigen", "datenschutzverletzung",
      "geheimhaltung", "arztgeheimnis", "bankgeheimnis",
      "überwachung arbeit", "kamera arbeitsplatz",
      "gespräch aufgenommen", "aufnahme ohne erlaubnis",
      "tracking ohne zustimmung",
    ],
    category: "Datenschutz & Persönlichkeitsschutz",
    fedlex_url: `${ZGB}#art_28`,
  },
  {
    code: "ZGB",
    article_number: "Art. 28a",
    title: "Klagen bei Persönlichkeitsverletzung",
    summary:
      "Der Verletzte kann auf Unterlassung, Beseitigung oder Feststellung klagen.",
    keywords: [
      "unterlassung", "gegendarstellung verlangen",
      "richtigstellung verlangen", "medienhaftung",
    ],
    category: "Datenschutz & Persönlichkeitsschutz",
    fedlex_url: `${ZGB}#art_28a`,
  },

  // ──────────────────────────────────────────────
  // BAURECHT & WERKVERTRAG
  // ──────────────────────────────────────────────
  {
    code: "OR",
    article_number: "Art. 363",
    title: "Werkvertrag – Begriff",
    summary:
      "Definiert den Werkvertrag als Herstellung eines Werkes gegen Vergütung.",
    keywords: [
      "werkvertrag", "bauvertrag", "unternehmer", "handwerker",
      "werklohn", "werklohnforderung",
    ],
    category: "Baurecht & Werkvertrag",
    fedlex_url: `${OR}#art_363`,
  },
  {
    code: "OR",
    article_number: "Art. 367",
    title: "Mängelrüge beim Werkvertrag",
    summary:
      "Der Besteller muss Mängel nach Abnahme unverzüglich rügen.",
    keywords: [
      "baumängel", "baumangel", "mängel am bau", "riss in wand",
      "wasserschaden neubau", "garantie bau", "gewährleistung bau",
      "nachbesserung bau", "abnahme bau", "abnahmeprotokoll",
    ],
    category: "Baurecht & Werkvertrag",
    fedlex_url: `${OR}#art_367`,
  },
  {
    code: "OR",
    article_number: "Art. 373",
    title: "Kostenvoranschlag",
    summary:
      "Regelt die Bindung an den Kostenvoranschlag und Mehrkostenforderungen.",
    keywords: [
      "kostenvoranschlag überschritten", "mehrkosten bau",
      "bauverzögerung", "verzug bau", "baufirma konkurs",
      "architekt haftung", "bauleitung fehler", "baustopp",
      "baubewilligung problem", "zahlung zurückbehalten bau",
    ],
    category: "Baurecht & Werkvertrag",
    fedlex_url: `${OR}#art_373`,
  },

  // ──────────────────────────────────────────────
  // TIERHALTER-HAFTUNG
  // ──────────────────────────────────────────────
  {
    code: "OR",
    article_number: "Art. 56",
    title: "Tierhalterhaftung",
    summary:
      "Der Tierhalter haftet für Schäden, die sein Tier verursacht.",
    keywords: [
      "hundebiss", "hundebiss haftung", "katze schaden", "tierhalter haftung",
      "haustier schaden", "tier schaden", "hund verletzt",
      "tierarzt fehler", "tierkauf mangel", "pferdekauf streit",
      "tierquälerei meldung", "tier weggenommen",
      "haustier verbot wohnung", "nachbar beschwert hund",
      "tier verkauft krank", "zuchtvertrag streit",
    ],
    category: "Tiere & Tierhaltung",
    fedlex_url: `${OR}#art_56`,
  },

  // ──────────────────────────────────────────────
  // GESELLSCHAFTSRECHT (AG / GMBH)
  // ──────────────────────────────────────────────
  {
    code: "OR",
    article_number: "Art. 620",
    title: "Aktiengesellschaft – Begriff",
    summary:
      "Definiert die Aktiengesellschaft als Gesellschaft mit eigenem Firmennamen und festem Kapital.",
    keywords: [
      "aktiengesellschaft", "ag gründen", "aktien", "kapitalgesellschaft",
    ],
    category: "Gesellschaftsrecht",
    fedlex_url: `${OR}#art_620`,
  },
  {
    code: "OR",
    article_number: "Art. 706",
    title: "Anfechtung von GV-Beschlüssen",
    summary:
      "Ermöglicht die Anfechtung von Beschlüssen der Generalversammlung.",
    keywords: [
      "generalversammlung", "gv beschluss anfechten", "aktionär streit",
      "protokoll gv", "dividende nicht ausbezahlt",
    ],
    category: "Gesellschaftsrecht",
    fedlex_url: `${OR}#art_706`,
  },
  {
    code: "OR",
    article_number: "Art. 716a",
    title: "Unübertragbare Aufgaben des Verwaltungsrats",
    summary:
      "Definiert die zentralen, nicht delegierbaren Aufgaben des Verwaltungsrats.",
    keywords: [
      "verwaltungsrat pflichten", "verwaltungsrat", "vr aufgaben",
    ],
    category: "Gesellschaftsrecht",
    fedlex_url: `${OR}#art_716a`,
  },
  {
    code: "OR",
    article_number: "Art. 717",
    title: "Sorgfalts- und Treuepflicht",
    summary:
      "Der Verwaltungsrat muss seine Aufgaben mit aller Sorgfalt erfüllen.",
    keywords: [
      "sorgfaltspflicht verwaltungsrat", "treuepflicht",
      "insichgeschäft", "interessenkonflikt",
    ],
    category: "Gesellschaftsrecht",
    fedlex_url: `${OR}#art_717`,
  },
  {
    code: "OR",
    article_number: "Art. 725",
    title: "Kapitalverlust und Überschuldung",
    summary:
      "Regelt die Pflichten bei Kapitalverlust und Überschuldung der AG.",
    keywords: [
      "überschuldung firma", "bilanz deponieren", "firma konkurs",
      "unternehmenskonkurs", "konkurseröffnung", "nachlassstundung",
      "sanierung firma",
    ],
    category: "Gesellschaftsrecht",
    fedlex_url: `${OR}#art_725`,
  },
  {
    code: "OR",
    article_number: "Art. 754",
    title: "Verantwortlichkeit (Organhaftung)",
    summary:
      "Organe der Gesellschaft haften für Schäden durch Pflichtverletzung.",
    keywords: [
      "organhaftung", "haftung verwaltungsrat", "haftung geschäftsführer",
      "durchgriffshaftung", "privat haftung geschäftsführer",
    ],
    category: "Gesellschaftsrecht",
    fedlex_url: `${OR}#art_754`,
  },
  {
    code: "OR",
    article_number: "Art. 772",
    title: "GmbH – Begriff",
    summary:
      "Definiert die GmbH als Gesellschaft mit Stammanteilen.",
    keywords: [
      "gmbh gründen", "gmbh", "stammanteile übertragen",
      "gesellschafter streit", "gmbh konkurs",
    ],
    category: "Gesellschaftsrecht",
    fedlex_url: `${OR}#art_772`,
  },

  // ──────────────────────────────────────────────
  // VEREINSRECHT & STIFTUNGEN
  // ──────────────────────────────────────────────
  {
    code: "ZGB",
    article_number: "Art. 60",
    title: "Verein – Gründung",
    summary:
      "Vereine mit ideellem Zweck erlangen Persönlichkeit mit Erlass der Statuten.",
    keywords: [
      "verein gründen", "statuten verein", "vereinsgründung",
      "vereinsvorstand haftung",
    ],
    category: "Vereinsrecht & Stiftungen",
    fedlex_url: `${ZGB}#art_60`,
  },
  {
    code: "ZGB",
    article_number: "Art. 75",
    title: "Anfechtung von Vereinsbeschlüssen",
    summary:
      "Vereinsmitglieder können gesetzeswidrige Beschlüsse anfechten.",
    keywords: [
      "beschluss anfechten verein", "vereinsversammlung",
      "mitglied ausschliessen", "ausschluss verein",
    ],
    category: "Vereinsrecht & Stiftungen",
    fedlex_url: `${ZGB}#art_75`,
  },
  {
    code: "ZGB",
    article_number: "Art. 80",
    title: "Stiftung – Errichtung",
    summary:
      "Regelt die Errichtung einer Stiftung durch Widmung eines Vermögens für einen besonderen Zweck.",
    keywords: [
      "stiftung gründen", "stiftungsrat haftung", "aufsicht stiftung",
      "zweckänderung stiftung",
    ],
    category: "Vereinsrecht & Stiftungen",
    fedlex_url: `${ZGB}#art_80`,
  },

  // ──────────────────────────────────────────────
  // STRASSENVERKEHR & FAHRZEUG (SVG)
  // ──────────────────────────────────────────────
  {
    code: "SVG",
    article_number: "Art. 58",
    title: "Haftpflicht des Fahrzeughalters",
    summary:
      "Der Halter eines Motorfahrzeugs haftet für Schäden durch den Betrieb des Fahrzeugs (Kausalhaftung).",
    keywords: [
      "verkehrsunfall", "autounfall", "unfall verursacht",
      "unfall schuldfrage", "haftung halter", "haftpflicht auto",
      "kausalhaftung", "motorfahrzeug haftung", "auffahrunfall",
      "kollision", "unfall", "auto unfall",
    ],
    category: "Strassenverkehr & Fahrzeug",
    fedlex_url: `${SVG}#art_58`,
  },
  {
    code: "SVG",
    article_number: "Art. 59",
    title: "Haftung bei Zusammenstössen",
    summary:
      "Regelt die Haftung bei Zusammenstössen von Motorfahrzeugen untereinander.",
    keywords: [
      "zusammenstoss", "verkehrsunfall", "autounfall", "auffahrunfall",
      "kollision", "unfall schuldfrage", "mitverschulden unfall",
      "unfall verursacht",
    ],
    category: "Strassenverkehr & Fahrzeug",
    fedlex_url: `${SVG}#art_59`,
  },
  {
    code: "SVG",
    article_number: "Art. 62",
    title: "Schadenersatz bei Verkehrsunfall",
    summary:
      "Bestimmt den Umfang des Schadenersatzes bei Verkehrsunfällen.",
    keywords: [
      "schadenersatz unfall", "verkehrsunfall", "autounfall",
      "sachschaden auto", "reparaturkosten", "totalschaden",
      "versicherung regress",
    ],
    category: "Strassenverkehr & Fahrzeug",
    fedlex_url: `${SVG}#art_62`,
  },
  {
    code: "SVG",
    article_number: "Art. 65",
    title: "Genugtuung bei Verkehrsunfall",
    summary:
      "Ermöglicht eine Genugtuung bei Körperverletzung oder Tod durch einen Verkehrsunfall.",
    keywords: [
      "genugtuung unfall", "schmerzensgeld unfall", "verkehrsunfall",
      "autounfall", "körperverletzung unfall", "tod unfall",
      "velo unfall",
    ],
    category: "Strassenverkehr & Fahrzeug",
    fedlex_url: `${SVG}#art_65`,
  },
  {
    code: "SVG",
    article_number: "Art. 90",
    title: "Geschwindigkeitsübertretung",
    summary:
      "Stellt die Überschreitung der zulässigen Höchstgeschwindigkeit unter Strafe.",
    keywords: [
      "geschwindigkeitsüberschreitung", "blitzer", "busse erhalten",
      "ordnungsbusse", "rasen", "zu schnell gefahren",
      "geschwindigkeit", "radar",
    ],
    category: "Strassenverkehr & Fahrzeug",
    fedlex_url: `${SVG}#art_90`,
  },
  {
    code: "SVG",
    article_number: "Art. 91",
    title: "Fahren in angetrunkenem Zustand",
    summary:
      "Verbietet das Fahren unter Alkohol- oder Drogeneinfluss und sieht Strafen vor.",
    keywords: [
      "alkohol am steuer", "drogen am steuer", "betrunken gefahren",
      "promille", "führerschein entzug", "ausweis entzogen",
      "fahrverbot", "blutprobe",
    ],
    category: "Strassenverkehr & Fahrzeug",
    fedlex_url: `${SVG}#art_91`,
  },
  {
    code: "SVG",
    article_number: "Art. 92",
    title: "Pflichten bei Unfällen",
    summary:
      "Verpflichtet Beteiligte, bei einem Unfall anzuhalten, Hilfe zu leisten und die Polizei zu rufen.",
    keywords: [
      "fahrerflucht vorwurf", "unfall melden", "polizei rufen",
      "unfall anhalten", "hilfeleistungspflicht",
      "unfall verursacht", "fahrerflucht",
    ],
    category: "Strassenverkehr & Fahrzeug",
    fedlex_url: `${SVG}#art_92`,
  },
  {
    code: "SVG",
    article_number: "Art. 16",
    title: "Entzug des Führerausweises",
    summary:
      "Regelt die Voraussetzungen und die Dauer des Führerausweisentzugs.",
    keywords: [
      "führerschein entzug", "ausweis entzogen", "fahrverbot",
      "administrativmassnahme", "warnungsentzug", "sicherungsentzug",
      "probezeit führerschein",
    ],
    category: "Strassenverkehr & Fahrzeug",
    fedlex_url: `${SVG}#art_16`,
  },
  {
    code: "SVG",
    article_number: "Art. 100",
    title: "Haftungsausschluss / Selbstverschulden",
    summary:
      "Die Haftung des Halters entfällt bei grobem Selbstverschulden des Geschädigten.",
    keywords: [
      "selbstverschulden", "mitverschulden unfall", "haftungsausschluss",
      "fussgänger unfall", "velo unfall",
    ],
    category: "Strassenverkehr & Fahrzeug",
    fedlex_url: `${SVG}#art_100`,
  },

  // ──────────────────────────────────────────────
  // KONSUMENTENSCHUTZ
  // ──────────────────────────────────────────────
  {
    code: "OR",
    article_number: "Art. 40a",
    title: "Widerrufsrecht bei Haustürgeschäften",
    summary:
      "Gewährt ein 14-tägiges Widerrufsrecht bei Haustür- und ähnlichen Geschäften.",
    keywords: [
      "widerrufsrecht", "widerrufsrecht schweiz", "rückgaberecht",
      "abo falle", "abo kündigen", "internet abo kündigen",
      "fitness abo kündigen", "online betrug", "fake shop",
      "nicht geliefert", "ware defekt", "garantie verweigert",
      "telefonabo problem", "kleingedrucktes", "irreführende werbung",
      "anzahlung verloren", "gutschein abgelaufen",
      "ticket rückerstattung", "kreditkarte belastung unberechtigt",
    ],
    category: "Konsumentenschutz",
    fedlex_url: `${OR}#art_40a`,
  },

  // ──────────────────────────────────────────────
  // IMMOBILIENKAUF
  // ──────────────────────────────────────────────
  {
    code: "OR",
    article_number: "Art. 216",
    title: "Grundstückkauf – Formvorschrift",
    summary:
      "Der Kauf von Grundstücken bedarf der öffentlichen Beurkundung.",
    keywords: [
      "hauskauf", "hauskauf rücktritt", "reservationsvertrag streit",
      "anzahlung verloren immobilie", "mangel nach kauf entdeckt",
      "versteckter mangel haus", "notar fehler", "handänderung",
      "eigentumsübertragung grundstück",
    ],
    category: "Immobilienkauf & Hypothek",
    fedlex_url: `${OR}#art_216`,
  },

  // ──────────────────────────────────────────────
  // MEDIZIN & PATIENTENRECHTE
  // ──────────────────────────────────────────────
  {
    code: "OR",
    article_number: "Art. 394",
    title: "Auftrag (Behandlungsvertrag)",
    summary:
      "Der Arzt-Patient-Vertrag ist ein Auftragsverhältnis mit Sorgfaltspflichten.",
    keywords: [
      "arztfehler", "behandlungsfehler", "falsche diagnose",
      "operation komplikation", "aufklärungspflicht verletzt",
      "behandlungsvertrag", "spital haftung", "pflegefehler",
      "medizinische haftung", "einwilligung operation",
      "medikament schaden", "impfschaden", "krankenakte einsehen",
      "patientenakte kopie", "zwangsbehandlung",
      "schmerzensgeld behandlung",
    ],
    category: "Medizin & Patientenrechte",
    fedlex_url: `${OR}#art_394`,
  },

  // ──────────────────────────────────────────────
  // VERSICHERUNGSRECHT (general civil-law claims)
  // ──────────────────────────────────────────────
  {
    code: "OR",
    article_number: "Art. 41",
    title: "Haftung (Versicherungsrelevanz)",
    summary:
      "Haftungsgrundlage für Ansprüche gegenüber Versicherungen bei widerrechtlichem Schaden.",
    keywords: [
      "versicherung zahlt nicht", "ablehnung versicherung",
      "leistungsverweigerung", "haftpflichtversicherung",
      "versicherungsschaden", "deckung verweigert",
      "rechtsschutzversicherung", "schadenmeldung",
      "prämie nicht bezahlt", "versicherung kündigen",
      "krankenkasse problem", "krankenkasse leistung",
      "zusatzversicherung", "unfallversicherung",
      "lebensversicherung", "taggeldversicherung",
      "invalidenrente", "rentenablehnung", "regress versicherung",
      "versicherungsgutachten", "arztgutachten streit",
    ],
    category: "Versicherungsrecht",
    fedlex_url: `${OR}#art_41`,
  },

  // ──────────────────────────────────────────────
  // BANK & FINANZEN
  // ──────────────────────────────────────────────
  {
    code: "OR",
    article_number: "Art. 312",
    title: "Darlehensvertrag",
    summary:
      "Definiert das Darlehen als Überlassung von Geld mit Rückerstattungspflicht.",
    keywords: [
      "darlehen privat", "kreditvertrag", "leasing", "zins zu hoch",
      "wucherzins", "schuldanerkennung unterschrieben",
      "kredit nicht bewilligt", "hypothek kündigung",
      "kontosperre", "konto blockiert", "bank kündigt konto",
      "überweisung falsch", "betrug konto", "phishing",
      "kartenmissbrauch", "bank haftung", "anlageschaden",
      "falsche beratung bank", "bitcoin betrug", "krypto verlust",
      "ratenzahlung",
    ],
    category: "Bank & Finanzen",
    fedlex_url: `${OR}#art_312`,
  },

  // ──────────────────────────────────────────────
  // INTERNET & DIGITAL (persönlichkeitsrechtliche Aspekte)
  // ──────────────────────────────────────────────
  {
    code: "ZGB",
    article_number: "Art. 28",
    title: "Persönlichkeitsschutz (Online)",
    summary:
      "Anwendbar auf Cybermobbing, Identitätsdiebstahl und Online-Ehrverletzungen.",
    keywords: [
      "online beleidigung", "cybermobbing", "fake profil",
      "identitätsdiebstahl", "konto gehackt", "social media konto gesperrt",
      "bewertung löschen", "google bewertung streit",
      "email missbrauch", "domain streit", "urheberrecht bild",
      "musik ohne erlaubnis", "download illegal vorwurf",
      "torrent abmahnung", "datendiebstahl", "it vertrag streit",
      "software lizenz streit", "plattform sperrt konto",
      "influencer vertrag",
    ],
    category: "Internet & Digital",
    fedlex_url: `${ZGB}#art_28`,
  },
];
