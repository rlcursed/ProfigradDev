"use client"

import {RightSide, LeftSide, SmallText, FormInput ,FormGlobalWrapper, FormTextWrapper, FormTextHelp, FormTextWrite, FormWrapper, FormButton } from "./FormStyle";
import Image from "next/image";
import Factory from "../../../../../public/images/Factory.png"

import { Input, Button } from "@chakra-ui/react";

const FormComponent = () => {

  return (
    <FormGlobalWrapper>
      <LeftSide>
        <FormTextWrapper>
            <FormTextHelp>Нужна помощь?</FormTextHelp>
            <FormTextWrite>Напишите нам и мы ответим на любые вопросы</FormTextWrite>
        </FormTextWrapper>
            <FormWrapper >
                <Input 
                size="xs"
                placeholder="Имя"
                type="text" />
                <Input 
                size="xs"
                placeholder="+7(999) 999-99-99"
                type="number"/>
                <Input 
                size="xs"
                placeholder="Комментарий"
                type="text"/>
                <Button size="xs">Отправить</Button>
            </FormWrapper>
            <SmallText>нажимая на кнопку “отправить”, вы соглашаетесь на обработку персональных данных
в соответствии с политикой конфиденциальности</SmallText>
      </LeftSide>
      <RightSide>
        <Image
        width={480}
        height={503}
        alt="Factory"
        src={Factory}
        />
      </RightSide>
    </FormGlobalWrapper>
  )
};

export default FormComponent;
