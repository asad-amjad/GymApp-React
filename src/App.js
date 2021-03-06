import "./App.css";
import Hero from "./components/Hero/Hero";
import Join from "./components/Join/Join";
import Plans from "./components/Plans/Plans";
import Programs from "./components/Programs/Programs";
import Reasons from "./components/Reasons/Reasons";
import Testmonials from "./components/Testmonials/Testmonials";
import Footer from "./components/Footer/Footer";  
function App() {
  return (
    <div className="App">
      <Hero />
      <Programs />
      <Reasons />
      <Plans />
      <Testmonials />
      <Join />
      <Footer />
    </div>
  );
}

export default App;
