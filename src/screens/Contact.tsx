import { ContactForm } from "@/components/ContactForm";
import { ServiceHeader } from "@/components/ServiceHeader";
import { GoMail } from "react-icons/go";
import { PiPhoneLight } from "react-icons/pi";
import { SlLocationPin } from "react-icons/sl";

const contactInfo = [
  {
    label: "Company Address",
    body: "No. 4, Oyerogba Street, opposite Sam Ewang junction, Abeokuta",
    icon: <SlLocationPin />,
  },
  {
    label: "Call Us or Send Text",
    body: "+2348075825555",
    icon: <PiPhoneLight />,
  },
  {
    label: "Email Us",
    body: "ceo@petabytechnology.com",
    icon: <GoMail />,
  },
];

export const Contact = () => {
  return (
    <div>
      <ServiceHeader />
      <div className="relative px-4 md:px-12  overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t z-2 from-transparent  to-black/60"></div>

        <div className="absolute inset-0 bg-gradient-to-t from-[#171A1F]  to-primary-200"></div>
        <div className="absolute inset-0 bg-radial from-red-500/5 via-red-500/5 to-[#171A1F]"></div>

        <div className="relative z-10 text-white">
          <div className="flex items-center gap-4 py-4 md:py-9">
            <h1 className="text-2xl md:text-4xl font-bold whitespace-nowrap">
              Contact Us
            </h1>
            <div className="h-px w-full bg-gradient-to-r from-white via-white/60 to-transparent"></div>
          </div>

          <div className="flex flex-col md:flex-row pb-12 gap-4 md:gap-12">
            <section className="flex-1 md:max-w-[500px] space-y-6 md:space-y-9">
              <div>
                <h2 className="text-xl md:text-4xl font-semibold mb-4">
                  Start Your Project With Us
                </h2>
                <p className="text-gray-300 md:text-xl leading-relaxed">
                  Whatever your goal or project size we will handle it utilizing
                  standards compliant practices. We hope you will be 100%
                  satisfied.
                </p>
              </div>

              <div className="space-y-4 md:space-y-8">
                {contactInfo.map((info) => (
                  <div className="flex gap-3 items-start" key={info.label}>
                    <div className="flex-shrink-0 bg-primary-200 rounded-md p-2 mt-1">
                      {info.icon}
                    </div>
                    <div className="text-base">
                      <p className="font-light text-xs uppercase tracking-wide mb-1">
                        {info.label}
                      </p>
                      <p className="text-white font-medium">{info.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="flex-1 mt-8 md:mt-0">
              <ContactForm />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};
