/* EINZIGE QUELLE DER QUIZINHALTE. Jede Frage und ihre Antworten sind fest formuliert.
 * correctAnswer ist die richtige Antwort; distractors enthält genau drei falsche Antworten.
 * Nach Änderungen: Tests ausführen (node --test tests/*.test.mjs), Cache-Version in sw.js erhöhen.
 */
export const QUIZ_QUESTIONS = [
  {
    "id": "q-f009",
    "glossaryId": "f009",
    "term": "Biopsie",
    "category": "Allgemeine Begriffe",
    "question": "Was wird bei einer Biopsie gewonnen?",
    "correctAnswer": "Eine Gewebeprobe zur Untersuchung",
    "distractors": [
      "Ein Bild des Gewebes mittels Ultraschall",
      "Eine Messkurve der Gewebedurchblutung",
      "Ein Abstrich von einer Oberfläche"
    ],
    "explanation": "Eine Biopsie entnimmt Gewebe. Bildgebung und Oberflächenabstrich sind andere Verfahren."
  },
  {
    "id": "q-f019",
    "glossaryId": "f019",
    "term": "Emphysem",
    "category": "Allgemeine Begriffe",
    "question": "Was bedeutet ein Emphysem im Weichteilgewebe?",
    "correctAnswer": "Ansammlung von Luft im Gewebe",
    "distractors": [
      "Ansammlung von Eiter im Gewebe",
      "Ansammlung von Blut im Gewebe",
      "Ansammlung von Lymphflüssigkeit im Gewebe"
    ],
    "explanation": "Beim Weichteilemphysem liegt Luft im Gewebe; ein Lungenemphysem ist gesondert einzuordnen."
  },
  {
    "id": "q-f020",
    "glossaryId": "f020",
    "term": "Empyem",
    "category": "Allgemeine Begriffe",
    "question": "Welcher Befund beschreibt ein Empyem?",
    "correctAnswer": "Eiter in einer vorbestehenden Körperhöhle",
    "distractors": [
      "Luft in einer vorbestehenden Körperhöhle",
      "Blut in einer vorbestehenden Körperhöhle",
      "Klare Flüssigkeit in einer vorbestehenden Körperhöhle"
    ],
    "explanation": "Ein Empyem ist eine Eiteransammlung in einer bereits vorhandenen Körperhöhle."
  },
  {
    "id": "q-f032",
    "glossaryId": "f032",
    "term": "Hyperkeratose",
    "category": "Allgemeine Begriffe",
    "question": "Was steht bei einer Hyperkeratose im Vordergrund?",
    "correctAnswer": "Vermehrte Verhornung der Oberfläche",
    "distractors": [
      "Vermehrte Durchblutung der Oberfläche",
      "Vermehrte Wassereinlagerung im Gewebe",
      "Vermehrter Abbau des Oberflächenepithels"
    ],
    "explanation": "Hyperkeratose bezeichnet eine verstärkte Verhornung, nicht bloß eine Schwellung."
  },
  {
    "id": "q-f033",
    "glossaryId": "f033",
    "term": "Hyperplasie",
    "category": "Allgemeine Begriffe",
    "question": "Welcher Vorgang kennzeichnet eine Hyperplasie?",
    "correctAnswer": "Gewebevergrößerung durch Zunahme der Zellzahl",
    "distractors": [
      "Gewebevergrößerung nur durch größere Einzelzellen",
      "Gewebevergrößerung nur durch Flüssigkeitseinlagerung",
      "Gewebevergrößerung nur durch eine Einblutung"
    ],
    "explanation": "Hyperplasie bedeutet mehr Zellen; Hypertrophie bedeutet größere Zellen. Die Glossar-Kurzdefinition ist hier präzisiert."
  },
  {
    "id": "q-f034",
    "glossaryId": "f034",
    "term": "Idiopathisch",
    "category": "Allgemeine Begriffe",
    "question": "Was bedeutet die Einordnung einer Erkrankung als idiopathisch?",
    "correctAnswer": "Ihre Ursache ist nicht bekannt",
    "distractors": [
      "Ihre Ursache ist sicher erblich",
      "Ihre Ursache ist sicher infektiös",
      "Ihre Ursache ist eine Behandlung"
    ],
    "explanation": "Idiopathisch beschreibt eine Erkrankung ohne bekannte Ursache und nicht einen bestimmten Auslöser."
  },
  {
    "id": "q-f037",
    "glossaryId": "f037",
    "term": "Kaustik",
    "category": "Allgemeine Begriffe",
    "question": "Welches Prinzip beschreibt eine Kaustik?",
    "correctAnswer": "Gezielte Gewebezerstörung durch Verödung",
    "distractors": [
      "Gezielte Gewebeentnahme zur Histologie",
      "Gezielte Gewebedehnung zur Erweiterung",
      "Gezielte Gewebeverlagerung zur Deckung"
    ],
    "explanation": "Kaustik bezeichnet eine Verödung beziehungsweise Gewebezerstörung, zum Beispiel thermisch."
  },
  {
    "id": "q-f043",
    "glossaryId": "f043",
    "term": "Leukoplakie",
    "category": "Allgemeine Begriffe",
    "question": "Welcher Schleimhautbefund passt zur Bezeichnung Leukoplakie?",
    "correctAnswer": "Weißliche Veränderung, die nicht abwischbar ist",
    "distractors": [
      "Weißlicher Belag, der sich leicht abwischen lässt",
      "Bläuliche Schwellung nach einer Einblutung",
      "Rötlicher Defekt nach oberflächlicher Abschürfung"
    ],
    "explanation": "Leukoplakie bezeichnet einen nicht abwischbaren weißen Schleimhautbefund; die genaue Einordnung erfordert Abklärung."
  },
  {
    "id": "q-f047",
    "glossaryId": "f047",
    "term": "Metastase",
    "category": "Allgemeine Begriffe",
    "question": "Was unterscheidet eine Metastase vom Primärtumor?",
    "correctAnswer": "Sie ist eine Absiedlung eines bösartigen Tumors",
    "distractors": [
      "Sie ist stets eine gutartige Vorstufe des Tumors",
      "Sie ist ausschließlich eine Narbe nach Tumorentfernung",
      "Sie ist die Entzündung unmittelbar neben dem Tumor"
    ],
    "explanation": "Eine Metastase geht vom Primärtumor aus und ist nicht einfach dessen Narbe oder Vorstufe."
  },
  {
    "id": "q-f049",
    "glossaryId": "f049",
    "term": "Neuralgie",
    "category": "Allgemeine Begriffe",
    "question": "Welche Aussage beschreibt eine Neuralgie?",
    "correctAnswer": "Schmerz im Versorgungsgebiet eines Nervs",
    "distractors": [
      "Lähmung im Versorgungsgebiet eines Nervs",
      "Gewebsneubildung innerhalb eines Nervs",
      "Operative Durchtrennung eines Nervs"
    ],
    "explanation": "Neuralgie bezeichnet Nervenschmerz; sie sagt allein noch nicht, dass der Nerv entzündet ist."
  },
  {
    "id": "q-f050",
    "glossaryId": "f050",
    "term": "Neuritis",
    "category": "Allgemeine Begriffe",
    "question": "Was bezeichnet eine Neuritis?",
    "correctAnswer": "Entzündung eines Nervs",
    "distractors": [
      "Durchtrennung eines Nervs",
      "Neubildung an einem Nerv",
      "Freilegung eines Nervs"
    ],
    "explanation": "Neuritis ist eine Nervenentzündung. Neuralgie bezeichnet dagegen zunächst den Schmerz."
  },
  {
    "id": "q-f056",
    "glossaryId": "f056",
    "term": "Pachydermie",
    "category": "Allgemeine Begriffe",
    "question": "Welcher Befund wird im HNO-Kontext als Pachydermie bezeichnet?",
    "correctAnswer": "Verdickung von Haut oder Schleimhaut",
    "distractors": [
      "Verdünnung von Haut oder Schleimhaut",
      "Ablösung von Haut oder Schleimhaut",
      "Einblutung in Haut oder Schleimhaut"
    ],
    "explanation": "Pachydermie beschreibt eine Verdickung; der Begriff benennt nicht allein deren Ursache."
  },
  {
    "id": "q-f057",
    "glossaryId": "f057",
    "term": "Papillom",
    "category": "Allgemeine Begriffe",
    "question": "Welche Form ist typisch für ein Papillom?",
    "correctAnswer": "Warzenartige, papilläre Gewebewucherung",
    "distractors": [
      "Flache, narbige Gewebeverwachsung",
      "Flüssigkeitsgefüllte, glatte Gewebehöhle",
      "Tiefe, kraterförmige Gewebeulzeration"
    ],
    "explanation": "Ein Papillom wächst papillär beziehungsweise warzenartig; eine Zyste oder Ulzeration beschreibt etwas anderes."
  },
  {
    "id": "q-f062",
    "glossaryId": "f062",
    "term": "Polyp",
    "category": "Allgemeine Begriffe",
    "question": "Was beschreibt ein Polyp am ehesten?",
    "correctAnswer": "Eine umschriebene Vorwölbung der Schleimhaut",
    "distractors": [
      "Eine umschriebene Vertiefung der Schleimhaut",
      "Eine flächige Vernarbung der Schleimhaut",
      "Eine flächige Austrocknung der Schleimhaut"
    ],
    "explanation": "Polyp ist zunächst eine Formbeschreibung einer Schleimhautvorwölbung, keine sichere Aussage über ihre Gutartigkeit."
  },
  {
    "id": "q-f063",
    "glossaryId": "f063",
    "term": "Präkanzerose",
    "category": "Allgemeine Begriffe",
    "question": "Welche Aussage passt zu einer Präkanzerose?",
    "correctAnswer": "Eine Veränderung mit erhöhtem Risiko einer Krebsentstehung",
    "distractors": [
      "Eine bereits nachgewiesene Fernmetastase eines Tumors",
      "Eine ausschließlich entzündliche Veränderung ohne Krebsrisiko",
      "Eine nach Behandlung verbliebene Narbe eines Tumors"
    ],
    "explanation": "Eine Präkanzerose kann einer Krebsentstehung vorausgehen; sie ist nicht mit einer Metastase gleichzusetzen."
  },
  {
    "id": "q-f081",
    "glossaryId": "f081",
    "term": "Synechie",
    "category": "Allgemeine Begriffe",
    "question": "Was ist eine Synechie in Nase oder Kehlkopf?",
    "correctAnswer": "Eine Verwachsung benachbarter Gewebeflächen",
    "distractors": [
      "Eine Erweiterung eines benachbarten Hohlraums",
      "Eine Einblutung zwischen benachbarten Gewebeflächen",
      "Eine Flüssigkeitsansammlung in einem Hohlraum"
    ],
    "explanation": "Synechien sind Verwachsungen, etwa narbige Verbindungen zuvor getrennter Schleimhautflächen."
  },
  {
    "id": "q-f088",
    "glossaryId": "f088",
    "term": "Ulcus rodens",
    "category": "Allgemeine Begriffe",
    "question": "Wofür steht die historische Bezeichnung Ulcus rodens typischerweise?",
    "correctAnswer": "Ein ulzerierendes Basalzellkarzinom der Haut",
    "distractors": [
      "Ein bakteriell bedingtes Geschwür der Mundschleimhaut",
      "Ein druckbedingtes Geschwür der Nasenschleimhaut",
      "Ein venös bedingtes Geschwür am Unterschenkel"
    ],
    "explanation": "Ulcus rodens bezeichnet typischerweise ein ulzerierendes Basalzellkarzinom, nicht jedes Hautgeschwür."
  },
  {
    "id": "q-k045",
    "glossaryId": "k045",
    "term": "CT",
    "category": "Diagnostik & Bildgebung",
    "question": "Welches Verfahren steht hinter CT?",
    "correctAnswer": "Schnittbildgebung mithilfe von Röntgenstrahlen",
    "distractors": [
      "Schnittbildgebung mithilfe von Magnetfeldern",
      "Bildgebung mithilfe reflektierter Ultraschallwellen",
      "Bildgebung mithilfe einer eingeführten Kamera"
    ],
    "explanation": "Die Computertomografie nutzt Röntgenstrahlen. Die MRT arbeitet mit Magnetfeldern und Hochfrequenzimpulsen."
  },
  {
    "id": "q-k046",
    "glossaryId": "k046",
    "term": "MRT",
    "category": "Diagnostik & Bildgebung",
    "question": "Welches physikalische Prinzip nutzt eine MRT?",
    "correctAnswer": "Magnetfelder und Hochfrequenzimpulse",
    "distractors": [
      "Röntgenstrahlen aus einer rotierenden Röhre",
      "Ultraschallwellen aus einem Schallkopf",
      "Sichtbares Licht aus einem Endoskop"
    ],
    "explanation": "Die Magnetresonanztomografie nutzt keine Röntgenstrahlung."
  },
  {
    "id": "q-k047",
    "glossaryId": "k047",
    "term": "PET-CT",
    "category": "Diagnostik & Bildgebung",
    "question": "Welche Informationen kombiniert eine PET-CT?",
    "correctAnswer": "Tracerverteilung und anatomische Schnittbilder",
    "distractors": [
      "Elektrische Hirnaktivität und anatomische Schnittbilder",
      "Schallreflexionen und elektrische Herzaktivität",
      "Magnetische Schnittbilder und endoskopische Bilder"
    ],
    "explanation": "Die PET zeigt die Verteilung eines radioaktiven Tracers; die CT liefert anatomische Schnittbilder."
  },
  {
    "id": "q-k048",
    "glossaryId": "k048",
    "term": "EKG",
    "category": "Diagnostik & Bildgebung",
    "question": "Welche Aktivität wird mit einem EKG aufgezeichnet?",
    "correctAnswer": "Die elektrische Aktivität des Herzens",
    "distractors": [
      "Die elektrische Aktivität des Gehirns",
      "Die elektrische Aktivität eines Skelettmuskels",
      "Die elektrische Aktivität eines peripheren Nervs"
    ],
    "explanation": "Das Elektrokardiogramm erfasst elektrische Herzaktivität, nicht unmittelbar die Pumpleistung."
  },
  {
    "id": "q-k049",
    "glossaryId": "k049",
    "term": "EEG",
    "category": "Diagnostik & Bildgebung",
    "question": "Welche Aktivität wird bei einem EEG erfasst?",
    "correctAnswer": "Die elektrische Aktivität des Gehirns",
    "distractors": [
      "Die elektrische Aktivität des Herzens",
      "Die elektrische Aktivität der Beinmuskeln",
      "Die elektrische Aktivität der Gesichtsmuskeln"
    ],
    "explanation": "Die Elektroenzephalografie erfasst elektrische Hirnaktivität; die Herzaktivität gehört zum EKG."
  },
  {
    "id": "q-k050",
    "glossaryId": "k050",
    "term": "Endo",
    "category": "Diagnostik & Bildgebung",
    "question": "Was ist mit Endo im Sinne einer Endoskopie gemeint?",
    "correctAnswer": "Betrachtung innerer Strukturen mit einem optischen Instrument",
    "distractors": [
      "Darstellung innerer Strukturen mit rotierenden Röntgenstrahlen",
      "Darstellung innerer Strukturen mit einem äußeren Schallkopf",
      "Messung elektrischer Signale mit aufgeklebten Elektroden"
    ],
    "explanation": "Endoskopie ermöglicht eine Betrachtung mit einem Endoskop; der Zugang hängt vom untersuchten Organ ab."
  },
  {
    "id": "q-k051",
    "glossaryId": "k051",
    "term": "ÖGD/Gastro",
    "category": "Diagnostik & Bildgebung",
    "question": "Welche Organe werden bei einer ÖGD typischerweise betrachtet?",
    "correctAnswer": "Speiseröhre, Magen und Zwölffingerdarm",
    "distractors": [
      "Speiseröhre, Luftröhre und Hauptbronchien",
      "Magen, Dickdarm und Enddarm",
      "Rachen, Kehlkopf und Luftröhre"
    ],
    "explanation": "ÖGD umfasst Ösophagus, Magen und Duodenum. Sie ist keine Untersuchung der Atemwege."
  },
  {
    "id": "q-k052",
    "glossaryId": "k052",
    "term": "Kolo",
    "category": "Diagnostik & Bildgebung",
    "question": "Welcher Abschnitt wird bei einer Kolo hauptsächlich endoskopisch untersucht?",
    "correctAnswer": "Der Dickdarm",
    "distractors": [
      "Der Magen",
      "Die Harnblase",
      "Die Bronchien"
    ],
    "explanation": "Kolo steht hier für Koloskopie. Ziel ist vor allem die Untersuchung des Dickdarms."
  },
  {
    "id": "q-k053",
    "glossaryId": "k053",
    "term": "Lufu",
    "category": "Diagnostik & Bildgebung",
    "question": "Welche Funktion wird mit einer Lufu beurteilt?",
    "correctAnswer": "Die Atmungsfunktion anhand von Luftmengen und Luftströmung",
    "distractors": [
      "Die Herzfunktion anhand elektrischer Erregungskurven",
      "Die Nierenfunktion anhand ausgeschiedener Eiweißmengen",
      "Die Leberfunktion anhand gebildeter Gerinnungsfaktoren"
    ],
    "explanation": "Lufu steht für Lungenfunktionsuntersuchung; dazu gehören je nach Verfahren Messungen von Volumina und Luftströmung."
  },
  {
    "id": "q-k054",
    "glossaryId": "k054",
    "term": "PEG",
    "category": "Diagnostik & Bildgebung",
    "question": "Wo endet eine PEG-Sonde bei regelrechter Lage?",
    "correctAnswer": "Im Magen über einen Zugang durch die Bauchwand",
    "distractors": [
      "Im Dünndarm über einen Zugang durch die Bauchwand",
      "Im Magen über einen Zugang durch die Nase",
      "In der Speiseröhre über einen Zugang durch den Hals"
    ],
    "explanation": "Die PEG schafft einen Zugang durch die Bauchwand zum Magen; ein jejunaler Zugang ist davon zu unterscheiden."
  },
  {
    "id": "q-k055",
    "glossaryId": "k055",
    "term": "PEJ",
    "category": "Diagnostik & Bildgebung",
    "question": "Welcher Zielabschnitt unterscheidet eine PEJ von einer PEG?",
    "correctAnswer": "Der Leerdarm statt des Magens",
    "distractors": [
      "Der Dickdarm statt des Magens",
      "Die Speiseröhre statt des Magens",
      "Die Harnblase statt des Magens"
    ],
    "explanation": "Die PEJ führt in das Jejunum, einen Abschnitt des Dünndarms; PEG bezeichnet den Magenzugang."
  },
  {
    "id": "q-k031",
    "glossaryId": "k031",
    "term": "i.v.",
    "category": "Gabe & Katheter",
    "question": "Wohin wird ein Medikament bei i.v.-Gabe verabreicht?",
    "correctAnswer": "In eine Vene",
    "distractors": [
      "In einen Muskel",
      "Unter die Haut",
      "In den Mund"
    ],
    "explanation": "Intravenös bezeichnet die Gabe in eine Vene, nicht in das umgebende Gewebe."
  },
  {
    "id": "q-k032",
    "glossaryId": "k032",
    "term": "s.c.",
    "category": "Gabe & Katheter",
    "question": "Wohin erfolgt eine s.c.-Injektion?",
    "correctAnswer": "In das Unterhautfettgewebe",
    "distractors": [
      "In das Muskelgewebe",
      "In das Venengefäß",
      "In den Gelenkspalt"
    ],
    "explanation": "Subkutan bedeutet unter die Haut, üblicherweise in das Unterhautfettgewebe."
  },
  {
    "id": "q-k033",
    "glossaryId": "k033",
    "term": "i.m.",
    "category": "Gabe & Katheter",
    "question": "Wohin erfolgt eine i.m.-Injektion?",
    "correctAnswer": "In einen Muskel",
    "distractors": [
      "In eine Vene",
      "In die Hautschicht",
      "Unter die Zunge"
    ],
    "explanation": "Intramuskulär bezeichnet die Injektion in Muskelgewebe."
  },
  {
    "id": "q-k034",
    "glossaryId": "k034",
    "term": "p.o.",
    "category": "Gabe & Katheter",
    "question": "Welcher Verabreichungsweg ist mit p.o. gemeint?",
    "correctAnswer": "Über den Mund",
    "distractors": [
      "Über den Enddarm",
      "Über die Vene",
      "Über die Haut"
    ],
    "explanation": "Per os bedeutet durch den Mund. Die Abkürzung beschreibt den Weg, nicht die Darreichungsform."
  },
  {
    "id": "q-k036",
    "glossaryId": "k036",
    "term": "Tbl.",
    "category": "Gabe & Katheter",
    "question": "Welche Darreichungsform bezeichnet Tbl. im Medikationsplan?",
    "correctAnswer": "Feste, meist gepresste Arzneimitteldosen",
    "distractors": [
      "Flüssige, tropfenweise dosierte Arzneimittel",
      "Halbfeste, äußerlich aufgetragene Arzneimittel",
      "Gasförmige, über die Atemwege zugeführte Arzneimittel"
    ],
    "explanation": "Tbl. steht für Tabletten. Daraus lässt sich nicht ableiten, ob eine Tablette geteilt werden darf."
  },
  {
    "id": "q-k037",
    "glossaryId": "k037",
    "term": "SU/SPU",
    "category": "Gabe & Katheter",
    "question": "Wie wird eine als SU/SPU bezeichnete Urinprobe grundsätzlich gewonnen?",
    "correctAnswer": "Durch selbstständiges Wasserlassen",
    "distractors": [
      "Durch Punktion der Harnblase",
      "Durch Ableitung aus einer Nierenfistel",
      "Durch Entnahme aus einem liegenden Katheter"
    ],
    "explanation": "Spontanurin wird spontan ausgeschieden. Mittelstrahlurin ist eine besondere Art der Probengewinnung und nicht automatisch jeder Spontanurin."
  },
  {
    "id": "q-k038",
    "glossaryId": "k038",
    "term": "DK",
    "category": "Gabe & Katheter",
    "question": "Was kennzeichnet einen DK im urologischen Stationskontext?",
    "correctAnswer": "Ein Katheter bleibt zur Urinableitung liegen",
    "distractors": [
      "Ein Katheter wird nur einmal eingeführt und entfernt",
      "Ein Katheter dient nur der venösen Infusion",
      "Ein Katheter dient nur der Ableitung von Wundsekret"
    ],
    "explanation": "DK meint hier einen Dauerkatheter zur Urinableitung; aus dem Kürzel allein folgt nicht der Zugangsweg."
  },
  {
    "id": "q-k039",
    "glossaryId": "k039",
    "term": "ZVK",
    "category": "Gabe & Katheter",
    "question": "Wo liegt die Spitze eines regelrecht positionierten ZVK grundsätzlich?",
    "correctAnswer": "In einem großen zentralen venösen Gefäß",
    "distractors": [
      "In einer kleinen oberflächlichen Handvene",
      "In einer peripheren arteriellen Strombahn",
      "Im Unterhautgewebe neben einem Gefäß"
    ],
    "explanation": "Ein zentraler Venenkatheter endet zentralvenös. Er ist weder ein arterieller Katheter noch ein subkutaner Zugang."
  },
  {
    "id": "q-k044",
    "glossaryId": "k044",
    "term": "EK",
    "category": "Gabe & Katheter",
    "question": "Welcher Blutbestandteil ist in einem EK vor allem enthalten?",
    "correctAnswer": "Rote Blutkörperchen",
    "distractors": [
      "Weiße Blutkörperchen",
      "Blutplättchen",
      "Gerinnungsfaktoren ohne Blutzellen"
    ],
    "explanation": "Ein Erythrozytenkonzentrat enthält vor allem rote Blutkörperchen; es ist kein Thrombozyten- oder Plasmapräparat."
  },
  {
    "id": "q-f006",
    "glossaryId": "f006",
    "term": "Aspiration",
    "category": "Hals, Kehlkopf & Speiseröhre",
    "question": "Welcher Vorgang wird im Zusammenhang mit dem Schlucken als Aspiration bezeichnet?",
    "correctAnswer": "Nahrung oder Flüssigkeit gelangt in die unteren Atemwege",
    "distractors": [
      "Nahrung oder Flüssigkeit bleibt in der Speiseröhre stecken",
      "Mageninhalt gelangt ausschließlich zurück in die Speiseröhre",
      "Nahrung oder Flüssigkeit gelangt aus dem Rachen in die Nase"
    ],
    "explanation": "Aspiration bezeichnet hier das Eindringen unter die Stimmlippen in die Atemwege, nicht jede Schluckstörung."
  },
  {
    "id": "q-f007",
    "glossaryId": "f007",
    "term": "Balbuties",
    "category": "Hals, Kehlkopf & Speiseröhre",
    "question": "Welche Auffälligkeit passt zu Balbuties?",
    "correctAnswer": "Unwillkürliche Wiederholungen und Blockierungen im Redefluss",
    "distractors": [
      "Anhaltend raue und behauchte Stimmgebung beim Sprechen",
      "Fehlerhafte Bildung einzelner Laute bei flüssigem Sprechen",
      "Erschwertes Finden von Wörtern bei erhaltenem Redefluss"
    ],
    "explanation": "Balbuties bedeutet Stottern und betrifft den Redefluss; Stimm- und Sprachstörungen sind abzugrenzen."
  },
  {
    "id": "q-f010",
    "glossaryId": "f010",
    "term": "Bougierung",
    "category": "Hals, Kehlkopf & Speiseröhre",
    "question": "Welches Ziel hat eine Bougierung einer verengten Speiseröhre?",
    "correctAnswer": "Die Engstelle mechanisch zu erweitern",
    "distractors": [
      "Die Engstelle durch eine Naht zu verschließen",
      "Die Engstelle vollständig herauszuschneiden",
      "Die Engstelle elektrisch zu veröden"
    ],
    "explanation": "Bei einer Bougierung wird eine Verengung mithilfe eines Instruments aufgedehnt."
  },
  {
    "id": "q-f012",
    "glossaryId": "f012",
    "term": "Chordektomie",
    "category": "Hals, Kehlkopf & Speiseröhre",
    "question": "Welche Struktur betrifft eine Chordektomie am Kehlkopf?",
    "correctAnswer": "Eine Stimmlippe",
    "distractors": [
      "Den Kehldeckel",
      "Den gesamten Kehlkopf",
      "Die Rachenmandel"
    ],
    "explanation": "Eine Chordektomie entfernt Stimmlippengewebe. Der Umfang hängt von der Form des Eingriffs ab."
  },
  {
    "id": "q-f013",
    "glossaryId": "f013",
    "term": "Dekanülement",
    "category": "Hals, Kehlkopf & Speiseröhre",
    "question": "Was geschieht bei einem Dekanülement?",
    "correctAnswer": "Eine liegende Trachealkanüle wird entfernt",
    "distractors": [
      "Eine liegende Trachealkanüle wird gewechselt",
      "Eine neue Öffnung zur Luftröhre wird angelegt",
      "Eine vorhandene Luftröhrenöffnung wird erweitert"
    ],
    "explanation": "Dekanülement bezeichnet das Entfernen der Kanüle; es ist nicht bloß ein Kanülenwechsel."
  },
  {
    "id": "q-f015",
    "glossaryId": "f015",
    "term": "Divertikel",
    "category": "Hals, Kehlkopf & Speiseröhre",
    "question": "Was ist ein Divertikel der Speiseröhre?",
    "correctAnswer": "Eine Aussackung ihrer Wand",
    "distractors": [
      "Eine ringförmige Einengung ihres Lumens",
      "Eine oberflächliche Erosion ihrer Schleimhaut",
      "Eine Verbindung ihrer Wand zur Luftröhre"
    ],
    "explanation": "Ein Divertikel ist eine Aussackung. Eine Verbindung zu einem anderen Organ wäre eine Fistel."
  },
  {
    "id": "q-f016",
    "glossaryId": "f016",
    "term": "Dysphonie",
    "category": "Hals, Kehlkopf & Speiseröhre",
    "question": "Welche Funktion ist bei einer Dysphonie gestört?",
    "correctAnswer": "Die Stimmgebung",
    "distractors": [
      "Der Schluckvorgang",
      "Das Sprachverständnis",
      "Die Lautbildung bei der Aussprache"
    ],
    "explanation": "Dysphonie betrifft die Stimme, etwa ihren Klang oder ihre Belastbarkeit; Dysphagie betrifft das Schlucken."
  },
  {
    "id": "q-f027",
    "glossaryId": "f027",
    "term": "Globusgefühle",
    "category": "Hals, Kehlkopf & Speiseröhre",
    "question": "Was beschreibt ein Globusgefühl am ehesten?",
    "correctAnswer": "Ein Kloßgefühl im Hals ohne zwingend vorhandenen Fremdkörper",
    "distractors": [
      "Einen sicher nachgewiesenen Fremdkörper in der Luftröhre",
      "Einen vollständigen Ausfall der Stimme beim Sprechen",
      "Einen dauerhaften Verlust der Geschmacksempfindung"
    ],
    "explanation": "Globusgefühl ist eine Empfindung im Hals. Der Begriff beweist weder einen Fremdkörper noch eine bestimmte Ursache."
  },
  {
    "id": "q-f029",
    "glossaryId": "f029",
    "term": "Glottis",
    "category": "Hals, Kehlkopf & Speiseröhre",
    "question": "Wo liegt die Stimmritze als Teil der Glottis?",
    "correctAnswer": "Zwischen den beiden Stimmlippen",
    "distractors": [
      "Zwischen Zungengrund und Kehldeckel",
      "Zwischen Nasenhöhle und Nasenrachen",
      "Zwischen Speiseröhre und Luftröhre"
    ],
    "explanation": "Die Stimmritze liegt zwischen den Stimmlippen. Glottis umfasst anatomisch Stimmlippen und Stimmritze."
  },
  {
    "id": "q-f039",
    "glossaryId": "f039",
    "term": "Koniotomie",
    "category": "Hals, Kehlkopf & Speiseröhre",
    "question": "Wo wird bei einer Koniotomie der Atemweg eröffnet?",
    "correctAnswer": "Zwischen Schildknorpel und Ringknorpel",
    "distractors": [
      "Zwischen Zungenbein und Schildknorpel",
      "Durch die vordere Wand der Speiseröhre",
      "Durch den weichen Gaumen zum Nasenrachen"
    ],
    "explanation": "Die Koniotomie nutzt die Membran zwischen Schild- und Ringknorpel; sie ist von der Tracheotomie zu unterscheiden."
  },
  {
    "id": "q-f040",
    "glossaryId": "f040",
    "term": "Laryngektomie",
    "category": "Hals, Kehlkopf & Speiseröhre",
    "question": "Was wird bei einer totalen Laryngektomie entfernt?",
    "correctAnswer": "Der gesamte Kehlkopf",
    "distractors": [
      "Eine einzelne Stimmlippe",
      "Die gesamte Schilddrüse",
      "Ein einzelner Halslymphknoten"
    ],
    "explanation": "Die totale Laryngektomie entfernt den Kehlkopf. Teilresektionen sind gesondert zu benennen."
  },
  {
    "id": "q-f041",
    "glossaryId": "f041",
    "term": "Laryngitis",
    "category": "Hals, Kehlkopf & Speiseröhre",
    "question": "Welcher Bereich ist bei einer Laryngitis entzündet?",
    "correctAnswer": "Der Kehlkopf",
    "distractors": [
      "Der Rachen",
      "Die Luftröhre",
      "Die Speiseröhre"
    ],
    "explanation": "Laryngitis bezeichnet eine Kehlkopfentzündung; Pharyngitis betrifft den Rachen."
  },
  {
    "id": "q-f042",
    "glossaryId": "f042",
    "term": "Laryngoskopie",
    "category": "Hals, Kehlkopf & Speiseröhre",
    "question": "Welcher Bereich wird bei einer Laryngoskopie betrachtet?",
    "correctAnswer": "Der Kehlkopf mit den Stimmlippen",
    "distractors": [
      "Der Magen mit dem Magenausgang",
      "Die Speiseröhre mit dem Mageneingang",
      "Die Bronchien mit ihren Verzweigungen"
    ],
    "explanation": "Laryngoskopie ist die Betrachtung des Kehlkopfs, direkt oder indirekt je nach Verfahren."
  },
  {
    "id": "q-f048",
    "glossaryId": "f048",
    "term": "Neck-Dissection",
    "category": "Hals, Kehlkopf & Speiseröhre",
    "question": "Was ist das wesentliche Ziel einer Neck-Dissection?",
    "correctAnswer": "Die Entfernung von Lymphknotengewebe am Hals",
    "distractors": [
      "Die Entfernung der gesamten Halswirbelsäule",
      "Die Entfernung ausschließlich der Schilddrüse",
      "Die Entfernung ausschließlich der Ohrspeicheldrüse"
    ],
    "explanation": "Der Umfang einer Neck-Dissection variiert. Nicht jede Form entfernt alle Lymphknoten oder dieselben Nachbarstrukturen."
  },
  {
    "id": "q-f066",
    "glossaryId": "f066",
    "term": "Pseudokrupp",
    "category": "Hals, Kehlkopf & Speiseröhre",
    "question": "Welche Veränderung liegt einem typischen Pseudokrupp zugrunde?",
    "correctAnswer": "Entzündliche Schwellung im Kehlkopfbereich unterhalb der Stimmlippen",
    "distractors": [
      "Eitrige Einschmelzung unmittelbar neben einer Gaumenmandel",
      "Mechanischer Verschluss der Speiseröhre durch einen Fremdkörper",
      "Chronische Verengung des Nasenrachens durch die Rachenmandel"
    ],
    "explanation": "Pseudokrupp betrifft besonders den subglottischen Kehlkopfbereich; typisch ist bellender Husten."
  },
  {
    "id": "q-f068",
    "glossaryId": "f068",
    "term": "Refluxösophagitis",
    "category": "Hals, Kehlkopf & Speiseröhre",
    "question": "Was verursacht eine Refluxösophagitis?",
    "correctAnswer": "Zurückfließender Mageninhalt entzündet die Speiseröhre",
    "distractors": [
      "Verschluckte Nahrung entzündet ausschließlich die Luftröhre",
      "Zurückfließender Speichel entzündet die Ohrspeicheldrüse",
      "Ein zurückbleibender Speiserest entzündet ausschließlich den Rachen"
    ],
    "explanation": "Refluxösophagitis ist eine Entzündung der Speiseröhre durch Rückfluss von Mageninhalt."
  },
  {
    "id": "q-f069",
    "glossaryId": "f069",
    "term": "Reinke-Ödem",
    "category": "Hals, Kehlkopf & Speiseröhre",
    "question": "Wo befindet sich die typische Schwellung beim Reinke-Ödem?",
    "correctAnswer": "Im oberflächlichen Gewebe der Stimmlippen",
    "distractors": [
      "Im lymphatischen Gewebe der Rachenmandel",
      "Im knorpeligen Gewebe der Nasenscheidewand",
      "Im knöchernen Gewebe des Warzenfortsatzes"
    ],
    "explanation": "Beim Reinke-Ödem sammelt sich Flüssigkeit im oberflächlichen Bereich der Stimmlippen an."
  },
  {
    "id": "q-f070",
    "glossaryId": "f070",
    "term": "Rekurrensparese",
    "category": "Hals, Kehlkopf & Speiseröhre",
    "question": "Welche Funktion kann durch eine Rekurrensparese beeinträchtigt sein?",
    "correctAnswer": "Die Beweglichkeit der Stimmlippe",
    "distractors": [
      "Die Beweglichkeit der Augenlider",
      "Die Beweglichkeit des Trommelfells",
      "Die Beweglichkeit der Nasenflügel"
    ],
    "explanation": "Der Nervus laryngeus recurrens versorgt einen Großteil der inneren Kehlkopfmuskulatur; seine Schädigung kann die Stimmlippenbewegung stören."
  },
  {
    "id": "q-f076",
    "glossaryId": "f076",
    "term": "Sigmatismus",
    "category": "Hals, Kehlkopf & Speiseröhre",
    "question": "Welche Auffälligkeit passt zu Sigmatismus?",
    "correctAnswer": "Fehlerhafte Bildung von S-Lauten",
    "distractors": [
      "Unwillkürliche Wiederholung ganzer Silben",
      "Anhaltend heiserer Klang der Stimme",
      "Erschwertes Verständnis gesprochener Wörter"
    ],
    "explanation": "Sigmatismus bezeichnet eine Störung der S-Lautbildung, umgangssprachlich Lispeln."
  },
  {
    "id": "q-f079",
    "glossaryId": "f079",
    "term": "Stridor",
    "category": "Hals, Kehlkopf & Speiseröhre",
    "question": "Was bezeichnet ein Stridor?",
    "correctAnswer": "Ein Atemgeräusch durch eine Einengung der Atemwege",
    "distractors": [
      "Ein Ohrgeräusch ohne äußere Schallquelle",
      "Ein Stimmgeräusch durch unregelmäßige Stimmlippenschwingung",
      "Ein Schluckgeräusch durch Rückfluss aus dem Magen"
    ],
    "explanation": "Stridor entsteht bei der Atmung an einer verengten Luftpassage; er ist keine Bezeichnung für Heiserkeit."
  },
  {
    "id": "q-f084",
    "glossaryId": "f084",
    "term": "Tracheostoma",
    "category": "Hals, Kehlkopf & Speiseröhre",
    "question": "Was bezeichnet das Tracheostoma?",
    "correctAnswer": "Die Öffnung zwischen Luftröhre und Körperoberfläche",
    "distractors": [
      "Das Röhrchen innerhalb einer Luftröhrenöffnung",
      "Den Schnitt als einzelnen Schritt der Operation",
      "Die Verbindung zwischen Speiseröhre und Magen"
    ],
    "explanation": "Das Stoma ist die Öffnung; die Kanüle ist ein darin gegebenenfalls eingesetztes Hilfsmittel."
  },
  {
    "id": "q-f085",
    "glossaryId": "f085",
    "term": "Tracheotomie",
    "category": "Hals, Kehlkopf & Speiseröhre",
    "question": "Was bezeichnet eine Tracheotomie?",
    "correctAnswer": "Den operativen Schnitt zur Eröffnung der Luftröhre",
    "distractors": [
      "Die vollständige operative Entfernung des Kehlkopfs",
      "Die operative Eröffnung der Speiseröhre am Hals",
      "Die operative Entfernung einer einzelnen Stimmlippe"
    ],
    "explanation": "Tracheotomie ist der Eingriff an der Luftröhre. Tracheostoma bezeichnet die entstandene Öffnung."
  },
  {
    "id": "q-f094",
    "glossaryId": "f094",
    "term": "Zenkersches Divertikel",
    "category": "Hals, Kehlkopf & Speiseröhre",
    "question": "Wo liegt ein Zenker-Divertikel typischerweise?",
    "correctAnswer": "Am Übergang vom unteren Rachen zur oberen Speiseröhre",
    "distractors": [
      "Am Übergang von der unteren Speiseröhre zum Magen",
      "Am Übergang vom Kehlkopf zur unteren Luftröhre",
      "Am Übergang vom Nasenraum zum oberen Rachen"
    ],
    "explanation": "Das Zenker-Divertikel entsteht im pharyngoösophagealen Übergangsbereich und nicht am Mageneingang."
  },
  {
    "id": "q-f096",
    "glossaryId": "f096",
    "term": "Zervikalsyndrom",
    "category": "Hals, Kehlkopf & Speiseröhre",
    "question": "Welche Region steht beim Zervikalsyndrom im Vordergrund?",
    "correctAnswer": "Die Halswirbelsäule und ihre Umgebung",
    "distractors": [
      "Die Brustwirbelsäule und ihre Umgebung",
      "Die Lendenwirbelsäule und ihre Umgebung",
      "Das Kreuzbein und seine Umgebung"
    ],
    "explanation": "Zervikalsyndrom fasst Beschwerden der Halswirbelsäulenregion zusammen; eine Wirbelverlagerung ist nicht zwingend die Ursache."
  },
  {
    "id": "q-f001",
    "glossaryId": "f001",
    "term": "Adenoide Vegetationen",
    "category": "Mund & Rachen",
    "question": "Welche Struktur ist bei adenoiden Vegetationen vergrößert?",
    "correctAnswer": "Die Rachenmandel im Nasenrachen",
    "distractors": [
      "Die Gaumenmandel im Mundrachen",
      "Die Zungenmandel am Zungengrund",
      "Die Ohrspeicheldrüse vor dem Ohr"
    ],
    "explanation": "Adenoide Vegetationen betreffen die Rachenmandel und sind nicht mit Nasenpolypen gleichzusetzen."
  },
  {
    "id": "q-f002",
    "glossaryId": "f002",
    "term": "Adenotomie",
    "category": "Mund & Rachen",
    "question": "Welche Struktur wird bei einer Adenotomie abgetragen?",
    "correctAnswer": "Die Rachenmandel",
    "distractors": [
      "Die Gaumenmandel",
      "Die Zungenmandel",
      "Die Nasenmuschel"
    ],
    "explanation": "Adenotomie betrifft die Rachenmandel; Tonsillektomie betrifft die Gaumenmandeln."
  },
  {
    "id": "q-f017",
    "glossaryId": "f017",
    "term": "Elektrogustometrie (EGM)",
    "category": "Mund & Rachen",
    "question": "Welcher Sinn wird bei der Elektrogustometrie mithilfe elektrischer Reize geprüft?",
    "correctAnswer": "Der Geschmackssinn",
    "distractors": [
      "Der Geruchssinn",
      "Der Gleichgewichtssinn",
      "Der Hörsinn"
    ],
    "explanation": "Elektrogustometrie untersucht die Geschmacksempfindung durch elektrische Reizung."
  },
  {
    "id": "q-f025",
    "glossaryId": "f025",
    "term": "Foetor ex ore",
    "category": "Mund & Rachen",
    "question": "Welche Beobachtung beschreibt Foetor ex ore?",
    "correctAnswer": "Unangenehmer Geruch aus dem Mund",
    "distractors": [
      "Unangenehmer Geschmack ohne Geruchsauffälligkeit",
      "Unangenehmes Brennen an der Zunge",
      "Unangenehmes Druckgefühl beim Schlucken"
    ],
    "explanation": "Foetor ex ore bezeichnet Mundgeruch und sagt allein nichts über dessen Ursache aus."
  },
  {
    "id": "q-f028",
    "glossaryId": "f028",
    "term": "Glossitis",
    "category": "Mund & Rachen",
    "question": "Welche Struktur ist bei einer Glossitis entzündet?",
    "correctAnswer": "Die Zunge",
    "distractors": [
      "Die Gaumenmandel",
      "Die Ohrspeicheldrüse",
      "Die Rachenhinterwand"
    ],
    "explanation": "Glossitis ist eine Zungenentzündung; Stomatitis betrifft die Mundschleimhaut allgemeiner."
  },
  {
    "id": "q-f030",
    "glossaryId": "f030",
    "term": "Gustometrie",
    "category": "Mund & Rachen",
    "question": "Welche Wahrnehmung wird bei einer Gustometrie getestet?",
    "correctAnswer": "Die Wahrnehmung von Geschmacksqualitäten",
    "distractors": [
      "Die Wahrnehmung von Geruchsqualitäten",
      "Die Wahrnehmung unterschiedlicher Tonhöhen",
      "Die Wahrnehmung von Kopfbewegungen"
    ],
    "explanation": "Gustometrie prüft den Geschmackssinn, Olfaktometrie den Geruchssinn."
  },
  {
    "id": "q-f059",
    "glossaryId": "f059",
    "term": "Parotidektomie",
    "category": "Mund & Rachen",
    "question": "Welche Drüse betrifft eine Parotidektomie?",
    "correctAnswer": "Die Ohrspeicheldrüse",
    "distractors": [
      "Die Unterkieferspeicheldrüse",
      "Die Unterzungenspeicheldrüse",
      "Die Schilddrüse"
    ],
    "explanation": "Die Parotis ist die Ohrspeicheldrüse. Das genaue Resektionsausmaß muss gesondert benannt werden."
  },
  {
    "id": "q-f060",
    "glossaryId": "f060",
    "term": "Peritonsillarabszess",
    "category": "Mund & Rachen",
    "question": "Wo liegt ein Peritonsillarabszess?",
    "correctAnswer": "Im Gewebe um eine Gaumenmandel",
    "distractors": [
      "Im Gewebe innerhalb der Ohrspeicheldrüse",
      "Im Gewebe unterhalb des Mundbodens",
      "Im Gewebe hinter dem Trommelfell"
    ],
    "explanation": "Der Eiterherd liegt peritonsillär, also um die Gaumenmandel, nicht lediglich als Belag auf ihrer Oberfläche."
  },
  {
    "id": "q-f061",
    "glossaryId": "f061",
    "term": "Pharyngitis",
    "category": "Mund & Rachen",
    "question": "Welcher Bereich ist bei einer Pharyngitis entzündet?",
    "correctAnswer": "Der Rachen",
    "distractors": [
      "Der Kehlkopf",
      "Die Speiseröhre",
      "Die Nasennebenhöhle"
    ],
    "explanation": "Pharyngitis bezeichnet eine Rachenentzündung; Laryngitis ist eine Kehlkopfentzündung."
  },
  {
    "id": "q-f067",
    "glossaryId": "f067",
    "term": "Ranula",
    "category": "Mund & Rachen",
    "question": "Welcher Befund passt zu einer Ranula?",
    "correctAnswer": "Eine speichelbedingte Zyste am Mundboden",
    "distractors": [
      "Ein Eiterherd neben der Gaumenmandel",
      "Eine Schleimansammlung in der Stirnhöhle",
      "Ein Bluterguss hinter dem Trommelfell"
    ],
    "explanation": "Eine Ranula entsteht im Bereich des Mundbodens im Zusammenhang mit Speichel, häufig aus der Unterzungenspeicheldrüse."
  },
  {
    "id": "q-f074",
    "glossaryId": "f074",
    "term": "Sialadenitis",
    "category": "Mund & Rachen",
    "question": "Welches Gewebe ist bei einer Sialadenitis entzündet?",
    "correctAnswer": "Das Gewebe einer Speicheldrüse",
    "distractors": [
      "Das Gewebe einer Gaumenmandel",
      "Das Gewebe einer Stimmlippe",
      "Das Gewebe einer Nasenmuschel"
    ],
    "explanation": "Sialadenitis ist eine Speicheldrüsenentzündung; sie ist nicht gleichbedeutend mit einem Speichelstein."
  },
  {
    "id": "q-f075",
    "glossaryId": "f075",
    "term": "Sialographie",
    "category": "Mund & Rachen",
    "question": "Was wird bei einer klassischen Sialographie mit Kontrastmittel dargestellt?",
    "correctAnswer": "Das Gangsystem einer Speicheldrüse",
    "distractors": [
      "Das Gangsystem der Tränenwege",
      "Das Gefäßsystem einer Halsarterie",
      "Das Hohlraumsystem der Nasennebenhöhlen"
    ],
    "explanation": "Sialographie stellt die Speicheldrüsengänge dar; das ist von Gefäß- und Tränenwegsdarstellungen abzugrenzen."
  },
  {
    "id": "q-f078",
    "glossaryId": "f078",
    "term": "Stomatitis",
    "category": "Mund & Rachen",
    "question": "Welche Lokalisation bezeichnet Stomatitis?",
    "correctAnswer": "Entzündung der Mundschleimhaut",
    "distractors": [
      "Entzündung der Magenschleimhaut",
      "Entzündung der Nasenschleimhaut",
      "Entzündung der Blasenschleimhaut"
    ],
    "explanation": "Stomatitis bezieht sich auf den Mund, nicht auf den ähnlich klingenden Magenbegriff."
  },
  {
    "id": "q-f083",
    "glossaryId": "f083",
    "term": "Tonsillektomie",
    "category": "Mund & Rachen",
    "question": "Was unterscheidet eine Tonsillektomie von einer Tonsillotomie?",
    "correctAnswer": "Die vollständige statt teilweise Entfernung der Gaumenmandel",
    "distractors": [
      "Die teilweise statt vollständige Entfernung der Gaumenmandel",
      "Die Entfernung der Rachenmandel statt der Gaumenmandel",
      "Die Entfernung der Zungenmandel statt der Gaumenmandel"
    ],
    "explanation": "Tonsillektomie meint vollständige Entfernung der Gaumenmandel; Tonsillotomie belässt einen Teil."
  },
  {
    "id": "q-f089",
    "glossaryId": "f089",
    "term": "Uvula",
    "category": "Mund & Rachen",
    "question": "Welche Struktur ist die Uvula?",
    "correctAnswer": "Das Zäpfchen am weichen Gaumen",
    "distractors": [
      "Der Kehldeckel am Kehlkopfeingang",
      "Die Rachenmandel im Nasenrachen",
      "Das Zungenbändchen am Mundboden"
    ],
    "explanation": "Die Uvula hängt am weichen Gaumen; der Kehldeckel ist die Epiglottis."
  },
  {
    "id": "q-f092",
    "glossaryId": "f092",
    "term": "Waldeyerscher Rachenring",
    "category": "Mund & Rachen",
    "question": "Welche Gewebegruppe gehört zum Waldeyerschen Rachenring?",
    "correctAnswer": "Rachen-, Gaumen-, Zungen- und Tubenmandeln",
    "distractors": [
      "Ohr-, Unterkiefer- und Unterzungenspeicheldrüsen",
      "Schild-, Ring- und Stellknorpel des Kehlkopfs",
      "Hammer, Amboss und Steigbügel des Mittelohrs"
    ],
    "explanation": "Der Waldeyersche Rachenring besteht aus lymphatischem Gewebe, unter anderem den genannten Mandeln."
  },
  {
    "id": "q-f004",
    "glossaryId": "f004",
    "term": "Anosmie",
    "category": "Nase & Nasennebenhöhlen",
    "question": "Welche Wahrnehmung fällt bei einer Anosmie aus?",
    "correctAnswer": "Die Wahrnehmung von Gerüchen",
    "distractors": [
      "Die Wahrnehmung von Geschmacksqualitäten",
      "Die Wahrnehmung von Berührung",
      "Die Wahrnehmung von Temperatur"
    ],
    "explanation": "Anosmie bedeutet Verlust des Geruchssinns. Vermindertes Aromaempfinden beim Essen kann damit zusammenhängen."
  },
  {
    "id": "q-f008",
    "glossaryId": "f008",
    "term": "Bellocq-Tamponade",
    "category": "Nase & Nasennebenhöhlen",
    "question": "Welchen Bereich tamponiert eine Bellocq-Tamponade zur Blutstillung?",
    "correctAnswer": "Den hinteren Nasenraum am Nasenrachen",
    "distractors": [
      "Den äußeren Gehörgang vor dem Trommelfell",
      "Den unteren Rachen am Speiseröhreneingang",
      "Den Mundboden unterhalb der Zunge"
    ],
    "explanation": "Die Bellocq-Tamponade dient der hinteren Nasentamponade, nicht einer Gehörgangstamponade."
  },
  {
    "id": "q-f021",
    "glossaryId": "f021",
    "term": "Epistaxis",
    "category": "Nase & Nasennebenhöhlen",
    "question": "Welche Blutungsquelle bezeichnet der Begriff Epistaxis?",
    "correctAnswer": "Die Nase",
    "distractors": [
      "Der äußere Gehörgang",
      "Die Mundschleimhaut",
      "Die unteren Atemwege"
    ],
    "explanation": "Epistaxis ist Nasenbluten; der Begriff legt die genaue Blutungsstelle innerhalb der Nase nicht fest."
  },
  {
    "id": "q-f026",
    "glossaryId": "f026",
    "term": "Frontobasale Verletzung",
    "category": "Nase & Nasennebenhöhlen",
    "question": "Welche Region ist bei einer frontobasalen Verletzung betroffen?",
    "correctAnswer": "Stirnregion und vordere Schädelbasis",
    "distractors": [
      "Hinterhauptregion und hintere Schädelgrube",
      "Unterkieferregion und Kiefergelenk",
      "Halsregion und obere Brustwirbelsäule"
    ],
    "explanation": "Frontobasal bezieht sich auf die vordere Schädelbasis im Stirnbereich; die Hirnhaut kann mitbetroffen sein."
  },
  {
    "id": "q-f038",
    "glossaryId": "f038",
    "term": "Konchotom",
    "category": "Nase & Nasennebenhöhlen",
    "question": "Wozu wird ein Konchotom eingesetzt?",
    "correctAnswer": "Zur Abtragung von Gewebe an den Nasenmuscheln",
    "distractors": [
      "Zur Ableitung von Flüssigkeit aus dem Mittelohr",
      "Zur Darstellung der Speicheldrüsengänge",
      "Zur Dehnung einer verengten Speiseröhre"
    ],
    "explanation": "Ein Konchotom ist ein Instrument zur Gewebeabtragung, besonders an Nasenmuscheln; es ist keine Untersuchungsmethode."
  },
  {
    "id": "q-f052",
    "glossaryId": "f052",
    "term": "Olfaktometrie",
    "category": "Nase & Nasennebenhöhlen",
    "question": "Welche Funktion wird bei einer Olfaktometrie geprüft?",
    "correctAnswer": "Die Wahrnehmung von Gerüchen",
    "distractors": [
      "Die Wahrnehmung von Geschmacksqualitäten",
      "Die Wahrnehmung von Tonhöhen",
      "Die Wahrnehmung von Drehbewegungen"
    ],
    "explanation": "Olfaktometrie prüft den Geruchssinn; Gustometrie prüft den Geschmackssinn."
  },
  {
    "id": "q-f071",
    "glossaryId": "f071",
    "term": "Rhinitis",
    "category": "Nase & Nasennebenhöhlen",
    "question": "Welche Schleimhaut ist bei einer Rhinitis primär entzündet?",
    "correctAnswer": "Die Schleimhaut der Nasenhöhle",
    "distractors": [
      "Die Schleimhaut des Rachens",
      "Die Schleimhaut des Kehlkopfs",
      "Die Schleimhaut der Mundhöhle"
    ],
    "explanation": "Rhinitis bezeichnet eine Entzündung der Nasenschleimhaut; Rhinosinusitis bezieht die Nebenhöhlen ein."
  },
  {
    "id": "q-f072",
    "glossaryId": "f072",
    "term": "Rhinolith",
    "category": "Nase & Nasennebenhöhlen",
    "question": "Was ist ein Rhinolith?",
    "correctAnswer": "Eine steinartige Ablagerung in der Nasenhöhle",
    "distractors": [
      "Eine flüssigkeitsgefüllte Erweiterung der Stirnhöhle",
      "Eine knollige Verdickung der äußeren Nasenhaut",
      "Eine narbige Verbindung zweier Nasenschleimhautflächen"
    ],
    "explanation": "Ein Rhinolith ist ein Nasenstein, häufig durch Ablagerungen um einen Kern entstanden."
  },
  {
    "id": "q-f073",
    "glossaryId": "f073",
    "term": "Rhinophym",
    "category": "Nase & Nasennebenhöhlen",
    "question": "Welche Veränderung beschreibt ein Rhinophym?",
    "correctAnswer": "Knollige Verdickung der äußeren Nasenhaut",
    "distractors": [
      "Knöcherne Verdickung der inneren Nasenscheidewand",
      "Zystische Erweiterung der Stirnhöhlenschleimhaut",
      "Narbige Verengung des hinteren Naseneingangs"
    ],
    "explanation": "Das Rhinophym betrifft die äußere Nasenhaut und ist nicht mit einer Nasenmuschelvergrößerung gleichzusetzen."
  },
  {
    "id": "q-f077",
    "glossaryId": "f077",
    "term": "Sinusitis",
    "category": "Nase & Nasennebenhöhlen",
    "question": "Welcher Bereich ist bei einer Sinusitis entzündet?",
    "correctAnswer": "Die Schleimhaut der Nasennebenhöhlen",
    "distractors": [
      "Die Schleimhaut der Speiseröhre",
      "Die Schleimhaut der Paukenhöhle",
      "Die Schleimhaut der Harnblase"
    ],
    "explanation": "Sinusitis meint im HNO-Kontext die Entzündung der Nasennebenhöhlen."
  },
  {
    "id": "q-f093",
    "glossaryId": "f093",
    "term": "Zele (Mukozele)",
    "category": "Nase & Nasennebenhöhlen",
    "question": "Was beschreibt eine Mukozele einer Nasennebenhöhle?",
    "correctAnswer": "Eine durch Schleimansammlung aufgedehnte Höhle",
    "distractors": [
      "Eine durch Luft im Weichteilgewebe entstandene Schwellung",
      "Eine durch Blutansammlung im Mittelohr entstandene Füllung",
      "Eine durch Verkalkung im Gehörgang entstandene Verlegung"
    ],
    "explanation": "Eine Mukozele ist eine schleimgefüllte, expansiv erweiterte Struktur, im HNO-Bereich etwa eine verschlossene Nebenhöhle."
  },
  {
    "id": "q-f003",
    "glossaryId": "f003",
    "term": "Adhäsivprozess",
    "category": "Ohr & Gleichgewicht",
    "question": "Was kennzeichnet einen Adhäsivprozess im Mittelohr?",
    "correctAnswer": "Verwachsungen mit eingeschränkter Beweglichkeit der Schallleitungsstrukturen",
    "distractors": [
      "Frische Blutansammlung bei frei beweglichen Schallleitungsstrukturen",
      "Isolierte Entzündung der Haut des äußeren Gehörgangs",
      "Isolierte Schädigung der Haarzellen in der Hörschnecke"
    ],
    "explanation": "Verwachsungen an Trommelfell und Gehörknöchelchen können die Schallleitung behindern."
  },
  {
    "id": "q-f005",
    "glossaryId": "f005",
    "term": "Antrotomie",
    "category": "Ohr & Gleichgewicht",
    "question": "Welche Struktur wird bei einer Antrotomie am Ohr eröffnet?",
    "correctAnswer": "Das Antrum im Warzenfortsatz",
    "distractors": [
      "Der knöcherne Kanal des Gesichtsnervs",
      "Die Hörschnecke im Innenohr",
      "Der äußere knorpelige Gehörgang"
    ],
    "explanation": "Die Antrotomie eröffnet das Antrum mastoideum, einen größeren Hohlraum im Warzenfortsatz."
  },
  {
    "id": "q-f011",
    "glossaryId": "f011",
    "term": "Cholesteatom",
    "category": "Ohr & Gleichgewicht",
    "question": "Welcher Vorgang passt zu einem Cholesteatom des Mittelohrs?",
    "correctAnswer": "Ansammlung verhornenden Plattenepithels mit möglicher Knochenzerstörung",
    "distractors": [
      "Ansammlung klarer Flüssigkeit ohne epitheliale Gewebemasse",
      "Ansammlung von Blut nach einer Trommelfellverletzung",
      "Ansammlung von Ohrschmalz vor dem Trommelfell"
    ],
    "explanation": "Ein Cholesteatom kann angrenzenden Knochen schädigen. Es ist weder ein Ohrschmalzpfropf noch ein bloßer Erguss."
  },
  {
    "id": "q-f014",
    "glossaryId": "f014",
    "term": "Diskriminationsfähigkeit",
    "category": "Ohr & Gleichgewicht",
    "question": "Was meint Diskriminationsfähigkeit in der Sprachaudiometrie?",
    "correctAnswer": "Ähnliche Sprachlaute voneinander unterscheiden zu können",
    "distractors": [
      "Sehr leise reine Töne erstmals wahrnehmen zu können",
      "Den Druck im Mittelohr selbst ausgleichen zu können",
      "Die Richtung einer Kopfbewegung sicher erkennen zu können"
    ],
    "explanation": "Bei der Diskrimination geht es um das Unterscheiden beziehungsweise Erkennen von Sprache, nicht nur um die Hörschwelle."
  },
  {
    "id": "q-f018",
    "glossaryId": "f018",
    "term": "Elektronystagmographie (ENG)",
    "category": "Ohr & Gleichgewicht",
    "question": "Welche Bewegung wird bei einer ENG aufgezeichnet?",
    "correctAnswer": "Die Bewegung der Augen",
    "distractors": [
      "Die Bewegung der Stimmlippen",
      "Die Bewegung des Trommelfells",
      "Die Bewegung des weichen Gaumens"
    ],
    "explanation": "Elektronystagmographie registriert Augenbewegungen und unterstützt die Untersuchung des Gleichgewichtssystems."
  },
  {
    "id": "q-f022",
    "glossaryId": "f022",
    "term": "ERA (elektrische Reaktionsaudiometrie)",
    "category": "Ohr & Gleichgewicht",
    "question": "Welche Messgröße nutzt die elektrische Reaktionsaudiometrie?",
    "correctAnswer": "Elektrische Antworten des Hörsystems auf Schallreize",
    "distractors": [
      "Mechanische Bewegungen des Trommelfells unter Luftdruck",
      "Subjektive Lautstärkeangaben ohne elektrische Ableitung",
      "Schallreflexionen an der Wand des äußeren Gehörgangs"
    ],
    "explanation": "ERA erfasst durch Schall ausgelöste elektrische Antworten; sie ist nicht auf eine bewusste Antwort der getesteten Person angewiesen."
  },
  {
    "id": "q-f023",
    "glossaryId": "f023",
    "term": "Fazialisdekompression",
    "category": "Ohr & Gleichgewicht",
    "question": "Welches Ziel hat eine Fazialisdekompression?",
    "correctAnswer": "Den Gesichtsnerv von einengendem Druck zu entlasten",
    "distractors": [
      "Den Gesichtsnerv zur Schmerzausschaltung zu durchtrennen",
      "Den Hörnerv durch elektrische Impulse zu stimulieren",
      "Den Gleichgewichtsnerv durch einen Schnitt auszuschalten"
    ],
    "explanation": "Dekompression bedeutet Entlastung; die Fazialisdekompression betrifft den Gesichtsnerv."
  },
  {
    "id": "q-f024",
    "glossaryId": "f024",
    "term": "Fazialisparese",
    "category": "Ohr & Gleichgewicht",
    "question": "Welche Funktion kann eine Fazialisparese beeinträchtigen?",
    "correctAnswer": "Die Bewegung der mimischen Gesichtsmuskeln",
    "distractors": [
      "Die Bewegung der Stimmlippen beim Sprechen",
      "Die Bewegung der Gehörknöchelchen bei Schall",
      "Die Bewegung der Nasenmuschelschleimhaut"
    ],
    "explanation": "Eine Fazialisparese betrifft die vom Gesichtsnerv versorgte Muskulatur, beispielsweise den Lidschluss."
  },
  {
    "id": "q-f031",
    "glossaryId": "f031",
    "term": "Hämatympanon",
    "category": "Ohr & Gleichgewicht",
    "question": "Was befindet sich bei einem Hämatympanon in der Paukenhöhle?",
    "correctAnswer": "Blut",
    "distractors": [
      "Luftblasen im Weichteilgewebe",
      "Ohrschmalz",
      "Verhornende Hautschuppen"
    ],
    "explanation": "Hämatympanon bezeichnet Blut im Mittelohr hinter dem Trommelfell."
  },
  {
    "id": "q-f035",
    "glossaryId": "f035",
    "term": "Impedanzmessung",
    "category": "Ohr & Gleichgewicht",
    "question": "Was wird bei der akustischen Impedanzmessung am Ohr beurteilt?",
    "correctAnswer": "Der Widerstand des Schallleitungssystems gegen Schallübertragung",
    "distractors": [
      "Die Geschwindigkeit der elektrischen Leitung im Hörnerv",
      "Die Geruchsschwelle bei unterschiedlich starken Reizen",
      "Die Bewegungsrichtung der Augen bei Kopfrotation"
    ],
    "explanation": "Akustische Impedanz betrifft das mechanische Schallleitungssystem und nicht die elektrische Nervenleitung."
  },
  {
    "id": "q-f036",
    "glossaryId": "f036",
    "term": "Kalorische Prüfung",
    "category": "Ohr & Gleichgewicht",
    "question": "Welche Funktion wird bei einer kalorischen Prüfung vor allem untersucht?",
    "correctAnswer": "Die Reaktion des Gleichgewichtsorgans auf einen Temperaturreiz",
    "distractors": [
      "Die Reaktion der Hörschnecke auf unterschiedliche Tonhöhen",
      "Die Reaktion des Trommelfells auf unterschiedliche Luftdrücke",
      "Die Reaktion des Geruchssinns auf unterschiedliche Duftstoffe"
    ],
    "explanation": "Warme oder kalte Reize am Ohr lösen vestibuläre Reaktionen aus; beurteilt werden unter anderem Augenbewegungen."
  },
  {
    "id": "q-f044",
    "glossaryId": "f044",
    "term": "Mastoidektomie",
    "category": "Ohr & Gleichgewicht",
    "question": "Welchen Bereich betrifft eine Mastoidektomie?",
    "correctAnswer": "Das Hohlraumsystem im Warzenfortsatz hinter dem Ohr",
    "distractors": [
      "Das Gangsystem der Ohrspeicheldrüse vor dem Ohr",
      "Das knorpelige Nasengerüst in der Gesichtsmitte",
      "Das lymphatische Gewebe der Rachenhinterwand"
    ],
    "explanation": "Bei der Mastoidektomie wird im Warzenfortsatz operiert, häufig zur Entfernung erkrankten Gewebes."
  },
  {
    "id": "q-f045",
    "glossaryId": "f045",
    "term": "Mastoiditis",
    "category": "Ohr & Gleichgewicht",
    "question": "Welcher Bereich ist bei einer Mastoiditis entzündet?",
    "correctAnswer": "Der Warzenfortsatz hinter dem Ohr",
    "distractors": [
      "Die Ohrspeicheldrüse vor dem Ohr",
      "Die Haut der Ohrmuschel allein",
      "Die Nasennebenhöhle über dem Auge"
    ],
    "explanation": "Mastoiditis betrifft das Mastoid beziehungsweise dessen Zellsystem, häufig im Zusammenhang mit einer Mittelohrentzündung."
  },
  {
    "id": "q-f046",
    "glossaryId": "f046",
    "term": "Ménière-Erkrankung",
    "category": "Ohr & Gleichgewicht",
    "question": "Welche Kombination ist typisch für die Ménière-Erkrankung?",
    "correctAnswer": "Anfallsartiger Drehschwindel, Hörminderung und Ohrgeräusche",
    "distractors": [
      "Anfallsartiger Drehschwindel, Heiserkeit und Schluckschmerz",
      "Anfallsartiger Drehschwindel, Nasenbluten und Geruchsverlust",
      "Anfallsartiger Drehschwindel, Mundtrockenheit und Zungenbrennen"
    ],
    "explanation": "Zur typischen Symptomkombination gehören vestibuläre Beschwerden sowie Hörminderung und Tinnitus; die Diagnose erfordert weitere Abklärung."
  },
  {
    "id": "q-f051",
    "glossaryId": "f051",
    "term": "Nystagmus",
    "category": "Ohr & Gleichgewicht",
    "question": "Was bezeichnet ein Nystagmus?",
    "correctAnswer": "Unwillkürliche rhythmische Augenbewegungen",
    "distractors": [
      "Unwillkürliche rhythmische Kaubewegungen",
      "Unwillkürliche rhythmische Stimmlippenbewegungen",
      "Unwillkürliche rhythmische Zungenbewegungen"
    ],
    "explanation": "Nystagmus bezeichnet rhythmische Augenbewegungen; er kann unterschiedliche Ursachen haben."
  },
  {
    "id": "q-f053",
    "glossaryId": "f053",
    "term": "Otitis externa",
    "category": "Ohr & Gleichgewicht",
    "question": "Wo liegt die Entzündung bei einer Otitis externa?",
    "correctAnswer": "Im äußeren Gehörgang",
    "distractors": [
      "In der Paukenhöhle",
      "In der Hörschnecke",
      "Im knöchernen Warzenfortsatz"
    ],
    "explanation": "Otitis externa betrifft den äußeren Gehörgang. Otitis media betrifft das Mittelohr."
  },
  {
    "id": "q-f054",
    "glossaryId": "f054",
    "term": "Otitis media",
    "category": "Ohr & Gleichgewicht",
    "question": "Wo liegt die Entzündung bei einer Otitis media?",
    "correctAnswer": "Im Mittelohr hinter dem Trommelfell",
    "distractors": [
      "Im äußeren Gehörgang vor dem Trommelfell",
      "In der Hörschnecke des Innenohrs",
      "Ausschließlich an der äußeren Ohrmuschel"
    ],
    "explanation": "Otitis media ist eine Mittelohrentzündung; anatomisch benachbarte Bereiche sind nicht gleichbedeutend."
  },
  {
    "id": "q-f055",
    "glossaryId": "f055",
    "term": "Otosklerose",
    "category": "Ohr & Gleichgewicht",
    "question": "Welche Veränderung kann bei Otosklerose die Schallleitung stören?",
    "correctAnswer": "Eine zunehmende Fixierung des Steigbügels",
    "distractors": [
      "Eine Verlegung des Gehörgangs durch Ohrschmalz",
      "Eine akute Flüssigkeitsansammlung hinter dem Trommelfell",
      "Eine narbige Verwachsung zwischen Nasenmuschel und Septum"
    ],
    "explanation": "Otosklerose ist ein knöcherner Umbauprozess, der unter anderem den Steigbügel fixieren kann; auch das Innenohr kann betroffen sein."
  },
  {
    "id": "q-f058",
    "glossaryId": "f058",
    "term": "Parazentese",
    "category": "Ohr & Gleichgewicht",
    "question": "Was wird bei einer Parazentese am Ohr gemacht?",
    "correctAnswer": "Das Trommelfell wird durch einen Schnitt eröffnet",
    "distractors": [
      "Eine Trommelfellöffnung wird durch Gewebe verschlossen",
      "Ein Gehörknöchelchen wird durch eine Prothese ersetzt",
      "Der Gesichtsnerv wird in seinem Knochenkanal freigelegt"
    ],
    "explanation": "Parazentese ist der Trommelfellschnitt. Ein Paukenröhrchen kann zusätzlich eingelegt werden."
  },
  {
    "id": "q-f064",
    "glossaryId": "f064",
    "term": "Presbyakusis",
    "category": "Ohr & Gleichgewicht",
    "question": "Welche Hörstörung bezeichnet Presbyakusis?",
    "correctAnswer": "Eine altersassoziierte Hörminderung",
    "distractors": [
      "Eine durch Gehörgangsverschluss bedingte Hörminderung",
      "Eine durch Mittelohrerguss bedingte Hörminderung",
      "Eine unmittelbar nach Knalltrauma aufgetretene Hörminderung"
    ],
    "explanation": "Presbyakusis bezeichnet Altersschwerhörigkeit; andere Ursachen einer Hörminderung sind davon abzugrenzen."
  },
  {
    "id": "q-f065",
    "glossaryId": "f065",
    "term": "Probetympanotomie",
    "category": "Ohr & Gleichgewicht",
    "question": "Welches Ziel hat eine Probetympanotomie?",
    "correctAnswer": "Die Paukenhöhle operativ zur Abklärung zu eröffnen",
    "distractors": [
      "Den äußeren Gehörgang lediglich mit Wasser zu reinigen",
      "Die Hörschwelle lediglich mit Kopfhörern zu bestimmen",
      "Die Ohrmuschel operativ an den Kopf anzulegen"
    ],
    "explanation": "Bei der Probetympanotomie wird das Mittelohr zur Erkundung eröffnet, etwa zur Abklärung einer Schallleitungsstörung."
  },
  {
    "id": "q-f080",
    "glossaryId": "f080",
    "term": "Surditas",
    "category": "Ohr & Gleichgewicht",
    "question": "Welche Bedeutung hat Surditas?",
    "correctAnswer": "Taubheit beziehungsweise Gehörlosigkeit",
    "distractors": [
      "Vermindertes Sprachverständnis bei normalem Hörvermögen",
      "Überempfindlichkeit gegenüber gewöhnlichen Geräuschen",
      "Verzerrte Wahrnehmung einzelner Tonhöhen"
    ],
    "explanation": "Surditas bezeichnet Taubheit, nicht bloß eine Geräuschüberempfindlichkeit."
  },
  {
    "id": "q-f082",
    "glossaryId": "f082",
    "term": "Tinnitus",
    "category": "Ohr & Gleichgewicht",
    "question": "Welche Wahrnehmung wird als Tinnitus bezeichnet?",
    "correctAnswer": "Ohrgeräusche ohne entsprechende äußere Schallquelle",
    "distractors": [
      "Drehbewegungen ohne entsprechende äußere Körperbewegung",
      "Lichtblitze ohne entsprechende äußere Lichtquelle",
      "Gerüche ohne entsprechende äußere Geruchsquelle"
    ],
    "explanation": "Tinnitus ist eine Geräuschwahrnehmung ohne entsprechende äußere Schallquelle."
  },
  {
    "id": "q-f086",
    "glossaryId": "f086",
    "term": "Tympanogramm",
    "category": "Ohr & Gleichgewicht",
    "question": "Was zeigt ein Tympanogramm?",
    "correctAnswer": "Die Beweglichkeit des Trommelfellsystems in Abhängigkeit vom Druck",
    "distractors": [
      "Die Hörschwelle für reine Töne in Abhängigkeit von der Frequenz",
      "Das Sprachverständnis in Abhängigkeit von der Lautstärke",
      "Die Augenbewegung in Abhängigkeit von einem Gleichgewichtsreiz"
    ],
    "explanation": "Das Tympanogramm ist die Kurve der Tympanometrie; es ist kein Tonaudiogramm."
  },
  {
    "id": "q-f087",
    "glossaryId": "f087",
    "term": "Tympanometrie",
    "category": "Ohr & Gleichgewicht",
    "question": "Was wird bei einer Tympanometrie gezielt variiert?",
    "correctAnswer": "Der Luftdruck im äußeren Gehörgang",
    "distractors": [
      "Die elektrische Spannung am Hörnerv",
      "Die Temperatur der Nasenschleimhaut",
      "Die Körperlage während des Schluckens"
    ],
    "explanation": "Die Trommelfellbeweglichkeit wird bei wechselndem Gehörgangsdruck gemessen."
  },
  {
    "id": "q-f090",
    "glossaryId": "f090",
    "term": "Valsalva-Versuch",
    "category": "Ohr & Gleichgewicht",
    "question": "Welcher Effekt wird beim Valsalva-Versuch am Ohr geprüft?",
    "correctAnswer": "Druckübertragung über die Ohrtrompete zum Mittelohr",
    "distractors": [
      "Schallübertragung über die Haut direkt zum Hörnerv",
      "Flüssigkeitsabfluss aus dem Mittelohr in den Gehörgang",
      "Luftübertritt aus der Luftröhre in die Speiseröhre"
    ],
    "explanation": "Der Versuch kann die Tubenbelüftung prüfen; er ist keine Anleitung zur unkontrollierten Drucksteigerung."
  },
  {
    "id": "q-f091",
    "glossaryId": "f091",
    "term": "Vestibularapparat",
    "category": "Ohr & Gleichgewicht",
    "question": "Welche Aufgabe hat der Vestibularapparat vor allem?",
    "correctAnswer": "Kopfbewegung und räumliche Orientierung mit erfassen",
    "distractors": [
      "Schallwellen in der Hörschnecke in Nervenimpulse umwandeln",
      "Den Luftdruck zwischen Mittelohr und Rachen ausgleichen",
      "Den Schall vom Trommelfell auf den Steigbügel übertragen"
    ],
    "explanation": "Der Vestibularapparat gehört zum Gleichgewichtssystem des Innenohrs; die Cochlea dient dem Hören."
  },
  {
    "id": "q-f095",
    "glossaryId": "f095",
    "term": "Zerumen",
    "category": "Ohr & Gleichgewicht",
    "question": "Was bezeichnet Zerumen?",
    "correctAnswer": "Das natürliche Sekret im äußeren Gehörgang",
    "distractors": [
      "Eine Eiteransammlung hinter dem Trommelfell",
      "Eine Blutansammlung in der Paukenhöhle",
      "Eine Hautschuppenansammlung im Mittelohr"
    ],
    "explanation": "Zerumen ist Ohrschmalz im Gehörgang und nicht mit einem Cholesteatom oder Mittelohrerguss gleichzusetzen."
  },
  {
    "id": "q-k008",
    "glossaryId": "k008",
    "term": "FESS",
    "category": "Operationen",
    "question": "Welcher Eingriff ist mit FESS gemeint?",
    "correctAnswer": "Endoskopische Operation an den Nasennebenhöhlen",
    "distractors": [
      "Endoskopische Operation ausschließlich am Kehlkopf",
      "Endoskopische Operation ausschließlich an der Speiseröhre",
      "Endoskopische Operation ausschließlich am Mittelohr"
    ],
    "explanation": "FESS bezeichnet die funktionelle endoskopische Nasennebenhöhlenchirurgie; der konkrete Umfang richtet sich nach dem Befund."
  },
  {
    "id": "q-k009",
    "glossaryId": "k009",
    "term": "VSB",
    "category": "Operationen",
    "question": "Welches Prinzip nutzt eine Vibrant Soundbridge (VSB)?",
    "correctAnswer": "Mechanische Schwingungsübertragung durch ein implantierbares Hörsystem",
    "distractors": [
      "Direkte elektrische Reizung über eine Elektrode in der Cochlea",
      "Ableitung von Mittelohrsekret durch ein Röhrchen im Trommelfell",
      "Druckausgleich durch einen dauerhaft geöffneten Nasengang"
    ],
    "explanation": "Die VSB ist ein aktives Mittelohrimplantat; sie ist kein Cochlea-Implantat und kein Paukenröhrchen."
  },
  {
    "id": "q-k010",
    "glossaryId": "k010",
    "term": "TE",
    "category": "Operationen",
    "question": "Welcher Eingriff ist mit TE in diesem Stationsglossar gemeint?",
    "correctAnswer": "Vollständige Entfernung der Gaumenmandeln",
    "distractors": [
      "Teilweise Entfernung der Gaumenmandeln",
      "Abtragung der Rachenmandel im Nasenrachen",
      "Verkleinerung der Zungenmandel am Zungengrund"
    ],
    "explanation": "TE steht hier für Tonsillektomie. Die Teilentfernung der Gaumenmandeln heißt Tonsillotomie."
  },
  {
    "id": "q-k011",
    "glossaryId": "k011",
    "term": "AT",
    "category": "Operationen",
    "question": "Welcher Eingriff ist mit AT in diesem Stationsglossar gemeint?",
    "correctAnswer": "Abtragung der Rachenmandel",
    "distractors": [
      "Abtragung einer Gaumenmandel",
      "Abtragung einer Nasenmuschel",
      "Abtragung einer Stimmlippe"
    ],
    "explanation": "AT steht hier für Adenotomie; die Rachenmandel liegt im Nasenrachen."
  },
  {
    "id": "q-k012",
    "glossaryId": "k012",
    "term": "PHR",
    "category": "Operationen",
    "question": "Welche Aufgabe hat ein PHR hauptsächlich?",
    "correctAnswer": "Belüftung des Mittelohrs durch das Trommelfell",
    "distractors": [
      "Stabilisierung der Gehörknöchelchen im Mittelohr",
      "Erweiterung des äußeren knorpeligen Gehörgangs",
      "Verschluss eines bestehenden Trommelfelldefekts"
    ],
    "explanation": "PHR meint hier ein Paukenhöhlenröhrchen. Es hält eine Öffnung zur Mittelohrbelüftung offen."
  },
  {
    "id": "q-k013",
    "glossaryId": "k013",
    "term": "Tymp. Typ I-IV",
    "category": "Operationen",
    "question": "Was ist ein Ziel einer Tympanoplastik?",
    "correctAnswer": "Rekonstruktion von Trommelfell oder Gehörknöchelchenkette",
    "distractors": [
      "Entfernung ausschließlich der äußeren Ohrmuschel",
      "Ausschaltung ausschließlich des Gleichgewichtsnervs",
      "Ableitung ausschließlich elektrischer Antworten des Hörsystems"
    ],
    "explanation": "Die Typen beschreiben unterschiedliche Rekonstruktionen. Tympanoplastik ist ein Eingriff und nicht die Tympanometrie als Messung."
  },
  {
    "id": "q-k014",
    "glossaryId": "k014",
    "term": "LE",
    "category": "Operationen",
    "question": "Welches Organ betrifft die als LE bezeichnete Operation hier?",
    "correctAnswer": "Den Kehlkopf",
    "distractors": [
      "Die Schilddrüse",
      "Die Ohrspeicheldrüse",
      "Die Rachenmandel"
    ],
    "explanation": "LE steht in diesem Stationsglossar für Laryngektomie; außerhalb dieses Kontexts kann das Kürzel anders verwendet werden."
  },
  {
    "id": "q-k015",
    "glossaryId": "k015",
    "term": "Neck diss",
    "category": "Operationen",
    "question": "Welches Gewebe wird bei einer Neck diss gezielt entfernt?",
    "correctAnswer": "Lymphknotengewebe am Hals",
    "distractors": [
      "Ausschließlich Schilddrüsengewebe am Hals",
      "Ausschließlich Stimmlippengewebe im Kehlkopf",
      "Ausschließlich Speicheldrüsengewebe vor dem Ohr"
    ],
    "explanation": "Neck-Dissection bezeichnet eine Halslymphknotenausräumung. Ihr Umfang ist nicht immer radikal und muss konkret benannt werden."
  },
  {
    "id": "q-k016",
    "glossaryId": "k016",
    "term": "Concho",
    "category": "Operationen",
    "question": "Welche Struktur wird bei einer Concho operativ verkleinert oder teilweise abgetragen?",
    "correctAnswer": "Die Nasenmuschel",
    "distractors": [
      "Die Nasenscheidewand",
      "Die Rachenmandel",
      "Die Gaumenmandel"
    ],
    "explanation": "Concho steht hier für Conchotomie. Septumplastik betrifft dagegen die Nasenscheidewand."
  },
  {
    "id": "q-k017",
    "glossaryId": "k017",
    "term": "LK EX",
    "category": "Operationen",
    "question": "Was ist mit LK EX gemeint?",
    "correctAnswer": "Die operative Entfernung eines Lymphknotens",
    "distractors": [
      "Die Punktion eines Lymphknotens mit dünner Nadel",
      "Die Ultraschalluntersuchung eines Lymphknotens",
      "Die alleinige Bestrahlung eines Lymphknotens"
    ],
    "explanation": "Lymphknotenexstirpation bezeichnet eine operative Entfernung, nicht nur Punktion oder Bildgebung."
  },
  {
    "id": "q-k018",
    "glossaryId": "k018",
    "term": "CI",
    "category": "Operationen",
    "question": "Welches Prinzip nutzt ein CI?",
    "correctAnswer": "Elektrische Reizung des Hörnervs über Elektroden in der Cochlea",
    "distractors": [
      "Ausschließlich akustische Verstärkung im äußeren Gehörgang",
      "Ausschließlich mechanischer Druckausgleich im Mittelohr",
      "Ausschließlich thermische Reizung des Gleichgewichtsorgans"
    ],
    "explanation": "Ein Cochlea-Implantat wandelt Schall in elektrische Impulse um. Es ist nicht bloß ein lauterer Lautsprecher im Gehörgang."
  },
  {
    "id": "q-k019",
    "glossaryId": "k019",
    "term": "BAHA",
    "category": "Operationen",
    "question": "Welchen Übertragungsweg nutzt ein BAHA?",
    "correctAnswer": "Schallübertragung über den Schädelknochen zum Innenohr",
    "distractors": [
      "Schallübertragung durch ein Röhrchen zum Nasenrachen",
      "Elektrische Reizung durch eine Elektrode in der Hörschnecke",
      "Druckübertragung durch Luft in die Speiseröhre"
    ],
    "explanation": "BAHA steht für ein knochenverankertes Hörsystem; es nutzt Knochenleitung."
  },
  {
    "id": "q-k020",
    "glossaryId": "k020",
    "term": "SPL",
    "category": "Operationen",
    "question": "Welche Struktur wird bei einer SPL korrigiert?",
    "correctAnswer": "Die Nasenscheidewand",
    "distractors": [
      "Die Nasenmuschel",
      "Die Rachenmandel",
      "Die vordere Stirnhöhlenwand"
    ],
    "explanation": "SPL steht hier für Septumplastik. Der Eingriff richtet sich auf das Septum der Nase."
  },
  {
    "id": "q-k021",
    "glossaryId": "k021",
    "term": "MLK/MLS",
    "category": "Operationen",
    "question": "Welcher Bereich wird bei einer MLK/MLS unter Vergrößerung untersucht oder behandelt?",
    "correctAnswer": "Der Kehlkopf mit seinen Stimmlippen",
    "distractors": [
      "Das Mittelohr mit seinen Gehörknöchelchen",
      "Der Nasenrachen mit seinen Tubenöffnungen",
      "Der Magen mit seinem Magenausgang"
    ],
    "explanation": "Die hier verwendeten Kürzel bezeichnen Mikrolaryngoskopie. Lokale Schreibweisen sollten gegen den Stationsstandard geprüft werden."
  },
  {
    "id": "q-k040",
    "glossaryId": "k040",
    "term": "HKP",
    "category": "Personal & Organisation",
    "question": "Welche Versorgung bezeichnet HKP in diesem Glossar?",
    "correctAnswer": "Pflegerische Versorgung im häuslichen Umfeld",
    "distractors": [
      "Pflegerische Versorgung ausschließlich im OP-Saal",
      "Pflegerische Versorgung ausschließlich auf Intensivstation",
      "Pflegerische Versorgung ausschließlich im Aufwachraum"
    ],
    "explanation": "HKP steht hier für Hauskrankenpflege beziehungsweise häusliche Krankenpflege; die konkrete Leistung hängt vom Auftrag ab."
  },
  {
    "id": "q-k041",
    "glossaryId": "k041",
    "term": "AvD",
    "category": "Personal & Organisation",
    "question": "Welche Rolle bezeichnet AvD?",
    "correctAnswer": "Den aktuell diensthabenden Arzt",
    "distractors": [
      "Den ausschließlich leitenden Chefarzt",
      "Den ausschließlich ambulant behandelnden Hausarzt",
      "Den ausschließlich operierenden Facharzt"
    ],
    "explanation": "Arzt vom Dienst beschreibt eine Dienstfunktion, nicht automatisch eine bestimmte Hierarchiestufe."
  },
  {
    "id": "q-k042",
    "glossaryId": "k042",
    "term": "RST",
    "category": "Personal & Organisation",
    "question": "Welche Einrichtung ist mit RST in diesem Stationsglossar gemeint?",
    "correctAnswer": "Eine Anlaufstelle für akute medizinische Notfälle",
    "distractors": [
      "Eine Stelle für geplante Rehabilitationsaufnahmen",
      "Eine Stelle für ambulante Heilmittelverordnungen",
      "Eine Stelle für interne Personalabrechnungen"
    ],
    "explanation": "RST steht hier für Rettungsstelle. Lokale Bezeichnungen können abweichen."
  },
  {
    "id": "q-k043",
    "glossaryId": "k043",
    "term": "CA/OA",
    "category": "Personal & Organisation",
    "question": "Welche Funktionen bezeichnet die Kombination CA/OA hier?",
    "correctAnswer": "Ärztliche Leitungsfunktionen als Chef- und Oberarzt",
    "distractors": [
      "Pflegerische Leitungsfunktionen als Stations- und Teamleitung",
      "Therapeutische Funktionen als Physio- und Ergotherapie",
      "Verwaltungsfunktionen als Aufnahme- und Abrechnungsleitung"
    ],
    "explanation": "CA/OA bezeichnet Chefarzt und Oberarzt, nicht die pflegerische Leitung."
  },
  {
    "id": "q-k056",
    "glossaryId": "k056",
    "term": "PDL",
    "category": "Personal & Organisation",
    "question": "Welchem Bereich ist die PDL organisatorisch zugeordnet?",
    "correctAnswer": "Der Leitung des Pflegedienstes",
    "distractors": [
      "Der Leitung des ärztlichen Dienstes",
      "Der Leitung des technischen Dienstes",
      "Der Leitung des pharmazeutischen Dienstes"
    ],
    "explanation": "PDL steht für Pflegedienstleitung; die Zuständigkeiten richten sich nach der Organisation des Hauses."
  },
  {
    "id": "q-k022",
    "glossaryId": "k022",
    "term": "Cefu",
    "category": "Sonstiges",
    "question": "Welcher Arzneimittelgruppe gehört das mit Cefu gemeinte Cefuroxim an?",
    "correctAnswer": "Den Antibiotika",
    "distractors": [
      "Den Antihistaminika",
      "Den Antikoagulanzien",
      "Den Antiemetika"
    ],
    "explanation": "Cefuroxim ist ein Antibiotikum. Aus dem Stationskürzel allein darf keine Dosierung abgeleitet werden."
  },
  {
    "id": "q-k023",
    "glossaryId": "k023",
    "term": "EaB",
    "category": "Sonstiges",
    "question": "Was bedeutet EaB in diesem Stationsglossar?",
    "correctAnswer": "Eigenmedikation am Bett",
    "distractors": [
      "Einmalige Arzneimittelgabe bei Bedarf",
      "Erste Arzneimittelgabe vor Belastung",
      "Externe Arzneimittelbestellung"
    ],
    "explanation": "EaB steht hier für Eigenmedikation am Bett. Das Kürzel ersetzt keine hausinterne Regel zur Medikamentenaufbewahrung oder Einnahme."
  },
  {
    "id": "q-k024",
    "glossaryId": "k024",
    "term": "ITN",
    "category": "Sonstiges",
    "question": "Welches Merkmal gehört zur ITN?",
    "correctAnswer": "Allgemeinanästhesie mit Sicherung des Atemwegs durch einen Tubus",
    "distractors": [
      "Regionalanästhesie mit Betäubung nur eines Körperabschnitts",
      "Lokalanästhesie mit Betäubung nur der Operationsstelle",
      "Oberflächenanästhesie mit Betäubung nur einer Schleimhaut"
    ],
    "explanation": "ITN bedeutet Intubationsnarkose; der Tubus dient der Atemwegssicherung während der Allgemeinanästhesie."
  },
  {
    "id": "q-k025",
    "glossaryId": "k025",
    "term": "WL",
    "category": "Sonstiges",
    "question": "Was bezeichnet WL bei der Krankenhausaufnahme?",
    "correctAnswer": "Zusätzlich vereinbarte Wahlleistungen",
    "distractors": [
      "Ausschließlich medizinisch notwendige Basisleistungen",
      "Ausschließlich gesetzlich festgelegte Zuzahlungen",
      "Ausschließlich pflegerische Notfallmaßnahmen"
    ],
    "explanation": "Wahlleistungen werden zusätzlich vereinbart, etwa bestimmte Unterkunfts- oder ärztliche Leistungen."
  },
  {
    "id": "q-k026",
    "glossaryId": "k026",
    "term": "EZ/DZ",
    "category": "Sonstiges",
    "question": "Worauf bezieht sich EZ/DZ bei der Zimmerplanung?",
    "correctAnswer": "Auf die Belegung mit einer oder zwei Personen",
    "distractors": [
      "Auf die Versorgung durch einen oder zwei Ärzte",
      "Auf die Überwachung mit einem oder zwei Monitoren",
      "Auf die Pflege durch eine oder zwei Pflegekräfte"
    ],
    "explanation": "EZ/DZ bedeutet Einzel- beziehungsweise Doppelzimmer und bezeichnet keine Betreuungsintensität."
  },
  {
    "id": "q-k027",
    "glossaryId": "k027",
    "term": "SZ",
    "category": "Sonstiges",
    "question": "Welche Aussage passt zu SZ im Abrechnungskontext?",
    "correctAnswer": "Die Person trägt die betreffenden Kosten selbst",
    "distractors": [
      "Die Person ist wegen der Behandlung von allen Kosten befreit",
      "Die Person erhält ausschließlich Leistungen der Pflegeversicherung",
      "Die Person erhält ausschließlich eine kostenlose Zusatzleistung"
    ],
    "explanation": "SZ bedeutet Selbstzahler. Welche Kosten betroffen sind, muss aus der konkreten Vereinbarung hervorgehen."
  },
  {
    "id": "q-k028",
    "glossaryId": "k028",
    "term": "MS",
    "category": "Sonstiges",
    "question": "Welchen Weg nimmt die hier mit MS gemeinte nasale Magensonde?",
    "correctAnswer": "Durch die Nase und Speiseröhre in den Magen",
    "distractors": [
      "Durch die Nase und Luftröhre in einen Bronchus",
      "Durch die Bauchwand direkt in den Magen",
      "Durch die Bauchwand direkt in den Dünndarm"
    ],
    "explanation": "MS meint hier eine nasale Magensonde. Die Lage muss nach den geltenden Standards gesichert werden."
  },
  {
    "id": "q-k029",
    "glossaryId": "k029",
    "term": "TM",
    "category": "Sonstiges",
    "question": "Welche Aussage trifft auf TM im Sinne von Tumor zu?",
    "correctAnswer": "Eine Gewebeneubildung ist nicht automatisch bösartig",
    "distractors": [
      "Eine Gewebeneubildung ist grundsätzlich eine Fernmetastase",
      "Eine Gewebeneubildung ist grundsätzlich eine bakterielle Entzündung",
      "Eine Gewebeneubildung ist grundsätzlich eine harmlose Narbe"
    ],
    "explanation": "Tumor ist keine automatische Gleichsetzung mit Krebs. Gut- oder Bösartigkeit muss gesondert geklärt werden."
  },
  {
    "id": "q-k030",
    "glossaryId": "k030",
    "term": "NNH",
    "category": "Sonstiges",
    "question": "Welche Strukturen gehören zu den NNH?",
    "correctAnswer": "Luftgefüllte Hohlräume um die Nasenhöhle",
    "distractors": [
      "Speichelführende Gänge unter der Mundschleimhaut",
      "Lymphatische Gewebepolster im Rachen",
      "Knorpelige Verbindungen zwischen Kehlkopf und Luftröhre"
    ],
    "explanation": "NNH steht für Nasennebenhöhlen, etwa Kiefer-, Stirn- und Keilbeinhöhle sowie Siebbeinzellen."
  },
  {
    "id": "q-k035",
    "glossaryId": "k035",
    "term": "Diab",
    "category": "Sonstiges",
    "question": "Welcher Stoffwechselbereich steht bei dem hier mit Diab gemeinten Diabetes mellitus im Vordergrund?",
    "correctAnswer": "Die Regulation des Blutzuckers",
    "distractors": [
      "Die Regulation des Blutkalziums",
      "Die Regulation der Harnsäure",
      "Die Regulation des Bilirubins"
    ],
    "explanation": "Diabetes mellitus betrifft den Glukosestoffwechsel; das Kürzel allein legt keinen Diabetes-Typ fest."
  },
  {
    "id": "q-k057",
    "glossaryId": "k057",
    "term": "AB",
    "category": "Sonstiges",
    "question": "Gegen welche Erregergruppe richten sich AB im Sinne von Antibiotika grundsätzlich?",
    "correctAnswer": "Gegen Bakterien",
    "distractors": [
      "Gegen Viren",
      "Gegen Pilze",
      "Gegen Würmer"
    ],
    "explanation": "Antibiotika werden gegen bakterielle Infektionen eingesetzt; sie wirken nicht grundsätzlich gegen jede Erregergruppe."
  },
  {
    "id": "q-k058",
    "glossaryId": "k058",
    "term": "Z.n.",
    "category": "Sonstiges",
    "question": "Wie ist Z.n. Tonsillektomie in einer Vorgeschichte zu verstehen?",
    "correctAnswer": "Die Tonsillektomie hat bereits stattgefunden",
    "distractors": [
      "Die Tonsillektomie ist nur als Möglichkeit erwogen",
      "Die Tonsillektomie ist für morgen verbindlich geplant",
      "Die Tonsillektomie wurde ausdrücklich ausgeschlossen"
    ],
    "explanation": "Z.n. bedeutet Zustand nach und verweist auf ein vorausgegangenes Ereignis."
  },
  {
    "id": "q-k059",
    "glossaryId": "k059",
    "term": "V.a.",
    "category": "Sonstiges",
    "question": "Wie ist V.a. Peritonsillarabszess zu verstehen?",
    "correctAnswer": "Ein Abszess wird vermutet, ist aber noch nicht gesichert",
    "distractors": [
      "Ein Abszess ist bereits vollständig ausgeschlossen",
      "Ein Abszess wurde früher entfernt und ist abgeheilt",
      "Ein Abszess ist durch das Kürzel bereits sicher bewiesen"
    ],
    "explanation": "V.a. bedeutet Verdacht auf. Eine Verdachtsdiagnose ist keine gesicherte Diagnose."
  },
  {
    "id": "q-k060",
    "glossaryId": "k060",
    "term": "HI",
    "category": "Sonstiges",
    "question": "Warum muss das Kürzel HI ohne weiteren Kontext geklärt werden?",
    "correctAnswer": "Es kann Herzinfarkt oder Herzinsuffizienz bedeuten",
    "distractors": [
      "Es bezeichnet immer ausschließlich einen Herzinfarkt",
      "Es bezeichnet immer ausschließlich eine Herzinsuffizienz",
      "Es bezeichnet eindeutig einen unauffälligen Herzbefund"
    ],
    "explanation": "Das Glossar nennt ausdrücklich beide Bedeutungen. Eine eindeutige Auflösung ohne Kontext wäre hier falsch."
  },
  {
    "id": "q-k001",
    "glossaryId": "k001",
    "term": "KL/Audio",
    "category": "Untersuchung",
    "question": "Was wird bei einer Knochenleitungsprüfung im Hörtest gezielt genutzt?",
    "correctAnswer": "Schallübertragung über den Schädelknochen zum Innenohr",
    "distractors": [
      "Schallübertragung über den Gehörgang zum Trommelfell",
      "Druckübertragung über den Rachen in das Mittelohr",
      "Wärmeübertragung über den Gehörgang zum Gleichgewichtsorgan"
    ],
    "explanation": "Knochenleitung umgeht den üblichen Luftleitungsweg über Gehörgang und Mittelohr; ein Audiogramm stellt Hörschwellen dar."
  },
  {
    "id": "q-k002",
    "glossaryId": "k002",
    "term": "Tymp.",
    "category": "Untersuchung",
    "question": "Welche Untersuchung ist mit Tymp. in der Diagnostikliste dieses Glossars gemeint?",
    "correctAnswer": "Messung der Trommelfellbeweglichkeit bei verändertem Luftdruck",
    "distractors": [
      "Operative Wiederherstellung einer geschädigten Gehörknöchelchenkette",
      "Bestimmung der Hörschwelle mit unterschiedlich hohen Tönen",
      "Aufzeichnung der Augenbewegungen nach einem Temperaturreiz"
    ],
    "explanation": "Hier steht Tymp. für Tympanometrie beziehungsweise Impedanzmessung. Im OP-Kontext kann ein ähnliches Kürzel anders gemeint sein."
  },
  {
    "id": "q-k003",
    "glossaryId": "k003",
    "term": "Vesti",
    "category": "Untersuchung",
    "question": "Welche Funktion steht bei einer Vesti-Untersuchung im Vordergrund?",
    "correctAnswer": "Die Funktion des Gleichgewichtssystems",
    "distractors": [
      "Die Funktion des Geschmackssystems",
      "Die Funktion der Stimmbildung",
      "Die Funktion der Speichelsekretion"
    ],
    "explanation": "Vesti bezeichnet hier eine vestibuläre Untersuchung und nicht einen reinen Hörtest."
  },
  {
    "id": "q-k004",
    "glossaryId": "k004",
    "term": "AVT",
    "category": "Untersuchung",
    "question": "Welche Kombination steckt hier hinter AVT?",
    "correctAnswer": "Hörprüfung, Gleichgewichtsprüfung und Mittelohrfunktionsprüfung",
    "distractors": [
      "Hörprüfung, Geruchsprüfung und Geschmacksprüfung",
      "Gleichgewichtsprüfung, Kehlkopfspiegelung und Hörprüfung",
      "Mittelohrfunktionsprüfung, Blutentnahme und Geruchsprüfung"
    ],
    "explanation": "AVT fasst in diesem Stationsglossar Audio, Vestibulographie und Tympanometrie zusammen. Die lokale Verwendung ist zu bestätigen."
  },
  {
    "id": "q-k005",
    "glossaryId": "k005",
    "term": "BE",
    "category": "Untersuchung",
    "question": "Welche Maßnahme ist mit BE in diesem Stationsglossar gemeint?",
    "correctAnswer": "Entnahme einer Blutprobe",
    "distractors": [
      "Entnahme einer Gewebeprobe",
      "Entnahme einer Urinprobe",
      "Entnahme einer Abstrichprobe"
    ],
    "explanation": "BE steht hier für Blutentnahme. Die Bezeichnung legt weder Untersuchungsauftrag noch Entnahmeröhrchen fest."
  },
  {
    "id": "q-k006",
    "glossaryId": "k006",
    "term": "PTA",
    "category": "Untersuchung",
    "question": "Was ist mit PTA im HNO-Diagnosekontext dieses Glossars gemeint?",
    "correctAnswer": "Eine Eiteransammlung im Gewebe um die Gaumenmandel",
    "distractors": [
      "Eine Flüssigkeitsansammlung hinter dem Trommelfell",
      "Eine Luftansammlung im Unterhautgewebe des Halses",
      "Eine Schleimansammlung in einer Nasennebenhöhle"
    ],
    "explanation": "PTA steht hier für Peri- beziehungsweise Paratonsillarabszess. In anderen Fachbereichen hat PTA andere Bedeutungen."
  },
  {
    "id": "q-k007",
    "glossaryId": "k007",
    "term": "OAE",
    "category": "Untersuchung",
    "question": "Welcher Befund wird bei OAE untersucht?",
    "correctAnswer": "Schallaussendungen aus der Cochlea, besonders der äußeren Haarzellen",
    "distractors": [
      "Elektrische Herzsignale, die an der Brustwand abgeleitet werden",
      "Luftdruckschwankungen, die beim Schlucken im Rachen entstehen",
      "Augenbewegungen, die durch kalte oder warme Reize entstehen"
    ],
    "explanation": "Otoakustische Emissionen dienen der Beurteilung cochleärer Funktion. Sie erfassen nicht allein das gesamte Hörvermögen."
  },
  {
    "id": "q-k061",
    "glossaryId": "k061",
    "term": "T",
    "category": "Untersuchung",
    "question": "Welche Messgröße bezeichnet T in der Vitalzeichendokumentation dieses Glossars?",
    "correctAnswer": "Die Körpertemperatur",
    "distractors": [
      "Die Körpermasse",
      "Die Körpergröße",
      "Die Körperoberfläche"
    ],
    "explanation": "T steht hier für Temperatur. Die Antworten benennen Messgrößen statt die Lösung durch einen einzelnen Anfangsbuchstaben zu verraten."
  },
  {
    "id": "q-k062",
    "glossaryId": "k062",
    "term": "P",
    "category": "Untersuchung",
    "question": "Welche Beobachtung wird hier unter P als Vitalzeichen dokumentiert?",
    "correctAnswer": "Frequenz und Rhythmus der tastbaren Pulswelle",
    "distractors": [
      "Systolischer und diastolischer arterieller Druck",
      "Anzahl und Tiefe der Atemzüge pro Minute",
      "Wert und Verlauf der gemessenen Körpertemperatur"
    ],
    "explanation": "P meint hier Puls. Blutdruck, Atmung und Temperatur sind andere Vitalparameter."
  },
  {
    "id": "q-k063",
    "glossaryId": "k063",
    "term": "RR",
    "category": "Untersuchung",
    "question": "Welche Messgröße bezeichnet RR in diesem Stationsglossar?",
    "correctAnswer": "Den arteriellen Blutdruck",
    "distractors": [
      "Die arterielle Sauerstoffsättigung",
      "Die Atemfrequenz pro Minute",
      "Die Pulsfrequenz pro Minute"
    ],
    "explanation": "RR steht hier für Blutdruck nach Riva-Rocci. In englischen Unterlagen kann RR auch respiratory rate bedeuten."
  },
  {
    "id": "q-k064",
    "glossaryId": "k064",
    "term": "BZ(-TP)",
    "category": "Untersuchung",
    "question": "Was wird bei einem BZ-Tagesprofil wiederholt erfasst?",
    "correctAnswer": "Die Glukosekonzentration zu mehreren Tageszeitpunkten",
    "distractors": [
      "Die Körpertemperatur zu mehreren Tageszeitpunkten",
      "Die Pulsfrequenz zu mehreren Tageszeitpunkten",
      "Die Sauerstoffsättigung zu mehreren Tageszeitpunkten"
    ],
    "explanation": "BZ bezeichnet Blutzucker; ein Tagesprofil umfasst mehrere Messungen nach dem jeweiligen Untersuchungsplan."
  }
];
