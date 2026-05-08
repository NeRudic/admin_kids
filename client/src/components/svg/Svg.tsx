import React from "react";

export default function Svg() {
  const svg_close = (): React.JSX.Element => (
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

  const svg_add = (): React.JSX.Element => (
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

  const svg_drop_down = (): React.JSX.Element => (
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

  const svg_remove = (): React.JSX.Element => (
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

  const svg_eye = (): React.JSX.Element => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="currentColor"
    >
      <path d="M23.92 11.6C23.72 11.2 19.52 3 12 3S.28 11.2.08 11.6a1 1 0 0 0 0 .9C.28 12.8 4.48 21 12 21s11.72-8.2 11.92-8.5a1 1 0 0 0 0-.9ZM2.08 12C3.08 10.4 6.59 5 12 5s8.92 5.4 9.92 7c-1 1.6-4.51 7-9.92 7s-8.92-5.4-9.92-7ZM12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm0 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z" />
    </svg>
  );

  const search = (): React.JSX.Element => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 28 28"
      width="28"
      height="28"
    >
      <path
        d="M18.08 16.33h-.92l-.33-.31a7.6 7.6 0 1 0-.83.82l.31.33v.92L22.17 23.9l1.74-1.74-5.83-5.83ZM11.08 16.33a5.25 5.25 0 1 1 0-10.5 5.25 5.25 0 0 1 0 10.5Z"
        fill="#444"
      />
    </svg>
  );

  return { svg_add, svg_close, svg_drop_down, svg_remove, svg_eye, search };
}
