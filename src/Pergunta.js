import { useState } from 'react';
import styled from 'styled-components';
import play from "./assets/img/play-outline-icon.svg"
import check from "./assets/img/verde.png"
import questionmark from "./assets/img/laranja.png"
import cross from "./assets/img/vermelho.png"
import virar from "./assets/img/setinha.png"

let contador1 = 0;
const arrayRespostas1 = [];
export default function Pergunta({ pergunta, index, setContador, contador, arrayRespostas, setArrayRespostas }) {

    const [card, setCard] = useState(false)
    const [question, setQuestion] = useState(true)
    const [answer, setAnswer] = useState(true)
    const [cor, setCor] = useState("")

    function clickCard() {
        setCard(true);
        setQuestion(false);
    }

    function clickQuestion() {
        setQuestion(true);
        setAnswer(false)
    }

    function darResposta(parametro, index) {
        if (parametro === "vermelho") {
            setCor("#FF3030")
            arrayRespostas1[index] = (parametro)
        } else if (parametro === "laranja") {
            setCor("#FF922E")
            arrayRespostas1[index] = (parametro)
        } else if (parametro === "verde") {
            setCor("#2FBE34")
            arrayRespostas1[index] = (parametro)
        }

        setArrayRespostas(arrayRespostas1);
        contador1++;
        setContador(contador1)
        setAnswer(true);
        setCard(false);
    }

    return (
        <ConteinerCard data-identifier="flashcard">
            <Card  data-identifier="flashcard-show-btn" cor={cor} card={card} onClick={() => clickCard()} > Flashcard {index + 1}
                {(cor === "") ? <img src={play} /> : (cor === "#FF3030") ? <img data-identifier="flashcard-status" src={cross} />
                    : (cor === "#FF922E") ? <img data-identifier="flashcard-status" src={questionmark} />
                        : (cor === "#2FBE34") ? <img data-identifier="flashcard-status" src={check} /> : ""}
            </Card>
            <Question data-identifier="flashcard-question" question={question}>
                {pergunta.pergunta}
                <img data-identifier="flashcard-show-btn" onClick={() => clickQuestion()} src={virar} />

            </Question>
            <Answer data-identifier="flashcard-answer" answer={answer}>
                {pergunta.resposta}
                <Botoes>
                    <NaoLembrei data-identifier="forgot-btn" onClick={() => darResposta("vermelho", index)} >Não Lembrei</NaoLembrei>
                    <QuaseNaoLembrei data-identifier="almost-forgot-btn" onClick={() => darResposta("laranja", index)}>Quase não lembrei</QuaseNaoLembrei>
                    <Lembrei data-identifier="zap-btn" onClick={() => darResposta("verde", index)}>Zap !</Lembrei>
                </Botoes>
            </Answer>
        </ConteinerCard>
    )
}

const ConteinerCard = styled.div`
    margin: 0 auto;
    width: 300px;
    margin-bottom: 15px;
    font-family: 'Recursive', sans-serif;
    font-weight: 700;

`
const Card = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 65px;
    width: 300px;
    background-color: white;
    border-radius: 5px;
    display: ${props => props.card ? "none" : ""};
    color: ${props => (props.cor === "") ? "black" : props.cor};
    text-decoration: ${props => (props.cor === "") ? "none" : "line-through"};
    pointer-events: ${props => (props.cor === "") ? "" : "none"};
    img {
        width: 20px;
        height: 23px;
        margin-left: 70px;
    }

`
const Question = styled.div`
    width: 300px;
    height: 131px;
    background-color: #ffffd4;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    display: ${props => props.question ? "none" : ""};
    img {
        position: absolute;
        bottom: 10px;
        right: 10px;
    }

`
const Answer = styled.div`
    width: 300px;
    height: 131px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: space-around;
    display: ${props => props.answer ? "none" : ""};
    background-color: #FFFFD4;
`
const Botoes = styled.div`
    width: 300px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    color: white;
    font-size: 12px;
    button {
        border: none;
        color: white;
        width: 70px;
        height: 38px;
        border-radius: 5px; }
`
const NaoLembrei = styled.button`
    background-color: #ff3030;
`
const QuaseNaoLembrei = styled.button`
    background-color: #ff922e;
    width: 85px;
    font-size: 11px;
`
const Lembrei = styled.button`
    background-color: #2fbe34;
`