import React from "react";
import {useParams} from "react-router-dom";
import Navbar from "../../Componentes/Navbar";
import InputForm from "../../Componentes/Input_form";
import Footer from "../../Componentes/Footer";
import style from "./style.module.css";
import { ToastContainer ,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
 
    



function PesquisaProf(){


    const notificar = (event) => {     
    event.preventDefault();
      return toast.success('Pesquisa enviada com sucesso!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,  
            draggable: true,
            progress: undefined,
            });
    }

    const perguntas = [
        "1 - Qual é a sua opinião sobre a qualidade do conteúdo das aulas ministradas neste curso/disciplina?",<InputForm groupName="grupoDeRadios1"/>,
        "2 - Como você avaliaria a capacidade do professor de transmitir o conteúdo de forma clara e compreensível?",<InputForm groupName="grupoDeRadios2"/>,
        "3 - Em relação ao engajamento e interação em sala de aula (ou online), como você avalia a disponibilidade do professor para responder a perguntas e participar de discussões?",<InputForm groupName="grupoDeRadios3"/>,
        "4 - Você acha que as atividades de avaliação, como provas e trabalhos, refletem adequadamente o que foi ensinado durante o curso/disciplina?",<InputForm groupName="grupoDeRadios4"/>
   ]
    const {nome} = useParams();

    const imagemPorNome = {
        "Felipe Santos": "https://avatars.githubusercontent.com/u/20522151?v=4",
        "Carlos Estevão": "https://avatars.githubusercontent.com/u/39769751?v=4",
        "Eutino": "https://i.pinimg.com/474x/65/82/a8/6582a801819115700f246e35dc4338df.jpg",
        "Karl": "https://i.pinimg.com/474x/65/82/a8/6582a801819115700f246e35dc4338df.jpg",
        "Alan": "https://i.pinimg.com/474x/65/82/a8/6582a801819115700f246e35dc4338df.jpg"
        // Adicione mais professores e suas URLs aqui
      };
     
    const imagemProfessor = imagemPorNome[nome] || '';

    return (
        <>
        <Navbar />

            <div className={style.aprensentacao}>
            
                <h1 className={style.h1}>Perguntas de Avaliação do Professor: {nome}</h1> 
                
                    <img src={imagemProfessor} alt="" />
            </div>
            <form className={style.form} action="">
            
                <div className={style.container}>
                    {perguntas.map((pergunta, index) => (
                        <h3 className={style.pergunta} key={index}>{pergunta}</h3>
                        ))}   
                    
                </div>
                <div className={style.btn}> 
                    <button type="submit" className={style.button} onClick={notificar}>Enviar</button>           
                    <ToastContainer />   
                </div>

            </form>
        
         <Footer />
  
        </>

    );
}

export default PesquisaProf;