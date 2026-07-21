/**
 * LinkedInHoverOverlay.jsx
 *
 * A single-purpose component that renders the small blue LinkedIn badge
 * shown centered over a profile photo on hover.
 *
 * Built with inline styles (not Tailwind utility classes) so every
 * dimension — box size, radius, glyph proportion, animation curve —
 * is pinned to an exact pixel/percentage value and can't drift from
 * the reference due to a Tailwind scale not having the right step.
 */

const CONTAINER_SIZE = 54 // px — matches Arushi Garg reference badge size
const BORDER_RADIUS = 14 // px — softer, larger rounded rectangle
const BRAND_BLUE = '#4F46E5' // indigo/purple, matching the reference image
const GLYPH_SCALE = 0.56 // glyph occupies ~56% of the box, centered

const wrapperStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  width: CONTAINER_SIZE,
  height: CONTAINER_SIZE,
  borderRadius: BORDER_RADIUS,
  backgroundColor: BRAND_BLUE,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: 'none',
  border: 'none',
  // center over the image, then animate opacity/scale only
  transform: 'translate(-50%, -50%) scale(0.82)',
  opacity: 0,
  transition: 'opacity 280ms ease-out, transform 280ms ease-out',
  willChange: 'opacity, transform',
}

const wrapperHoverStyle = {
  transform: 'translate(-50%, -50%) scale(1)',
  opacity: 1,
}

const glyphStyle = {
  width: `${GLYPH_SCALE * 100}%`,
  height: `${GLYPH_SCALE * 100}%`,
  display: 'block',
}

/**
 * Official LinkedIn "in" lettermark glyph, white fill.
 * Path data taken directly from LinkedIn's published brand SVG
 * (viewBox 0 0 448 512) — not hand-recreated.
 */
function OfficialLinkedInGlyph() {
  return (
    <svg viewBox="0 0 448 512" style={glyphStyle} aria-hidden="true" focusable="false">
      <path
        fill="#ffffff"
        d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.3-48.29-79.3-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3z"
      />
    </svg>
  )
}

/**
 * Renders the hoverable LinkedIn badge. Parent must:
 *  - be `position: relative`
 *  - toggle the `group` hover state (Tailwind `group` on the parent)
 *
 * Usage:
 *   <div className="group relative ...">
 *     <img ... />
 *     <LinkedInHoverOverlay href={member.linkedin} name={member.name} />
 *   </div>
 */
export default function LinkedInHoverOverlay({ href, name }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${name} on LinkedIn`}
      className="linkedin-hover-overlay"
      style={wrapperStyle}
    >
      <OfficialLinkedInGlyph />
      <style>{`
        .linkedin-hover-overlay {
          transform: translate(-50%, -50%) scale(0.82);
          opacity: 0;
        }
        .group:hover .linkedin-hover-overlay {
          transform: translate(-50%, -50%) scale(1) !important;
          opacity: 1 !important;
        }
      `}</style>
    </a>
  )
}