import styled from 'styled-components';


function Footer() {
    return (
        <ContainerFooter>
            <Botoes>
                {/* <NaoLembrei>Não Lembrei</NaoLembrei>
                <QuaseNaoLembrei>Quase não lembrei</QuaseNaoLembrei>
                <Lembrei>Zap!</Lembrei> */}
            </Botoes>

            <p>0/4 CONCLUÍDOS</p>
        </ContainerFooter>

    )
}

export default Footer;

const ContainerFooter = styled.div`
    width: 100%;
    height: 70px;
    border: 3px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    position: fixed;
    bottom: 0;
    background-color: white;
`

const Botoes = styled.div`
    width: 375px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    color: white;
    font-size: 12px;
    button {
        border: none;
        color: white;
        width: 86px;
    height: 38px;
    border-radius: 5px;
    }

`

const NaoLembrei = styled.button`
    background-color: #ff3030;
`

const QuaseNaoLembrei = styled.button`
    background-color: #ff922e;

`

const Lembrei = styled.button`
    background-color: #2fbe34;
`

