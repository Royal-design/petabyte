import { cn } from "@/lib/utils";
import { ExploreAction } from "./ExploreAction";
import type { Service } from "@/types/data";

export const ServiceSection: React.FC<Service> = ({
  title,
  description,
  features,
  image,
  imageAlt,
  titleAlignment = "left",
  actionAlignment = "left",
}) => (
  <div className="py-6 w-full">
    <h2
      className={`text-4xl font-bold text-white mb-4 ${
        titleAlignment === "right" ? "flex flex-col items-end" : ""
      }`}
    >
      {title.map((line: string, index: number) => (
        <span key={index} className="block">
          {line}
        </span>
      ))}
    </h2>

    <div className="h-px w-full bg-white"></div>

    <p className="w-full md:max-w-3xl mt-4">{description}</p>

    <div className="flex flex-col md:flex-row gap-4 md:gap-24 mt-4">
      {features.map((items: string[], columnIndex: number) => (
        <ul
          key={columnIndex}
          className="list-disc list-inside text-white text-base space-y-2"
        >
          {items.map((item: string, itemIndex: number) => (
            <li key={itemIndex} className="leading-relaxed">
              {item}
            </li>
          ))}
        </ul>
      ))}
    </div>

    <figure className="mt-8">
      <img
        src={image}
        alt={imageAlt}
        className="h-60 w-full object-cover rounded-[24px]"
      />
    </figure>
    <div
      className={cn(
        actionAlignment === "right" ? "flex flex-col items-end mr-18" : "",
        "mt-2"
      )}
    >
      <ExploreAction circleClassName="bg-primary-200 border-none" />
    </div>
  </div>
);
