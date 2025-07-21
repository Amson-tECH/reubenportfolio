import Navbar from "./components/NavBar/navbar";
import Intro from './components/Intro/intro';
import Skills from "./components/Skills/skills";
import Works from "./components/Works/works";
import Contact  from "./components/Contact/contact";
import Footer from "./components/Footer/footer";
// The new code i added
//import bg from '../src/image.png';
// The new code i added 
import './App.css';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
    {/*  <img src={bg} alt="Animated" className="round-image" /> */} 
      <Skills />
      <Works />
      <Contact />
      <Footer />
      
      {/*The new code i added */}
    </div>
  );
}

export default App;