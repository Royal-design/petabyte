import { Hero } from "@/assets/svg";
import { Action } from "@/components/Action";
import { GoArrowUpRight } from "react-icons/go";
import image1 from "@/assets/banner/img1.jpg";
import image2 from "@/assets/banner/img2.jpg";
import image3 from "@/assets/banner/img3.jpg";
import image4 from "@/assets/banner/img4.jpg";
import CustomButton from "@/components/CustomButton";
import { Features } from "@/components/Features";
import { Support } from "@/components/Support";
import { BsArrowDown } from "react-icons/bs";
const actions = [
  "Creative Strategy",
  "Unique Production",
  "Rebranding Design",
  "Corporate Identity",
];

export const Home = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-br from-red/20  to-black"></div>
      <div className="absolute inset-0 bg-radial from-red-500/5 via-red-500/5 to-[#171A1F]"></div>

      <div className="relative pt-6">
        <div className="px-4 sm:px-6 lg:px-12 flex flex-col gap-6">
          {/* Hero text */}
          <h1 className="text-3xl sm:text-4xl lg:text-7xl leading-tight font-semibold text-white">
            We provide the IT services your business need
          </h1>
          <p className="md:hidden  text-lg">
            We catalyze technological innovation and digital transformation. As
            a forward-thinking software house
          </p>

          {/* Hero Illustration */}
          <div className="relative mt-12">
            <Hero className="w-full h-full" />
            <p className="absolute max-md:hidden right-6 -top-0 max-w-xs sm:max-w-sm text-white text-lg">
              We catalyze technological innovation and digital transformation.
              As a forward-thinking software house
            </p>
            <div className="absolute max-md:hidden -bottom-2 left-2">
              <Action className="md:w-30" />
            </div>
          </div>
          {/* Action */}
          <div className="md:hidden flex justify-center">
            <div className="size-24 justify-center items-center flex gap-1 text-black p-2 rounded-full bg-white">
              <div className="text-base">
                <p>Explore</p>
                <p>more</p>
              </div>
              <BsArrowDown size={40} className="text-black" />
            </div>
          </div>

          <div className="mt-6 md:mt-12 flex flex-col lg:flex-row gap-8 lg:gap-12">
            <div className="flex items-center gap-4 md:hidden">
              <span className="block h-px w-full bg-white"></span>
              <span className="whitespace-nowrap">Creative Vision</span>
              <span className="block h-px w-full bg-white"></span>
            </div>
            {/* Left content */}
            <section className="flex-1 flex flex-col space-y-6">
              <div className="space-y-4">
                <h2 className="text-2xl lg:text-3xl font-bold leading-tight text-white">
                  Ensure Superlative Support With Technology.
                </h2>
              </div>
              <p className="lg:text-xl  text-white ">
                At Petabyte Technology, our vision is to be the catalyst of
                technological innovation and digital transformation. As a
                forward-thinking software house, we strive to redefine the
                boundaries of possibility, offering cutting-edge solutions that
                empower businesses to thrive in the digital era.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-4">
                {actions.map((action) => (
                  <CustomButton
                    key={action}
                    className="bg-transparent hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-purple-500/20 hover:scale-105 border-gray-400 hover:border-blue-400 rounded-md border backdrop-blur-sm py-2.5 px-4 text-sm font-medium hover:shadow-lg hover:shadow-blue-500/25"
                    icon={
                      <GoArrowUpRight className="w-4 h-4 group-hover:text-blue-300" />
                    }
                    iconPosition="right"
                  >
                    {action}
                  </CustomButton>
                ))}
              </div>
              <div className="pt-4 max-md:hidden">
                <CustomButton>Learn More</CustomButton>
              </div>
            </section>

            {/* Responsive image grid */}
            <section className="relative flex-1 min-h-130 w-full">
              <img
                src={image1}
                alt="image 1"
                className="rounded-tl-4xl absolute w-52 sm:w-56 md:w-85 h-40 object-cover transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 hover:brightness-110 hover:-translate-y-1"
              />
              <img
                src={image2}
                alt="image 2"
                className="rounded-tr-4xl w-36 absolute left-55 md:left-94 sm:w-36 md:w-45 h-80 object-cover transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 hover:brightness-110 hover:-translate-y-1"
              />

              <img
                src={image3}
                alt="image 3"
                className="rounded-bl-4xl w-36 absolute left-5 top-50 sm:w-56 md:w-55 h-80 object-cover transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/25 hover:brightness-110 hover:-translate-y-1"
              />
              <img
                src={image4}
                alt="image 4"
                className="rounded-br-4xl w-45 sm:w-56 md:w-70 h-45 absolute bottom-0 left-45 md:left-70 object-cover transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 hover:brightness-110 hover:-translate-y-1"
              />

              {/* Ambient glow effects */}
              <div className="absolute inset-0 -z-10">
                <div className="absolute top-0 left-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div
                  className="absolute bottom-0 right-0 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
                  style={{ animationDelay: "1s" }}
                ></div>
              </div>
            </section>
            <div className="pt-4 md:hidden flex justify-end">
              <CustomButton>Learn More</CustomButton>
            </div>
          </div>

          {/* Features and Services Section */}
          <div className="flex flex-col md:flex-row gap-2 md:gap-8 mt-6 py-4">
            <div className="flex items-center gap-4 md:hidden">
              <span className="block h-px w-full bg-white"></span>
              <span className="whitespace-nowrap">Services</span>
              <span className="block h-px w-full bg-white"></span>
            </div>
            <div className="flex flex-col-reverse md:flex-row w-full gap-2 md:gap-8">
              <section className="w-full md:w-[60%]">
                <Features />
                <div className="md:hidden">
                  <CustomButton className="w-fit px-12 py-6">
                    Explore
                  </CustomButton>
                </div>
              </section>

              <section className="flex-1 flex flex-col md:mt-12 space-y-6">
                <div className="flex items-center max-md:hidden space-x-4">
                  <div className="h-px flex-1 bg-neutral-black-40"></div>
                  <span className="text-base font-medium text-white whitespace-nowrap">
                    Services
                  </span>
                  <div className="h-px flex-1 bg-neutral-black-40"></div>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  Bring The Revolution With The Diligence Service
                </h2>
                <p className="md:text-lg text-white">
                  At Petabyte Technology, we're here to empower you with the
                  tools and expertise needed to unleash your business's true
                  potential. Our team of skilled professionals is dedicated to
                  understanding your unique challenges and goals.
                </p>
                <div className="max-md:hidden">
                  <CustomButton className="w-fit px-12 py-6">
                    Explore
                  </CustomButton>
                </div>
              </section>
            </div>
          </div>
        </div>
        <Support />

        <div className="relative my-6 md:my-12 bg-gradient-to-t from-black to-primary-100">
          <div className="absolute inset-0 bg-gradient-to-b from-primary to-neutral-950/80"></div>
          <div className="relative py-8 flex flex-col gap-4 items-center text-center">
            <article className="tracking-tight space-y-1">
              <h1
                style={{ WebkitTextStroke: "1px white" }}
                className="text-transparent text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase"
              >
                WORK WITH US
              </h1>
              <h1 className="text-4xl md:text-5xl lg:text-6xl italic font-extrabold text-white -mt-2">
                LET'S TALK
              </h1>
            </article>
            <div className="-mt-3">
              <Action text="Contact Us" className="w-20" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
