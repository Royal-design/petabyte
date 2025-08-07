import heroImage from "./hero.webp";

interface HeroProps {
  width?: number | string;
  height?: number | string;
  className?: string;
}

export const Hero = ({
  width = 1248,
  height = 494,
  className = "",
}: HeroProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 1248 494"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <pattern
          id="hero-pattern"
          patternUnits="userSpaceOnUse"
          width="1248"
          height="494"
        >
          <image
            href={heroImage}
            width="1248"
            height="494"
            preserveAspectRatio="xMidYMid slice"
          />
        </pattern>
      </defs>

      <path
        d="M0 48C0 21.5 21.5 0 48 0H739C765.5 0 787 21.5 787 48V54C787 80.5 808.5 102 835 102H1200C1226.5 102 1248 123.5 1248 150V446C1248 472.5 1226.5 494 1200 494H259C232.5 494 211 472.5 211 446V369C211 342.5 189.5 321 163 321H48C21.5 321 0 299.5 0 273V48Z"
        fill="url(#hero-pattern)"
      />
    </svg>
  );
};
