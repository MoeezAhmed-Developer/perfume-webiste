import perfumeImg from "../assets/perfume-hero.png";
import style from "../css/about-section.module.css";

export default function AboutSection() {
  return (
    <section>
      <div className={style.aboutSection}>
        <div className={style.imgSection}>
          <img src={perfumeImg} alt="Perfume Image" />
        </div>
        <div className={style.textSection}>
          <h3>Our Story</h3>
          <h2>Lorem ipsum dolor sit amet consectetur.</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio
            temporibus quam incidunt ea rem ad provident assumenda officia
            asperiores sint? Eos, nihil similique. Tempore voluptatibus amet
            ipsa velit perspiciatis ipsum!
          </p>
        </div>
      </div>
    </section>
  );
}
