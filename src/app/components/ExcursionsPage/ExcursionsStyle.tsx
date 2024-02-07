import styled from "styled-components";

export const Wrapper = styled.div`
    display: grid;
    flex-direction: row;
    padding-top: 2rem;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
`

export const TopWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 100px;
`

export const AdvWrapper = styled.div`
    margin: 50px 0 0 0;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`

export const Text = styled.h1`
    font-size: 74px;
    font-family: "Bebas Neue Bold";
`
export const SubText = styled.p`
    font-size: 24px;
    font-family: "Bebas Neue Regular";
`

export const TextWrapper = styled.div`
    width: 100%;
    margin-top: 100px;
    margin-left: 650px;
`