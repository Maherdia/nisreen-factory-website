import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Products from "../pages/Products/Products";
import Projects from "../pages/Projects/Projects";
import Certification from "../pages/Certifications/Certifications";
import Contact from "../pages/Contact/Contact";

import ScrollToHash from "../components/ScrollToHash/ScrollToHash";

function AppRouter() {
  return (
    <>
      <ScrollToHash />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/certifications" element={<Certification />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default AppRouter;