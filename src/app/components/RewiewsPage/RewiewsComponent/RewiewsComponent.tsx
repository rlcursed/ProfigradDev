"use client"
import React from "react"

import Card from "../RewiewsCard/Card";

import { Wrapper,CardWrapper,FormWrapper } from "./RewiewsStyle";

import { Input, Button } from "@chakra-ui/react";

const RewiewsComponent = () => {
  return (
    <Wrapper>
      <CardWrapper>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </CardWrapper>
     <FormWrapper>
         <Input 
            size="xs"
            placeholder="Имя"
            type="text"
            
            />
         <Input 
            size="xs"
            placeholder="Школа"
            type="text"
            />
         <Input 
            size="xs"
            placeholder="Ваш отзыв"
            type="text"
            sx={{
              height:"200px",
              textAlign:"top",
            }}
            />
            

            <Button
            size="xs"
            sx={{
              width:"290px",
            }}
            >Отправить</Button>
     </FormWrapper>
    </Wrapper>
  )
};

export default RewiewsComponent;
