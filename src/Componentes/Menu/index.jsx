import React from "react";
import style from "./Menu.module.css";
import { Link } from "react-router-dom";

function Sidebar() {
   

    return (
        <div className={style.sidebar}>
            <h2>Professores</h2>
            <Link to={"/pesquisa/Felipe Santos:"}>Felipe</Link>
            <Link to={"/pesquisa/Carlos Estevão:"}>Carlos Estevão</Link>
            <Link to={"/pesquisa/Eutino:"}>Eutino</Link>
            <Link to={"/pesquisa/Karl:"}>Karl</Link>
            <Link to={"/pesquisa/Alan:"}>Alan</Link>

        </div>
    );
}

export default Sidebar;
