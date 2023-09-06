import React, { useState } from "react";
import style from "./style.module.css";

function InputForm({ groupName }) {
  const [opcaoSelecionada, setOpcaoSelecionada] = useState("");

  const handleSelecionarOpcao = (event) => {
    setOpcaoSelecionada(event.target.value);
  };

  return (
    <>
      <div className={style.container}>
        <div className={style.div_option}>
          <input
            type="radio"
            name={groupName}
            value="opcao1"
            checked={opcaoSelecionada === "opcao1"}
            onChange={handleSelecionarOpcao}
          />
          <p>Péssimo</p>
        </div>

        <div className={style.div_option}>
          <input
            type="radio"
            name={groupName}
            value="opcao2"
            checked={opcaoSelecionada === "opcao2"}
            onChange={handleSelecionarOpcao}
          />
          <p>Ruim</p>
        </div>

        <div className={style.div_option}>
     
          <input
            type="radio"
            name={groupName}
            value="opcao3"
            checked={opcaoSelecionada === "opcao3"}
            onChange={handleSelecionarOpcao}
          />
            <p>Regular</p>
        </div>
        <div className={style.div_option}>
          <input
            type="radio"
            name={groupName}
            value="opcao4"
            checked={opcaoSelecionada === "opcao4"}
            onChange={handleSelecionarOpcao}
          />
            <p>Bom</p>
        </div>
        <div className={style.div_option}>
          <input
            type="radio"
            name={groupName}
            value="opcao5"
            checked={opcaoSelecionada === "opcao5"}
            onChange={handleSelecionarOpcao}
          />
            <p>Ótimo</p>    
        </div>
      </div>
    </>
  );
}

export default InputForm;
