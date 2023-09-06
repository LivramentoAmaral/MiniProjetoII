import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "../Pages/home";
import Principal from "../Pages/Avaliar_Prof";
import PesquisaProf from "../Pages/PesquisaProf";

function Rotas() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />}>
          <Route index element={<Inicio />} />
        </Route>
        <Route path="/principal" element={<Principal />}>
          <Route index element={<Principal />} />
        </Route>
        <Route path="/pesquisa/:nome:" element={<PesquisaProf />} />
        <Route index element={<PesquisaProf />} />
  
      </Routes>
    </BrowserRouter>
  );
}

export default Rotas;
