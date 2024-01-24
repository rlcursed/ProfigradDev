import styled from "styled-components";

import Back from "../../../../../public/images/nizhegorodskiy-kreml.jpeg"

export const MainWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-repeat: no-repeat;
    background: url(${Back?.src}) center center fixed;
    background-size: cover;
    width: 100%;
    height: 100vh;
    box-shadow: inset white 0px 250px 600px 50px;
`
export const MainItem = styled.div`
    background-color: #fd5e07;
    color:white;
    width: 6rem;
    height: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const MainText = styled.p`
    font-family: 'Bebas Neue Bold';
    font-size: 40px;
`