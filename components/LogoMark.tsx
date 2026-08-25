type LogoMarkProps = {
  className?: string;
  title?: string;
};

export function LogoMark({
  className = "h-14 w-14",
  title = "Tree Rescue 24",
}: LogoMarkProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 512 512"
      role="img"
      aria-label={title}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <circle cx="256" cy="256" r="248" fill="#0B3D2E" />
      <circle cx="256" cy="256" r="238" fill="none" stroke="#FF6A00" strokeWidth="20" />
      <circle cx="256" cy="256" r="214" fill="none" stroke="#F5C518" strokeWidth="4" />
      <path
        d="M256 118c-18 38-62 78-78 124 28-12 46-8 78 10 32-18 50-22 78-10-16-46-60-86-78-124z"
        fill="#F6F1E8"
      />
      <path
        d="M214 232c-40 18-70 46-82 74 38-8 70 2 124 28 54-26 86-36 124-28-12-28-42-56-82-74-22 16-40 22-84 0z"
        fill="#F6F1E8"
      />
      <path d="M244 268h24v118h-24z" fill="#3A2415" />
      <path
        d="M268 132 188 292h52l-28 88 140-168h-56l48-80z"
        fill="#FF6A00"
      />
      <path
        d="M196 392h120l16 28H180z"
        fill="#0B3D2E"
        stroke="#FF6A00"
        strokeWidth="8"
      />
      <text
        x="256"
        y="424"
        textAnchor="middle"
        fill="#F5C518"
        fontFamily="Arial Black, Arial, sans-serif"
        fontSize="42"
        fontWeight="700"
      >
        24
      </text>
      <text
        x="256"
        y="92"
        textAnchor="middle"
        fill="#F6F1E8"
        fontFamily="Arial Black, Arial, sans-serif"
        fontSize="36"
        fontWeight="700"
        letterSpacing="4"
      >
        TREE RESCUE
      </text>
    </svg>
  );
}
