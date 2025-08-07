import line from "@/assets/line.svg";
import element1 from "@/assets/1.svg";
import element2 from "@/assets/2.svg";
import element3 from "@/assets/3.svg";
import element4 from "@/assets/4.svg";
import element5 from "@/assets/5.svg";
import { ProcessCard } from "./ProcessCard";

export const HowWeWork = () => {
  return (
    <div className="bg-gradient-to-r py-10 from-primary-200 to-black px-12">
      <div className="flex items-center gap-4">
        <h1 className="text-4xl font-bold text-white whitespace-nowrap">
          How We Work
        </h1>
        <div className="h-px w-full bg-white"></div>
      </div>
      <div className="relative max-md:hidden min-h-100 mt-8">
        <img src={line} alt="line" />
        <div className="absolute top-0 -left-6">
          <ProcessCard
            image={element1}
            imageAlt="element 1"
            title="Requirements Gathering"
            description="Efficiently capturing and analyzing requirements to lay the foundation for successful project execution"
          />
        </div>
        <div className="absolute top-28 left-[22%]">
          <ProcessCard
            image={element2}
            imageAlt="element 2"
            title="Analysis And Planning"
            description="Efficiently capturing and analyzing requirements to lay the foundation for successful project execution"
          />
        </div>
        <div className="absolute -top-4 left-[40%]">
          <ProcessCard
            image={element3}
            imageAlt="element 3"
            title="Design & Development"
            description="Efficiently capturing and analyzing requirements to lay the foundation for successful project execution"
          />
        </div>
        <div className="absolute top-30 left-[65%]">
          <ProcessCard
            image={element4}
            imageAlt="element 4"
            title="Testing Device & Release"
            description="Efficiently capturing and analyzing requirements to lay the foundation for successful project execution"
          />
        </div>
        <div className="absolute top-0 left-[85%]">
          <ProcessCard
            image={element5}
            imageAlt="element 5"
            title="Testing Device & Release"
            description="Efficiently capturing and analyzing requirements to lay the foundation for successful project execution"
          />
        </div>
      </div>
      <div className="lg:hidden mt-8 overflow-x-auto">
        <div className="flex gap-6 min-w-max">
          <ProcessCard
            image={element1}
            imageAlt="element 1"
            title="Requirements Gathering"
            description="Efficiently capturing and analyzing requirements to lay the foundation for successful project execution"
          />
          <ProcessCard
            image={element2}
            imageAlt="element 2"
            title="Analysis And Planning"
            description="Efficiently capturing and analyzing requirements to lay the foundation for successful project execution"
          />
          <ProcessCard
            image={element3}
            imageAlt="element 3"
            title="Design & Development"
            description="Efficiently capturing and analyzing requirements to lay the foundation for successful project execution"
          />
          <ProcessCard
            image={element4}
            imageAlt="element 4"
            title="Testing Device & Release"
            description="Efficiently capturing and analyzing requirements to lay the foundation for successful project execution"
          />
          <ProcessCard
            image={element5}
            imageAlt="element 5"
            title="Maintenance & Support"
            description="Ongoing support to ensure your solutions continue to run smoothly and efficiently"
          />
        </div>
      </div>
    </div>
  );
};
