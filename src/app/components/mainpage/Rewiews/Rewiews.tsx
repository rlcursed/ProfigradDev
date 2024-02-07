"use client"

import { GlobalWrapper, TopWrapper, OrangeLine, TopTextStyle } from "../SmallComponents/ComponentsList";
import Button from "../SmallComponents/Button/Button";
import { RewiewsGlobalWrapper ,RewiewsCircleWrapper,RewiewsCircle,TopTextWrapper, TopTextTitle, TopTextSubtitle, RewiewsMiddleWrapper, RewiewsWrapper} from "./RewiewsStyle";
import RewiewsCard from "./RewiewsCard/RewiewsCard";
import Image from "next/image";

import Link from "next/link";

import Arrow from "../../../../../public/icons/Arrow.png"

const Rewiews = () => {
  return (
    <RewiewsGlobalWrapper>
      <TopWrapper>
        <OrangeLine/>
        <TopTextStyle>Отзывы Клиентов</TopTextStyle>
      </TopWrapper>
      <TopTextWrapper>
        <div>
        <TopTextTitle>Уже были на экскурсии?</TopTextTitle>
        <TopTextSubtitle>Поделитесь впечатлениями</TopTextSubtitle>
        </div>
        <Link href={"/Rewiews"}>
        <Button title="Поделиться"></Button>
        </Link>
      </TopTextWrapper>
      <RewiewsMiddleWrapper>
        <Image
                    src={Arrow}
                    width={30}
                    height={50}
                    alt="Arrow"
                    style={{
                    cursor: "pointer",
                    }}
                    />
        <RewiewsWrapper>
            <RewiewsCard/>
            <RewiewsCard/>
            <RewiewsCard/>
        </RewiewsWrapper>
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
      </RewiewsMiddleWrapper>
      <RewiewsCircleWrapper>
        <RewiewsCircle/>
        <RewiewsCircle/>
        <RewiewsCircle/>
      </RewiewsCircleWrapper>
    </RewiewsGlobalWrapper>
  )
};

export default Rewiews;
