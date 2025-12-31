export default function Logo({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Blue circle divided into 4 parts */}
      <g transform="translate(120, 100)">
        {/* Top segment */}
        <path
          d="M 0,-50 A 50,50 0 0,1 35.36,-35.36 L 0,0 Z"
          fill="#1B8EBD"
        />
        {/* Right segment */}
        <path
          d="M 35.36,-35.36 A 50,50 0 0,1 50,0 L 0,0 Z"
          fill="#1B8EBD"
        />
        {/* Bottom segment */}
        <path
          d="M 50,0 A 50,50 0 0,1 35.36,35.36 L 0,0 Z"
          fill="#1B8EBD"
        />
        {/* Left segment */}
        <path
          d="M 35.36,35.36 A 50,50 0 0,1 0,50 L 0,0 Z"
          fill="#1B8EBD"
        />
        {/* Bottom-left segment */}
        <path
          d="M 0,50 A 50,50 0 0,1 -35.36,35.36 L 0,0 Z"
          fill="#1B8EBD"
        />
        {/* Left-top segment */}
        <path
          d="M -35.36,35.36 A 50,50 0 0,1 -50,0 L 0,0 Z"
          fill="#1B8EBD"
        />
        {/* Top-left segment */}
        <path
          d="M -50,0 A 50,50 0 0,1 -35.36,-35.36 L 0,0 Z"
          fill="#1B8EBD"
        />
        {/* Top segment 2 */}
        <path
          d="M -35.36,-35.36 A 50,50 0 0,1 0,-50 L 0,0 Z"
          fill="#1B8EBD"
        />
      </g>

      {/* X cross lines - Black strokes */}
      <line
        x1="70"
        y1="50"
        x2="170"
        y2="150"
        stroke="#2C2C2C"
        strokeWidth="8"
        strokeLinecap="round"
      />
      <line
        x1="170"
        y1="50"
        x2="70"
        y2="150"
        stroke="#2C2C2C"
        strokeWidth="8"
        strokeLinecap="round"
      />

      {/* Level/measuring symbol on the left */}
      <g transform="translate(20, 80)">
        {/* Vertical bars */}
        <rect x="0" y="0" width="8" height="40" fill="none" stroke="#2C2C2C" strokeWidth="6" />
        <rect x="12" y="0" width="8" height="40" fill="none" stroke="#2C2C2C" strokeWidth="6" />

        {/* Horizontal stepped line */}
        <path
          d="M 28,8 L 60,8 L 60,20 L 80,20 L 80,32 L 100,32"
          fill="none"
          stroke="#2C2C2C"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="miter"
        />

        {/* Arrow tip */}
        <path
          d="M 100,32 L 90,22 M 100,32 L 90,42"
          fill="none"
          stroke="#2C2C2C"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}
