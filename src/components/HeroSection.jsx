import heroImg from "../assets/perfume-hero.png";
import heroSection from "../css/hero-section.module.css";

function HeroSection() {
  return (
    <div className={heroSection.heroSection}>
      <img src={heroImg} alt="Hero Section Image" />
    </div>
  );
}

export default HeroSection;
