import styled from "styled-components";

import Back from "../../../../../public/images/gaz.jpg"


export const Wrapper = styled.div`
    width: 800px;
    height: 200px;
    justify-content:space-between;
    padding: 50px;
    display: flex;
    align-items: center;
    border-radius: 20px;
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.2);
`

export const ImageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
`

export const ImageText = styled.p`
    font-size: 24px;
    font-family: "Bebas Neue Regular";
`
export const ImageText2 = styled.p`
    font-size: 18px;
    font-family: "Bebas Neue Regular";
`
export const DescText = styled.p`
    font-size: 24px;
    font-family: "Bebas Neue Regular";
`

export const Text = styled.p`
    font-size: 12px;
    font-family: "Bebas Neue Bold";
    color: white;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
`
export const SubText = styled.p`
    font-size: 6px;
    font-family: "Bebas Neue Bold";
    color: gray;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    transition: 0.4s ease-in-out;
    
`

export const CardComp = styled.div`
    height: 150px;
    width: 150px;
    border-radius: 20px;
    display: flex;
    padding: 20px;
    justify-content: space-between;
    flex-direction: column;
    background-repeat: no-repeat;
    background: url(${Back?.src});
    background-size: cover;
    box-shadow: inset black 0px 60px 60px 0px;
    cursor: pointer;
    &:hover${SubText}{
        color: white;
    }
`

export const StarWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 7px;
`