import { Metadata } from "next";
import TestimonialCard from "../ui/testimonial-card/TestimonialCard";
import ProfilePic from "@/app/images/profile-thumbnail.png";

export const metadata: Metadata = {
  title: "Testimonial Card",
};

export default function TestimonialCardPage() {
  return (
    <div>
      <main className="mx-auto mt-[200px] w-fit">
        <TestimonialCard
          imageSrc={ProfilePic}
          imageAlt="profile picture of a smiling woman with glasses and wavy hair"
          fullName="Sarah Dole"
          username="@sarahdole"
          description="I've been searching for high-quality abstract images for my design projects, and I'm thrilled to have found this platform. The variety and depth of creativity are astounding!"
        />
      </main>
    </div>
  );
}
