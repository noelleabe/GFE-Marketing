import { Metadata } from "next";
import BlogCard from "../ui/blog-card/BlogCard";
import imageSrc from "@/app/images/spacejoy-YqFz7UMm8qE-unsplash.jpg";

export const metadata: Metadata = {
  title: "Blog Card",
};

export default function TestimonialCardPage() {
  return (
    <div>
      <main className="mx-auto py-[120px] w-fit">
        <BlogCard
          chipText="Interior"
          description="Curated vibrants colors for your living, make it pop & calm in the
            same time."
          imageSrc={imageSrc}
          title="Top 5 Living Room Inspirations"
          to="#"
        />
      </main>
    </div>
  );
}
