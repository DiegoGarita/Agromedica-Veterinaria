import React from "react";
import { Accesorio } from "./components/Accesorio";
import { Alimento } from "./components/Alimento";
import { FarmaciaElements } from "./components/FarmaciaElements";
import { LecheriaElements } from "./components/LecheriaElements";
import { Routes, Route } from "react-router-dom";
import { Alimentos } from "./components/Alimentos";
import { Accesorios } from "./components/Accesorios";
import { Farmacia } from "./components/Farmacia";
import { Lecheria } from "./components/Lecheria";
import { Consulta } from "./components/Consulta";
import { Peluqueria } from "./components/Peluqueria";

function Pages() {
  return (
    <Routes>
      <Route path="/alimentos" element={<Alimentos />} />
      <Route path="/accesorios" element={<Accesorios />} />
      <Route path="/farmacia" element={<Farmacia />} />
      <Route path="/lecheria" element={<Lecheria />} />
      <Route path="/consulta" element={<Consulta />} />
      <Route path="/peluqueria" element={<Peluqueria />} />
      <Route path="/accesorio/:id" element={<Accesorio />} />
      <Route path="/alimento/:id" element={<Alimento />} />
      <Route path="/farmacia/:id" element={<FarmaciaElements />} />
      <Route path="/lecheria/:id" element={<LecheriaElements />} />
    </Routes>
  );
}
export default Pages;
