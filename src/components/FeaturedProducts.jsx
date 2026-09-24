import FeaturedCard from "./FeaturedCard";
import style from "../css/featured-products.module.css";

function FeaturedProducts() {
  const perfumes = [
    {
      id: 1,
      name: "Velvet Oud",
      price: 89,
      image:
        "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=600&q=80",
      description: "A rich and sophisticated fragrance with warm woody notes.",
    },
    {
      id: 2,
      name: "Midnight Rose",
      price: 75,
      image:
        "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=600&q=80",
      description: "A romantic blend of fresh roses and elegant floral notes.",
    },
    {
      id: 3,
      name: "Royal Amber",
      price: 95,
      image:
        "https://images.unsplash.com/photo-1615634260167-c8cdede054de?auto=format&fit=crop&w=600&q=80",
      description:
        "An intense amber fragrance with a warm and luxurious finish.",
    },
    {
      id: 4,
      name: "Ocean Mist",
      price: 68,
      image:
        "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=600&q=80",
      description: "A refreshing aquatic scent inspired by cool ocean breezes.",
    },
    {
      id: 5,
      name: "Golden Musk",
      price: 82,
      image:
        "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&w=600&q=80",
      description:
        "A smooth and captivating musk fragrance with a golden touch.",
    },
    {
      id: 6,
      name: "Pure Essence",
      price: 72,
      image:
        "https://images.unsplash.com/photo-1563170351-be82bc888aa4?auto=format&fit=crop&w=600&q=80",
      description:
        "A clean and delicate fragrance designed for everyday elegance.",
    },
    {
      id: 7,
      name: "Noir Elegance",
      price: 99,
      image:
        "https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?auto=format&fit=crop&w=600&q=80",
      description: "A bold and mysterious scent with deep woody undertones.",
    },
    {
      id: 8,
      name: "Blossom Mist",
      price: 64,
      image:
        "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=600&q=80",
      description: "A soft floral fragrance with fresh and graceful notes.",
    },
    {
      id: 9,
      name: "Cedar Noir",
      price: 91,
      image:
        "https://images.unsplash.com/photo-1590736969955-71cc94901144?auto=format&fit=crop&w=600&q=80",
      description: "A refined woody fragrance crafted with rich cedar notes.",
    },
    {
      id: 10,
      name: "Luxe Vanilla",
      price: 78,
      image:
        "https://images.unsplash.com/photo-1557170334-a9632e77c6e4?auto=format&fit=crop&w=600&q=80",
      description:
        "A warm and sweet vanilla scent with a smooth luxurious finish.",
    },
  ];

  return (
    <div className={style.FeaturedProducts}>
      {perfumes.splice(0, 5).map((perfume) => (
        <FeaturedCard
          key={perfume.id}
          img={perfume.image}
          name={perfume.name}
          para={perfume.description}
          price={perfume.price}
          link={"#"}
        />
      ))}
    </div>
  );
}

export default FeaturedProducts;
