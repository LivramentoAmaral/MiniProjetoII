import React from "react";
import Navbar from "../../Componentes/Navbar";
import Sidebar from "../../Componentes/Menu";
import style from "./style.module.css";
import Footer from "../../Componentes/Footer";


function Principal(){

    

    return(
        <>
        <Navbar/>
        <main className={style.main}>
            <Sidebar/>
            <img src="https://www.decorfacil.com/wp-content/uploads/2020/07/20200716lista-de-material-escolar-1.jpg" alt="" />
            
        </main>
        <Footer />
        </>
    );
}

export default Principal;