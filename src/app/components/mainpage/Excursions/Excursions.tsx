"use client"

import ExcursionsBlock from "../ExcursionsBlock/ExcursionsBlock";
import Image from "next/image";
import Arrow from "../../../../../public/icons/Arrow.png"

import Link from "next/link";

import { ExcursionsHeader, ExcursionsMiddleWrapper,ExcursionsWrapper, 
  ExcursionsBottomWrapper, ExcursionsCircleWrapper, Circle, ExcursionsTextWrapper, 
  ExcursionsText } from "./ExcursionsStyle";
import { OrangeLine, TopTextStyle } from "../SmallComponents/ComponentsList";

const Excursions = () => {
  return (
    <ExcursionsWrapper>
      <ExcursionsHeader>
            <OrangeLine/>
            <TopTextStyle>Экскурсии</TopTextStyle>
        </ExcursionsHeader>
        <ExcursionsBottomWrapper>
          <ExcursionsMiddleWrapper>
                <Image
                src={Arrow}
                width={30}
                height={50}
                alt="Arrow"
                style={{
                  cursor: "pointer",
                }}
                />
                <ExcursionsBlock/>
                <Image
                src={Arrow}
                width={30}
                height={50}
                alt="Arrow"
                style={{
                  cursor: "pointer",
                  transform: "scale(-1, -1)"
                }}
                />
          </ExcursionsMiddleWrapper>
          <ExcursionsCircleWrapper>
            <Circle/>
            <Circle/>
            <Circle/>
          </ExcursionsCircleWrapper>
          <ExcursionsTextWrapper>
            <Link href={"/Excursions"}>
              <ExcursionsText>Посмотреть все экскурсии</ExcursionsText>
            </Link>
        </ExcursionsTextWrapper>
        </ExcursionsBottomWrapper>
    </ExcursionsWrapper>
  )
};

export default Excursions;
