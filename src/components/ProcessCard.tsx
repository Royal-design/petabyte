import type { ProcessCardProps } from "@/types/data";

export const ProcessCard: React.FC<ProcessCardProps> = ({
  image,
  imageAlt,
  title,
  description,
  className = "",
  imageClassName = "",
  titleClassName = "",
  descriptionClassName = "",
  children,
}) => {
  return (
    <div className={`max-w-[200px] w-full space-y-3 ${className}`}>
      <img src={image} alt={imageAlt} className={`h-auto ${imageClassName}`} />
      <h2 className={`text-xl font-bold ${titleClassName}`}>{title}</h2>
      <p className={`text-sm ${descriptionClassName}`}>{description}</p>
      {children}
    </div>
  );
};
