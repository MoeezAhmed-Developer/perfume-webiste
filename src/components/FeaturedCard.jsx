import style from "../css/featured-card.module.css";

function FeaturedCard() {
  return (
    <div className={style.FeaturedCard}>
      <img
        src="https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=600&q=80"
        alt="Luxury Perfume"
      />
      <h4>Velvet Oud</h4>
      <p>A rich and elegant fragrance with warm woody notes.</p>
      <a href="#">Shop Now</a>
    </div>
  );
}

export default FeaturedCard;
