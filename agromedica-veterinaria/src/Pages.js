import React from "react";
import { Routes, Route } from "react-router-dom";
import { Accesorios } from "./components/Accesorios";
import { Accesoriosa1 } from "./components/Accesorios-a1";
import { Accesorioa1 } from "./components/Accesorio-a1";
import { Accesoriosa2 } from "./components/Accesorios-a2";
import { Accesorioa2 } from "./components/Accesorio-a2";
import { Accesoriosa3 } from "./components/Accesorios-a3";
import { Accesorioa3 } from "./components/Accesorio-a3";
import { Accesoriosa4 } from "./components/Accesorios-a4";
import { Accesorioa4 } from "./components/Accesorio-a4";
import { Accesoriosa5 } from "./components/Accesorios-a5";
import { Accesorioa5 } from "./components/Accesorio-a5";
import { Alimentos } from "./components/Alimentos";
import { Alimentosc1 } from "./components/Alimentos-c1";
import { Alimentoc1 } from "./components/Alimento-c1";
import { Alimentosc2 } from "./components/Alimentos-c2";
import { Alimentoc2 } from "./components/Alimento-c2";
import { Alimentosc3 } from "./components/Alimentos-c3";
import { Alimentoc3 } from "./components/Alimento-c3";
import { Alimentosc4 } from "./components/Alimentos-c4";
import { Alimentoc4 } from "./components/Alimento-c4";
import { Alimentosc5 } from "./components/Alimentos-c5";
import { Alimentoc5 } from "./components/Alimento-c5";
import { Alimentosc6 } from "./components/Alimentos-c6";
import { Alimentoc6 } from "./components/Alimento-c6";
import { Alimentosc7 } from "./components/Alimentos-c7";
import { Alimentoc7 } from "./components/Alimento-c7";
import { Alimentosc8 } from "./components/Alimentos-c8";
import { Alimentoc8 } from "./components/Alimento-c8";
import { Alimentosc9 } from "./components/Alimentos-c9";
import { Alimentoc9 } from "./components/Alimento-c9";
import { FarmaciaMayores } from "./components/FarmaciaMayores";
import { FarmaciaMayoresr1 } from "./components/FarmaciaMayores-r1";
import { FarmaciaMayoresElementsr1 } from "./components/FarmaciaMayoresElements-r1";
import { FarmaciaMayoresr2 } from "./components/FarmaciaMayores-r2";
import { FarmaciaMayoresElementsr2 } from "./components/FarmaciaMayoresElements-r2";
import { FarmaciaMayoresr3 } from "./components/FarmaciaMayores-r3";
import { FarmaciaMayoresElementsr3 } from "./components/FarmaciaMayoresElements-r3";
import { FarmaciaMayoresr4 } from "./components/FarmaciaMayores-r4";
import { FarmaciaMayoresElementsr4 } from "./components/FarmaciaMayoresElements-r4";
import { FarmaciaMayoresr5 } from "./components/FarmaciaMayores-r5";
import { FarmaciaMayoresElementsr5 } from "./components/FarmaciaMayoresElements-r5";
import { FarmaciaMayoresr6 } from "./components/FarmaciaMayores-r6";
import { FarmaciaMayoresElementsr6 } from "./components/FarmaciaMayoresElements-r6";
import { FarmaciaMayoresr7 } from "./components/FarmaciaMayores-r7";
import { FarmaciaMayoresElementsr7 } from "./components/FarmaciaMayoresElements-r7";
import { FarmaciaMenores } from "./components/FarmaciaMenores";
import { FarmaciaMenoresf1 } from "./components/FarmaciaMenores-f1";
import { FarmaciaMenoresElementsf1 } from "./components/FarmaciaMenoresElements-f1";
import { FarmaciaMenoresf2 } from "./components/FarmaciaMenores-f2";
import { FarmaciaMenoresElementsf2 } from "./components/FarmaciaMenoresElements-f2";
import { FarmaciaMenoresf3 } from "./components/FarmaciaMenores-f3";
import { FarmaciaMenoresElementsf3 } from "./components/FarmaciaMenoresElements-f3";
import { FarmaciaMenoresf4 } from "./components/FarmaciaMenores-f4";
import { FarmaciaMenoresElementsf4 } from "./components/FarmaciaMenoresElements-f4";
import { FarmaciaMenoresf5 } from "./components/FarmaciaMenores-f5";
import { FarmaciaMenoresElementsf5 } from "./components/FarmaciaMenoresElements-f5";
import { FarmaciaMenoresf6 } from "./components/FarmaciaMenores-f6";
import { FarmaciaMenoresElementsf6 } from "./components/FarmaciaMenoresElements-f6";
import { FarmaciaMenoresf7 } from "./components/FarmaciaMenores-f7";
import { FarmaciaMenoresElementsf7 } from "./components/FarmaciaMenoresElements-f7";
import { Lecheria } from "./components/Lecheria";
import { Lecheriag1 } from "./components/Lecheria-g1";
import { Lecheriag2 } from "./components/Lecheria-g2";
import { Lecheriag3 } from "./components/Lecheria-g3";
import { LecheriaElementsg1 } from "./components/LecheriaElements-g1";
import { LecheriaElementsg2 } from "./components/LecheriaElements-g2";
import { LecheriaElementsg3 } from "./components/LecheriaElements-g3";

import { Consulta } from "./components/Consulta";
import { Peluqueria } from "./components/Peluqueria";

function Pages() {
  return (
    <Routes>
      <Route path="/accesorios" element={<Accesorios />} />
      <Route path="/a1" element={<Accesoriosa1 />} />
      <Route path="/accesorio-a1/:id" element={<Accesorioa1 />} />
      <Route path="/a2" element={<Accesoriosa2 />} />
      <Route path="/accesorio-a2/:id" element={<Accesorioa2 />} />
      <Route path="/a3" element={<Accesoriosa3 />} />
      <Route path="/accesorio-a3/:id" element={<Accesorioa3 />} />
      <Route path="/a4" element={<Accesoriosa4 />} />
      <Route path="/accesorio-a4/:id" element={<Accesorioa4 />} />
      <Route path="/a5" element={<Accesoriosa5 />} />
      <Route path="/accesorio-a5/:id" element={<Accesorioa5 />} />

      <Route path="/alimentos" element={<Alimentos />} />
      <Route path="/c1" element={<Alimentosc1 />} />
      <Route path="/alimento-c1/:id" element={<Alimentoc1 />} />
      <Route path="/c2" element={<Alimentosc2 />} />
      <Route path="/alimento-c2/:id" element={<Alimentoc2 />} />
      <Route path="/c3" element={<Alimentosc3 />} />
      <Route path="/alimento-c3/:id" element={<Alimentoc3 />} />
      <Route path="/c4" element={<Alimentosc4 />} />
      <Route path="/alimento-c4/:id" element={<Alimentoc4 />} />
      <Route path="/c5" element={<Alimentosc5 />} />
      <Route path="/alimento-c5/:id" element={<Alimentoc5 />} />
      <Route path="/c6" element={<Alimentosc6 />} />
      <Route path="/alimento-c6/:id" element={<Alimentoc6 />} />
      <Route path="/c7" element={<Alimentosc7 />} />
      <Route path="/alimento-c7/:id" element={<Alimentoc7 />} />
      <Route path="/c8" element={<Alimentosc8 />} />
      <Route path="/alimento-c8/:id" element={<Alimentoc8 />} />
      <Route path="/c9" element={<Alimentosc9 />} />
      <Route path="/alimento-c9/:id" element={<Alimentoc9 />} />

      <Route path="/farmaciamayores" element={<FarmaciaMayores />} />
      <Route path="/r1" element={<FarmaciaMayoresr1 />} />
      <Route
        path="/farmaciamayores-r1/:id"
        element={<FarmaciaMayoresElementsr1 />}
      />
      <Route path="/r2" element={<FarmaciaMayoresr2 />} />
      <Route
        path="/farmaciamayores-r2/:id"
        element={<FarmaciaMayoresElementsr2 />}
      />
      <Route path="/r3" element={<FarmaciaMayoresr3 />} />
      <Route
        path="/farmaciamayores-r3/:id"
        element={<FarmaciaMayoresElementsr3 />}
      />
      <Route path="/r4" element={<FarmaciaMayoresr4 />} />
      <Route
        path="/farmaciamayores-r4/:id"
        element={<FarmaciaMayoresElementsr4 />}
      />
      <Route path="/r5" element={<FarmaciaMayoresr5 />} />
      <Route
        path="/farmaciamayores-r5/:id"
        element={<FarmaciaMayoresElementsr5 />}
      />
      <Route path="/r6" element={<FarmaciaMayoresr6 />} />
      <Route
        path="/farmaciamayores-r6/:id"
        element={<FarmaciaMayoresElementsr6 />}
      />
      <Route path="/r7" element={<FarmaciaMayoresr7 />} />
      <Route
        path="/farmaciamayores-r7/:id"
        element={<FarmaciaMayoresElementsr7 />}
      />

      <Route path="/farmaciamenores" element={<FarmaciaMenores />} />
      <Route path="/f1" element={<FarmaciaMenoresf1 />} />
      <Route
        path="/farmaciamenores-f1/:id"
        element={<FarmaciaMenoresElementsf1 />}
      />
      <Route path="/f2" element={<FarmaciaMenoresf2 />} />
      <Route
        path="/farmaciamenores-f2/:id"
        element={<FarmaciaMenoresElementsf2 />}
      />
      <Route path="/f3" element={<FarmaciaMenoresf3 />} />
      <Route
        path="/farmaciamenores-f3/:id"
        element={<FarmaciaMenoresElementsf3 />}
      />
      <Route path="/f4" element={<FarmaciaMenoresf4 />} />
      <Route
        path="/farmaciamenores-f4/:id"
        element={<FarmaciaMenoresElementsf4 />}
      />
      <Route path="/f5" element={<FarmaciaMenoresf5 />} />
      <Route
        path="/farmaciamenores-f5/:id"
        element={<FarmaciaMenoresElementsf5 />}
      />
      <Route path="/f6" element={<FarmaciaMenoresf6 />} />
      <Route
        path="/farmaciamenores-f6/:id"
        element={<FarmaciaMenoresElementsf6 />}
      />
      <Route path="/f7" element={<FarmaciaMenoresf7 />} />
      <Route
        path="/farmaciamenores-f7/:id"
        element={<FarmaciaMenoresElementsf7 />}
      />

      <Route path="/lecheria" element={<Lecheria />} />
      <Route path="/g1" element={<Lecheriag1 />} />
      <Route path="/lecheria-g1/:id" element={<LecheriaElementsg1 />} />
      <Route path="/g2" element={<Lecheriag2 />} />
      <Route path="/lecheria-g2/:id" element={<LecheriaElementsg2 />} />
      <Route path="/g3" element={<Lecheriag3 />} />
      <Route path="/lecheria-g3/:id" element={<LecheriaElementsg3 />} />

      <Route path="/consulta" element={<Consulta />} />
      <Route path="/peluqueria" element={<Peluqueria />} />
      <Route path="/farmacia/:id" element={<Peluqueria />} />
    </Routes>
  );
}
export default Pages;
