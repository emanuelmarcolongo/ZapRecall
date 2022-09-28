import GlobalStyle from './globalStyles';
import Topo from './Topo';
import Footer from './Footer';
import styled from 'styled-components';
import Perguntas from './Perguntas';
import { useState } from 'react';
import BoasVindas from './BoasVindas.js';



function App() {

    const [contador, setContador] = useState(0);
    const [arrayRespostas, setArrayRespostas] = useState([]);
    const [visibilidadeConteudo, setVisibilidadeConteudo] = useState ("none")

    return (
        <>
            <BoasVindas visibilidadeConteudo={visibilidadeConteudo} setVisibilidadeConteudo={setVisibilidadeConteudo}></BoasVindas>
            <Conteudo visibilidadeConteudo={visibilidadeConteudo}>
                <GlobalStyle></GlobalStyle>

                <Topo />
                <Perguntas arrayRespostas={arrayRespostas} setArrayRespostas={setArrayRespostas} contador={contador} setContador={setContador} />
                <Footer arrayRespostas={arrayRespostas} contador={contador} />

            </Conteudo>
        </>
    )
}

const Conteudo = styled.div`
    width: 100%;
    height: 100%;
    margin: 0 auto;
    background-color: #fb6b6b;
    position: relative;
    display: ${props => props.visibilidadeConteudo}
    `

export default App;


