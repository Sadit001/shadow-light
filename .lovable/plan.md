# Cinematic Lamp Opening

## Goal
Replace only the homepage opening experience with the specified dark, interactive lamp sequence while leaving the rest of the project untouched.

## Build
- Create one photorealistic, ordinary premium table lamp as a genuinely transparent image asset with no room, table, frame, or background.
- Start with the lamp exactly centered in a nearly black viewport, off or barely visible, with no text or navigation shown.
- On click or tap anywhere, animate the lamp illumination first, then move it left with slow cinematic easing and subtle physical settling.
- Reveal the editorial message on the right progressively after the lamp is lit, followed by a minimal “GO” action.
- Adapt the final arrangement for smaller screens while keeping the initial lamp perfectly centered and dominant.
- Respect reduced-motion preferences and preserve click/tap and keyboard accessibility.

## Technical details
- Use Motion for React for the staged sequence and carefully timed transforms/opacity.
- Use CSS filters and restrained local shadowing tied to the transparent lamp itself; no spotlight, beam, radial gradient, or separate glow element.
- Add route-specific title, description, Open Graph, and Twitter metadata.
- Verify the result visually at desktop and mobile sizes, including the initial and completed states.
