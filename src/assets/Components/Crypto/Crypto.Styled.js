import styled from "styled-components";

export const CryptoContainer = styled.section`
    display: flex;
    flex-direction: column;
    max-width: 1200px;
    margin: 20px auto;
    border-radius: 20px;
    padding: 20px;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: var(--CelesteClaro);
    width: 100%;
    box-shadow: 0px 3px 10px 0px var(--Gris2);
    -webkit-box-shadow: 0px 3px 10px 0px var(--Gris2);
    gap: 35px;

    & h2 {
        color: var(--Blanco);
        text-align: center;
        font-size: 40px;
        font-weight: 700;
    }
`

export const CardsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: center;
    align-items: center;
    gap: 10px;
`

export const CryptoCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 380px;
    width: 260px;
    border-radius: 30px;
    background-color: var(--bgprimario);
    padding: 10px 10px;
    gap: 15px;
    transition: all ease-in-out 0.3s;

    & img {
        height: 75px;
        margin-left: 15px;
    }
`

export const CryptoCardTop = styled.div`
    display: flex;
    justify-content: center;
    gap: 10px;
`

export const CryptoCardTitle = styled.div`
    display: flex;
    flex-direction: column;
    width: 150px;
    justify-content: center;
    align-items: center;
    gap: 5px;
    
    & h2 {
        color: var(--Celeste);
        font-family: "Quicksand", sans-serif;
        font-weight: 700;
        width: 140px;
        text-align: center;
        font-size: 30px;
    }
`

export const CryptoCardBottom = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    text-align: center;
    justify-content: center;
    color: var(--Gris2);
    font-weight: 800;
    font-size: 20px;

    & h2 {
        color: #07122b;
        font-size: 30px;
    }
`

export const CryptoCardBtnContainer = styled.button`
display: flex;
align-items: center;
justify-content: center;
border: none
`