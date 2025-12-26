import "./Hero.css";
import { useNavigate } from "react-router-dom";

export default function Hero() {
   const navigate = useNavigate();

  return (
    <section className="hero">
      <img src="/images/bg.jpg" alt="Welcome" className="hero-img" />

      <div className="hero-content">
      <h1>Unleash fun</h1>
     

        <p>Online invitations card... Just got easier!</p>

        <button className="hero-btn" onClick={() => navigate("/order")}>Order Now</button>
      </div>
    </section>
  );
}
