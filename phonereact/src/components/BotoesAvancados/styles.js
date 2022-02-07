import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    span {
        border: 2px solid black;
        padding: 10px;
        background-color: rgba(255, 111, 111, 0.3);
        font-size: 1rem;
        margin: 2vh 1vh;
    }
    sup {
        font-size:0.6rem
    }

`
export const WrapperAll = styled.div`
    margin-top: 4vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    div{
        font-size: 0.8rem;
    }
`