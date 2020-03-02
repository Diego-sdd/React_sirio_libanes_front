import React from "react";

import '../css/footer.css';
import '../css/mobile_footer.css';

import linkedin from '../../images/icon_linkedin.png';
import facebook from '../../images/icon_facebook.png';
import youtube from '../../images/icon_youtube.png';
import instagram from '../../images/icon_instagram.png';
var data = new Date();

var ano = data.getFullYear();
const footer = () => {
    return (
        <footer>
            <section className="container">
                <section className="row">
                    <section className="col s7 l6">
                        <div className="img_logo"></div>
                    </section>
                    <section className="col s5 l6">
                        <div className="rede_sociais">
                            <img src={linkedin}></img>
                            <img src={facebook}></img>
                            <img src={youtube}></img>
                            <img src={instagram}></img>
                        </div>
                    </section>
                    <section className="col s12 l12">
                        <div className="abed"></div>
                        <p id="direitos">Sírio-Libanês Ensino e Pesquisa &copy; Hospital Sírio-Libanês {ano}.
                    Todos os direitos reservados.</p>
                    </section>
                </section>
            </section>
        </footer>
    );
}

export default footer;