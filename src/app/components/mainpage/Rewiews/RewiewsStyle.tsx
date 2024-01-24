import styled from "styled-components";

export const RewiewsGlobalWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    margin: 150px 0 0 0;
    gap: 50px;
`

export const RewiewsMiddleWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding-top: 1rem;
    gap: 40px;
`

export const TopTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding-left: 150px;
    gap:50px;
`
export const TopTextTitle = styled.div`
    font-family: "Bebas Neue Regular";
    color: rgb(249, 141, 17, 0.5);
    width: 1200px;
    height: 100px;
    font-size: 100px;
`
export const TopTextSubtitle = styled.div`
    font-family: "Bebas Neue Regular";
    color: black;
    width: 1200px;
    font-size: 50px;
`

export const RewiewsWrapper = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: center;
    gap: 50px;
    align-items: center;
    margin-top: 1rem;
`

export const RewiewsCircleWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 5px;
`

export const RewiewsCircle = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 25px;
    border: 3px #fd5e07 solid;
`