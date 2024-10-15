import { Metadata } from "next";
import TestimonialCard from "./TestimonialCard";

export const metadata: Metadata = {
  title: "Testimonial Card",
};

export default function TestimonialCardPage() {
  return (
    <div>
      <main>
        <TestimonialCard />
      </main>
    </div>
  );
}
