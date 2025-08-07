import type { Service } from "@/types/data";
import badge1 from "@/assets/badge/badge1.png";
import badge2 from "@/assets/badge/badge2.png";
import badge3 from "@/assets/badge/badge3.png";
import badge4 from "@/assets/badge/badge4.png";

import sd from "@/assets/hero/software.webp";
import cd from "@/assets/hero/cloud.webp";
import it from "@/assets/hero/it.webp";
import cs from "@/assets/hero/computer.webp";

export const badges = [badge1, badge2, badge3, badge4];

export const services: Service[] = [
  {
    title: ["Software", "Development"],
    description:
      "Unleash the full potential of your online presence with our expert web development solutions. We craft innovative and user-centric websites that leave a lasting impact on your audience",
    features: [
      [
        "Stunning Website Designs",
        "Mobile-Optimized for All Devices",
        "User-Friendly Interface",
      ],
      [
        "SEO-Driven Strategies",
        "Accelerate Your Business Growth",
        "Maintenance and Support",
      ],
    ],
    image: sd,
    imageAlt: "software",
    titleAlignment: "left",
    actionAlignment: "left",
  },
  {
    title: ["IT", "Consultancy"],
    description:
      "App development involves creating software applications for mobile devices like smartphones and tablets. It can be done natively (using platform-specific languages) or cross-platform (using frameworks like React Native or Flutter). A strong focus on UI/UX design and thorough testing are crucial for a successful app",
    features: [
      ["Customized Solutions", "Platform Compatibility", "User-Centric Design"],
      [
        "Seamless Performance",
        "Security and Privacy",
        "Regular Updates and Maintenance",
      ],
    ],
    image: it,
    imageAlt: "IT",
    titleAlignment: "right",
    actionAlignment: "right",
  },
  {
    title: ["Cloud", "Solution"],
    description:
      "Unleash the full potential of your online presence with our expert web development solutions. We craft innovative and user-centric websites that leave a lasting impact on your audience",
    features: [
      [
        "Stunning Website Designs",
        "Mobile-Optimized for All Devices",
        "User-Friendly Interface",
      ],
      [
        "SEO-Driven Strategies",
        "Accelerate Your Business Growth",
        "Maintenance and Support",
      ],
    ],
    image: cd,
    imageAlt: "cloud",
    titleAlignment: "left",
    actionAlignment: "left",
  },
  {
    title: ["Computer", "Sales & Services"],
    description:
      "App development involves creating software applications for mobile devices like smartphones and tablets. It can be done natively (using platform-specific languages) or cross-platform (using frameworks like React Native or Flutter). A strong focus on UI/UX design and thorough testing are crucial for a successful app",
    features: [
      ["Customized Solutions", "Platform Compatibility", "User-Centric Design"],
      [
        "Seamless Performance",
        "Security and Privacy",
        "Regular Updates and Maintenance",
      ],
    ],
    image: cs,
    imageAlt: "Computer",
    titleAlignment: "right",
    actionAlignment: "right",
  },
];

export const faq = [
  {
    value: "item 1",
    title: "What Services Do You Offer?",
    body: `We provide a range of services, including web development, mobile app development, graphic design, SEO, API integration, and more. Our expertise spans across various industries to cater to diverse business needs.`,
  },
  {
    value: "item 2",
    title: "Do You Build Mobile Applications?",
    body: `Yes, we specialize in creating high-performance mobile applications for both iOS and Android platforms, optimized for user experience and business scalability.`,
  },
  {
    value: "item 3",
    title: "Can You Help Improve My Website’s SEO?",
    body: `Absolutely! Our SEO experts implement strategies to improve your search engine rankings, drive traffic, and enhance online visibility for your business.`,
  },
  {
    value: "item 4",
    title: "Do You Offer Custom Design Services?",
    body: `Yes, we provide tailored UI/UX and graphic design services to match your brand identity and engage your target audience effectively.`,
  },
  {
    value: "item 5",
    title: "How Do You Handle Website Maintenance?",
    body: `We offer ongoing support, regular updates, performance optimization, and security patches to ensure your website runs smoothly and stays secure.`,
  },
];
