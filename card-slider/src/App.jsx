import { Routes, Route } from "react-router-dom";

import Hero from "./components/Hero";
import CardSlider from "./components/CardSlider";
import Infos from "./components/infos";
import Order from "./components/order";
import TemplateMedia from "./components/TemplateMedia";
import StatsSection from "./components/StatsSection";
import ContactSection from "./components/ContactSection";




function Home() {
  return (
    <>
      <Hero />
      <CardSlider />
      <Infos />
      <StatsSection/>
            <ContactSection/>
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/order" element={<Order />} />
       <Route path="/template/:id" element={<TemplateMedia />} />
    
    </Routes>
  );
}

export default App;
