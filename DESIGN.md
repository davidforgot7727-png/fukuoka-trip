---
name: "福岡親子慢活小旅行"
description: "A warm, mature furoshiki-inspired family travel guide for planning and in-trip use."
colors:
  persimmon: "#D96B45"
  persimmon-aa: "#B65738"
  matcha: "#66785B"
  matcha-deep: "#5D6D52"
  indigo: "#345B6F"
  cream: "#FFF9EF"
  canvas: "#EEE5D8"
  peach: "#F3D8C8"
  cocoa: "#3B302B"
  muted: "#6F625A"
  rule: "#D8C8B7"
typography:
  display: '"Noto Sans TC", "PingFang TC", "Microsoft JhengHei", "Heiti TC", system-ui, sans-serif'
  body: '-apple-system, BlinkMacSystemFont, "Noto Sans TC", "PingFang TC", "Microsoft JhengHei", sans-serif'
rounded:
  label: "3px"
  control: "8px"
  working-card: "12px"
  feature-card: "15px"
---

# Design System: Furoshiki Family Guide

## Creative direction

The v5.1 interface is a warm family travel handbook made from furoshiki cloth, washi paper, stitched day tabs, destination illustration, and practical itinerary cards. It should feel affectionate and memorable without looking childish. Visual boldness comes from strong material contrast, large scenery, layered print composition, and a disciplined palette—not cartoon decoration.

The desktop experience behaves like a planning desk; the mobile experience is a one-handed field guide. In both modes, the next stop, weather, time, navigation, and family-friendly pacing remain easier to scan than the decoration.

## Color and contrast

- Cream and cocoa are the primary reading pair.
- Indigo owns primary actions, weather, countdowns, and high-confidence utilities.
- Matcha marks selected/current states and calm success.
- Persimmon supplies warmth and editorial emphasis.
- Peach is a quiet supporting surface, never the only state cue.
- AA-adjusted combinations are mandatory: cream on `#B65738` is 4.55:1; cream on `#5D6D52` is 5.31:1; cream on matcha is 4.55:1; `#7F341F` on peach is 6.41:1; `#873D27` on cream is 7.30:1; `#8D432D` on cream is 6.74:1.

Do not reintroduce the old saturated red/blue/yellow poster palette. Status must never rely on color alone.

## Typography

Traditional Chinese headings use the same reliable system sans family as body copy, with heavier weight and tighter tracking for hierarchy. This prevents inconsistent generic-serif fallback on Android. Avoid condensed Latin display fonts for Chinese. Keep itinerary descriptions at 14px or larger with generous line height.

## Materials and imagery

- Use the repeating `washi.png` texture only as a subtle paper ground.
- Desktop and mobile furoshiki plates decorate the hero without covering controls.
- The family line illustration is supportive and `aria-hidden`; it must not carry essential information.
- Meaningful scenery receives concise Traditional Chinese alternative text.
- Photography and illustration may be mixed, but neither may sit behind unprotected body copy.

### Destination integrity rule

Illustrated scenery may depict only places in the actual itinerary. The production mapping is fixed:

| Day | Approved scenery | Asset |
| --- | --- | --- |
| 1 | LaLaport Fukuoka / Gundam | `day1-lalaport.webp` |
| 2 | Kushida Shrine | `day2-kushida.webp` |
| 3 | Marine World Uminonakamichi | `day3-marine-world.webp` |
| 4 | Ohori Park | `day4-ohori.webp` |
| 5 | Fukuoka Airport | `day5-airport.webp` |

Do not use Dazaifu, generic temples, unrelated street scenes, or invented destinations as itinerary scenery. If the itinerary changes, update the mapping, accessible names, service-worker list, and this document together.

## Layout and components

- The app shell caps at 1160px with warm opaque surfaces and restrained ambient shadow.
- Hero imagery remains prominent: split composition on desktop, scenery above content on mobile.
- Five fabric day tabs stay in one visible row. They expose `aria-pressed`; today also exposes `aria-current="date"` and a textual screen-reader cue.
- Event cards use a calm timeline, generous image area, clear time/title/description order, and 44px minimum touch targets.
- Primary form controls use indigo and at least 48px height. Icon-only and close buttons require meaningful accessible names.
- The bottom navigation remains fixed, safe-area aware, and labeled. Active and today states must include non-color semantics.

At 779px and below, the hero stacks, quick actions become two columns, forms collapse, itinerary imagery uses a 190px minimum crop, and navigation honors the bottom safe area. At 390px and below, type and decorative art tighten while controls retain their touch size. Traditional Chinese text growth must not clip.

## Motion and resilience

Honor `prefers-reduced-motion`: disable decorative transforms, smooth scrolling, and nonessential transitions. The photo dialog must trap focus, close with Escape, make the background inert, and restore focus.

The PWA shell caches only active local assets: install icons, bundled font, washi texture, desktop/mobile furoshiki, family line art, and the five destination WebPs. Dynamic Firebase, Google, Drive, authentication, and weather requests remain network-only or runtime data. Version shell and runtime caches together whenever required local paths change.

## Verification note

Code-level review covers syntax, cache integrity, responsive rules, accessibility semantics, and contrast. A genuine live desktop/mobile capture could not be produced in the current environment because localhost rendering was unavailable. Concept-board images are direction references, not implementation proof; perform a real browser visual pass after upload before treating pixel-level fidelity as certified.
