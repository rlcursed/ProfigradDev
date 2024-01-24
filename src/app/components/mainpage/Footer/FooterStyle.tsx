import styled from "styled-components";

export const FooterContainer = styled.div`
    display: flex;
    background-color: #fd5e07;
    height: 100px;
    width: 100%;
    margin-top: 50px;
    padding-top: 20px;
    justify-content: space-between;
`

export const FooterUl = styled.ul`
    list-style-type: none;
    display: flex;
    gap: 20px;
    padding-left: 150px;

`

export const FooterLi = styled.li`
    font-size: 24px;
    font-family: "Bebas Neue Bold";
    color: white;
    cursor: pointer;
    @media (min-width: 768px) and (max-width: 1050px){
        font-size: 12px;
    }
`

export const RightWrapper = styled.div`
    display: flex;
    align-items:center;
    gap: 20px;
    padding-right: 150px;
`

export const IconsWrapper = styled.div`
    display: flex;
    gap: 10px;
`

export const TopFooterContainer = styled.div`
    display: flex;
`

export const PhoneWrapper = styled.div`
    display: flex;
    flex-direction: column;
    @media (min-width: 768px) and (max-width: 1050px){
        font-size: 12px;
    }
`
export const PhoneText = styled.p`
    font-family: 'Bebas Neue Bold';
    font-size: 16px;
    color: white;
    @media (min-width: 768px) and (max-width: 1050px){
        font-size: 12px;
    }
`