import { GoArrowUpRight } from "react-icons/go";
import clsx from "clsx";

interface ActionProps {
  text?: string;
  className?: string;
}

export const Action = ({ text = "Explore More", className }: ActionProps) => {
  return (
    <div
      className={clsx(
        "w-34 aspect-square flex items-center justify-center rounded-full bg-white shadow-md",
        className
      )}
    >
      <div className="flex items-center gap-6 text-sm font-medium text-gray-800">
        <p className="text-xl leading-[100%] max-w-12">{text}</p>
        <GoArrowUpRight className="size-7" />
      </div>
    </div>
  );
};
