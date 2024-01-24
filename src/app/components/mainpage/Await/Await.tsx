"use client"

import Stadium from "../../../../../public/images/reasonsStadium.jpg"
import Ship from "../../../../../public/images/reasonsVodohod.png"
import Study from "../../../../../public/images/reasonsStudy.jpg"

import AwaitImg from "./AwaitCard/AwaitImg";
import AwaitCard from "./AwaitCard/AwaitCard";
import { TopWrapper, TopTextStyle, GlobalWrapper, OrangeLine } from "../SmallComponents/ComponentsList";
import { AwaitMiddleWrapper } from "./AwaitStyle";

const Await = () => {
  return (
    <GlobalWrapper>
        <TopWrapper>    
            <OrangeLine/>
            <TopTextStyle>Вас ждет</TopTextStyle>
        </TopWrapper>
        <AwaitMiddleWrapper>
            <AwaitCard
            title="новые навыки"
            description="проект предусматривает интересные мастер-классы и тренинги"
            />
            <AwaitImg
            image={Stadium}
            />
            <AwaitImg
            image={Study}
            />
            <AwaitCard
            title="новые знания"
            description=" Проект предлагает увлекательные
            экскурсии  на промышленные предприятия
            нижнего новгорода и области с учетом 
            уровня развития, образования,
            и проявления интересов"
            />
            <AwaitCard
            title="насыщенная программа"
            description=" наши партнеры - более 50 предприятий Нижего-
            родского региона разных отраслей и сфер деятельности.
            более 1000 профессий"
            />
            <AwaitImg
            image={Ship}
            />
        </AwaitMiddleWrapper>
    </GlobalWrapper>
  )
};

export default Await;
