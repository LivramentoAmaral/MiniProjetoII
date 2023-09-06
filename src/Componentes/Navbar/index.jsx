import React from "react";
import style from "./Navbar.module.css";
import {Link} from "react-router-dom";

function Navbar(){
    return(
        <>
        <div className={style.navbar}>
            <div className={style.div_logo}>
                <img src="https://www.ifpi.edu.br/topo_ifpi_corrente.png" alt="Logo" />
            </div>
            <Link to={"/"}>Login</Link>
            <Link to={"/principal"}>Home</Link>
        </div>
        </>
    );
}

export default Navbar;
