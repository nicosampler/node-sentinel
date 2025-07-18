interface IconProps {
  width?: number | string;
  height?: number | string;
  className?: string;
}

export function GnosisIcon({
  width = 24,
  height = 24,
  className = "",
}: IconProps) {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 428 428"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Using currentColor to inherit color from parent */}
      <path
        fill="currentColor"
        d="M125.8,243.7c12.3,0,24.3-4.1,34-11.6l-78-78c-18.8,24.3-14.3,59.3,10,78.1  C101.6,239.6,113.5,243.7,125.8,243.7L125.8,243.7z"
      />
      <path
        fill="currentColor"
        d="M357.8,188c0-12.3-4.1-24.3-11.6-34l-78,78c24.3,18.8,59.2,14.3,78-10  C353.7,212.3,357.8,200.3,357.8,188z"
      />
      <path
        fill="currentColor"
        d="M397.1,103.1l-34.5,34.5c27.8,33.3,23.4,82.9-9.9,110.7c-29.2,24.4-71.6,24.4-100.8,0L214,286.2  l-37.8-37.8c-33.3,27.8-82.9,23.4-110.7-9.9c-24.4-29.2-24.4-71.6,0-100.8L47.8,120L31,103.1C10.7,136.5,0,174.9,0,214  c0,118.2,95.8,214,214,214s214-95.8,214-214C428.1,174.9,417.3,136.5,397.1,103.1z"
      />
      <path
        fill="currentColor"
        d="M368.8,66.3c-81.5-85.5-216.9-88.7-302.4-7.2c-2.5,2.4-4.9,4.8-7.2,7.2c-5.3,5.6-10.3,11.4-15,17.5  L214,253.7L383.8,83.8C379.2,77.7,374.1,71.9,368.8,66.3z M214,28c50,0,96.6,19.3,131.6,54.5L214,214.1L82.4,82.5  C117.4,47.3,164,28,214,28z"
      />
    </svg>
  );
}
