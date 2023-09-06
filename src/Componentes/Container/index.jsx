import React from "react";
import style from "./Container.module.css";


function Container(){
    return(
        <div className={style.container}>
            <form action="">
                <div className={style.formGroup}>
                    <label htmlFor="nome">Nome:</label>
                    <input type="text" name="nome" id="nome" />
                </div>
                <div className={style.formGroup}>
                    <label htmlFor="email">E-mail:</label>
                    <input type="email" name="email" id="email" />
                </div>
                
                <div className={style.formGroup}>
                    <input type="submit" value="Enviar" />
                </div>
            </form>
        </div>
    );
}

export default Container;