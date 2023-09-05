import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import ContactUs from "./Components/ContactUs";
import { useState } from "react";
import AboutUs from "./Components/AboutUs";
import Tech from "./Components/Tech";
import MD from "./Components/MD";
import Choose from "./Components/Choose";
import Care from "./Components/Care";
import Brands from "./Components/Brands";
import ContactForm from "./Components/ContactForm";
import Footer from "./Components/Footer";
import Sell from "./Components/Sell";
//import { useState } from "react";

function App() {
  const [isContact, setContact] = useState(false);
  const [id, setId] = useState("");
  return (
    <>
      <Sell />
      <div id="upper-background">
        <Navbar
          isContact={isContact}
          setContact={setContact}
          id={id}
          setId={setId}
        />
        <div className="w-11/12 max-w-[1168px] p-6 mx-auto">
          {!isContact ? (
            <Hero />
          ) : (
            <Routes>
              <Route path="/contactus" element={<ContactUs />}></Route>
            </Routes>
          )}
        </div>
      </div>
      <AboutUs />
      <Tech />
      <MD />
      <Choose id={id} />
      <Care />
      <Brands />
      <ContactForm />
      <Footer />
    </>
  );
}

export default App;
