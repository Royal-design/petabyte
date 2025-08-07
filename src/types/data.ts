import type { ReactNode } from "react";

export interface Service {
  title: string[];
  description: string;
  features: string[][];
  image: string;
  imageAlt: string;
  titleAlignment?: "left" | "right";
  actionAlignment?: "left" | "right";
}

export interface ProcessCardProps {
  image: string;
  imageAlt: string;
  title: string;
  description: string;
  className?: string;
  imageClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  children?: ReactNode;
}
