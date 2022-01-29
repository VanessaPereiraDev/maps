import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';
import StarRating from '../StarRating';

function Pages() {

    return (
        <Container>
            <Page1 id="menu">
                <Alinhar>
                    <Text>
                        <h1>Bem-vindo</h1>
                        <Baloes>
                            <Fade bottom>
                                <p>Maps é um evento de todos e para todos.</p>
                            </Fade>
                            <Fade bottom>
                                <p>Aqui vais ter a oportunidade de conhecer e ouvir testemunhos, de quem já esteve no teu lugar, e está onde sonhou ficar!</p>
                            </Fade>
                            <Fade bottom>
                            <p>Deixa-te levar nesta aventura, não te vais arrepender!</p>
                            </Fade>
                        </Baloes>
                    </Text> 
                    <Tunel>
                        <img src="/images/fundo1.png" />
                    </Tunel>
                </Alinhar>
            </Page1>
            <Page2 id="concurso">
                <Concurso>
                    <h1>Concurso</h1>
                </Concurso>
                <Texto>
                    <Agrupar>
                        <p>
                            No âmbito da 1º do evento MAPS, a ter lugar no dia 4 de maio de 2022, na Universidade de Trás-os-Montes e Alto Douro, realizar-se-á a entrega de prémios, relativamente ao concurso "A minha jornada". 
                            O concurso é dirigido a todos os alunos/ex-alunos da licenciatura e/ou Mestrado em Comunicação e Multimédia.
                        </p>
                        <Link>
                            <a href="https://forms.gle/pbc1uXudYse1YnGZ9">
                                <button>
                                    Inscrever
                                </button>
                            </a>
                        </Link>
                    </Agrupar>
                    <Boneco>
                        <img src="/images/pacman.png" />
                    </Boneco>
                    <Escadas>
                        <img src="/images/escadas.png" />
                    </Escadas>
                </Texto>
            </Page2>
            <Page3 id="programa">
                <Tituloo>
                    <h1>Programa</h1>
                </Tituloo>
                <Posicionar>
                    <Programas>
                        <Programa1>
                            <div>
                                <h3>09:30 - Boas-vindas</h3>
                                <p>Diretoras de curso - Discurso de boas-vindas.</p>
                            </div>
                            <div>
                                <h3>10:00 - Palestra de abertura</h3>
                                <p>Professores.</p>
                                <p>Convidados a definir.</p>
                            </div>
                            <div>
                                <h3>11:00 - Exposição de trabalhos</h3>
                                <p>Apresentação de trabalhos das áreas mestras (Design, Audiovisual e Desenvolvimento Web).</p>
                            </div>
                            <div>
                                <h3>12:00 - Almoço</h3>
                                <p>Pausa para almoço.</p>
                                <p>Cantina e bar ECT POLO I.</p>
                            </div>
                            <div>
                                <h3>14:00 - Experiência Massive</h3>
                                <p>Experiência de realidade virtual em parceria com "Massive Virtual Reality Laboratory".</p>
                            </div>
                        </Programa1>
                        <Programa2>
                            <div>
                                <h3>16:30 - Testemunhos de ex-alunos</h3>
                                <p>Ex-alunos de CM - (Pequena abordagem sobre a vida profissiona).</p>
                            </div>
                            <div>
                                <h3>16:45 - Concurso</h3>
                                <p>Entrega de prémios no decorrer do concurso "A minha jornada".</p>
                            </div>
                            <div>
                                <h3>17:15 - Concerto da Tuna</h3>
                                <p>Atuação da Vibratuna.</p>
                            </div>
                            <div>
                                <h3>17:30 - SHOW Remember CM</h3>
                                <p>Visualização do vídeo "Remember CM".</p>
                            </div>
                            <div>
                                <h3>18:00 - Convívio</h3>
                                <p>Lanche e convívio final.</p>
                            </div>
                        </Programa2>
                    </Programas> 
                    <Fundo>
                        <img src="/images/progr.png" />
                    </Fundo>
                </Posicionar>
            </Page3>
            <Page4 id="convidados">
                <Convidados>
                    <h1>Convidados</h1>
                </Convidados>
                <Imagens>
                    <div class="todos">
                        <div class="convidado1">
                            <div class="alinhar">
                                <img src="/images/joaorocha1.PNG" />
                                <h3>João Rocha</h3>
                                <p>Fotógrafo/ Videógrafo</p>
                            </div>
                            <div class="alinhar">
                                <img src="/images/tomascaeiro1.PNG" />
                                <h3>Tomás Caeiro</h3>
                                <p>Empreendedor</p>
                            </div>
                            <div class="alinhar dif">
                                <img src="/images/fredcantoecastro1.PNG" />
                                <h3>Fred Canto e Castro</h3>
                                <p>Orador/ Empreendedor</p>
                            </div>
                        </div>
                        <div class="convidado2">
                            <div class="alinhar">
                                <img src="/images/brandao1.PNG" />
                                <h3>Pedro Oliveira</h3>
                                <p>Programador Full-Stack</p>
                            </div>
                            <div class="alinhar">
                                <img src="/images/carlosfernandes1.PNG" />
                                <h3>Carlos Fernandes</h3>
                                <p>Fotógrafo/ Videógrafo</p>
                            </div>
                            <div class="alinhar dif">
                                <img src="/images/botelho1.PNG" />
                                <h3>Hugo Botelho</h3>
                                <p>Multimédia</p>
                            </div>
                        </div>
                    </div>
                </Imagens>
            </Page4>
            <GameOver>
                <Sobrepor>
                    <img src="/images/Try-again.png" />
                    <Bounce bottom>
                        <button>Game Over</button>
                    </Bounce>
                </Sobrepor>
            </GameOver>
            <Duvidas id="contactos">
                <Titu>
                    <h1>Tira as tuas dúvidas</h1>
                </Titu>
                <Inform>
                    <div class="box">
                        <h2>Contacta-nos!</h2><br/><br/>
                        <form action="">
                            <fieldset>
                                <div class="inputBox">
                                    <input type="text" name="nome" id="nome" class="inputUser" required />
                                    <label for="nome" class="labelInput">Nome</label>
                                </div>
                                <br/><br/> 
                                <div class="inputBox">
                                    <input type="text" name="email" id="email" class="inputUser" required />
                                    <label for="email" class="labelInput">Email</label>
                                </div>
                                <br/><br/> 
                                <div class="inputBox">
                                    <input type="text" name="mensagem" id="mensagem" class="inputUser" required />
                                    <label for="mensagem" class="labelInput">Mensagem</label>
                                </div>
                                <br/><br/><br/><br/>
                                <input type="submit" name="submit" id="submit" />
                            </fieldset>
                        </form>
                    </div>
                </Inform>
                <Avaliacao>
                    <h2>Avaliação</h2>  
                </Avaliacao>
                <StarRating />
            </Duvidas>
            <Footer>
                <Content>
                    <div class="footer">
                        <div class="alinhar">
                            <div class="left">
                                <p>Universidade de Trás-os-Montes e Alto Douro</p>
                                <p>Comunicação e Multimédia - 2022</p><br/>
                                <p>Tel.: (+351) 259 350 000</p>
                            </div>
                            <div id="linha-vertical"></div>
                            <div class="right">
                                <p>Quinta de Prados, 5000-801 Vila Real</p><br/>
                                <p>E-mail: maps2022_cm@utad.pt</p>
                            </div>
                        </div>
                        <div class="logos">
                            <p>Segue-nos:</p>
                            <a href="https://www.facebook.com/UTAD.oficial"><img src="/images/fb.png" /></a>
                            <a href="https://www.instagram.com/evento.maps/"><img src="/images/insta.png" /></a>
                            <a href="https://twitter.com/UTAD_RS"><img src="/images/twitter.png" /></a>
                            <a href="https://www.youtube.com/user/UTADrs"><img src="/images/youtube.png" /></a>
                            <a href="https://www.linkedin.com/school/utad/"><img src="/images/linkedin.png" /></a>
                        </div>
                        <div class="patrocin">
                            <img src="/images/logo-cm.png" />
                            <img src="/images/logo-repub.png" />
                            <img src="/images/logo-utad.png" />
                        </div>
                    </div>
                </Content>
            </Footer>
            {/*
            <SetaTop>
                <a href="#" class="to-top">Voltar para cima</a>
            </SetaTop>
            */}
        </Container>
    )
}

export default Pages

const Container = styled.div`
   
`

const Page1 = styled.div`
    margin-top: 150px;
    min-height: calc(100vh - 60px);
`

const Alinhar = styled.div`
    display: flex;
    margin-top: 12%;
`

const Text = styled.div`
    margin-left: 15%;

    h1 {
        color: #fff;
        text-transform: uppercase;
        margin-bottom: 15%;
        text-shadow: #F23CFA 1px 1px 10px;
        font-size: 55px;

        @media(max-width: 768px) {
            margin-bottom: 50%;
        }
    }

    p {
        position: relative;
        width: 350px;
        text-align: center;
        line-height: 1.4em;
        margin: 25px auto;
        background-color: #cc00ff;
        border-radius: 48px;
        font-family: sans-serif;
        font-size: 16px;
        color: #fff;
        padding: 20px;
    }

    @media(max-width: 768px) {
        margin-left: auto;
        margin-right: auto;
    }

`

const Baloes = styled.div`
    margin-top: 30%;
`


const Tunel = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    z-index: -1;

    img {
        width: 100%;
        height: 100%;
    }
`

const Page2 = styled.div`
    min-height: calc(100vh - 60px);
`

const Concurso = styled.div`
    h1 {
        text-transform: uppercase;
        color: #fff;
        font-size: 3em;
        font-weight: 400;
        text-shadow: #F23CFA 1px 1px 10px;
        margin-bottom: 5%;

        @media(max-width: 768px) {
            margin-bottom: 20%;
            font-size: 2.5em;
        }
    }
`

const Texto = styled.div`
    position: relative;
    width: 67%;
    border: 3px solid blue;
    box-shadow: 1px 1px 10px #6175D6;
    margin-left: auto;
    margin-right: auto;

    p {
        position: relative;
        width: 46%;
        text-align: justify;
        line-height: 1.4em;
        margin: 80px auto;
        font-family: sans-serif;
        font-size: 16px;
        color: #fff;

        @media(max-width: 768px) {
            width: 250px;
            font-size: 12px;
        }
    }

    button {
        background-color: #182a7f;
        color: #fff;
        border: 1px solid #182a7f;
        font-size: 15px;
        padding: 10px 50px;
        margin-top: 2%;
        cursor: pointer;   

        &:hover {
            background-color: #6c8dc4;
            box-shadow: 0px 0px 10px #6175D6;
            color: #fff;
            border: 1px solid #6c8dc4;
        }

        @media(max-width: 768px) {
            font-size: 12px;
            padding: 5px 25px;
            border-radius: 4px;
        }
    }
`

const Boneco = styled.div`
    img {
        width: 140px;
        position: absolute;
        bottom: 0;
        left: 0;

        @media(max-width: 768px) {
            width: 85px;
        }
    }
`

const Escadas = styled.div`
    img {
        width: 330px;
        position: absolute;
        bottom: 0;
        right: 0;
        margin-right: -53px;
        margin-bottom: -26px;

        @media(max-width: 768px) {
            width: 170px;
            margin-right: -27px;
            margin-bottom: -12px;
        }
    }
`

const Agrupar = styled.div`
    margin-bottom: 150px;
`

const Link = styled.div`

`

const Page3 = styled.div`
    min-height: calc(100vh - 60px);
`

const Tituloo = styled.div`
    h1 {
        text-transform: uppercase;
        color: #fff;
        font-size: 3em;
        font-weight: 400;
        text-shadow: #F23CFA 1px 1px 10px;
        margin-bottom: 5%;

        @media(max-width: 768px) {
            margin-bottom: 20%;
            font-size: 2.5em;
        }
    }
`

const Posicionar = styled.div`
    display: flex;
`

const Programas = styled.div`
    display: flex;
    justify-content: space-between;
    margin-left: auto;
    margin-right: auto;

    @media(max-width: 768px) {
        justify-content: space-evenly;
    }

`

const Programa1 = styled.div`
    width: 25%;

    @media(max-width: 768px) {
        width: 32%;
    }

    div {
        text-align: left;
        margin-bottom: 10%;
    }
    
    h3 {
        color:  #ef00ff;

        @media(max-width: 768px) {
            font-size: 16px;
        }
    }

    p {
        color: #fff;
        font-size: 18px;

        @media(max-width: 768px) {
            font-size: 14px;
        }
    }
`

const Programa2 = styled.div`
    width: 25%;

    @media(max-width: 768px) {
        width: 32%;
    }

    div {
        text-align: left;
        margin-bottom: 10%;
    }
    
    h3 {
        color:  #ef00ff;

        @media(max-width: 768px) {
            font-size: 16px;
        }
    }

    p {
        color: #fff;
        font-size: 18px;

        @media(max-width: 768px) {
            font-size: 14px;
        }
    }
`

const Fundo = styled.div`
    position: absolute;
    right: 0;
    z-index: -1;

    img {
        width: 100%;
        heigth: 100%;
    }
`

const Page4 = styled.div`
    min-height: calc(100vh - 60px);
`

const Convidados = styled.div`
    margin-top: 5%;
    margin-bottom: 5%;
    
    h1 {
        text-transform: uppercase;
        color: #fff;
        font-size: 3em;
        font-weight: 400;
        text-shadow: #F23CFA 1px 1px 10px;

        @media(max-width: 768px) {
            margin-bottom: 20%;
            font-size: 2.5em;
        }
    }
`

const Imagens = styled.div`
    margin-left: auto;
    margin-right: auto;

    .todos {
        
        @media(max-width: 768px) {
            position: absolute;
            margin-left: auto;
            margin-right: auto;
        }
    }

    .convidado1 {
        display: flex;
        justify-content: center;
        color: #fff; 
    }

    .convidado2 {
        display: flex;
        justify-content: center;
        color: #fff;
    }

    .alinhar {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-right: 50px;
        margin-left: 50px;
        margin-bottom: 60px;

        @media(max-width: 768px) {
            margin-right: 20px;
            margin-left: 20px;
            margin-bottom: 40px;
        }
    }

    .dif {

    }

    h3 {
        color: purple;
        margin-top: 20px;
        margin-bottom: 3px;

        @media(max-width: 768px) {
            font-size: 18px;       
        }
    }

    p {
        @media(max-width: 768px) {
            font-size: 14px;
        }
    }

    img {
        width: 260px;
        cursor: pointer;

        &:hover {
            opacity: 0.5;
        }

        @media(max-width: 768px) {
            width: 120px;
        }
    }
`

const GameOver = styled.div`
    min-height: 50vh;
`

const Sobrepor = styled.div`
    margin-top: 7%;
    margin-bottom: 7%;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        width: 100%;
        height: auto;
        z-index: -1;
        position: relative;
    }

    button {
        text-transform: uppercase;
        padding: 18px 60px;
        marging-top: 50px;
        position: absolute;
        background: #000;
        color: #fff;
        font-weight: 600;
        border: 1px solid #fff;
        opacity: 0.8;
        border-radius: 4px;
        cursor: pointer;

        &:hover {
            background-color: #fff;
            border: 1px solid #000;
            color: #000;
        }

        @media(max-width: 768px) {
            padding: 8px 30px;
            border-radius: 2px;
            font-size: 12px;
        }
    }
`

const Duvidas = styled.div`
    min-height: calc(100vh - 60px);
`

const Titu = styled.div`
    h1 {
        color: yellow;
        font-size: 3em;
        font-weight: 600;
        margin-bottom: 5%;

        @media(max-width: 768px) {
            margin-bottom: 20%;
            font-size: 2em;
        }
    }
`

const Inform = styled.div`
    .box {
        position: relative;
        padding: 50px;
        border: 1px solid #fff;
        box-shadow: 0px 0px 10px #6175D6;
        border-radius: 5px;
        width: 40%;
        color: #fff;
        margin-left: auto;
        margin-right: auto;

        h2 {
            margin-bottom: 10px;
        }

        @media(max-width: 768px) {
            width: 70%;
            margin-bottom: 40%;
        }
    }

    fieldset {
        border: none;
    }

    .inputBox {
        position: relative;
    }

    .inputUser {
        background: none;
        border: none;
        border-bottom: 1px solid #fff;
        outline: none;
        color: #fff;
        font-size: 15px;
        width: 100%;
        letter-spacing: 2px;
    }

    .labelInput {
        position: absolute;
        top: 0;
        left: 0;
        pointer-events: none;
        transition: .5s;
    }

    .inputUser:focus ~ .labelInput,
    .inputUser:valid ~ .labelInput {
        top: -20px;
        font-size: 14px;
        color: #cc00ff;
    }

    #submit {
        background-image: linear-gradient(to right, rgb(0, 92, 197), rgb(90, 20, 220));
        width: 100%;
        border: none;
        padding: 15px;
        color: #fff;
        font-size: 15px;
        cursor: pointer;
    }

    #submit:hover {
        background-image: linear-gradient(to right, rgb(0, 80, 172), rgb(80, 19, 195));
    }
`

const Avaliacao = styled.div`
    margin-top: 7%;
    margin-bottom: 20px;

    h2 {
        color: #fff;

        @media(max-width: 768px) {
            font-size: 25px;
            margin-top: 15%;
        }
    }

    @media(max-width: 768px) {
        margin-top: 5%;
    }
`

const Footer = styled.div`
    min-height: calc(100vh - 220px);
    position: relative;
`

const Content = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;

    .footer {
        padding: 50px;
        background: #070707;
        color: #fff;

        @media(max-width: 768px) {    
            p {
                font-size: 12px;
            }
        }
    }

    .alinhar {
        display: flex;
        align-items: center;
        justify-content: space-around;
        text-align: left;
    }

    #linha-vertical {
        height: 90px;
        border-right: 1px solid #fff;

        @media(max-width: 768px) {    
            margin-left: 10px;
            margin-right: 15px;
            height: 100px;
        }
    }

    .logos {
        margin-top: 50px;

        p {
            margin-bottom: 10px;
        }

        img {
            margin-right: 7px;
            width: 27px;

            @media(max-width: 768px) {    
                width: 15px;
                margin-right: 3px;
            }
        }
    }

    .patrocin {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 10%;

        img {
            width: 15%;
            margin-left: 15px;

            @media(max-width: 768px) {    
                width: 23%;
                margin-left: 10px;
            }
        }
    }
`

const SetaTop = styled.div`
    .to-top {
        position: fixed;
        width: 30px;
        text-align: center;
        right: 30px;
        bottom: 30px;
        z-index: 11;
        animation: action 1s infinite alternate;

        @keyframes action {
            0% {
              transform: translateY(0);
            }
            100% {
              transform: translateY(-15px);
            }
        }
    }
`