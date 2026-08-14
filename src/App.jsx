
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";

console.log("Navbar:", typeof Navbar, Navbar);
console.log("Footer:", typeof Footer, Footer);
console.log("Hero:", typeof Hero, Hero);
console.log("About:", typeof About, About);
console.log("Skills:", typeof Skills, Skills);
console.log("Projects:", typeof Projects, Projects);
console.log("Experience:", typeof Experience, Experience);
console.log("Contact:", typeof Contact, Contact);

function App() {
  return (
    <div className="app">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;

