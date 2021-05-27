import { CarCard } from "../../../../pres-components";
import "./MainPageBody.css";

export const MainPageBody = (props) => {
  return (
    <div className="main-page-body-wrapper">
      <div className="main-page-body">
        <div className="main-page-body__title">
          <h1>Найдено {props.carData.length} авто</h1>
        </div>
        <div className="main-page-body__description">
          <span>
            Используйте страницу поиска для подбора авто, в котором вы
            заинтересованы
          </span>
        </div>
        <div className="main-page-body__container">
          {props.carData.map((e, index) => {
            return <CarCard
            key={`${e.year}_${index}`}
            brandIcon={e.brand_icon} 
            brand={e.brand}
            model={e.model}
            year={e.year}
            bodyType={e.body_type}
            photo={e.photo}
            fuel={e.fuel}
            price={e.price}
            />
          })}
        </div>
      </div>
    </div>
  );
};
