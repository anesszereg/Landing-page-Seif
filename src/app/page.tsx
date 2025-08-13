
import Hero from "@/components/Hero";
import CareerPaths from "@/components/CareerPaths";
import RoadMapSection from "@/components/RoadMapSection";
import BlogSection from "@/components/BlogSection";
import TestimonialSection from "@/components/TestimonialSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="font-sans bg-white">
      <Hero />
      <CareerPaths />
      <RoadMapSection />
      <TestimonialSection />
      <BlogSection />
      <Footer />
    </div>
  );
}