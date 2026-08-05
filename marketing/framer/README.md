# Fourcast — Framer marketing mockups

Net-new phone mockups that replace the leftover **habit-tracker template images** on the
Framer marketing page (`weekly-benefits-966588.framer.app`) with Fourcast-native app screens.

The page **copy was already fully golf-rebranded** — the only misalignment left was in flat
image assets baked on `framerusercontent.com`. These six replace the app-screenshot slots.

## Screens → Framer image slots

| File | Screen | Framer section · nodeId |
|---|---|---|
| `exports/fourcast-01-home-live-round.png` | Player home, live round | Hero center · `gqDu3NCTL` |
| `exports/fourcast-02-captain-dashboard.png` | Captain dashboard | About centerpiece · `P1SSY28jf` |
| `exports/fourcast-03-checkin-roster.png` | Check-in roster | Feature "Captain's morning" · `SZa8YNKQR` |
| `exports/fourcast-04-team-draw.png` | Team draw (fair sides) | Feature "Teams" · `MpVMY8JXP` |
| `exports/fourcast-05-beagle-standings.png` | Beagle detection + live standings | AiSuggestions phone · `w197YZrt3` |
| `exports/fourcast-06-settlement-share.png` | Settlement + share card | CTA centerpiece · `USglNJntg` |

## Design fidelity (locked tokens)

- Background `#F2F2F2` · NavyCard `#141B34` · radius 21px
- Birdie Green `#1B7A3D` (accent/positive) · Trophy Gold `#C9A227` (sparingly) · text `#282E34` / `#7A756B`
- DM Serif Display (headings/numerals) + DM Sans (UI)
- Ionicons-style line icons · real Fourcast logo mark · beagle detection · ledger settlement (`$X.XX`)
- No emoji, no candy palette, no Inter — every Fourcast anti-pattern avoided.

## Re-render

```bash
# fonts (once): DM Sans + DM Serif Display into ~/.fonts, then: fc-cache -f
npm i -D playwright-core@1.56.1          # render-only dep, not committed
node marketing/framer/render.mjs         # writes exports/*.png at 3× on transparent bg
```

Rendered at 3× (1206×2616) on transparent backgrounds so they drop straight into Framer frames.
