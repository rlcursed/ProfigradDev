import styled from "styled-components"

export const LeftSide = styled.div`
    display: flex;
    flex-direction: column;
    gap: 50px;
`
export const RightSide = styled.div`
    padding-right: 150px;
`

export const FormGlobalWrapper = styled.div`
    width: 100%;
    height: 100%;
    margin: 150px 0 0 0;
    display: flex;
    justify-content:space-between;
`

export const FormTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding-left: 150px;
`

export const FormTextHelp = styled.div`
    font-family: "Bebas Neue Regular";
    color: black;
    font-size: 90px;
`

export const FormTextWrite = styled.div`
    font-family: "Bebas Neue Regular";
    color: black;
    font-size: 40px;
`
export const FormWrapper = styled.form`
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding-left: 150px;
`

export const FormInput = styled.input`
    width: 500px;
    height: 60px;
    border-radius: 20px;
    border: 2px black solid;
    font-size: 15px;
    font-family: "Bebas neue Regular";
    padding-left: 20px;
`

export const FormButton = styled.button`
    background-color: #384453;
    border: none;
    color: white;
    font-family: "Bebas Neue Bold";
    font-size: 24px;
    width: 250px;
    height: 50px;
    border-radius: 10px;
    left: 0 ;
    cursor: pointer;
    transition: .4s ease-in-out;
    &:hover{
        background-color:white;
        border: 1px #384453 solid;
        color: #384453
}
`

export const SmallText = styled.p`
    font-family: "Bebas neue Regular";
    font-size: 14px;
    padding-left: 150px;
    width: 650px;
`