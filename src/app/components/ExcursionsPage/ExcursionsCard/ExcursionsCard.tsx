import { FC } from "react";

import { CardProps } from "../../mainpage/Advantages/AdvantagesCard/advantages-card";

import { Wrapper, Text, SubText, Button } from "./ExcursionsCardStyle";

import Image from "next/image";

const Card: FC<CardProps> = ({title, description, image}) => {
  return (
    <Wrapper>
        <div>
        <Text>{title}</Text> 
        <SubText>{description}</SubText>
        </div>
        <Button>Подробнее</Button>
    </Wrapper>
  )
};

export default Card;
