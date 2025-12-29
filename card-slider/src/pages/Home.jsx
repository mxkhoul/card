import React from "react";
import Hero from "../components/Hero";
import CardSlider from "../components/CardSlider";
import Infos from "../components/infos";
import StatsSection from "../components/StatsSection";
import ContactSection from "../components/ContactSection";
import "../components/Home.css"

export default function Home() {
  return (
    <div className="home">
      <Hero />
      <CardSlider />
      <Infos />
      <StatsSection/>
      <ContactSection/>
    </div>
  );
}
