import './App.scss'
import Certificate from './Components/Certifications/Certificate';
import Navbar from './Components/Navbar/Navbar';
import About from './Components/about/About';
import Contact from './Components/contact/Contact';
import Cursor from './Components/cursor/Cursor';
import Hero from './Components/hero/Hero';
import Parallax from './Components/parallax/Parallax';
import Portfolio from './Components/portfolio/Portfolio';
import Services from './Components/services/Services';
import Skills from './Components/skills/Skills';
import Test from './Test';


const App = () => {
  return <div>
    <Cursor />
    <section id= "Home">
     <Navbar />
     <Hero />
    </section>
    <section id='About'><About /></section>
    <section id='Skills'><Skills/></section>
    {/* <section id="Services"><Parallax type="services"/></section> */}
    {/* <section ><Services /></section> */}
    <section id="Portfolio"><Parallax type="portfolio"/></section>
    <Portfolio />
    
    <Certificate />
    <section id="Contact">
     <Contact/>
      </section>


    {/* <Test />
    <Test /> */}
  </div>;
};

export default App;
