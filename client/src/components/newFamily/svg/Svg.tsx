export default function Svg() {
  const svg_close = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 45.2549 45.2549"
      width="45.254883"
      height="45.254883"
      fill="none"
    >
      <path
        d="M0.5 12L12 12L12 0.5C12 0.223858 12.2239 0 12.5 0L19.5 0C19.7761 0 20 0.223858 20 0.5L20 12L31.5 12C31.7761 12 32 12.2239 32 12.5L32 19.5C32 19.7761 31.7761 20 31.5 20L20 20L20 31.5C20 31.7761 19.7761 32 19.5 32L12.5 32C12.2239 32 12 31.7761 12 31.5L12 20L0.5 20C0.223858 20 0 19.7761 0 19.5L0 12.5C0 12.2239 0.223858 12 0.5 12Z"
        fill="rgb(255,255,255)"
        fillRule="evenodd"
        transform="matrix(0.707107,-0.707107,0.707107,0.707107,0,22.6274)"
      />
    </svg>
  );

  const svg_add = () => (
    <svg
      width="100"
      height="100"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org"
    >
      <circle cx="50" cy="50" r="45" fill="#2EB473" />

      <g transform="rotate(0 50 50)" stroke="white" strokeWidth="12">
        <line x1="28" y1="50" x2="72" y2="50" />
        <line x1="50" y1="28" x2="50" y2="72" />
      </g>
    </svg>
  );

  const svg_drop_down = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 16.4749 9.98743"
      width="16.474854"
      height="9.987427"
      fill="none"
    >
      <path
        id="DropDown"
        d="M7 14L0 7L7 0"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="3.500000"
        transform="matrix(6.12323e-17,-1,1,6.12323e-17,1.23743,8.23743)"
      />
    </svg>
  );

  const svg_remove = () => (
    <svg
      width="100"
      height="100"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org"
    >
      <circle cx="50" cy="50" r="45" fill="#B42E2E" />

      <g transform="rotate(45 50 50)" stroke="white" strokeWidth="12">
        <line x1="28" y1="50" x2="72" y2="50" />
        <line x1="50" y1="28" x2="50" y2="72" />
      </g>
    </svg>
  );

  return { svg_add, svg_close, svg_drop_down, svg_remove };
}
