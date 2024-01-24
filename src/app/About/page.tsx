import { Metadata } from "next";

import MainPage from "../components/About/MainPage";

export const metadata: Metadata = {
  title: 'О проекте | Профиград',
  description: 'Generated by create next app',
}

const About = () => {
  return (
    <>
    <MainPage/>
    </>
  )
};

export default About;
