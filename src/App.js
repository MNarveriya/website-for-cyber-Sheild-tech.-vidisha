import "./App.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { BiUpArrowAlt } from "react-icons/bi";
import { Routes, Route } from "react-router-dom";
import { Info } from "./components/pages/info/Info";
import { Home } from "./components/pages/home/Home";
import { Resnav } from "./components/Navber/Resnav";
import { About } from "./components/pages/about/About";
import { Nopage } from "./components/pages/Nopage/Nopage";
import { Footer } from "./components/pages/Footer/Footer";
import { About2 } from "./components/pages/about2/About2";
import { Cards } from "./components/pages/CardsDetails/Cards";
import { Coursedetail } from "./components/pages/coursedetails/Coursedetail";
import { Contactdetails } from "./components/pages/Contactdetails/Contactdetails";
import { CommunityExpert } from "./components/pages/CommunityExpert/CommunityExpert";
// import { Navbar } from "./components/Navber/Navbar";


function App() {
  const [arrow, setArrow] = useState(false);

  const gotoTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const listentoscroll = () => {
    let heighttoHidden = 600;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heighttoHidden) {
      setArrow(true);
    } else {
      setArrow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listentoscroll);
    return () => window.removeEventListener("scroll", listentoscroll);
  }, []);

  return (
    <div className="app">
      {/* <Navbar /> */}
      <Resnav />
      <Routes>
        <Route
          path="/"
          element={
            <div>
            <Home />
              <Cards />
              <About />
              <CommunityExpert />
              <About2 />
            </div>
          }
        />
        <Route path="/about" element={<Info />} />
        <Route path="/course" element={<Coursedetail />} />
        <Route path="/contact" element={<Contactdetails />} />
        <Route path="*" element={<Nopage />} />
      </Routes>
      <Footer />
      <div className="flex fixed right-5 bottom-5 gap-5 rounded-full borderpart">
        <Link to="">
          <FaWhatsapp className="text-4xl text-green-600 cursor-pointer hover:text-green-800" />
        </Link>
        <div
          className={
            arrow
              ? "bg-[indianred] p-1 rounded-full uparrowbox"
              : " bg-[indianred] p-1 rounded-full uparrowbox1"
          }
          onClick={gotoTop}
        >
          <BiUpArrowAlt className="text-3xl uparrow cursor-pointer" />
        </div>
      </div>
    </div>
  );
}

export default App;
