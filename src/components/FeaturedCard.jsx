import style from "../css/featured-card.module.css";

function FeaturedCard({ img, name, para, price, link }) {
  return (
    <div className={style.FeaturedCard}>
      <img src={img} alt={name} />
      <div className={style.cardDetails}>
        <button className={style.wishlist}>
          <i className="uil uil-heart"></i>
        </button>
        <h4>{name}</h4>
        <p>{para}</p>
        <p className={style.price}>PKR {price}</p>
        <button className={style.cartBtn}>
          <i className="uil uil-shopping-bag"></i> Add to Cart
        </button>
      </div>
    </div>
  );
}

export default FeaturedCard;
