# Quiz: Auswahl und fachliche Prüfung

## Verhalten
- `js/quiz-selection.js` erzeugt vier unterschiedliche Antworten, priorisiert die gleiche Kategorie und fällt auf andere Kategorien zurück.
- Bei einbuchstabigen Kürzeln wie T hat ein passender Anfangsbuchstabe Vorrang vor der Kategorie. Bei längeren Kürzeln bleibt die Kategorie vorrangig.
- Bekannte Verbindungen zwischen Kürzel, Begriff und Bedeutung werden zu Gruppen zusammengefasst. Identische Antworten und solche Gruppen werden nicht als gegnerische Lösungen verwendet. Nicht ausdrücklich im Datenbestand verknüpfte medizinische Synonyme brauchen weiterhin redaktionelle Prüfung; optionale `quizAliases` helfen dabei.
- Fragen mit weniger als drei verschiedenen Ablenkern werden übersprungen. Die tatsächliche Rundengröße wird angezeigt.
- Alle Kategorien haben aktuell mindestens vier Einträge. Es wurden keine Glossareinträge ergänzt.

## Eigener Antwortpool außerhalb des Glossars
`js/quiz-distractors.js` enthält zehn Fragensätze mit eigener richtiger Formulierung, drei Ablenkern, Erklärung und Quellenhinweis. Die Glossardaten bleiben unverändert. Kürzel werden ausdrücklich im Kontext dieses Stationsglossars abgefragt.

Die Fragensätze sind **Entwürfe**. Eine Quellenprüfung ist keine medizinische Freigabe. Die Quellen belegen die richtige Definition, nicht automatisch die Eignung jeder Falle. Die neuen Kürzel-Fallen müssen insbesondere gegen die tatsächlichen Stationskonventionen geprüft werden.

## Lokal ansehen
Die App über `http://localhost:PORT` oder `http://127.0.0.1:PORT` starten. Unter Quiz die lokale Prüfvorschau aktivieren und Richtung „Begriff → Bedeutung“ wählen. Die Fragensätze werden für die betreffenden Begriffe in normale Runden eingemischt. Jede Entwurfsfrage ist gekennzeichnet und verändert den gespeicherten Lernfortschritt nicht. Erklärungen sind wie die medizinischen Antworttexte zunächst deutsch.

Auf GitHub Pages sind Entwürfe ausgeschlossen. Kein versteckter URL-Schalter aktiviert sie. Die Dateien sind dennoch öffentlich einsehbar, sobald sie hochgeladen werden; die Sperre betrifft die Quiz-Auswahl.

## Freigabe
Jeden Satz auf eindeutige richtige Antwort, plausible aber falsche Ablenker, Synonyme, Mehrdeutigkeit und Erklärung prüfen. Nach dokumentierter fachlicher Freigabe `status: "draft"` bei dem betreffenden Satz auf `status: "approved"` ändern und Prüfer/Datum dokumentieren. Anschließend Cache-Version in `sw.js` erhöhen. Entwürfe niemals pauschal als geprüft markieren.

## Prüfung der Software
`node tests/quiz-selection.test.mjs`

Die Tests prüfen alle Einträge in allen drei Richtungen, vier eindeutige Optionen, wechselnde Lösungspositionen, Kategorie-Fallback, verknüpfte Synonyme, zu kleine Pools, Entwurfssperre sowie T-Antworten mit gleichem Anfangsbuchstaben. Ein realer Browser-/Gerätetest bleibt zusätzlich erforderlich.
