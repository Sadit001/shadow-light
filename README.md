# Shadow & Light

Redesign ONLY the homepage opening hero experience according to the following exact art direction.

IMPORTANT: Do NOT turn this into a conventional website hero section.

CORE VISUAL

The homepage should open with a nearly completely black/dark background.

At the exact center of the viewport, place ONE highly realistic, elegant, ordinary table lamp.

The lamp must look like a real physical lamp — not futuristic, abstract, sculptural, oversized, or strange.

Lamp requirements

The lamp must be photorealistic.

Use a premium, elegant, believable table lamp design.

Realistic lampshade.

Realistic bulb.

Realistic materials and proportions.

Realistic warm light.

Natural shadows and subtle reflections where appropriate.

It must feel like an actual physical lamp photographed/rendered in a premium environment.

EXTREMELY IMPORTANT — NO BACKGROUND

The lamp asset MUST have a completely transparent background.

Do NOT place the lamp inside:

a rectangular image

a white/gray background

a room

a table scene

a photograph with a background

a visible image container

a card

a frame

Only the lamp itself should be visible.

The background around the lamp must remain the homepage's dark background.

If the selected lamp image has a background, REMOVE/ISOLATE the background before using it.

The final result should visually look like the lamp is naturally existing directly inside the dark webpage, not like an image has been placed on top of the page.

If necessary, use a transparent PNG/WebP or a properly isolated 3D asset.

Do NOT fake the transparency using a similar-colored background.

INITIAL POSITION

When the page loads:

The lamp must be positioned EXACTLY in the CENTER of the viewport.

Not left.
Not right.
Not slightly off-center.

The initial composition should be:

    DARK BACKGROUND

         [ LAMP ]

    DARK BACKGROUND


The lamp should be the only major visual object.

Do not show the main text yet.

Do not show the GO CTA yet.

Do not show a conventional navbar over the hero.

The screen should feel mysterious and minimal.

INITIAL LIGHT

The lamp should initially be OFF or extremely dim.

Only a very subtle silhouette should be visible.

There should be no artificial spotlight behind it.

There should be no visible light cone.

There should be no glowing circle behind the lamp.

There should be no radial-gradient pretending to be the lamp's light.

The darkness should remain dominant.

USER INTERACTION

The user can click/tap anywhere on the main viewport to activate the experience.

After the click:

The lamp gradually turns ON.

Its bulb produces a realistic warm light.

The surrounding darkness responds naturally.

The lamp remains visually grounded and realistic.

After the light is established, the lamp smoothly moves from the CENTER toward the LEFT side.

The movement should be slow, elegant and cinematic.

Do NOT make the movement feel like a simple CSS image translation.

Use smooth cinematic easing and subtle physical motion.

TEXT REVEAL

As the lamp moves from the center toward the left, the main message should gradually become visible on the right side.

The text should feel as if it is being revealed by the lamp's illumination.

Text:

"ARE YOU AFRAID
TO MAKE YOUR
RESUME!!"

Initially the text should be almost invisible/dark.

As the lamp moves and illuminates the scene, the typography becomes progressively visible.

Do NOT use a visible spotlight.

Do NOT use a visible light beam.

Do NOT use a separate glowing effect.

Do NOT create an obvious radial-gradient behind the text.

The lighting should feel physically connected to the lamp.

FINAL COMPOSITION

After the animation finishes:

LEFT:
Realistic lamp with warm light.

RIGHT:
Large premium editorial typography:

"ARE YOU AFRAID
TO MAKE YOUR
RESUME!!"

Below or near the message, reveal a minimal:

"GO"

The final composition should have a lot of negative space.

Do NOT overcrowd the screen.

TYPOGRAPHY

Use a sophisticated editorial typeface.

The typography should feel:

premium

bold

modern

editorial

slightly dramatic

Avoid generic startup/SaaS typography.

The text should be large enough to feel like part of the art direction.

ANIMATION STYLE

The animation must be:

cinematic

smooth

slow

intentional

elegant

premium

Use high-quality easing.

Avoid:

bounce

elastic effects

sudden movement

cheap fade animations

excessive scaling

random floating effects

particle effects

The entire sequence should feel like a carefully directed cinematic opening.

RESPONSIVE

Desktop:
The lamp starts exactly centered and then transitions to the left.

Mobile:
The lamp must ALSO start centered.

Do not simply squeeze the desktop layout.

Create a responsive composition where the lamp remains the dominant visual element and the text becomes readable after the transition.

The lamp asset must remain isolated with transparent background at every screen size.

VERY IMPORTANT — DO NOT BREAK THE CONCEPT

Do NOT create:

❌ conventional hero layout

❌ lamp inside an image rectangle

❌ lamp with a background

❌ lamp inside a room

❌ lamp on a visible table

❌ abstract/futuristic lamp

❌ weird lamp geometry

❌ multiple lamps

❌ visible spotlight

❌ visible light beam

❌ fake glowing circle

❌ generic hero image

❌ text visible on initial load

❌ lamp positioned left on initial load

The initial state MUST have:

DARK SCREEN
+
ONE REALISTIC ISOLATED LAMP
+
LAMP EXACTLY CENTERED
+
NO BACKGROUND BEHIND THE LAMP
+
NO TEXT

Then, after interaction:

CENTER LAMP
→ LIGHT TURNS ON
→ LAMP MOVES LEFT
→ TEXT REVEALS
→ GO APPEARS

Preserve this sequence exactly.

Prioritize the realism of the lamp, transparent isolation, centered initial composition, and cinematic transition over adding extra UI elements.

import all kind of package and animation package for making this

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/f7831a57-4c0e-4775-a446-061742422e64).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
