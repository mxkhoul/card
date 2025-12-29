import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Order.css";

const Order = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch(
          "https://event-wed.onrender.com/templates/userpool"
        );
        const data = await response.json();
        setOrders(data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="order-page">
      <div className="masonry-container">
        {loading
          ? 
            Array.from({ length: 12 }).map((_, index) => (
              <div className="masonry-item" key={index}>
                <img src="/images/loading.jpg" alt="loading" />
                <h3>Loading...</h3>
              </div>
            ))
          : 
            orders.map((order) => (
              <div
                className="masonry-item"
                key={order.id}
                onClick={() =>
                  navigate(`/template/${order.id}`, { state: order })
                }
              >
                <img
                  src={getJpgImage(order)}
                  alt={order.name}
                  loading="lazy"
                />
                <h3>{order.name}</h3>
              </div>
            ))}
      </div>
    </div>
  );
};

const getJpgImage = (item) => {
  return (
    item.media?.find((m) => m.type === "jpg")?.url ||
    item.media?.find((m) => m.type === "png")?.url ||
    "/placeholder.jpg"
  );
};

export default Order;
