import GlobalStyle from './globalStyles';
import Topo from './Topo';
import Footer from './Footer';
import styled from 'styled-components';
import Perguntas from './Perguntas';
import { useState } from 'react';



function App() {

    const [resultado, setResultado] = [];
    const [contador, setContador] = useState(0);
    const [arrayRespostas, setArrayRespostas] = [];

    return (
        <Conteudo>
            <GlobalStyle></GlobalStyle>
            <>
            <Topo />
            <Perguntas arrayRespostas={arrayRespostas} setArrayRespostas={setArrayRespostas} contador={contador} setContador={setContador}/>
            <Footer arrayRespostas={arrayRespostas} contador={contador}/>
            </>
        </Conteudo>
    )
}

const Conteudo = styled.div`
    width: 100%;
    height: 100%;
    margin: 0 auto;
    background-color: #fb6b6b;
    position: relative;
`

export default App;


