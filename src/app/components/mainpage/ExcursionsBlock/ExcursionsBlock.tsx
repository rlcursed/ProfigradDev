import { FC } from "react";
import "./ExcursionsBlock.css"
import Button from "../SmallComponents/Button/Button";

const ExcursionsBlock = () => {
  return (
    <div>
      <div className="block-body">
        <div className="text-wrapper">
          <h2>Горьковский автомобильный завод</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem hic a, harum alias iure porro reiciendis assumenda dignissimos voluptate quas doloribus provident id! Dolorum veniam provident, qui obcaecati odio quam! Eum quia, omnis exercitationem nulla illo quos voluptatem cumque voluptates molestiae dolores soluta minima incidunt accusantium itaque, consequatur, odit maiores?</p>
        </div>
        <div className="buttons-wrapper">
          <Button title="Забронировать"></Button>
          <button className="excursions-button">Подробнее</button>
        </div>
      </div>
    </div>
  )
};

export default ExcursionsBlock;
