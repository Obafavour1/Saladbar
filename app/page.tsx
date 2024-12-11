import About from "./components/About";
import Contact from "./components/Contact";
import Explore from "./components/Explore";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Serenity from "./components/Serenity";
import Signature from "./components/Signature";



export default function Home() {
  return (
    <div className="maxContainer">
      
      <Header/>
      <About/>
      <Explore/>
      <Menu/>
      <Signature/>
      <Serenity/>
      <Contact/>
      <Footer/>
    </div>
  );
}
