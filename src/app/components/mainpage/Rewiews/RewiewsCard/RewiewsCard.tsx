"use client"

import { TextName, RewiewsCardBlock, TextSchool, StarWrapper, MainText } from "./RewiewsCardStyle";

import Star from "../../../../../../public/icons/Star.svg"

import Image from "next/image";

const RewiewsCard = () => {
  return (
    <RewiewsCardBlock>
        <TextName>Михаил</TextName>
        <TextSchool>ШК.1</TextSchool>
        <StarWrapper>
            <Image
                src={Star}
                width={35}
                height={35}
                alt="star"
            />
            <Image
                src={Star}
                width={35}
                height={35}
                alt="star"
            />
            <Image
                src={Star}
                width={35}
                height={35}
                alt="star"
            />
            <Image
                src={Star}
                width={35}
                height={35}
                alt="star"
            />
            <Image
                src={Star}
                width={35}
                height={35}
                alt="star"
            />
        </StarWrapper>
        <MainText>Хорошая экскурсия на завод газ, -1 звезда за то, что газель уже 20 лет
            одна и та же
        </MainText>
    </RewiewsCardBlock>
  )
};

export default RewiewsCard;
