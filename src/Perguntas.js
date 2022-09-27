import styled from 'styled-components';
import play from "./assets/img/play-outline-icon.svg"

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

function Perguntas() {
    return (
        <ContainerPerguntas>
            {perguntas.map((p, i) =>
                <Card>
                    <div key={i} className="card">Pergunta {i + 1}</div>
                    {/* <div className="question">{p.pergunta}</div>
                    <div className="answer">{p.resposta}</div> */}
                    <img src={play} />

                </Card>)}
        </ContainerPerguntas>
    )
}
export default Perguntas;


const ContainerPerguntas = styled.div`
    width: 100%;
    height: 100%;
    background-color: #fb6b6b;
    min-height: 100vh;
    margin: 30px auto 70px;

`

const Card = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 0 auto;
    margin-bottom: 15px;
    height: 65px;
    background-color: white;
    border-radius: 5px;
    width: 300px;    
 

    img {
        width: 20px;
        height: 23px;
    }
    div {

    }
`

