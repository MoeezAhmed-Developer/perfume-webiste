import HeroSection from "../components/HeroSection";
import BenifitsSection from "../components/BenifitsSection";
import FeaturedProducts from "../components/FeaturedProducts";

function HomePage() {
  document.title = "Home | Perfume";
  return (
    <div>
      <HeroSection />
      <BenifitsSection />
      <FeaturedProducts />
    </div>
  );
}

export default HomePage;
