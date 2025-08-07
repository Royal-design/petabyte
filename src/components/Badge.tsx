import { badges } from "@/mock/mock";

export const Badge = () => {
  return (
    <div className="flex">
      {badges.map((badge, idx) => (
        <img
          src={badge}
          alt={badge}
          key={idx}
          className="size-8 rounded-full -ml-2 first:ml-0"
          style={{ zIndex: badges.length - idx }}
        />
      ))}
    </div>
  );
};
