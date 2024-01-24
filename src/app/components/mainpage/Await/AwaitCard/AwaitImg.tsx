"use client"

import { FC } from "react";

import Image from "next/image";

import { CardProps } from "../../Advantages/AdvantagesCard/advantages-card";

const AwaitImg: FC<CardProps> = ({image}) => {
  return (
    <div className="rectangle">
      <Image
        src={image}
        width={450}
        height={305}
        alt="Picture"
        style={{
            borderRadius:20,
        }}
      />
    </div>
  )
};

export default AwaitImg;
