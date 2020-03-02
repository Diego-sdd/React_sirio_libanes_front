import React, { Component } from 'react';
import './css/style.css';
import './css/mobile.css';
import './css/carousel.css';
import './css/carousel_mobile.css';

import M from "materialize-css";
import $ from 'jquery';

// imagens
import icon_seta_right from '../images/icon-seta-right.svg';
import uti from '../images/icon-uti.svg';
import radioterapia from '../images/icon-radioterapia.svg';
import compliance from '../images/icon-compilance.svg';
import seta_rigth from '../images/icon-seta-right.svg';
import seta_left from '../images/icon-seta-left.svg';
import seta_bt from '../images/icon-seta-bt.svg'


class Body extends Component {

    componentDidMount() {
        // M.AutoInit();
        document.addEventListener('DOMContentLoaded', function () {
            var elems = document.querySelectorAll('.carousel');
            var options =
            {
                dist: 100,
                duration: 200,
                fullWidth: false,
                indicators: true,
                color: "red",
                background: "red",
                numVisible: 3,
                padding: 0,
                shift: 20,
                indicators: false,
                dist: -65,
                numVisible: -4,
            }
            var instances = M.Carousel.init(elems, options);
        })
    }

    render() {
        document.addEventListener("DOMContentLoaded", function () {

            var elems = document.querySelectorAll(".carousel");
            var instances = M.Carousel.init(elems);
            $('.next').click(function () {

                var el = document.querySelector(".carousel");
                var l = M.Carousel.getInstance(el);
                l.next(1);
            });
            $('.prev').click(function () {

                var el = document.querySelector(".carousel");
                var l = M.Carousel.getInstance(el);
                l.prev(1);
            });


            // JAVASCRIPT Button Top
            $(function () {
                $(document).on('scroll', function () {
                    if ($(window).scrollTop() > 100) {
                        $('.smoothscroll-top').addClass('show');
                    } else {
                        $('.smoothscroll-top').removeClass('show');
                    }
                });
            });
            $(document).ready(function () {
                $('.smoothscroll-top').click(function () {
                    $('html, body').animate({ scrollTop: 0 }, 'slow');
                    return false;
                });
            });
        });

        return (
            <body>
                {/* --------------------------------------------- */}

                <div className="imagem_header">
                    <section className="container-fluid">
                        <section className="row">
                            <div className="col l1 m1 s0"></div>
                            <div className="col l3 m3 s12">
                                <div className="text_header">
                                    <h1>Ensino a Distancia</h1>
                                    <div id="linha_title"></div>
                                    <p>Cursos de curta duração 100% online para
                                     médicos, profissionais multidisciplinares e
                                    gestores de todo o Brasil.
                                    </p>
                                    <a href="aa"><button class="btn_comece_agora" type="submit"
                                        name="action">Comece agora!</button></a>
                                </div>
                            </div>

                            <div className="col l8 m8 s12">
                                <div className="img_header"></div>
                            </div>
                        </section>
                    </section>
                </div>

                {/* --------------------------------------------- */}

                {/* --------------------------------------------- */}
                <section className="container">
                    <section className="row">
                        <section className="col l12 l12 m12 s12 curso_disponiveis">
                            {/* <div className="curso_disponiveis"> */}
                            <section className="col l12 l12 m12 s12">
                                <div className="text_title">
                                    <h5>Conheça os cursos disponíveis:</h5>
                                </div>
                            </section>
                            <section className="col l1 m1 s1">
                                <div class="prev">
                                    <img src={seta_left} id="btn_carousel_avent"></img>
                                </div>
                            </section>
                            <section className="col l10 m10 s10">
                                <div class="carousel" >
                                    <div class="card carousel-item" >
                                        <img src={radioterapia}></img>
                                        <h5>Radioterapia Básica</h5>
                                        <p>curso multiprofissional</p>
                                        <button type="submit" className="btn_radio btn_cursos" href="ds">Ver</button>
                                    </div>
                                    <div class="card carousel-item" >
                                        <img src={compliance}></img>
                                        <h5>Compliance na Saúde</h5>
                                        <p>curso multiprofissional</p>
                                        <button type="submit" className="btn_compliance btn_cursos" href="ds">Ver</button>
                                    </div>
                                    <div class="card carousel-item">
                                        <img src={uti}></img>
                                        <h5>UTI humanizada</h5>
                                        <p>curso multiprofissional</p>
                                        <button type="submit" className="btn_uti btn_cursos" href="ds">Ver</button>
                                    </div>
                                </div>
                            </section>
                            <section className="col l1 m1 s1">
                                <div class="next"><img src={seta_rigth} id="btn_carousel_avent"></img></div>
                            </section>
                            <section className="col s12">
                                <a href="#"><p id="ver_todos">Ver Todos<img src={seta_bt} id="icon_ver_todos"></img></p></a>
                            </section>
                            {/* </div> */}
                        </section>
                    </section>
                </section>
                {/* --------------------------------------------- */}

                {/* --------------------------------------------- */}
                <div id="background">
                    <section className="container">
                        <section className="row">
                            <section className="col l6 s12">
                                <div className="img_maps"></div>
                            </section>
                            <section className="col l1 s0"></section>
                            <section className="col l6 s12">
                                <h6>Seja Bem-vindo ao programa de Ensino a Distância do Sírio-Libanês</h6>
                                <p>O programa EAD é uma maneira de compartilharmos conhecimento com um número maior de
                                profissionais. São cursos com investimento acessível, disponíveis para médico,
                                disponíveis para médicos, profissionais multidisciplinares e gestores do Brasil inteiro,
                                que contam com diferentes recursos como conteúdos multimídia, vídeos, estudos de caso e
                                games para levar aos alunos o pioneirismo, a excelência e a humanização do atendimento,
                                que são os nossos pilares. </p>
                                <p id="saiba_mais">
                                    saiba mais sobre o programa
                                    <a href="#">
                                        <img src={icon_seta_right} id="icon_seta_right"></img>
                                    </a>
                                </p>
                            </section>
                            <section className="col l1 s0"></section>
                        </section>
                    </section>
                </div>
                {/* --------------------------------------------- */}

                {/* --------------------------------------------- */}
                <section className="container">
                    <section className="row">
                        <div className="aprenda_no_seu_ritmo">
                            <section className="col s12 l12">
                                <div className="aprenda_ritmo_title">
                                    <h5>Cursos com carga horária de 20 horas, em formato autoinstrucional,
                                        possibilitando flexibilidade de horários e locais e autonomia.
                                    </h5>
                                </div>
                            </section>
                            <section className="col s6 l6">
                                <div className="img_aprenda_ritmo"></div>
                            </section>

                            <section className="col s6 l5">
                                <div id="text">
                                    <h5>Aprenda no seu ritmo</h5>
                                    <p>Aulas 100% online. Estude quando e onde quiser em computadores,
                                        tablets e smartphones.
                                    </p>
                                </div>
                            </section>

                            <section className="col s1 l1">
                                <div className="img_aprenda_ritmo_icon"></div>
                            </section>
                        </div>
                    </section>
                </section>
                {/* --------------------------------------------- */}

                {/* --------------------------------------------- */}
                <section className="container-fluid">
                    <section className="row">
                        <div className="aulas_com_experts">
                            <section className="col l2">
                                <div className="icon_objeto_one"></div>
                            </section>
                            <section className="col l3">
                                <div className="text">
                                    <h5>Aulas com experts</h5>
                                    <p>Cursos desenvolvidos por renomados profissionais,
                                        atuantes no corpo clínico do Hospital Sírio-Libanês.
                                    </p>
                                </div>
                            </section>
                            <section className="col s12 l5">
                                <div className="img_experts"></div>
                            </section>
                            <section className="col l2">
                                <div className="icon_objeto_two"></div>
                            </section>
                        </div>
                    </section>
                </section>
                {/* --------------------------------------------- */}

                {/* --------------------------------------------- */}
                <section className="container-fluid">
                    <section className="row">
                        <div className="certificado">
                            <section className="col s12 l3">
                                <div className="icon_object_one"></div>
                            </section>
                            <section className="col s4 l3">
                                <div className="img_certificado"></div>
                            </section>
                            <section className="col s6 l3">
                                <div className="icon_object_two"></div>
                                <h5>
                                    Certificado
                                </h5>
                                <p>Enriqueça seu currículo com um certificado Sírio-Libanês
                                    de conclusão de curso.
                                </p>
                            </section>
                            <section className="col s0 l3"></section>
                        </div>
                    </section>
                </section>
                {/* --------------------------------------------- */}



                <div class="smoothscroll-top">
                    <span class="scroll-top-inner">
                        <img src={seta_rigth}  ></img>
                    </span>
                </div>
            </body >
        );
    }
}
export default Body;