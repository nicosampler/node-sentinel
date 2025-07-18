interface IconProps {
  width?: number | string;
  height?: number | string;
  className?: string;
}

export function EthereumIcon({
  width = 24,
  height = 24,
  className = "",
}: IconProps) {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 784.37 1277.39"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        {/* Using currentColor to inherit color from parent */}
        <polygon
          fill="currentColor"
          fillRule="nonzero"
          points="392.07,0 383.5,29.11 383.5,873.74 392.07,882.29 784.13,650.54"
        />
        <polygon
          fill="currentColor"
          fillRule="nonzero"
          points="392.07,0 -0,650.54 392.07,882.29 392.07,472.33"
        />
        <polygon
          fill="currentColor"
          fillRule="nonzero"
          points="392.07,956.52 387.24,962.41 387.24,1263.28 392.07,1277.38 784.37,724.89"
        />
        <polygon
          fill="currentColor"
          fillRule="nonzero"
          points="392.07,1277.38 392.07,956.52 -0,724.89"
        />
        <polygon
          fill="currentColor"
          fillRule="nonzero"
          points="392.07,882.29 784.13,650.54 392.07,472.33"
        />
        <polygon
          fill="currentColor"
          fillRule="nonzero"
          points="0,650.54 392.07,882.29 392.07,472.33"
        />
      </g>
    </svg>
  );
}
