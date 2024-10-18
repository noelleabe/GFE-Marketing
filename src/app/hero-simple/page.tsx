import { Metadata } from "next";
import src from "@/app/images/prism.png";
import HeroSimple from "@/app/ui/hero-simple/HeroSimple";
import HeroSimpleButtonGroup from "./HeroSimpleButtonGroup";

export const metadata: Metadata = {
  title: "Hero Section (Simple)",
};

export default function HeroSimplePage() {
  return (
    <div>
      <main className="flex p-4 w-full">
        <HeroSimple
          content={<HeroSimpleButtonGroup />}
          description="High quality abstract images for your projects, wallpaper and presentations."
          imageSrc={src}
          imageAlt="a stack of colorful, abstract polygons in a cool color scheme"
          title="Well crafted abstract images"
        />
      </main>
    </div>
  );
}
