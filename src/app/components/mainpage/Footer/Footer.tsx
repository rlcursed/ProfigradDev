"use client"

import { PhoneText ,PhoneWrapper, FooterContainer, FooterUl, FooterLi, RightWrapper, IconsWrapper } from "./FooterStyle";

import Telegram from "../../../../../public/icons/Telegram.svg"
import Vk from "../../../../../public/icons/vk.svg"
import Mail from "../../../../../public/icons/Mail.svg"


import Image from "next/image";

const Footer = () => {
  return (
    <FooterContainer id="someid">
        <FooterUl>
          <FooterLi>Главная</FooterLi>
          <FooterLi>О проекте</FooterLi>
          <FooterLi>Список экскурсий</FooterLi>
          <FooterLi>для школ</FooterLi>
          <FooterLi>Новости</FooterLi>
          <FooterLi>Отзывы</FooterLi>
        </FooterUl>
        <RightWrapper>
          <IconsWrapper>
            <Image
              width={20}
              height={20}
              alt="Tg"
              src={Telegram}
              style={{
                cursor: 'pointer'
              }}
            />
            <Image
              width={25}
              height={25}
              alt="Vk"
              src={Vk}
              style={{
                cursor: 'pointer'
              }}
            />
            <Image
              width={25}
              height={25}
              alt="Mail"
              src={Mail}
              style={{
                cursor: 'pointer'
              }}
            />
          </IconsWrapper>
          <PhoneWrapper>
            <PhoneText>Елена +7(999) 999 99 99</PhoneText>
            <PhoneText>Ольга +7(999) 999 99 99</PhoneText>
          </PhoneWrapper>
        </RightWrapper>
    </FooterContainer>
  )
};

export default Footer;
