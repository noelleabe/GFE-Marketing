import Image, { StaticImageData } from "next/image";
import Card from "../Card";

interface ITestimonialCardProps {
  imageSrc: StaticImageData;
  description: string;
  fullName: string;
  imageAlt: string;
  username: string;
}

export default function TestimonialCard({
  imageSrc,
  description,
  fullName,
  imageAlt,
  username,
}: ITestimonialCardProps) {
  return (
    <Card shadow>
      <div className="p-6">
        <div className="flex flex-row">
          <Image src={imageSrc} height={48} width={48} alt={imageAlt} />
          <div className="ml-4">
            <p className="text-lg text-neutral-900 font-semibold">{fullName}</p>
            <p className="text-sm text-neutral-600">{username}</p>
          </div>
        </div>
        <div className="mt-4 text-base text-neutral-600">{description}</div>
      </div>
    </Card>
  );
}
