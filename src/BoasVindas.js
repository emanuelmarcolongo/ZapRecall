import styled from 'styled-components';
import logo from "./assets/img/logo.png"

export default function BoasVindas ({visibilidadeConteudo, setVisibilidadeConteudo}) {

    return (
        <TelaInicial visibilidadeConteudo={visibilidadeConteudo}>
            <img src={logo} />
            <p>ZapRecall</p>
            <button data-identifier="start-btn" onClick={() => setVisibilidadeConteudo("")}>Iniciar Recall!!!</button>
        </TelaInicial>
    )

}


const TelaInicial = styled.div`
    width: 100%;
    height: 100vh;
    margin: 0 auto;
    background-color: #FB6B6B;
    display: flex; 
    flex-direction: column;
    align-items: center;
    justify-content: center;
    display: ${props => (props.visibilidadeConteudo === "none") ? "" : "none"};
    img {
        width: 136px;
        height: 161px;
        margin-bottom: 43px;
    }
    p {
        font-family: 'Righteous', cursive;
        margin-bottom: 30px;
        font-size: 36px;
        color: white;
    }
    button {
        font-family: 'Recursive', sans-serif;
        font-size: 18px;
        width: 246px;
        height: 54px;
        color: #D70900;
    }
`
