import "./App.css";
import Header from "./components/Header";
import Skill from "./components/skills";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";

function App() {
  return (
    <div>
      <Header />
      <Experience />
      <Skill />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
export default App;
