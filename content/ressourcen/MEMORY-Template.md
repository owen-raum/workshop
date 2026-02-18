# MEMORY.md — Das Langzeitgedächtnis

*Kuratierte Fakten die dein Agent dauerhaft wissen muss.*

---

## Was ist die MEMORY.md?

Die MEMORY.md ist das **Langzeitgedächtnis** deines Agents — eine kuratierte Sammlung von Fakten die sessionübergreifend relevant sind.

**Wichtiger Unterschied:**
- **Daily Notes** (`memory/YYYY-MM-DD.md`): Was HEUTE passiert ist
- **MEMORY.md**: Zeitlose Fakten die IMMER relevant sind

---

## Warum ist das wichtig?

Jede Session startet der Agent bei Null. Er hat keine Erinnerung an gestern. Die MEMORY.md gibt ihm Kontext:

- Wer bist du?
- Mit wem arbeitest du?
- Was sind deine Projekte?
- Was sind wichtige Entscheidungen?

**Ohne MEMORY.md:** "Wer ist Niklas?" — jede Session neu.
**Mit MEMORY.md:** "Niklas ist dein Kunde aus Hamburg, ihr arbeitet an Projekt X."

---

## Die Struktur

### 1. Über dich (den Menschen)

Der Agent muss dich kennen.

```markdown
## Über mich

### Basics
- **Name:** Max Mustermann
- **Standort:** Berlin
- **Timezone:** Europe/Berlin
- **Sprache:** Deutsch

### Arbeit
- **Was ich mache:** Unternehmensberater für Digitalisierung
- **Unternehmen:** Mustermann Consulting GmbH
- **Fokus:** KMUs im E-Commerce

### Kommunikation
- **Haupt-Email:** max@mustermann.de
- **Geschäft:** kontakt@mustermann-consulting.de
- **Kalender:** Google Calendar (max@mustermann.de)
```

---

### 2. Präferenzen & Gewohnheiten

Wie du arbeitest, was du magst/nicht magst:

```markdown
## Meine Präferenzen

### Kommunikation
- Direkt, keine Floskeln
- Kurze Sätze > lange Erklärungen
- Lieber zu wenig Info als zu viel

### Tools
- Browser: Chrome (NIEMALS Safari)
- Musik: Spotify (NIEMALS Apple Music)
- Notizen: Obsidian
- Tasks: Kalender, nicht separate Todo-App

### Arbeitsweise
- Deep Work morgens 9-12
- Calls nur nachmittags
- Freitags keine Meetings

### Was ich nicht mag
- Unangekündigte Anrufe
- "Hast du kurz Zeit?"-Nachrichten ohne Kontext
- Meetings die E-Mails sein könnten
```

---

### 3. Wichtige Kontakte

Menschen mit denen du regelmäßig zu tun hast:

```markdown
## Kontakte (Kurzreferenz)

| Person | Beziehung | Kontext |
|--------|-----------|---------|
| **Lisa** | Partnerin | Lebt mit mir in Berlin |
| **Tom** | Geschäftspartner | Mustermann Consulting, Tech |
| **Niklas** | Kunde | Hamburg, E-Commerce Projekt |
| **Sarah** | VA | Hilft mit Admin, 10h/Woche |

### Notiz
Detaillierte Kontakte → `~/Obsidian/Kontakte/`
Hier nur Quick-Reference für den täglichen Gebrauch.
```

---

### 4. Projekte

Aktuelle und wichtige Projekte:

```markdown
## Projekte

### Shop-Relaunch Niklas (AKTIV)
- **Kunde:** Niklas, Modeshop Hamburg
- **Was:** Shopify → WooCommerce Migration
- **Timeline:** März 2026
- **Status:** Phase 2 (Datenmigration)
- **Repo:** ~/Projects/niklas-shop

### Eigene Website (PAUSIERT)
- **Was:** Redesign mustermann-consulting.de
- **Warum pausiert:** Kundenprojekte haben Priorität
- **Wieder aufnehmen:** April 2026
```

---

### 5. Wiederkehrende Aufgaben

Was passiert regelmäßig:

```markdown
## Wiederkehrend

### Täglich
- Inbox Zero (morgens, abends)
- Kalender für morgen checken

### Wöchentlich
- Montag: Weekly Planning (30 min)
- Freitag: Weekly Review + Inbox-Aufräumen

### Monatlich
- Rechnungen an Kunden
- Buchhaltung an Steuerberater
- Newsletter (falls Content da)

### Jährlich
- Januar: Strategie-Review
- Dezember: Kundenbedankung
```

---

### 6. Wichtige Entscheidungen

Dinge die mal entschieden wurden und weiter gelten:

```markdown
## Entscheidungen & Regeln

### Business
- **Keine Projekte unter 5k** (März 2025 entschieden)
- **Stundensatz: 180€** (seit Januar 2026)
- **Keine Retainer unter 3 Monaten**

### Tech
- **Hosting:** Immer Hetzner, nie AWS (Kosten)
- **Frontend:** React bevorzugt, Vue wenn Kunde will
- **CMS:** Strapi oder Payload, nie WordPress

### Persönlich
- **Keine Calls vor 10 Uhr** (bin kein Morgenmensch)
- **Freitag ab 14 Uhr: Feierabend**
```

---

### 7. Kontext für den Agent

Spezifische Infos die der Agent braucht:

```markdown
## Für den Agent

### Email-Accounts
- **max@mustermann.de** — Privat + Haupt
- **kontakt@mustermann-consulting.de** — Geschäft, CC an max@

### Signaturen
Bei E-Mails immer passende Signatur:
- Geschäftlich → `~/templates/signatur-business.html`
- Privat → Keine Signatur

### Wichtig zu wissen
- Kunde "Niklas" = "Shop Hamburg" = "Modeprojekt" (gleiche Person)
- Lisa nicht mit Arbeit behelligen (außer sie fragt)
- Steuerberater heißt auch "Müller" — nicht verwechseln mit Kunde Müller!
```

---

## Vollständiges Beispiel

```markdown
# MEMORY.md — Mein Langzeitgedächtnis

## Über mich

**Max Mustermann** | Berlin | Europe/Berlin
Unternehmensberater für Digitalisierung
Fokus: KMUs, E-Commerce, Prozessoptimierung

### Kontakt
- max@mustermann.de (privat + Haupt)
- kontakt@mustermann-consulting.de (Business)

### Präferenzen
- Direkte Kommunikation, keine Floskeln
- Chrome, Spotify, Obsidian
- Deep Work 9-12, Calls nachmittags
- Freitag ab 14h = Wochenende

---

## Kontakte

| Wer | Was | Notiz |
|-----|-----|-------|
| Lisa | Partnerin | Berlin, nicht mit Arbeit nerven |
| Tom | Partner | Mustermann Consulting |
| Niklas | Kunde | Hamburg, Shop-Relaunch |
| Sarah | VA | 10h/Woche, Admin |

Details: ~/Obsidian/Kontakte/

---

## Projekte

### Niklas Shop (AKTIV)
Shopify → WooCommerce | März 2026 | Phase 2
~/Projects/niklas-shop

### Website Relaunch (PAUSIERT)
Eigene Seite redesignen | April 2026 wieder

---

## Regelmäßig

- **Täglich:** Inbox morgens+abends
- **Montag:** Weekly Planning
- **Freitag:** Review + Aufräumen
- **Monatlich:** Rechnungen, Buchhaltung

---

## Entscheidungen

- Keine Projekte <5k
- Stundensatz 180€
- Hosting: Hetzner
- Framework: React
- Keine Calls vor 10h

---

## Für dich, Agent

- "Niklas" = "Shop Hamburg" = eine Person
- Lisa ≠ Arbeit
- Müller (Steuerberater) ≠ Müller (Kunde)
```

---

## Tipps für deine MEMORY.md

1. **Kuratieren, nicht sammeln:** Nur rein was DAUERHAFT relevant ist.

2. **Regelmäßig pflegen:** Veraltetes raus, Neues rein. Mindestens monatlich.

3. **Verlinkungen nutzen:** "Details → Obsidian/Kontakte/" statt alles hier reinpacken.

4. **Lesbar halten:** Der Agent liest das bei JEDEM Start. Kurz = schnell = besser.

5. **Kontext vor Details:** "Niklas ist Kunde aus Hamburg mit Shop-Projekt" > 10 Zeilen Bio.

---

## Daily Notes vs. MEMORY.md

| Daily Notes | MEMORY.md |
|-------------|-----------|
| Was heute passiert ist | Zeitlose Fakten |
| Meetings, Tasks, Events | Kontakte, Projekte, Regeln |
| Vergänglich | Dauerhaft |
| Viel Detail OK | Nur Essenz |
| Jeden Tag neu | Einmal, gepflegt |

**Workflow:**
1. Tagsüber → Daily Note füllen
2. Ende der Woche → Wichtiges in MEMORY.md übertragen
3. Daily Notes archivieren oder löschen

---

*Die MEMORY.md ist das Langzeitgedächtnis. Sie macht deinen Agent zum Experten für DEIN Leben und Business.*
