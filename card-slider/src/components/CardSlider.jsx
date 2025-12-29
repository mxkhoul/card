import React, { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./CardSlider.css";

export default function CardSlider() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "https://event-wed.onrender.com/templates/userpool"
        );
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <section className="card-slider-wrapper">
      <h1 className="choosetext">Choose wisely</h1>

      <Swiper
        centeredSlides
        spaceBetween={60}
        loop
        speed={600}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
        className="productSwiper"
      >
        {products.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="product-card">
              <img src={getImage(item)} alt={item.name} />
              <div className="card-name">{item.name}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

const getImage = (item) => {
  return (
    item.media?.find(
      (m) => m.type === "jpg" || m.type === "png"
    )?.url || "/placeholder.jpg"
  );
};
