import HeroSection from "../components/HeroSection";
import BenifitsSection from "../components/BenifitsSection";
import FeaturedProducts from "../components/FeaturedProducts";
import AboutSection from "../components/AboutSection";

function HomePage() {
  document.title = "Home | Perfume";
  return (
    <div>
      <HeroSection />
      <BenifitsSection />
      <FeaturedProducts />
      <AboutSection />
    </div>
  );
}

export default HomePage;
