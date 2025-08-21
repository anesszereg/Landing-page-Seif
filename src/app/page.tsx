
import Hero from "@/components/Hero";
import CareerPaths from "@/components/CareerPaths";
import RoadMapSection from "@/components/RoadMapSection";
import TestimonialSection from "@/components/TestimonialSection";
import TeamSection from "@/components/TeamSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="font-sans bg-white">
      <Hero />
      <CareerPaths />
      <RoadMapSection />
      <TestimonialSection />
      <TeamSection />

      <ContactSection />
      <Footer />
    </div>
  );
}