"use client"

import { SchoolWrapper, MainText, SubText, ImageTextContainer } from "./SchoolStyle";
import Image from "next/image";
import Woman from "../../../../public/images/DevO4ka.jpg"

const School = () => {
  return (
    <SchoolWrapper>
      <MainText>Образовательным учреждениям города Нижнего Новгорода</MainText>
      <ImageTextContainer>
        <SubText>В Нижнем Новгороде стартует проект «ПрофиГрад» (Город профессий), который создан в рамках региональной многоуровневой системы профориентационной работы со школьниками. Основная цель проекта – создание системного подхода к профориентационной деятельности, повышение уровня заинтересованности и самоопределения учащихся в выборе будущей профессии с учетом перспективных потребностей развития реального сектора экономики региона, интеграция экскурсионных поездок школьников на промышленные предприятия в учебный процесс. И как следствие сохранение и развитие кадрового потенциала Нижегородской области.
        </SubText>
        <Image
          width={500}
          height={500}
          alt="Woman"
          src={Woman}
          style={{
            borderRadius: '20px',
          }}
        />
      </ImageTextContainer>
    </SchoolWrapper>
  )
};

export default School;
