import styled from "styled-components";

export const ExcursionsHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 50px;
`
export const ExcursionsMiddleWrapper = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: center;
    gap: 50px;
    align-items: center;
    margin-top: 3rem;
`
export const ExcursionsWrapper = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    height: 100%;
    margin: 150px 0 0 0;
`
export const ExcursionsBottomWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 50px;
`
export const ExcursionsCircleWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 5px;
`
export const Circle = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 25px;
    border: 3px #fd5e07 solid;
`

export const ExcursionsText = styled.div`
    font-family: "Bebas Neue Bold";
    font-size: 30px;
    text-align: center;
    color: white;
    
`
export const ExcursionsTextWrapper = styled.div`
    width: 350px;
    height: 50px;
    border-radius: 20px;
    background-color: #fd5e07;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: 0.5s ease-in-out;
    &:hover{
        width: 355px;
        height: 52px;
        background-color: white;
        color: black;
    }
    &:hover ${ExcursionsText}{
        font-size: 31px;
        color: #fd5e07;
    }
`