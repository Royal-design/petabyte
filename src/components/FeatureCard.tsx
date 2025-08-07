import clsx from "clsx";
import type { ReactElement } from "react";

export interface CardProps {
  icon: ReactElement;
  title: string;
  description: string;
  actions: ReactElement;
  className?: string;
}

export const FeatureCard = ({
  icon,
  title,
  description,
  actions,
  className,
}: CardProps) => {
  return (
    <div
      className={clsx(
        className,
        "bg-white rounded-[24px] px-6 py-5  w-full text-primary-200 space-y-3"
      )}
    >
      <div className="mb-4">{icon}</div>
      <h3 className="md:text-xl max-md:text-base font-bold">{title}</h3>
      <p className="mb-6 max-md:text-xs text-sm">{description}</p>
      <div className="mt-4">{actions}</div>
    </div>
  );
};
