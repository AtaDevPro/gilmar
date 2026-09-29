import AboutSection from "@/components/home/about-section";
import BlogsSection from "@/components/home/blogs-section";
import FaqSection from "@/components/home/faq-section";
import HeroSection from "@/components/home/hero-section";
import PackagesSection from "@/components/home/packages-section";
import ResidenceSection from "@/components/home/residence-section";
import RulesSection from "@/components/home/rules-section";
import ServicesSection from "@/components/home/services-section";
import SiteFooter from "@/components/home/site-footer";
import TestimonialsSection from "@/components/home/testimonials-section";
import VideoSection from "@/components/home/video-section";
export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--gilmar-bg)]">
      <main className="flex flex-col gap-[72px] xl:gap-[140px]">
        <HeroSection />
        <AboutSection />
        <RulesSection />
        <ServicesSection />
        <ResidenceSection />
        <VideoSection />
        <TestimonialsSection />
        <PackagesSection />
        <BlogsSection />
        <FaqSection />
      </main>
      <SiteFooter />
    </div>
  );
}
