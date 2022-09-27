import GlobalStyle from './globalStyles';
import Topo from './Topo';
import Bottom from './Bottom';
import styled from 'styled-components';
import Perguntas from './Perguntas';



function App() {
    return (
        <Conteudo>
            <GlobalStyle></GlobalStyle>
            <Topo />
            <Perguntas/>
            <Bottom />
        </Conteudo>
    )
}

const Conteudo = styled.div`
    width: 375px;
    height: 100vh;
    background-color: #fb6b6b;
    position: relative;
`

export default App;


