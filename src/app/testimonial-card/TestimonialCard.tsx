import Image from "next/image";
import ProfilePic from "@/app/images/profile-thumbnail.png";

export default function TestimonialCard() {
  return (
    <div className="w-[340px] p-6 m-auto bg-white rounded-lg drop-shadow-3xl">
      <div className="flex flex-row">
        <Image
          src={ProfilePic}
          height={48}
          width={48}
          alt="profile picture of a smiling woman with glasses and wavy hair"
        />
        <div className="ml-4">
          <p className="text-lg text-neutral-900 font-semibold">Sarah Dole</p>
          <p className="text-sm text-neutral-600">@sarahdole</p>
        </div>
      </div>
      <div className="mt-4 text-base text-neutral-600">
        {
          "I've been searching for high-quality abstract images for my design projects, and I'm thrilled to have found this platform. The variety and depth of creativity are astounding!"
        }
      </div>
    </div>
  );
}
