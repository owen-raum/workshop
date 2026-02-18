# HEARTBEAT.md — Der Herzschlag

*Die Checkliste die deinen Agent von reaktiv zu proaktiv macht.*

---

## Was ist der Heartbeat?

Der Heartbeat ist ein regelmäßiger Check (typisch alle 15-30 Minuten), bei dem dein Agent **selbstständig** prüft ob etwas deine Aufmerksamkeit braucht.

**Ohne Heartbeat:** Du musst immer fragen "Hab ich was verpasst?"
**Mit Heartbeat:** Der Agent sagt von sich aus "Hey, in 30 Min hast du ein Meeting."

---

## Warum ist das ein Game-Changer?

Die meisten Assistenten sind **reaktiv** — sie antworten nur wenn du fragst.

Ein Agent mit Heartbeat ist **proaktiv**:
- Erinnert dich an Meetings BEVOR sie starten
- Meldet wichtige E-Mails ohne dass du nachfragst
- Hält dich auf dem Laufenden über deine Projekte
- Schlägt Aktionen vor statt nur zu berichten

**Das ist der Unterschied zwischen Chatbot und echtem Assistenten.**

---

## Die Struktur einer HEARTBEAT.md

### 1. Pflicht-Checks

Was soll bei JEDEM Heartbeat geprüft werden?

```markdown
## Pflicht-Checks

Bei jedem Heartbeat folgendes prüfen:

### 1. KALENDER
→ Termin in <30 Min? → **Briefing schicken!**
→ Neuer Kontakt? → Recherche starten
→ Termin vorbei + Transkript da? → Follow-up anlegen

### 2. E-MAILS
→ Wichtige ungelesene? → VIPs IMMER melden
→ Routine (Newsletter etc.) → ignorieren
→ Unbeantwortete Mail >48h an VIP? → erinnern

### 3. FOLLOW-UPS
→ Überfällig? → Andy erinnern
→ Fällig heute? → erwähnen
→ Offene Loops schließen!

### 4. [DEINE CHECKS]
→ Was ist DIR wichtig?
```

---

### 2. VIP-Liste

Definiere klar wer IMMER gemeldet wird:

```markdown
## VIP-Liste

Diese Absender werden IMMER gemeldet, auch bei "unwichtigen" Mails:

| Kategorie | Wer |
|-----------|-----|
| **Familie** | Lisa, Mama, Papa |
| **Kunden** | Niklas, Sarah, Tom |
| **Kritisch** | Bank, Finanzamt, Steuerberater |
| **Services** | Stripe (Sales!), Hosting-Alerts |

**Regel:** Lieber einmal zu viel melden als was verpassen.
```

---

### 3. Prioritäten

Nicht alles ist gleich wichtig:

```markdown
## Prioritäten

| Situation | Prio | Aktion |
|-----------|------|--------|
| Dringende Kunden-Mail | 🔴 | SOFORT melden |
| Meeting in <30 Min | 🔴 | Briefing schicken |
| Überfälliges Follow-up | 🟠 | Erwähnen + Vorschlag |
| Neuer Sale | 🟠 | Feiern + Momentum nutzen |
| Newsletter von VIP | 🟡 | Kurz erwähnen |
| Routine-Bestätigung | 🟢 | Ignorieren |

**Bei 🔴:** Sofort handeln, nicht auf nächsten Heartbeat warten.
```

---

### 4. Meeting-Prep

Was passiert wenn ein Meeting ansteht:

```markdown
## Meeting-Prep (Termin in <30 Min)

### Bei bekanntem Kontakt:
1. Memory durchsuchen: Was wissen wir?
2. Letztes Transkript checken
3. Offene Follow-ups zu dieser Person?
4. **Briefing schicken:**
   - Wer ist das?
   - Letzter Kontakt wann?
   - Offene Punkte?
   - Ziel des Calls?

### Bei Erstkontakt:
1. Web-Recherche: Name + Firma
2. LinkedIn/XING checken
3. Was macht die Firma?
4. Hypothese: Warum der Call?
5. **Briefing schicken** — auch bei wenig Info!
```

---

### 5. Proaktive Vorschläge

Nicht nur berichten, sondern **vorschlagen**:

```markdown
## Proaktiv sein!

Nicht nur Reporter, sondern Sparringspartner:

### Bei Sales:
- Neuer Sale? → "🎉 Glückwunsch! Momentum nutzen?"
- Deadline heute? → "Last-Call Post/Story?"
- Ziel fast erreicht? → "Noch X bis Y — Outreach?"

### Bei Aufgaben:
- Task überfällig? → "Soll ich X machen oder schieben wir?"
- Ähnliche Tasks? → "Das könnte ich batchen"

### Bei Terminen:
- Gleiche Person diese Woche 2x? → "Zusammenlegen?"
- Lücke im Kalender? → "Deep Work blocken?"

**Regel:** Wenn ich was sehe das helfen könnte → ansprechen.
```

---

### 6. Response-Regeln

Wie soll der Agent antworten:

```markdown
## Response

### Nichts relevant:
→ `HEARTBEAT_OK`
→ Keine Details, keine Erklärung

### Updates vorhanden:
→ Knapp zusammenfassen
→ Priorität zeigen (🔴🟠🟡)
→ Aktion vorschlagen

### Urgent:
→ Sofort melden
→ Details geben
→ Klare Handlungsempfehlung

**Beispiel-Response:**

🔴 **Meeting in 25 Min:** Call mit Niklas
→ Letzte Woche: Shop-Relaunch Phase 2 besprochen
→ Offen: Datenmigration Timeline
→ Briefing liegt bereit

🟠 **Neuer Sale:** €249 Deep Dive Ticket
→ Käufer: anna@example.de
→ Momentum nutzen?

📧 **VIP-Mail:** Steuerberater Müller
→ Betreff: "Unterlagen 2025"
→ Soll ich zusammenfassen?

Sonst alles ruhig.
```

---

## Vollständiges Beispiel

```markdown
# HEARTBEAT.md — Proaktive Checks

## Prinzip
Kontext > starre Regeln. Zeitkritisches zuerst.

---

## Pflicht-Checks

### 1. KALENDER
- Termin <30 Min → PREP!
- Erstkontakt → Auto-Recherche
- Call vorbei → Follow-up

### 2. E-MAILS
- VIPs → IMMER melden
- Routine → ignorieren
- >48h unbeantwortet → erinnern

### 3. FOLLOW-UPS
- Überfällig → erinnern
- Heute fällig → erwähnen

### 4. SALES
- Neuer Sale → melden + feiern
- Nur 1x täglich aktiv checken

---

## VIPs

| Kategorie | Wer |
|-----------|-----|
| Familie | Lisa, Eltern |
| Kunden | Niklas, Sarah |
| Kritisch | Bank, Finanzamt |
| Services | Stripe, Hetzner |

---

## Prios

| 🔴 Sofort | 🟠 Wichtig | 🟡 Info | 🟢 Ignorieren |
|-----------|------------|---------|---------------|
| Meeting <30min | Neuer Sale | VIP-Newsletter | Routine-Mails |
| Dringende Mail | Überfälliges FU | | Spam |
| System-Alert | | | |

---

## Meeting-Prep (<30 Min)

**Bekannt:**
1. Memory checken
2. Letztes Transkript
3. Offene Punkte
4. → Briefing

**Erstkontakt:**
1. Web-Recherche
2. LinkedIn
3. Firma?
4. → Briefing (auch mit wenig Info)

---

## Proaktiv

- Sale → Momentum?
- Deadline → Last-Call?
- Ähnliche Tasks → Batchen?
- Offene Baustelle → Ansprechen

---

## Response

- Nix los → `HEARTBEAT_OK`
- Updates → Zusammenfassung + Aktion
- Urgent → Sofort + Details + Empfehlung
```

---

## Konfiguration in OpenClaw

Der Heartbeat wird in `openclaw.json` konfiguriert:

```json
{
  "agents": {
    "main": {
      "heartbeat": {
        "enabled": true,
        "intervalMinutes": 15,
        "prompt": "Read HEARTBEAT.md and follow it strictly."
      }
    }
  }
}
```

**Optionen:**
- `intervalMinutes`: Wie oft (15-30 ist gut)
- `prompt`: Was der Agent bei jedem Heartbeat als Aufgabe bekommt

---

## Tipps

1. **Weniger ist mehr:** 3-5 Checks die IMMER laufen > 20 die manchmal vergessen werden.

2. **VIP-Liste pflegen:** Lieber zu viele VIPs als zu wenige. Anpassen wenn zu noisy.

3. **Aktionen > Berichte:** "Du hast 3 ungelesene Mails" ist nutzlos. "Mail von Niklas: Braucht Timeline bis Freitag — soll ich antworten?" ist nützlich.

4. **HEARTBEAT_OK trainieren:** Wenn nichts los ist, will ich das WISSEN, nicht erraten.

5. **Iterieren:** Nach einer Woche prüfen: Was hat gefehlt? Was war zu viel? Anpassen.

---

*Der Heartbeat ist der Unterschied zwischen "ich muss alles selbst im Kopf haben" und "mein Agent passt auf". Nimm dir Zeit, ihn gut zu konfigurieren.*
