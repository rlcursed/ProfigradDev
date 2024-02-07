import styled from "styled-components";

import Back from "../../../../../public/images/gaz.jpg"

export const Button = styled.button`
    background-color: #fd5e07;
    color: #fff;
    border-radius: 20px;
    font-family: "Bebas Neue Bold";
    font-size: 22px;
    opacity: 0;
    cursor: pointer;
    transition: all 0.2s ease-in;
`


export const Text = styled.p`
    transition: all 0.2s ease-in;
    font-size: 22px;
    color: white;
    font-family: "Bebas Neue Bold";
`
export const SubText = styled.p`
    transition: all 0.2s ease-in;
    font-size: 14px;
    font-family: "Bebas Neue Bold";
    color: gray;
`

export const Wrapper = styled.div`
    height: 300px;
    width: 300px;
    border-radius: 20px;
    display: flex;
    padding: 20px;
    justify-content: space-between;
    flex-direction: column;
    background-repeat: no-repeat;
    background: url(${Back?.src});
    background-size: cover;
    box-shadow: inset black 0px 90px 120px 50px;
    &:hover{
        ${Button}{
            opacity: 1;
        }
    }
    &:hover{
        ${Text}{
            font-size: 24px;
            font-family: "Bebas Neue Bold";
            color: white;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
        }
    }
    &:hover{
        ${SubText}{
            font-size: 14px;
            font-family: "Bebas Neue Bold";
            color: gray;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
        }
    }
`