"use client"

import styled from "styled-components";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import logo from "../../../../public/logo.png"

import "../mainpage/header/header.css"

const TestLink = styled(Link)`
   font-family: "Bebas Neue Bold";
    font-size: 28px;
    cursor: pointer;
    color: #fd5e07;
    text-decoration: none;
    line-height: 1;
    transition: top ease 0.5s;
    
&::after {
    display: block;
    content: "";
    height: 3px;
    width: 0%;
    background-color: #fd5e07;
    transition: width 0.4s ease-in-out;
}

&:hover:after, &:focus:after{
    width: 100%;
}

&.isActive {
  &::after{
    width: 100%;
  }
}

@media (min-width: 768px) and (max-width: 1050px) {
    
    & {
        font-family: "Bebas Neue Bold";
        font-size: 20px;
        cursor: pointer;
        color: #fd5e07;
        text-decoration: none;
        line-height: 1;
        transition: top ease 0.5s;
    }
}
`

type NavLink = {
    label: string;
    href: string;
};

type Props = {
    navLinks: NavLink[]
};

const Navigation = ({navLinks}: Props) => {
    const [scrolled, setScrolled] = useState(false);

    const pathname = usePathname();

    useEffect(() => {
        window.onscroll = function () {
          if(window.scrollY > 50) {
            setScrolled(true);
          }else {
            setScrolled(false);
          }
        }
      }, []);

  return (
    <div className={scrolled ? "header-container-shadow" : "header-container"}>
        <Image
        src={logo}
        alt="Logo"
        style={{
            width: "200px",
            height: "100%",
            cursor: "pointer"
        }}
        />
        <div className="list-container ">
        {navLinks.map((link) => {
            
        const isActive = pathname === link.href;

        return(
            <TestLink
            key={link.label}
            href={link.href}
            className={isActive ? "isActive" : ""}
            >
            {link.label}
            </TestLink>
        )
      })}
      </div>
    </div>
  )
};

export default Navigation;
