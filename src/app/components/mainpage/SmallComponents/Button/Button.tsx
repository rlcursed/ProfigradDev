import { FC } from "react";
import "./Button.css"

interface ButtonProps {
    title: string
}


const Button: FC<ButtonProps> = ({title}) => {
  return (
    <>
      <button className="about-button">{title}</button>
    </>
  )
};

export default Button;
