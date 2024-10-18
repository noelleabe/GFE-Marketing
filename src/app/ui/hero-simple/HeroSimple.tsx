import Card from "../common/Card";
import Image, { StaticImageData } from "next/image";
import { ReactNode } from "react";

interface IHeroSimpleProps {
  description: string;
  imageAlt: string;
  imageSrc: StaticImageData;
  title: string;
  content?: ReactNode;
}

export default function HeroSimple({
  content,
  description,
  imageAlt,
  imageSrc,
  title,
}: IHeroSimpleProps) {
  return (
    <Card shadow fullWidth>
      <div className="flex flex-col desktop:flex-row items-center p-0 desktop:p-24">
        <div className="flex flex-col w-full px-4 pt-16 gap-6">
          <header className="font-semibold text-5xl">{title}</header>
          <p className="text-xl pb-6">{description}</p>
          {content}
        </div>
        <div className="w-full md:w-full px-4 py-16">
          <Image src={imageSrc} alt={imageAlt} />
        </div>
      </div>
    </Card>
  );
}
