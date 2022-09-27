import GlobalStyle from './globalStyles';
import Topo from './Topo';
import Footer from './Footer';
import styled from 'styled-components';
import Perguntas from './Perguntas';



function App() {
    return (
        <Conteudo>
            <GlobalStyle></GlobalStyle>
            <Topo />
            <Perguntas/>
            <Footer />
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


