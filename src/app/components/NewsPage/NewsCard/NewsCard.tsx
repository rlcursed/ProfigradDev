import {ClassicWrapper, Wrapper, ImageWrapper, ImageText, DescText, RightWrapper, DateText, DescText2 } from "./NewsCardStyle";
import Image from "next/image";
import Test from "../../../../../public/images/reasonsStudy.jpg"

const NewsCard = () => {
  return (
    <Wrapper>
      <RightWrapper>
        <ClassicWrapper>
          <DateText>Нижегородский автомобильный завод</DateText>
          <ImageText>Вместе со школой 14 посетили нижегородский автозавод</ImageText>
        </ClassicWrapper>
        <DescText>Большое описания очень крутой экскурсии, вот с ребятками скатались, все супер все молотцы</DescText>
        <DescText2>14.01.2024</DescText2>
      </RightWrapper>
      <ImageWrapper>
      <Image
      width={250}
      height={250}
      src={Test}
      alt="image"
      style={{
        borderRadius: "20px",
      }}
      />
      
      </ImageWrapper>
      
    </Wrapper>
  )
};

export default NewsCard;
