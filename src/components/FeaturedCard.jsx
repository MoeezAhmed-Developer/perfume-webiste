import style from "../css/featured-card.module.css";

function FeaturedCard({ img, name, para, price, link }) {
  return (
    <div className={style.FeaturedCard}>
      <img src={img} alt={name} />
      <h4>{name}</h4>
      <p>{para}</p>
      <p>${price}</p>
      <a href={link}>Shop Now</a>
    </div>
  );
}

export default FeaturedCard;
