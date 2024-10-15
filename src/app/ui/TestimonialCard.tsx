import Image, { StaticImageData } from "next/image";

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
    <div className="w-[340px] p-6 m-auto bg-white rounded-lg drop-shadow-3xl">
      <div className="flex flex-row">
        <Image src={imageSrc} height={48} width={48} alt={imageAlt} />
        <div className="ml-4">
          <p className="text-lg text-neutral-900 font-semibold">{fullName}</p>
          <p className="text-sm text-neutral-600">{username}</p>
        </div>
      </div>
      <div className="mt-4 text-base text-neutral-600">{description}</div>
    </div>
  );
}
