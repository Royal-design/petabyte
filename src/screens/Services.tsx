import { Action } from "@/components/Action";
import { HowWeWork } from "@/components/HowWeWork";
import { ServiceSection } from "@/components/ServiceSection";
import { services } from "@/mock/mock";
import type { Service } from "@/types/data";
import working from "@/assets/hero/working.webp";
import { FAQAccordion } from "@/components/FAQAccordion";
import { ServiceHeader } from "@/components/ServiceHeader";

export const Services = () => {
  return (
    <div className="w-full overflow-hidden">
      <ServiceHeader />

      <div className="relative md:px-12 px-4">
        <div className="absolute inset-0 bg-gradient-to-t z-2 from-transparent  to-black/60"></div>

        <div className="absolute inset-0 bg-gradient-to-t from-[#171A1F]  to-primary-200"></div>
        <div className="absolute inset-0 bg-radial from-red-500/5 via-red-500/5 to-[#171A1F]"></div>
        <div className="relative z-10">
          {services.map((service: Service, index: number) => (
            <ServiceSection key={index} {...service} />
          ))}
        </div>
      </div>

      <HowWeWork />

      <div className="md:px-12 px-4 flex flex-col md:flex-row gap-4 md:gap-12 py-4">
        <div className="flex-1">
          <img
            src={working}
            alt="working"
            className="rounded-md w-full md:w-sm h-60  md:h-full"
          />
        </div>
        <div className="flex-1 mt-6">
          <h2 className="md:text-4xl text-2xl w-full md:-w-sm font-bold">
            We Are Working With Creative User
          </h2>
          <FAQAccordion />
        </div>
      </div>

      <div className="relative my-6 md:my-12 bg-gradient-to-t from-black to-primary-100">
        <div className="absolute inset-0 bg-gradient-to-b from-primary to-neutral-950/80"></div>
        <div className="relative py-4 flex justify-center flex-col gap-2 items-center">
          <article className="tracking-tight text-center">
            <h1
              style={{ WebkitTextStroke: "1px white" }}
              className=" text-border-2 text-transparent text-3xl md:text-5xl lg:text-6xl font-extrabold uppercase"
            >
              WORK WITH US
            </h1>
            <h1 className="text-3xl md:text-5xl lg:text-6xl italic font-extrabold text-white -mt-2">
              LET'S TALK
            </h1>
          </article>

          <div className="-mt-3">
            <Action text="Contact Us" className="w-30" />
          </div>
        </div>
      </div>
    </div>
  );
};
