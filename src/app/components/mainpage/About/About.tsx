'use client'

import Button from '../SmallComponents/Button/Button';

import Link from 'next/link';

import { AboutWrapper, AboutHeader, AboutHeaderText, AboutHeaderLeft,AboutLineBold,
AboutWrapperCenter, AboutTextWrapper, AboutTextTop,AboutTextTitle, AboutTextSubTitle,
AboutLineCenter, AboutLitleText} from './AboutStyle';

import { OrangeLine } from '../SmallComponents/ComponentsList';

const About = () => {
  return (
    <AboutWrapper>
        <AboutHeader>
                <AboutHeaderLeft>
                    <OrangeLine/>
                    <AboutHeaderText>О проекте</AboutHeaderText>
                </AboutHeaderLeft>
                <AboutLineBold/>
            </AboutHeader>
        <AboutWrapperCenter>
            <AboutTextWrapper> 
                <AboutTextTop>
                    <AboutTextTitle>Образовательный проект профиград - город профессий</AboutTextTitle>
                    <AboutTextSubTitle>увлекательные экскурсии для учеников 1-11 классов на промышленные предпиятия города и области</AboutTextSubTitle>
                </AboutTextTop>
                <AboutLineCenter/>
                <AboutLitleText>Мы готовы продемонстрировать порядка 1000 профессий! Вполне возможно, что среди них ваш ребенок найдёт
                    что-то для себя. а если нет, в любом случае расширит свой кругозор и узнает много нового и интересного в мире
                    профессий!
                </AboutLitleText>
                <Link href={"/About"}>
                    <Button title='Подробнее'></Button>
                </Link>
                
            </AboutTextWrapper>
        </AboutWrapperCenter>
    </AboutWrapper>
  )
};

export default About;
