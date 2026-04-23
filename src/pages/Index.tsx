import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Sections from "@/components/Sections";
import About from "@/components/About";
import Reviews from "@/components/Reviews";
import Visit from "@/components/Visit";
import Footer from "@/components/Footer";
import MobileCallBar from "@/components/MobileCallBar";
import FAQSection from "@/components/FAQSection";

const Index = () => (
  <div className="min-h-screen">
    <Header />
    <main>
      <Hero />
      <Sections />
      <About />
      <Reviews />
      <Visit />
      <FAQSection />
    </main>
    <Footer />
    <MobileCallBar />
    <div className="h-16 md:hidden" aria-hidden />
  </div>
);

export default Index;
