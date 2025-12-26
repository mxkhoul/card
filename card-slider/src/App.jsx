import { Routes, Route } from "react-router-dom";

import Hero from "./components/Hero";
import CardSlider from "./components/CardSlider";
import Infos from "./components/infos";
import Order from "./components/order";
import TemplateMedia from "./components/TemplateMedia";
import RegisterOrder from "./components/RegisterOrder"; 


function Home() {
  return (
    <>
      <Hero />
      <CardSlider />
      <Infos />
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/order" element={<Order />} />
       <Route path="/template/:id" element={<TemplateMedia />} />
       <Route path="/RegisterOrder" element={<RegisterOrder />} />
    </Routes>
  );
}

export default App;
