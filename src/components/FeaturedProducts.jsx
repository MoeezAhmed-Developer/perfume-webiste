import FeaturedCard from "./FeaturedCard";
import style from "../css/featured-products.module.css";

function FeaturedProducts() {
  const perfumes = [
    {
      id: 1,
      name: "J. Janan Gold",
      price: 5490,
      image:
        "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=600&q=80",
      description:
        "A sophisticated oriental fragrance with warm woody and aromatic notes.",
      link: "#",
    },
    {
      id: 2,
      name: "J. Wasim Akram 502",
      price: 4990,
      image:
        "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=600&q=80",
      description:
        "A fresh and masculine fragrance with an elegant, long-lasting character.",
      link: "#",
    },
    {
      id: 3,
      name: "Bonanza Satrangi Raahi",
      price: 3990,
      image:
        "https://images.unsplash.com/photo-1615634260167-c8cdede054de?auto=format&fit=crop&w=600&q=80",
      description:
        "A refined blend of fresh, woody, and warm notes for everyday wear.",
      link: "#",
    },
    {
      id: 4,
      name: "Sapphire Intense",
      price: 4290,
      image:
        "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=600&q=80",
      description:
        "A modern fragrance with refreshing top notes and a warm elegant finish.",
      link: "/scent",
    },
    {
      id: 5,
      name: "Scents N Stories CEO Man",
      price: 3490,
      image:
        "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&w=600&q=80",
      description:
        "A bold and confident scent created for a sophisticated modern man.",
      link: "#",
    },
    {
      id: 6,
      name: "J. Zarrar",
      price: 4590,
      image:
        "https://images.unsplash.com/photo-1563170351-be82bc888aa4?auto=format&fit=crop&w=600&q=80",
      description:
        "A powerful oriental fragrance with rich, warm, and luxurious accords.",
      link: "#",
    },
    {
      id: 7,
      name: "Bonanza Satrangi Oud",
      price: 4290,
      image:
        "https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?auto=format&fit=crop&w=600&q=80",
      description:
        "A deep woody oud fragrance with a rich and captivating character.",
      link: "#",
    },
    {
      id: 8,
      name: "Sapphire Bloom",
      price: 3890,
      image:
        "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=600&q=80",
      description:
        "A graceful floral fragrance with soft, fresh, and feminine notes.",
      link: "#",
    },
    {
      id: 9,
      name: "Scents N Stories Oud Al Layl",
      price: 3690,
      image:
        "https://images.unsplash.com/photo-1590736969955-71cc94901144?auto=format&fit=crop&w=600&q=80",
      description:
        "A mysterious oud fragrance with warm woody and oriental undertones.",
      link: "/scent",
    },
    {
      id: 10,
      name: "J. Wasim Akram 502 for Her",
      price: 4990,
      image:
        "https://images.unsplash.com/photo-1557170334-a9632e77c6e4?auto=format&fit=crop&w=600&q=80",
      description:
        "A graceful feminine fragrance with fresh floral and sophisticated notes.",
      link: "#",
    },
  ];

  return (
    <div className={style.FeaturedProducts}>
      {perfumes.splice(3, 9).map((perfume) => (
        <FeaturedCard
          key={perfume.id}
          img={perfume.image}
          name={perfume.name}
          para={perfume.description}
          price={perfume.price}
          link={perfume.link}
        />
      ))}
    </div>
  );
}

export default FeaturedProducts;
