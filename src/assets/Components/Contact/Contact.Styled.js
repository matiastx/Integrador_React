import styled from "styled-components";

export const ContactContainer = styled.section`
    display: flex;
    flex-direction: column;
    max-width: 1200px;
    margin: 20px auto;
    
    border-radius: 20px;
    padding: 20px;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: var(--GrisClaro);
    flex-direction: column;
    gap: 25px;
    box-shadow: 0px 3px 10px 0px var(--Gris2);
    -webkit-box-shadow: 0px 3px 10px 0px var(--Gris2);

    & h2 {
        text-align: center;
        font-size: 40px;
        font-weight: 700;
        color: var(--CelesteClaro);
    }

    & p {
        text-align: justify;
        font-size: 25px;
        font-weight: 600;
        color: var(--AzulOscuro);
        text-align: center;
    }

`

export const ContactForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    font-family: "Quicksand", sans-serif;
    color: var(--AzulClaro);
    font-size: 25px;
    font-weight: 700;
    width: 100%;

    & label {
        display: flex;
        justify-content: flex-start
        cursor: default;
    }

    & input, textarea {
        border-radius: 15px;
        font-size: 20px;
        padding: 5px 10px;
        color: var(--Gris);
        font-weight: 600;
        border: none;
    }
`