import styled from 'styled-components';
import Pergunta from './Pergunta';


const perguntas =
    [{ pergunta: "O que é JSX?", resposta: "Uma extensão de linguagem do JavaScript" },
    { pergunta: "O React é __ ", resposta: "uma biblioteca JavaScript para construção de interfaces" },
    { pergunta: "Componentes devem iniciar com __", resposta: "letra maíuscula" },
    { pergunta: "Podemos colocar __ dentro do JSX", resposta: "expressões" },
    { pergunta: "O ReactDOM nos ajuda __", resposta: " interagindo com a DOM para colocar componentes React na mesma" },
    { pergunta: "Usamos o npm para __", resposta: "gerenciar os pacotes necessários e suas dependências" },
    { pergunta: " Usamos props para __", resposta: "passar diferentes informações para componentes " },
    { pergunta: "Usamos estado (state) para __", resposta: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente" },
    ]

function Perguntas({setContador, contador, arrayRespostas, setArrayRespostas}) {
    return (
        <ContainerPerguntas>
            {perguntas.map((item, i) =>  <Pergunta arrayRespostas={arrayRespostas} setArrayRespostas={setArrayRespostas} contador={contador} setContador={setContador} key={i} pergunta={item} index={i}/> )}     
        </ContainerPerguntas>
    )
}
export default Perguntas;


const ContainerPerguntas = styled.div`
    width: 100%;
    height: 100%;
    background-color: #fb6b6b;
    min-height: 100vh;
    margin: 30px auto 71px;
    padding-bottom: 70px;

`

