import React from "react"

import Image from "next/image";

import Star from "../../../../../public/icons/Star.svg"

import { StarWrapper ,CardComp, Wrapper, ImageWrapper, ImageText, DescText, ImageText2, Text, SubText } from "./CardStyle";

const Card = () => {
  return (
    <Wrapper>
      <ImageWrapper>
        
      <ImageText>Михаил</ImageText>
      
      <ImageText2>Шк.14</ImageText2>
      <StarWrapper>
        <Image
            src={Star}
            width={15}
            height={15}
            alt="star"
              />
        <Image
            src={Star}
            width={15}
            height={15}
            alt="star"
              />
        <Image
            src={Star}
            width={15}
            height={15}
            alt="star"
              />
        <Image
            src={Star}
            width={15}
            height={15}
            alt="star"
              />
        <Image
            src={Star}
            width={15}
            height={15}
            alt="star"
              />
      </StarWrapper>
      
      <DescText>Экскурсия топ! Были вообще везде, даже на заводе</DescText>
      
      </ImageWrapper>
      <CardComp>
        <div>
        <Text>Нижегородский автомобильный завод</Text> 
        <SubText>Описания про экскурсию</SubText>
        </div>
    </CardComp>
    </Wrapper>
  )
};

export default Card;
