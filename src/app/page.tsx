import MainSection from "./components/mainpage/homeslide/MainSection"
import About from "./components/mainpage/About/About"
import Advantages from "./components/mainpage/Advantages/Advantages"
import Excursions from "./components/mainpage/Excursions/Excursions"
import Await from "./components/mainpage/Await/Await"
import Rewiews from "./components/mainpage/Rewiews/Rewiews"
import FormComponent from "./components/mainpage/Form/FormComponent"

export default function Home() {
  return (
    <>
        <MainSection/>
        <About/>
        <Advantages/>
        <Excursions/>
        <Await/>
        <Rewiews/>
        <FormComponent/>
    </>
  )
}