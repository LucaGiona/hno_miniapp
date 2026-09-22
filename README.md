# HNO Lernkarten (PWA_HNO_Test01)

Lern-App für die HNO-Station: Glossar mit Suche, Karteikarten und Quiz. Nach dem ersten Laden läuft alles offline. Reines HTML/CSS/JavaScript, kein Build-Schritt, keine Abhängigkeiten.

Aktueller Datenstand: 150 Einträge (54 Kürzel, 96 Fachbegriffe), Service-Worker-Cache `hno-lernkarten-v0.3.35`.

**App öffnen:** [lucagiona.github.io/hno_miniapp](https://lucagiona.github.io/hno_miniapp/) oder QR-Code scannen:

![QR-Code zur App](qr-code.png)

## Inhalt

| Datei | Zweck |
|---|---|
| `index.html`, `style.css` | die App |
| `js/` | JavaScript als ES-Module: `main.js` (Einstieg), `glossar.js`, `karten.js`, `quiz.js`, `stats.js`, `nav.js`, `pwa.js`, `about.js` (Info-Dialog), `storage.js`, `catalog.js`, `utils.js` |
| `js/data.js` | alle 150 Einträge (54 Kürzel, 96 Fachbegriffe) inkl. Übersetzungen, hier ergänzen/ändern |
| `js/lang.js` | Sprach-Schalter (DE / EN / FR) |
| `js/mobile-selects.js` | Auswahl-Listen (Karten/Quiz) mit umbrechenden Texten auf schmalen Bildschirmen |
| `qr-code.png` | QR-Code zur veröffentlichten App (GitHub Pages) |
| `js/i18n.js` | alle Oberflächentexte und Kategorienamen in DE/EN/FR |
| `sw.js` | Service Worker für den Offline-Betrieb |
| `manifest.webmanifest`, `icons/` | Installierbarkeit auf dem Homescreen |
| `KORREKTUREN.md` | Liste aller Änderungen gegenüber deinen ODT-Tabellen |

## Lokal testen

Ein Service Worker läuft nur über `http://localhost` oder HTTPS, nicht über `file://`. Im Ordner starten:

```
python3 -m http.server 8080
```

Dann `http://localhost:8080` im Browser öffnen. (Alternativ: `npx serve`.)
ES-Module werden von Browsern über `file://` blockiert. Ein Doppelklick auf `index.html` funktioniert daher nicht, immer den lokalen Server benutzen.

**Offline prüfen:** Seite einmal laden, in den Chrome-DevTools unter *Application → Service Workers* den Haken „Offline" setzen und neu laden. Oder unter *Application → Manifest* die Installierbarkeit prüfen.

## Auf dem Handy nutzen

Die App ist bereits über GitHub Pages veröffentlicht: [lucagiona.github.io/hno_miniapp](https://lucagiona.github.io/hno_miniapp/) bzw. den QR-Code oben scannen. Alle Pfade sind relativ, die App läuft daher auch in einem Unterordner.

- **iPhone (Safari):** Teilen → „Zum Home-Bildschirm".
- **Android (Chrome):** Menü → „App installieren".

## Daten ändern

`js/data.js` öffnen, eine Zeile pro Eintrag:

```
{"id":"k055","typ":"kuerzel","kategorie":"Sonstiges","begriff":"XY","bedeutung":"Beispiel"}
```

Neue `id` vergeben (eindeutig, sonst gehen Lernfortschritte durcheinander). `typ` ist `kuerzel` oder `fachbegriff`. Optional `"hinweis":"…"` für einen Prüfhinweis und `"en":"…"`, `"fr":"…"` für die Übersetzungen.

**Nach jeder Änderung an einer App-Datei** in `sw.js` die Zahl bei `CACHE` hochzählen (z. B. `v0.1.1`), sonst behalten Geräte die alte Version im Cache.

## Sprache und Übersetzung (DE / EN / FR)

Im Kopf der App schaltet **DE / EN / FR** die Sprache um (die Wahl wird gemerkt). Bei EN und FR wird die ganze Oberfläche (Tabs, Buttons, Filter, Hinweise, Kategorienamen) in dieser Sprache angezeigt, und die Begriffe bekommen eine Übersetzung: im Glossar unter jedem Eintrag (die Suche findet sie auch), auf der Rückseite der Karten und nach jeder Quizantwort. Zusätzlich gibt es bei Karten und Quiz die Richtung **Übersetzung → Deutsch**. Kürzel und Fachbegriffe selbst bleiben deutsch. Bei Kürzeln bedeutet `en`/`fr` in `js/data.js` die Übersetzung der Bedeutung, bei Fachbegriffen den entsprechenden Begriff. Die deutsche Erklärung wird nicht übersetzt.

Oberflächentexte und Kategorienamen stehen in `js/i18n.js` (drei Blöcke `de`, `en`, `fr` mit denselben Schlüsseln; neue Texte in allen dreien ergänzen). Im HTML werden Texte über `data-i="schlüssel"` gebunden.

Alle Übersetzungen (Begriffe und Oberfläche) sind Entwürfe und nicht geprüft; der Hinweis erscheint im Glossar. Nach dem Prüfen die Texte in `js/data.js` bzw. `js/i18n.js` ändern; den Hinweis entfernt man mit dem Eintrag `lang_note` bzw. dem Element `id="lang-note"` in `index.html`.

## Farben

Jede Gruppe hat eine eigene Farbe. Die Tabelle steht oben in `js/catalog.js` (`COLORS`): Farbton, Sättigung, Helligkeit und ob die Schrift auf der Vollfarbe dunkel sein soll. Hell/Dunkel-Modus werden automatisch abgeleitet (`style.css`, Klasse `.cat`). Neue Gruppen ohne Eintrag erscheinen in neutralem Grau.

## Hinweise

- Der Lernfortschritt liegt nur im Browser des jeweiligen Geräts (localStorage) und wird nicht synchronisiert.
- Auf dem iPhone kann Safari Website-Daten nach längerer Nichtnutzung löschen. Dann ist der Fortschritt weg, die App lädt sich beim nächsten Online-Start neu.
- Nur Lernhilfe; ersetzt keine Dienstanweisungen oder Standards des Hauses.

## Versionsverwaltung & Veröffentlichung

Das Projekt liegt in Git vor, Remote ist `github.com/LucaGiona/hno_miniapp`. Ein Push auf den veröffentlichten Branch aktualisiert automatisch die GitHub-Pages-Version unter obigem Link (nach jeder Änderung Cache-Version in `sw.js` hochzählen, siehe oben).
