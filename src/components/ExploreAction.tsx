import clsx from "clsx";
import type { ReactNode } from "react";
import { GoArrowUpRight } from "react-icons/go";

interface ExploreActionProps {
  circleClassName?: string;
  overlayClassName?: string;
  className?: string;
  text?: string;
  icon?: ReactNode;
}

export const ExploreAction: React.FC<ExploreActionProps> = ({
  circleClassName,
  text = "Explore More",
  className,
  overlayClassName,
  icon = <GoArrowUpRight />,
}) => {
  return (
    <div className={clsx("relative", className)}>
      <div
        className={clsx(
          "h-12 w-12 rounded-full bg-[#131A4C4D] border-2 border-white",
          circleClassName
        )}
      />
      <div
        className={clsx(
          "flex absolute top-1/2 -translate-y-1/2 left-5 items-center gap-2",
          overlayClassName
        )}
      >
        <p className="whitespace-nowrap text-sm font-medium">{text}</p>
        {icon}
      </div>
    </div>
  );
};
