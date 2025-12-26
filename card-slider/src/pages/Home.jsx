import React from "react";
import Hero from "../components/Hero";
import CardSlider from "../components/CardSlider";
import Infos from "../components/infos";

export default function Home() {
  return (
    <div>
      <Hero />
      <CardSlider />
      <Infos />
    </div>
  );
}
