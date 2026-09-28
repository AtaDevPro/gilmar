import AboutSection from "./_components/home/about-section";
import BlogsSection from "./_components/home/blogs-section";
import FaqSection from "./_components/home/faq-section";
import HeroSection from "./_components/home/hero-section";
import PackagesSection from "./_components/home/packages-section";
import ResidenceSection from "./_components/home/residence-section";
import RulesSection from "./_components/home/rules-section";
import ServicesSection from "./_components/home/services-section";
import SiteFooter from "./_components/home/site-footer";
import TestimonialsSection from "./_components/home/testimonials-section";
import VideoSection from "./_components/home/video-section";
import styles from "./_components/home/home.module.css";

export default function Home() {
  return (
    <div className={styles.pageShell}>
      <main className={styles.main}>
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
