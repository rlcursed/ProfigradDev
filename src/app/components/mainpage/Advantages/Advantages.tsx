"use client"

import Wallet from "../../../../../public/icons/Wallet.svg"
import Factory from "../../../../../public/icons/Factory.svg"
import Truck from "../../../../../public/icons/Truck.svg"
import Calendar from "../../../../../public/icons/Calendar.svg"
import Worker from "../../../../../public/icons/Worker.svg"

import Button from "../SmallComponents/Button/Button"

import { OrangeLine, TopTextStyle } from "../SmallComponents/ComponentsList"
import { AdvRectangle, AdvWrapper, AdvMiddleWrapper,AdvHeader } from "./AdvantagesStyle"

import AdvantagesCard from "./AdvantagesCard/advantages-card"

const Advantages = () => {
  return (
    <AdvWrapper>
      <AdvHeader>
                <OrangeLine/>
                <TopTextStyle>Наши преимущества</TopTextStyle>
            </AdvHeader>
        <AdvMiddleWrapper>
            <AdvantagesCard
              image={Calendar}
              description={"Абонемент рассчитан на учебный или календарный год для класса"}
            />
            <AdvantagesCard
            image={Factory}
              description={"Большой выбор экскурсий"}
            />
            <AdvantagesCard
            image={Truck}
              description={"В обонемент входят 3 экскурсии"}
            />
            <AdvantagesCard
            image={Worker}
              description={"Спец.одежда на предприятии"}
            />
            <AdvantagesCard
            image={Wallet}
              description={"Стоимость абонемента 1700 руб. с человека"}
            />
            <AdvRectangle>
              <Button title={'Забронировать'}></Button>
            </AdvRectangle>
        </AdvMiddleWrapper>
    </AdvWrapper>
  )
};

export default Advantages;
