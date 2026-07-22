/**
 * LinkedInHoverOverlay.jsx
 *
 * Renders the small blue LinkedIn badge centered over a profile photo on
 * hover. Parent must be `relative` and use Tailwind's `group` class so
 * `group-hover:*` here can pick it up.
 *
 * All sizing/color/animation values are inlined as Tailwind utility
 * classes (arbitrary values in brackets) — no separate .css file.
 */

export function OfficialLinkedInGlyph({ className = 'h-[66%] w-[66%]' }) {
  return (
    <svg
      viewBox="0 0 448 512"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <path
        fill="#ffffff"
        d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.3-48.29-79.3-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3z"
      />
    </svg>
  )
}

/**
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
      className="absolute left-1/2 top-1/2 flex h-[21px] w-[21px] -translate-x-1/2 -translate-y-1/2 scale-[0.82] items-center justify-center rounded-[2px] bg-[#5a5af6] opacity-0 shadow-none transition-all duration-[280ms] ease-out will-change-[opacity,transform] group-hover:scale-100 group-hover:opacity-100"
    >
      <OfficialLinkedInGlyph />
    </a>
  )
}
