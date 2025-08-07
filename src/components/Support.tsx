import image1 from "@/assets/support/1.png";
import image2 from "@/assets/support/2.png";
import image3 from "@/assets/support/3.png";
import image4 from "@/assets/support/4.png";
import image5 from "@/assets/support/5.png";
import image6 from "@/assets/support/6.png";
import image7 from "@/assets/support/7.png";
import image8 from "@/assets/support/8.png";
import image9 from "@/assets/support/9.png";
import image10 from "@/assets/support/10.png";

const supportImages = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
];

export const Support = () => {
  return (
    <div className="w-full mt-6 bg-white px-4 sm:px-6 md:px-8 lg:px-12 py-4 overflow-x-auto">
      <div className="flex flex-nowrap gap-4 items-center">
        {supportImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Support partner ${index + 1}`}
            className="rounded-md md:rounded-2xl 
                       w-[22px] sm:w-[64px] md:w-[80px] lg:w-[100px] 
                       h-auto object-contain 
                       transition-all duration-300 
                       hover:scale-110 hover:shadow-lg"
          />
        ))}
      </div>
    </div>
  );
};
