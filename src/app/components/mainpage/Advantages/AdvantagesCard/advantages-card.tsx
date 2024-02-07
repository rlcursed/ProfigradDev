import { FC } from "react"

import { StaticImport } from "next/dist/shared/lib/get-img-props"
import Image from "next/image"

import { CardWrapper, CardRectangle, CardText } from "./AdvantagesCardStyle"

export interface CardProps {
  description?:string,
  image?: any,
  title?: string
}

const AdvantagesCard: FC<CardProps> = ({description, image}) => {
  return (
      <CardRectangle>
        <CardWrapper>
            <Image
              src={image}
              width={100}
              height={100}
              alt="Picture of the author"
            />
            <CardText>{description}</CardText>
        </CardWrapper>
      </CardRectangle>
  )
};

export default AdvantagesCard;
