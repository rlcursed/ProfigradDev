'use client'

import React from "react"
import Image from "next/image";
import logo from "../../../../../public/logo.png"


import { MainWrapper, MainItem, MainText } from "./MainSectionStyle";


const MainSection = () => {
  return (
    <MainWrapper>
        <Image
        src={logo}
        alt="Logo"
        />
        <MainItem>
            <MainText>Город профессий</MainText>
        </MainItem>
    </MainWrapper>
  )
};

export default MainSection;
