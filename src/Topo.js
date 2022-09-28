import logo from "./assets/img/logo.png"
import styled from 'styled-components';

export default function Topo() {
    return (
        <Titulo>
           <div>  <img src={logo} alt="Logo Raio" />ZapRecall</div>
        </Titulo>
    )
}

const Titulo = styled.div`
    font-family: 'Righteous', cursive;
    font-size: 36px;
    background-color: #fb6b6b;
    display: flex;
    color: white;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    height: 100px;
    padding: 100px 0;
    margin: 0 auto;
    img {
        width: 52px;
        height: 60px;
        margin-right: 25px;
    }
    div {
        display: flex; 
        align-items: center;
        justify-content: space-around;
    }
`