import React from "react";
import style from "./Main.module.css";
import Container from "../Container";
import Footer from "../Footer";
import Navbar from "../Navbar";


function MainContainer(){
    return(
      <>
       <Navbar/>
        <main className={style.main}>
          <Container/>
        </main>

        <Footer/>
      </>
    )
}

export default MainContainer;