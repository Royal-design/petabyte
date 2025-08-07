import { Cloud, Code, CyberSecurity, Programming } from "@/assets/icons";
import { FeatureCard, type CardProps } from "./FeatureCard";
import { ExploreAction } from "./ExploreAction";

const data: CardProps[] = [
  {
    icon: <Programming className="size-9 md:size-12" />,
    title: "IT Consultancy",
    description:
      "Web development is the process of creating websites and web applications for the internet or intranet.",
    actions: (
      <ExploreAction
        overlayClassName="bg-primary"
        className="!bg-primary text-white"
      />
    ),
    className: "!bg-primary  text-white",
  },
  {
    icon: <Cloud className="size-9 md:size-12" />,
    title: "IT Consultancy",
    description:
      "Web development is the process of creating websites and web applications for the internet or intranet.",
    actions: <ExploreAction />,
    className: "!bg-white",
  },
  {
    icon: <CyberSecurity className="size-9 md:size-12" />,
    title: "IT Consultancy",
    description:
      "Web development is the process of creating websites and web applications for the internet or intranet.",
    actions: <ExploreAction />,
    className: "!bg-white",
  },
  {
    icon: <Code className="size-9 md:size-12" />,
    title: "IT Consultancy",
    description:
      "Web development is the process of creating websites and web applications for the internet or intranet.",
    actions: <ExploreAction />,
    className: "!bg-white",
  },
];

const firstTwoData = data.slice(0, 2);
const lastTwoData = data.slice(2, 4);
export const Features = () => {
  return (
    <div>
      <div className="flex gap-4">
        <div className="flex flex-col gap-4">
          {firstTwoData.map((data, id) => (
            <FeatureCard key={id} {...data} />
          ))}
        </div>
        <div className="flex flex-col gap-4 mt-15">
          {lastTwoData.map((data, id) => (
            <FeatureCard key={id} {...data} />
          ))}
        </div>
      </div>
    </div>
  );
};
