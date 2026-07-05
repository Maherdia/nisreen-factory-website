import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";
import Solutions from "../../components/Solutions/Solutions";
import Stats from "../../components/Stats/Stats";
import Footer from "../../components/Footer/Footer";


function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Solutions />
      <Stats />
      <Footer />
    </>
  );
}

export default Home;


