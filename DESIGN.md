---
name: "福岡親子慢活小旅行"
description: "A bold Fukuoka editorial travel utility built for calm family planning and fast in-trip scanning."
colors:
  fukuoka-red: "#e52b20"
  transit-blue: "#003bc5"
  market-yellow: "#ffd229"
  paper: "#fffdf7"
  warm-canvas: "#f4f0e7"
  ink: "#171714"
  muted-ink: "#625f57"
  rule: "#d8d0c1"
  success: "#087a53"
  danger: "#bc2119"
typography:
  display:
    fontFamily: '"Fukuoka Display", "Noto Sans TC", sans-serif'
    fontSize: "clamp(3.2rem, 7vw, 6rem)"
    fontWeight: 950
    lineHeight: 0.88
    letterSpacing: "-0.04em"
  headline:
    fontFamily: '"Fukuoka Display", "Noto Sans TC", sans-serif'
    fontSize: "clamp(1.5rem, 3vw, 2.15rem)"
    fontWeight: 950
    lineHeight: 1
    letterSpacing: "-0.025em"
  body:
    fontFamily: '"Noto Sans TC", "PingFang TC", "Microsoft JhengHei", sans-serif'
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: '"Noto Sans TC", "PingFang TC", "Microsoft JhengHei", sans-serif'
    fontSize: "10px"
    fontWeight: 900
    letterSpacing: "0.13em"
rounded:
  square: "0"
  label: "4px"
  control: "5px"
  feature: "8px"
  container: "10px"
  card: "14px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "12px"
  lg: "16px"
  xl: "20px"
  section: "44px"
components:
  button-primary:
    backgroundColor: "{colors.transit-blue}"
    textColor: "{colors.paper}"
    rounded: "{rounded.control}"
    height: "48px"
  card:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: "20px"
  label-highlight:
    backgroundColor: "{colors.market-yellow}"
    textColor: "{colors.ink}"
    rounded: "{rounded.label}"
    padding: "7px 10px"
---

# Design System: 福岡親子慢活小旅行

## Overview

**Creative North Star: "The Fukuoka Field Guide"**

The v5.0 visual system treats the trip planner as a lively printed city guide made operational: condensed newspaper-scale headlines, warm paper, hard black rules, saturated civic colors, local imagery, and deliberately offset color shadows. It is bold and memorable without becoming precious; itinerary facts, current status, weather, and actions remain the visual priority.

The interface must work equally well as a desktop planning desk and a one-handed mobile field tool. Expression concentrates in mastheads, covers, maps, and highlighted states; dense forms and lists stay direct, stable, and easy to scan.

**Key Characteristics:**

- Condensed, oversized display type paired with a conventional Traditional Chinese UI stack.
- Warm paper surfaces, black editorial rules, and a disciplined red-blue-yellow signal palette.
- Mostly square geometry, with small radii reserved for controls and working containers.
- Local Fukuoka imagery used as editorial texture, never as a dependency for understanding.
- Strong status differentiation through color, border weight, labels, and text—not color alone.

## Colors

The palette combines warm print stock with near-black ink and three emphatic spot colors.

### Primary

- **Fukuoka Red:** Owns the masthead, active navigation, active day, checkbox accent, and urgent editorial emphasis.
- **Transit Blue:** Owns primary actions, timeline structure, weather and secure-information surfaces, and selected control states.

### Secondary

- **Market Yellow:** Marks focus, current/today status, compact labels, KPI blocks, text selection, and offset highlight shadows.

### Neutral

- **Paper:** Default app and card surface; it should feel warmer than digital white.
- **Warm Canvas:** Outer page ground and timeline cutout color.
- **Ink:** Primary text, borders, rules, and hard graphic definition.
- **Muted Ink:** Supporting text that must remain readable against paper.
- **Rule:** Low-priority dividers inside dense controls and navigation.

### Named Rules

**The Three-Ink Rule.** Red, blue, and yellow have distinct semantic jobs; do not add another loud accent for decoration.

**The Paper Is Content Rule.** Keep primary reading surfaces warm and opaque. Photography and texture sit behind or beside information, never beneath unprotected body copy.

## Typography

**Display Font:** Fukuoka Display, the locally bundled Nimbus Sans Narrow Bold face, with Noto Sans TC fallback.

**Body Font:** Noto Sans TC with PingFang TC and Microsoft JhengHei fallbacks.

**Character:** Display type is compressed, loud, tightly tracked, and poster-like. Body type is neutral and spacious enough for itinerary descriptions and form content; tabular numerals keep times, temperatures, and counts aligned.

### Hierarchy

- **Display:** Hero and day-cover titles only; use the display token and allow responsive clamping.
- **Headline:** Section headings sit on a heavy ink rule and use the headline token.
- **Title:** Event and card titles use the display face around 19–22px with tight line-height.
- **Body:** Operational descriptions use the body token; avoid condensed type for paragraphs, inputs, or long Chinese copy.
- **Label:** Eyebrows and status labels are small, heavy, widely tracked, and may use uppercase Latin text.

### Named Rules

**The Condensed-for-Orientation Rule.** Use the display face to announce place, day, section, and event—not for explanatory copy or editable data.

## Layout

The app is a centered paper shell capped at 1180px. Desktop content uses generous fluid side padding and four-column quick actions; itinerary events become image/content split cards from 780px upward. The hero holds a two-part title/weather composition, three compact statistics, and a countdown strip.

Below 780px the shell loses its outer border, the hero stacks into one column, quick actions become a two-by-two grid, weather metrics become two columns, forms collapse to one column, and the bottom navigation remains fixed with safe-area padding. Below 390px, headline and navigation sizing tighten and the three hero statistics stack vertically. Preserve the five day tabs as one visible row at every width.

Vertical rhythm is intentionally roomy between sections and compact within operational groups. Touch targets are at least 44px; primary form actions and fields are 48px. The fixed navigation must not obscure focused or scrolled content, and layouts must tolerate Traditional Chinese text growth without clipping.

## Elevation & Depth

The system is flat by default. Depth comes from black rules, opaque paper layers, photography, and a small set of print-like shadows. Standard cards use a soft warm ambient shadow; emphasis surfaces such as live weather, secure information, and the current event use hard blue or yellow offset shadows. Reduced-motion mode also removes these emphatic shadows to quiet the composition.

### Shadow Vocabulary

- **Ambient card:** Soft warm lift for standard cards and event rows.
- **Offset signal:** Hard blue or yellow displacement reserved for live, current, or high-priority feature surfaces.
- **Shell haze:** A broad, low-contrast shadow separates the centered paper shell from the desktop canvas.

### Named Rules

**The Offset Means Priority Rule.** Never apply hard offset shadows to every card; their scarcity makes current and live information legible.

## Shapes

The form language is rectilinear and print-derived. Hero stats, tab bars, quick-action grids, cover cards, live-weather blocks, and bottom navigation use square edges and shared borders. Labels and compact states use 3–4px corners; buttons and fields use 5px; working containers use 10px; the 14px card radius is the upper bound for ordinary UI. Full pills are legacy exceptions only where the control semantics require them.

Borders are visible structure, not decoration: use one-pixel ink rules for grouping and two- or three-pixel rules for selected or current states.

## Components

### Buttons

- **Shape:** Compact rectangular controls with a 5px radius; icon-only controls are at least 44px square.
- **Primary:** Transit blue on paper/white text, at least 48px high for form actions.
- **Hover / Focus:** Hover may change fill or brightness where hover is available. Keyboard focus is always a 3px market-yellow outline with 3px offset.
- **Secondary:** Paper background with an ink or semantic-color border; never rely on shadow as the only affordance.

### Chips

- **Style:** Small rectangular labels with a 4px radius and a visible border. Yellow denotes today/current emphasis; semantic tints may support warnings, success, and priority.
- **State:** Selected filter and mode chips use transit blue with light text; every state retains a text label.

### Cards / Containers

- **Corner Style:** Square for editorial feature blocks; 10–14px for dense working cards.
- **Background:** Opaque paper with ink borders.
- **Shadow Strategy:** Flat for lists and forms, ambient for standard cards, offset only for current/live emphasis.
- **Internal Padding:** Usually 12–20px, increasing for feature cards.

### Inputs / Fields

- **Style:** Paper fill, one-pixel ink border, 5px radius, and at least 48px height on primary fields.
- **Focus:** Keep the global yellow focus outline; a border-color change may reinforce it but never replace it.
- **Error / Disabled:** Pair semantic color with explicit text. Disabled and completed content may reduce emphasis but must remain readable.

### Navigation

The fixed bottom navigation is a ruled strip of equal-width targets. Active state uses Fukuoka red plus `aria-current`; today uses a yellow dot as a secondary cue. Honor the device safe area and preserve visible text labels alongside SVG icons.

### Timeline Event

Events align to a transit-blue vertical rule. Time is blue and condensed, the event title is display type, and images are optional. The current event receives a heavier red border, yellow offset shadow, colored node, and a textual “現在 / NEXT” label so its state survives monochrome and low-vision use.

## Do's and Don'ts

### Do:

- **Do** preserve keyboard access, visible focus, logical focus return from the photo modal, dialog semantics, and text alternatives for meaningful imagery.
- **Do** keep controls at least 44px and primary fields/actions at least 48px for one-handed travel use.
- **Do** honor `prefers-reduced-motion`: remove nonessential transforms, transitions, smooth scrolling, and emphatic offset shadows.
- **Do** bundle the display font and approved v5 plates locally. The service-worker app shell must include the font, paper texture, desktop/mobile maps, mobile temple illustration, manifest, and all install icons.
- **Do** treat plates and remote photos as progressive enhancement. The itinerary, labels, actions, and locally cached shell must remain usable when images, weather, authentication, navigation, Drive, or Firebase are unavailable.
- **Do** version the shell and runtime caches together when any required local v5 asset path changes.

### Don't:

- **Don't** replace the local display font with a network font or introduce a runtime dependency for core styling.
- **Don't** rename, move, or remove approved v5 assets without updating every CSS reference and the service-worker app-shell list in the same release.
- **Don't** cache dynamic Google, Firebase, authentication, Drive, Docs, or weather requests as if they were part of the offline shell.
- **Don't** place critical directions, itinerary facts, or status meaning only inside a photograph, map plate, emoji, or color treatment.
- **Don't** soften the system into generic rounded cards, translucent glass panels, pastel gradients, or shadow-heavy mobile UI.
- **Don't** let decorative paper grain, maps, or the temple plate intercept input, reduce contrast, or obscure reading order.
