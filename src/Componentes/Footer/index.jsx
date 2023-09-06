import style from './Footer.module.css';


function Footer() {
    return (
        <>
        <footer className={style.footer}>
            <p>Desenvolvido por <a href="https://github.com/LivramentoAmaral">Marcos Amaral</a></p>
        </footer>
        </>

    );
}

export default Footer;