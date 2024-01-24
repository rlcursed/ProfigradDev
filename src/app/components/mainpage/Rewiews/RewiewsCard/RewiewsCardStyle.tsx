import styled from "styled-components";

export const RewiewsCardBlock = styled.div`
    display: flex;
    justify-content:center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    box-shadow: 4px 4px 21px 0px rgba(34, 60, 80, 0.14);
    border-radius: 20px;
    width: 330px;
    height: 330px;
    transition: 0.4s ease-in-out;
    cursor: pointer;
    &:hover{
        transform: scale(1.1)
    }
`

export const TextName = styled.p`
    font-family: "Bebas Neue Regular";
    color: #fd5e07;
`
export const TextSchool = styled.p`
    font-family: "Bebas Neue Regular";
    color: #fd5e07;
    font-size: 24px;
`

export const MainText = styled.p`
    font-family: "Bebas Neue Regular";
    color: black;
    font-size: 20px;
    width: 300px;
    text-align: center;
`

export const StarWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 15px;
`