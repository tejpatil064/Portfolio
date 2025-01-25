import "./App.css";
import AboutUs from "./components/AboutUs";
import ContactSection from "./components/ContactSection";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import SkillsExperience from "./components/SkillsExperience";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Hero />
      <AboutUs />
      <SkillsExperience/>
      <ContactSection/>
    </div>
  );
}

export default App;
