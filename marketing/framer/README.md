# Fourcast — Framer marketing mockups (v2, rebuilt from real app source)

Net-new phone mockups replacing the leftover **habit-tracker template images** on the
Framer marketing page (`weekly-benefits-966588.framer.app`) with Fourcast-native app screens.

## Why v2
v1 was built from a design *spec* that had drifted from production. These are rebuilt
directly from the **real app source** (`ellemaculate/fourcast`) — actual tokens, fonts,
and screen component layouts. The running app can't be screenshotted from CI (egress-blocked
+ auth-gated), so these are faithful reconstructions from the code, not the stale spec.

## Screens → Framer image slots
| File | Real screen (source) | Framer slot · nodeId |
|---|---|---|
| `exports/fourcast-01-home.png` | Home / captain (`app/(tabs)/index.tsx`) | Hero center · `gqDu3NCTL` |
| `exports/fourcast-02-score-entry.png` | Scorecard stepper (`components/scorecard/ScoreEntryHero.tsx`) | About centerpiece · `P1SSY28jf` |
| `exports/fourcast-03-checkin.png` | Captain check-in (`components/captain/CheckInStep.tsx`) | Feature "Captain's morning" · `SZa8YNKQR` |
| `exports/fourcast-04-leaderboard.png` | Live leaderboard (`components/Leaderboard.tsx`) | Feature "Teams" · `MpVMY8JXP` |
| `exports/fourcast-05-share-beagle.png` | Share card, beagle (`components/ShareCard.tsx`) | AiSuggestions phone · `w197YZrt3` |
| `exports/fourcast-06-settlement.png` | Settlement results/debt (`app/session/[id]/settle.tsx`) | CTA centerpiece · `USglNJntg` |

## Real design system used (V7 — `constants/DesignTokens.ts`)
- **Fonts:** Barlow Condensed 700 (display/scores/numerals, UPPERCASE) · Inter (body) · JetBrains Mono (money/scores, tabular)
- **Surfaces:** bone `#F5F0E8` bg · white/boneRaised cards · pine `#0E3A2B` · navy `#0B1E3A` · navyCard `#141B34`
- **Accents:** flag red `#C1362A` (primary CTA/owe/LIVE) · brass `#B8893A` (medals/rings) · eagle `#1E6B5C` · birdie `#2E7A4E` · bogey `#AC7E18`
- **Real logo:** `FourcastMark` emblem + FOURCAST wordmark (exact vector paths from `components/brand/FourcastMark.tsx`)
- **Tab bar:** HOME / SCORES / SEASON / STATS / PROFILE (Ionicons), active = pine
- Money = `$X.XX` with U+2212 minus; beagle = net eagle.

## Re-render
```bash
# fonts (once): Barlow Condensed, Inter, JetBrains Mono into ~/.fonts; then fc-cache -f
npm i -D playwright-core@1.56.1        # render-only dep, not committed
node marketing/framer/render.mjs       # writes exports/*.png at 3× on transparent bg
```
Rendered at 3× (1206×2616) on transparent backgrounds for drop-in placement in Framer.
