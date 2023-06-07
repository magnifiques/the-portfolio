/* eslint-disable no-unused-vars */
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Tech from "./components/Tech";
import Works from "./components/Works";
import Feedbacks from "./components/Feedbacks";
import Contacts from "./components/Contacts";
import Stars from "./components/canvas/StarredCanvas";
import { Toaster } from "react-hot-toast";
const App = () => {
  return (
    <BrowserRouter>
      <Toaster position="top-center" />
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        {/* <Experience /> */}
        <Tech />
        <Works />
        {/* <Feedbacks /> */}
        <div className="relative z-0">
          <Contacts />
          <Stars />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
