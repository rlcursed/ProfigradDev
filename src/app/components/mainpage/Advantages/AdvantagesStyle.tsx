import styled from "styled-components";

export const AdvRectangle = styled.div`
    height: 300px;
    width: 300px;
    border-radius: 20px;
    border: 1px #fd5e07 solid;
    display: flex;
    justify-content: center;
    align-items: center;
    display: flex;
`
export const AdvWrapper = styled.div`
    width: 100%;
    height: 100%;
    margin: 150px 0 0 0;
`
export const AdvMiddleWrapper = styled.div`
    display: grid;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding-top: 2rem;
    grid:repeat(2, 320px) / auto-flow 320px;
`
export const AdvHeader = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    flex-direction: row;
    gap: 50px;
`
