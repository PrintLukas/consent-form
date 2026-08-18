// Legal copy for the consent notice page (app/page.tsx). This is the actual
// text shown to site visitors, not sample/placeholder content — treat edits
// here as legal-document edits (get sign-off from Vetter Consulting's
// Datenschutzbeauftragter), not routine copywriting.

// The top of the page: what's being processed and why. Rendered directly
// above the Art. 13 accordion in app/page.tsx.
export const CONSENT_TEXT = {
    title: "Einwilligungserklärung zur Aufzeichnung, Transkription und Protokollierung von Microsoft Teams-Besprechungen",
    intro: "Ich willige hiermit ein, dass Vetter Consulting im Rahmen von Microsoft-Teams-Besprechungen, an denen ich teilnehme, meine personenbezogenen Daten zum Zweck der Dokumentation, Nachbereitung und Protokollierung der Besprechung verarbeitet.",
    processingLabel: "Die Verarbeitung umfasst insbesondere:",
    processingItems: [
        "die vollständige Aufzeichnung der gesamten Besprechung in Ton und gegebenenfalls Bild,",
        "die automatisierte Transkription der im Rahmen der Besprechung getätigten Wortbeiträge,",
        "die automatisierte Erstellung einer stichpunktartigen Zusammenfassung bzw. eines Gesprächsprotokolls,",
        "die interne Bereitstellung der Aufzeichnung, Transkription und Zusammenfassung an die jeweils berechtigten Personen innerhalb des beauftragenden Unternehmens.",
    ],
    serviceNote: "Für diese Verarbeitung wird der Dienst Happy Scribe als in Microsoft Teams eingebundener Dienst eingesetzt. Die Speicherung der verarbeiteten Daten erfolgt in Europa (Estland).",
    dataLabel: "Mir ist bekannt, dass hierbei insbesondere folgende personenbezogene Daten verarbeitet werden können:",
    dataItems: [
        "Name und angezeigter Benutzername,",
        "Sprach- und gegebenenfalls Bildbeiträge,",
        "Inhalte meiner Wortmeldungen,",
        "von mir freigegebene oder eingebrachte Inhalte,",
        "Zeit- und Metadaten der Besprechung,",
        "aus meinen Beiträgen erzeugte Transkripte sowie hierauf basierende Zusammenfassungen und Protokolle.",
    ],
    voluntaryNote: "Die Erteilung dieser Einwilligung erfolgt freiwillig. Ich wurde darauf hingewiesen, dass ich meine Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen kann. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Verarbeitung bleibt hiervon unberührt.",
    restrictionNote: "Mir ist ferner bekannt, dass eine Teilnahme an entsprechend aufgezeichneten und transkribierten Besprechungen ohne Erteilung der Einwilligung gegebenenfalls nicht oder nur eingeschränkt möglich ist, soweit die Aufzeichnung und Protokollierung organisatorisch für die Durchführung der Besprechung vorgesehen ist.",
};

// One numbered clause of the Art. 13 DSGVO privacy notice, e.g.
// { num: "1.", heading: "Verantwortlicher", body: "..." }. `body` is plain
// text with "\n" for paragraph breaks; `items` renders as a bullet list
// instead (see the Section component in app/page.tsx). A clause may use
// either, both, or neither.
export type DatenschutzSection = {
    num: string;
    heading: string;
    body?: string;
    items?: string[];
};

// The full Art. 13 DSGVO privacy notice, in display order, rendered inside
// the collapsed accordion on the page. Renumber `num` on every entry if you
// insert, remove, or reorder a clause.
export const DATENSCHUTZ: DatenschutzSection[] = [
    {
        num: "1.",
        heading: "Verantwortlicher",
        body: "Vetter Consulting\nOschatzer Str. 46, 01127 Dresden\ninfo@vc-datenschutz.de",
    },
    {
        num: "2.",
        heading: "Kontaktdaten des Datenschutzbeauftragten",
        body: "Steve Vetter\nVetter Consulting\nOschatzer Str. 46, 01127 Dresden\ninfo@vc-datenschutz.de",
    },
    {
        num: "3.",
        heading: "Zwecke der Verarbeitung",
        items: [
            "Dokumentation von Besprechungen,",
            "inhaltlichen Nachbereitung von Besprechungen,",
            "Erstellung von Transkriptionen,",
            "Erstellung stichpunktartiger Gesprächsprotokolle und Zusammenfassungen,",
            "Sicherstellung der Nachvollziehbarkeit von Besprechungsinhalten, Ergebnissen, Zuständigkeiten und Folgemaßnahmen.",
        ],
    },
    {
        num: "4.",
        heading: "Rechtsgrundlage der Verarbeitung",
        body: "Die Verarbeitung erfolgt auf Grundlage Ihrer Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO in Verbindung mit Art. 7 DSGVO.\n\nSoweit im Rahmen von Besprechungen ausnahmsweise besondere Kategorien personenbezogener Daten im Sinne des Art. 9 DSGVO verarbeitet werden, bezieht sich die Einwilligung ausdrücklich auch auf diese Daten, soweit dies im Einzelfall erforderlich ist.",
    },
    {
        num: "5.",
        heading: "Kategorien personenbezogener Daten",
        items: [
            "Identifikationsdaten,",
            "Kommunikationsdaten,",
            "Audio- und gegebenenfalls Videodaten,",
            "Inhalte von Wortbeiträgen,",
            "freigegebene Dokumente oder sonstige Besprechungsinhalte,",
            "Meeting-Metadaten,",
            "Transkriptions- und Protokolldaten.",
        ],
    },
    {
        num: "6.",
        heading: "Empfänger oder Kategorien von Empfängern",
        items: [
            "die jeweils intern zuständigen und berechtigten Mitarbeitenden,",
            "Microsoft Teams bzw. Microsoft 365 als eingesetzte Besprechungsplattform,",
            "Happy Scribe als Dienstleister für Aufzeichnung, Transkription und Zusammenfassung,",
            "gegebenenfalls weitere weisungsgebundene Auftragsverarbeiter im Bereich Hosting, Support und IT-Betrieb.",
        ],
    },
    {
        num: "7.",
        heading: "Drittlandübermittlung",
        body: "Eine Übermittlung personenbezogener Daten in Staaten außerhalb der Europäischen Union bzw. des Europäischen Wirtschaftsraums ist nicht beabsichtigt, sofern der Dienst vertragsgemäß und technisch auf eine Verarbeitung innerhalb Europas beschränkt ist.",
    },
    {
        num: "8.",
        heading: "Speicherdauer",
        body: "Die personenbezogenen Daten werden nur so lange gespeichert, wie dies für die genannten Zwecke erforderlich ist oder gesetzliche Aufbewahrungspflichten bestehen.\n\nEs gelten folgende Löschfristen:\n• Aufzeichnungen: 15 Tage\n• Transkriptionen: 30 Tage\n• Gesprächsprotokolle / Zusammenfassungen: bis zum Ende der Vertragslaufzeit\n\nNach Ablauf der jeweils geltenden Fristen werden die Daten gelöscht, sofern keine gesetzlichen oder vertraglichen Aufbewahrungspflichten entgegenstehen.",
    },
    {
        num: "9.",
        heading: "Freiwilligkeit der Bereitstellung",
        body: "Die Erteilung der Einwilligung und die Bereitstellung der personenbezogenen Daten erfolgen freiwillig. Ohne Einwilligung kann eine Teilnahme an aufgezeichneten und transkribierten Besprechungen jedoch gegebenenfalls nicht oder nur eingeschränkt möglich sein.",
    },
    {
        num: "10.",
        heading: "Widerrufsrecht",
        body: "Sie haben das Recht, Ihre Einwilligung jederzeit mit Wirkung für die Zukunft zu widerrufen. Der Widerruf berührt nicht die Rechtmäßigkeit der bis zum Widerruf erfolgten Verarbeitung.\n\nDer Widerruf ist zu richten an:\ninfo@vc-datenschutz.de",
    },
    {
        num: "11.",
        heading: "Rechte der betroffenen Person",
        items: [
            "Recht auf Auskunft gemäß Art. 15 DSGVO,",
            "Recht auf Berichtigung gemäß Art. 16 DSGVO,",
            "Recht auf Löschung gemäß Art. 17 DSGVO,",
            "Recht auf Einschränkung der Verarbeitung gemäß Art. 18 DSGVO,",
            "Recht auf Datenübertragbarkeit gemäß Art. 20 DSGVO,",
            "Recht auf Widerruf einer erteilten Einwilligung,",
            "Recht auf Beschwerde bei einer Datenschutzaufsichtsbehörde gemäß Art. 77 DSGVO.",
        ],
    },
    {
        num: "12.",
        heading: "Beschwerderecht bei einer Aufsichtsbehörde",
        body: "Sie haben das Recht, Beschwerde bei einer Datenschutzaufsichtsbehörde einzulegen, insbesondere bei der Aufsichtsbehörde Ihres Aufenthaltsorts, Ihres Arbeitsplatzes oder des Orts des mutmaßlichen Datenschutzverstoßes.",
    },
    {
        num: "13.",
        heading: "Automatisierte Entscheidungsfindung",
        body: "Eine automatisierte Entscheidungsfindung einschließlich Profiling gemäß Art. 22 DSGVO findet nicht statt.",
    },
];
