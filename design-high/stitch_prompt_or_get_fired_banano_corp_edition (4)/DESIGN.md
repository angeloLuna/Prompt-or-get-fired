---
name: Executive Chaos Protocol
colors:
  surface: '#0f131c'
  surface-dim: '#0f131c'
  surface-bright: '#353943'
  surface-container-lowest: '#0a0e17'
  surface-container-low: '#181b25'
  surface-container: '#1c1f29'
  surface-container-high: '#262a34'
  surface-container-highest: '#31353f'
  on-surface: '#dfe2ef'
  on-surface-variant: '#d0c6ae'
  inverse-surface: '#dfe2ef'
  inverse-on-surface: '#2c303a'
  outline: '#99907b'
  outline-variant: '#4d4635'
  surface-tint: '#eac33e'
  primary: '#fff2d6'
  on-primary: '#3c2f00'
  primary-container: '#fcd34d'
  on-primary-container: '#715b00'
  inverse-primary: '#735c00'
  secondary: '#adc6ff'
  on-secondary: '#002e6a'
  secondary-container: '#0566d9'
  on-secondary-container: '#e6ecff'
  tertiary: '#f8f1ff'
  on-tertiary: '#3c0091'
  tertiary-container: '#dfd0ff'
  on-tertiary-container: '#6c39d6'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffe086'
  primary-fixed-dim: '#eac33e'
  on-primary-fixed: '#231b00'
  on-primary-fixed-variant: '#574500'
  secondary-fixed: '#d8e2ff'
  secondary-fixed-dim: '#adc6ff'
  on-secondary-fixed: '#001a42'
  on-secondary-fixed-variant: '#004395'
  tertiary-fixed: '#e9ddff'
  tertiary-fixed-dim: '#d0bcff'
  on-tertiary-fixed: '#23005c'
  on-tertiary-fixed-variant: '#5516be'
  background: '#0f131c'
  on-background: '#dfe2ef'
  surface-variant: '#31353f'
typography:
  display-lg:
    fontFamily: Outfit
    fontSize: 48px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Outfit
    fontSize: 32px
    fontWeight: '800'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Outfit
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-caps:
    fontFamily: Fira Sans
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1'
    letterSpacing: 0.1em
  code-sm:
    fontFamily: Fira Code
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.4'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 4px
  xs: 8px
  sm: 16px
  md: 24px
  lg: 40px
  xl: 64px
  gutter: 20px
  margin-mobile: 16px
  margin-desktop: 48px
---

## Brand & Style

The design system embodies "Corporate Chaos"—the intersection of high-stakes AI innovation and the absurdity of bureaucratic collapse. The aesthetic is a high-fidelity mix of **Glassmorphism** and **Cyber-Corporate Minimalism**. It leverages deep, cinematic voids contrasted against hyper-vibrant, glowing functional elements.

The target audience is tech-literate players who appreciate a "Premium HUD" feel. The UI should evoke the sensation of operating a trillion-dollar AI mainframe from a dimly lit executive suite. Every interaction should feel weighty, technical, yet slightly volatile. 

Key visual principles:
- **Depth through Transparency:** Use frosted glass layers to suggest complex data structures stacked behind the immediate interface.
- **Luminescent Indicators:** Color is used sparingly but intensely to signal status, risk, and technical progress.
- **Technical Rigor:** Layouts should feel engineered and systematic, utilizing monospaced accents to emphasize the "under-the-hood" AI narrative.

## Colors

The palette is anchored in **#090d16 (The Void)**, providing a deep, premium foundation that allows vibrant accents to pop with neon-like intensity. 

- **Banana Yellow (#fcd34d):** The primary brand color. Use it for critical calls to action, high-level branding, and "The CEO's" dialogue or directives.
- **Electric Blue & Purple (#3b82f6, #8b5cf6):** Reserved for technical interfaces, AI computation logs, and "The Mainframe" interactions.
- **Success Green (#10b981):** Represents AI Skill gains and positive corporate compliance.
- **Danger Red (#f43f5e):** Signals HR Risk, terminal errors, and imminent firing.

Surface colors should be derived from the neutral base with varying levels of transparency (e.g., 40% to 80% opacity) to create the glassmorphic effect.

## Typography

The typography strategy balances executive presence with technical precision.

- **Outfit** is used for impactful headlines and "Corporate Mandates." It should be set with tight letter-spacing for a modern, aggressive look.
- **Inter** handles the bulk of narrative text and standard UI labels, ensuring maximum readability during long reading sessions.
- **Fira Sans (Caps)** is used for small, utility-style labels, such as HUD headers, button descriptors, and status indicators.
- **Fira Code** is strictly reserved for "Prompt Engineering" sequences, console logs, and AI data readouts, reinforcing the developer-centric setting.

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy for HUD elements to maintain a sense of "software instrumentation," while narrative elements remain fluid.

- **Desktop:** A 12-column grid with a maximum content width of 1440px. Panels are docked to corners or edges to mimic a cockpit or dashboard.
- **Mobile:** A 4-column grid with increased vertical spacing. Floating panels should occupy the bottom 40% of the screen for dialogue.
- **Rhythm:** Use a 4px baseline shift. All components should be spaced using multiples of 8px to maintain a rigid, engineered feel.
- **Gaps:** Use wide margins (48px+) on desktop for narrative focus, but tight gutters (20px) for technical data tables to imply information density.

## Elevation & Depth

Depth is not created through traditional shadows, but through **Backdrop Blurs** and **Luminous Outlines**.

- **Tiers of Presence:** 
  - **Level 0 (Background):** Solid #090d16.
  - **Level 1 (Panels):** 60% opacity #090d16 with a 20px backdrop blur and a 1px border (#ffffff at 10% opacity).
  - **Level 2 (Active Modals):** 80% opacity #090d16 with a 40px backdrop blur and a primary-colored glow border (2px).
- **Glows:** Use `box-shadow` only as an emissive light source for active tech elements (e.g., a "Processing" indicator). The glow should match the element's functional color (Success Green, Danger Red, or Tech Blue).

## Shapes

The shape language is "Sophisticated Industrial." While elements are generally geometric and precise, slight rounding prevents the UI from feeling overly "Brutalist" or dated.

- **Standard Elements:** Use `rounded-sm` (4px) for most buttons, input fields, and small panels.
- **HUD Components:** Data badges and status chips should use `0px` (sharp) corners on one side and `rounded-sm` on the other to create a "tabbed" or "notched" tech appearance.
- **Large Panels:** Visual novel dialogue boxes should use `rounded-lg` (8px) for a slightly softer, more readable feel.

## Components

- **Dialogue Box:** A full-width glassmorphism panel at the bottom of the screen. The speaker's name should be a sharp-edged badge in #fcd34d with black text.
- **Choice Buttons:** Ghost buttons with a 1px border. On hover, they fill with a gradient (Blue to Purple) and trigger a subtle horizontal "glitch" animation.
- **Risk/Skill Gauges:** Segmented progress bars. Instead of a smooth fill, use individual blocks to represent units of AI Skill or HR Risk. Active segments should have an outer glow.
- **Tech Badges:** Small, monospaced tags (e.g., `[SYS_CRITICAL]`) using Fira Sans. These should have high-contrast backgrounds (#f43f5e for critical, #3b82f6 for system).
- **HUD Overlays:** Fixed elements in the top corners showing "Current Burn Rate" and "AI Alignment %." Use thin, 1px lines to connect these data points to the screen edges, evoking a futuristic blueprint.
- **Input Fields (Prompting):** Dark, recessed fields with a "blinking underscore" cursor in Fira Code. When active, the border pulses in Electric Blue.