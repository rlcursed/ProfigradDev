import styled from "styled-components";

export const BlockWrapper = styled.div`
    height: 600px;
    width: 1000px;
    background-color: black;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 40px;
`
export const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`
export const TextH = styled.h2`
    font-family: "Bebas Neue Regular";
    color: white;
    font-size: 70px;
    width: 100%;
`
export const TextP = styled.p`
    font-family: "Bebas Neue Regular";
    color: gray;
    font-size: 20px;
`
export const ButtonWrapper = styled.div`
    display: flex;
    gap: 20px;
    position: relative;
`
export const BlockButton = styled.button`
    border: none;
    background-color: rgba(0, 125, 215, 0);
    border: 1px #fd5e07 solid;
    color: white;
    font-family: "Bebas Neue Bold";
    font-size: 24px;
    width: 200px;
    height: 50px;
    border-radius: 10px;
    left: 0 ;
    cursor: pointer;
    transition: .4s ease-in-out;
`