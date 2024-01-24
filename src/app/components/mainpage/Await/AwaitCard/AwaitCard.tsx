"use client"

import { FC } from "react";

import { Circle, CardWrapper, CircleText, CircleDescription } from "./AwaitCardStyle";

import { CardProps } from "../../Advantages/AdvantagesCard/advantages-card";

const AwaitCard: FC<CardProps> = ({title, description}) => {
  return (
    <CardWrapper>
      <Circle>
        <CircleText>{title}</CircleText>
      </Circle>
      <CircleDescription>{description}</CircleDescription>
    </CardWrapper>
  )
};

export default AwaitCard;
