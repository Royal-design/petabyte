import type { ButtonHTMLAttributes, ReactNode } from "react";
import { Button } from "./ui/button";

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  className?: string;
  disabled?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  children,
  icon = null,
  iconPosition = "right",
  className = "",
  disabled = false,
  onClick,
  ...props
}) => {
  const defaultClasses =
    "group inline-flex items-center gap-2 transition-all duration-300 cursor-pointer";

  const defaultStyling =
    "bg-primary-100 hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-purple-500/20 hover:scale-105 hover:border-blue-400 rounded-md backdrop-blur-sm py-5 px-8 text-sm font-medium hover:shadow-lg hover:shadow-blue-500/25";

  const disabledClasses = disabled ? "opacity-50 cursor-not-allowed" : "";

  const finalClasses = [
    defaultClasses,
    !className.includes("bg-") && !className.includes("hover:bg-")
      ? defaultStyling
      : "",
    disabledClasses,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Button
      className={finalClasses}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      {...props}
    >
      {iconPosition === "left" && icon && (
        <span className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
          {icon}
        </span>
      )}

      <span className="transition-colors duration-300 group-hover:text-blue-300">
        {children}
      </span>

      {iconPosition === "right" && icon && (
        <span className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
          {icon}
        </span>
      )}
    </Button>
  );
};

export default CustomButton;
