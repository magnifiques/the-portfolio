/* eslint-disable no-unused-vars */
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Interests from "./components/Interests";

import Experience from "./components/Experience";
import Tech from "./components/Tech";
import Works from "./components/Works";
import Feedbacks from "./components/Feedbacks";
import Contacts from "./components/Contacts";
import Stars from "./components/canvas/StarredCanvas";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";
const App = () => {
  return (
    <BrowserRouter>
      <Toaster position="top-center" />
      <div className="relative z-0 bg-primary">
        <div className="bg-gradient-to-br from-violet-800 to-rose-700">
          <Navbar />
          <Hero />
        </div>
        <div className="bg-hero-black bg-cover bg-no-repeat">
          <About />
        </div>
        <div className="bg-hero-pattern lg:bg-cover bg-no-repeat">
          <Interests />
        </div>
        {/* <Experience /> */}
        <div className="bg-gradient-to-br from-black to-purple-900">
          <Tech />
        </div>
        <div className="bg-gradient-to-bl from-purple-900 to-black">
          <Works />
        </div>
        {/* <Feedbacks /> */}
        <div className="relative z-0">
          <Contacts />
          <Stars />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
