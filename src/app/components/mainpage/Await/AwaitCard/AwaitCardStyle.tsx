import styled from "styled-components";


export const Circle = styled.div`
    width: 250px;
    height: 250px;
    border-radius: 50%;
    border: 3px #fd5e07 solid;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.4s ease-in-out;
`

export const CircleText = styled.h3`
    font-family: "Bebas Neue Bold";
    color: #fd5e07;
    width: 180px;
    height: 100px;
    display:flex;
    align-items: center;
    text-align:center;
    font-size: 42px;
`

export const CircleDescription = styled.p`
    font-family: "Bebas Neue Bold";
    color: black;
    font-size: 22px;
    width: 380px;
    height: 100px;
    text-align:center;
`

export const CardWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    cursor: pointer;
    width:450px;
    height:355px;
    
    &:hover ${Circle}{
        background-color: #fd5e07;
    }
    &:hover ${CircleText} {
        color: white;
    }
`