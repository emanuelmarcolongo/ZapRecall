import logo from "./assets/img/logo.png"
import styled from 'styled-components';

export default function Topo() {
    return (
        <Titulo>
            <img src={logo} alt="Logo Raio" />
            <p>ZapRecall</p>
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
    width: 375px;
    height: 100px;
    img {
        width: 52px;
        height: 60px;
    }
`