import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Products } from "./components/Products";
import { Services } from "./components/Services";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import Pages from "./Pages";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Pages />
      <Banner />
      <Products />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
