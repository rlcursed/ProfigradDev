import Button from "../SmallComponents/Button/Button";

import { BlockWrapper, TextWrapper, TextH, TextP, ButtonWrapper, BlockButton } from "./ExcursionBlockStyle";

const ExcursionsBlock = () => {
  return (
    <div>
      <BlockWrapper>
        <TextWrapper>
          <TextH>Горьковский автомобильный завод</TextH>
          <TextP>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem hic a, harum alias iure porro reiciendis assumenda dignissimos voluptate quas doloribus provident id! Dolorum veniam provident, qui obcaecati odio quam! Eum quia, omnis exercitationem nulla illo quos voluptatem cumque voluptates molestiae dolores soluta minima incidunt accusantium itaque, consequatur, odit maiores?</TextP>
        </TextWrapper>
        <ButtonWrapper>
          <Button title="Забронировать"></Button>
          <BlockButton>Подробнее</BlockButton>
        </ButtonWrapper>
      </BlockWrapper>
    </div>
  )
};

export default ExcursionsBlock;
