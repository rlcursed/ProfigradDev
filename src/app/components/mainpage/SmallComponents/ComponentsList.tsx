import styled from "styled-components";

// КАТЕГОРИЯ: Контейнеры для страниц

// Верхняя часть страницы слева

export const TopWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    flex-direction: row;
    gap: 50px;
`

// Основной контейнер страницы

export const GlobalWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    margin: 150px 0 0 0;
`

// Средний Контейнер

export const MiddleWrapper = styled.div`
    
`

// КАТЕГОРИЯ: Обертки текста

export const TopTextStyle = styled.p`
    font-family: 'Bebas Neue Regular';
    font-size: 30px;
`

// КАТЕГОРИЯ: Элементы страницы

export const OrangeLine = styled.div`
    display: block;
    background-color: #fd5e07;
    width: 100px;
    height: 5px;
`