# Fester HNO-Fragenkatalog

## Dateien
- `js/quiz-questions.js`: einzige bearbeitbare Inhaltsquelle, genau eine feste Frage je Glossareintrag (160 insgesamt). Alle Fragen sind live.
- `js/quiz-bank.js`: Strukturprüfung, Kategorie-Filter und zufällige Reihenfolge. Erfindet keine Antworten.
- `js/quiz.js`: Anzeige, Bewertung und Ergebnisansicht.

## Fragen bearbeiten
Pro Datensatz können `question`, `correctAnswer`, die drei `distractors` und `explanation` geändert werden. `glossaryId`, `term` und `category` verknüpfen den Datensatz mit dem bestehenden Glossar; IDs nicht beliebig ändern. Deutsche Texte stehen bewusst unabhängig von den kurzen Glossarbedeutungen.

Ein Datensatz hat vier eindeutig unterschiedliche Antworttexte. Die drei Ablenker dürfen weder Synonyme der Lösung noch ebenfalls richtige Antworten auf die Frage sein. Auf vergleichbare Satzlänge und plausible Alternativen achten. Keine falschen medizinischen Aussagen als allgemeine Merksätze formulieren. Mehrdeutige Kürzel ausdrücklich in ihren Kontext setzen. Feedback zu einzelnen Fragen kommt per Mail; dann direkt hier anpassen.

## Richtungen und Sprachen
Das Quiz zeigt die fest formulierten deutschen Fragen, Antworten und Erklärungen. DE/EN/FR übersetzt weiterhin die Bedienung, nicht die Fragen selbst.

## Prüfen und veröffentlichen
1. `node --test tests/*.test.mjs`
2. Geänderte Frage lokal im Browser prüfen.
3. Cache-Version in `sw.js` erhöhen, bevor eine neue Fassung veröffentlicht wird.

Die Softwaretests prüfen nur Struktur (eindeutige IDs, vier unterschiedliche Antworten, Glossar-Zuordnung), keine medizinische Richtigkeit.
