import './header.css'
import Navigation from "../Navigation";
import { useScroll } from 'framer-motion';

const Header = () => {
  const navItems = [
    {label: "Главная", href: "/"},
    {label: "О проекте", href: "/About"},
    {label: "Экскурсии", href: "/Excursions"},
    {label: "Для школ", href: "/ForSchool"},
    {label: "Контакты", href: "#someid"},
    {label: "Новости", href: "/News"},
    {label: "Отзывы", href: "/Rewiews"},
];

  return (
    <>
      <Navigation
        navLinks={navItems}
      />
    </>
  )
};

export default Header;
