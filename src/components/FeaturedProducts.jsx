import FeaturedCard from "./FeaturedCard";
import style from "../css/featured-products.module.css";

function FeaturedProducts() {
  return (
    <div className={style.FeaturedProducts}>
      <FeaturedCard />
      <FeaturedCard />
      <FeaturedCard />
      <FeaturedCard />
    </div>
  );
}

export default FeaturedProducts;
