import { Metadata } from "next";
import ProfileCard from "@/app/ui/profile-card/ProfileCard";
import src from "@/app/images/profile.png";

export const metadata: Metadata = {
  title: "Profile Card",
};

export default function ProfileCardPage() {
  return (
    <div>
      <main className="mx-auto py-[120px] w-fit">
        <ProfileCard
          description="I turn coffee into bugs which are fixed by someone else. Certified
            Stack Overflow and ChatGPT developer."
          fullName="Sarah Dole"
          imageAlt="smiling brunette woman with glasses"
          imageSrc={src}
          title="Front End Engineer @ Microsoft"
        />
      </main>
    </div>
  );
}
