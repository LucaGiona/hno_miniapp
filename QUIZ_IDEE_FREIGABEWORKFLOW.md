# Idee (zurückgestellt): Freigabe-Workflow pro Frage

Nicht umgesetzt – aktuell sind alle 160 Quizfragen direkt live, Feedback läuft per Mail. Diese Notiz hält die Idee fest, falls später ein formellerer Prüfprozess gebraucht wird.

**Konzept:** Jede Frage bekommt `status: "draft" | "approved"`, `reviewedBy` und `reviewedAt`. Nur `approved`-Fragen laufen live; lokal (`localhost`/`127.0.0.1`) blendet eine Checkbox "Lokale Prüfvorschau" zusätzlich die Entwürfe ein, klar markiert und ohne Einfluss auf den Lernfortschritt. `js/quiz-bank.js` filtert danach, `js/quiz.js` zeigt den Entwurfs-Hinweis.

**Warum zurückgestellt:** Für den aktuellen Umfang zu viel Verwaltungsaufwand pro Frage (Statuspflege, Datum, Prüfername). Reicht fürs Erste, wenn Fehler per Mail gemeldet und direkt in `js/quiz-questions.js` korrigiert werden.

**Falls später gebraucht:** Git-Historie um Commit `ac14591`/die Vorgängerversion von `js/quiz-bank.js` und `js/quiz.js` als Ausgangspunkt nehmen, dort war das Konzept bereits einmal implementiert.
