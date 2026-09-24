import style from "../css/benifits-section.module.css";

function BenifitsSection() {
  return (
    <div className={style.BenifitsSection}>
      <div>
        <i className="uil uil-truck"></i>
        <h3>Free Shipping</h3>
      </div>

      <div>
        <i className="uil uil-shield-check"></i>
        <h3>Secure Payment</h3>
      </div>

      <div>
        <i className="uil uil-refresh"></i>
        <h3>Easy Returns</h3>
      </div>

      <div>
        <i className="uil uil-headphones"></i>
        <h3>24/7 Support</h3>
      </div>
    </div>
  );
}

export default BenifitsSection;
