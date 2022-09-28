import styled from 'styled-components';
import play from "./assets/img/play-outline-icon.svg"
import check from "./assets/img/verde.png"
import questionmark from "./assets/img/laranja.png"
import cross from "./assets/img/vermelho.png"


function Footer({ contador, arrayRespostas }) {

    const array= ["vermelho", "vermelho", "verde", "vermelho", "laranja", "verde", "vermelho", "laranja"]

    return (
        <ContainerFooter>
            <p>{contador} / 8 CONCLUÍDOS</p>
            <IconeResposta>
                {arrayRespostas.map((item, i) =>
                    (item === "undefined") ? "" : (item === "vermelho") ? <img key={i} src={cross} />
                        : (item === "laranja") ? <img key={i} src={questionmark} /> : (item === "verde") ? <img key={i} src={check} /> : ""
                )}
            </IconeResposta>
        </ContainerFooter>
    )
}

export default Footer;

const ContainerFooter = styled.div`
    width: 100%;
    height: 70px;
    border: 1px solid gray;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    position: fixed;
    bottom: 0;
    background-color: white;
    font-family: 'Recursive', sans-serif;
    img {
        width: 20px;
        height: 23px;
        margin-left: 7px;
    }
`
const IconeResposta = styled.div`
display: flex;
`

