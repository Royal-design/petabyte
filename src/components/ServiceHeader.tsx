import { Badge } from "./Badge";
import { IoIosArrowForward } from "react-icons/io";

export const ServiceHeader = () => {
  return (
    <div className="relative flex flex-col justify-center items-center py-16 gap-8 md:px-12 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
      <div className="relative space-y-2 z-20">
        <div className="flex items-center gap-3 flex-wrap justify-center">
          <span className="text-4xl lg:text-6xl">We</span>
          <Badge />
          <span className="text-4xl lg:text-6xl">Are Offering</span>
        </div>

        <div className="flex items-center gap-6 flex-wrap justify-center">
          <p className="text-4xl lg:text-6xl">Our Best</p>
          <div className="flex-shrink-0 min-w-40 rounded-full py-3 px-6 bg-gradient-to-r from-primary-100 to-transparent">
            <div className="flex justify-end items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <IoIosArrowForward
                  key={i}
                  className="text-white animate-pulse"
                  style={{ animationDelay: `${i * 0.1}s` }}
                />
              ))}
            </div>
          </div>
        </div>

        <p className="text-4xl lg:text-6xl text-center">Valuable Services</p>
      </div>
    </div>
  );
};
