import { useState } from "react";
import { CarCard } from "../../../../pres-components";
import { ResearchPageBodyFilter } from "../ResearchPageBodyFilter";
import { ResearchPageBodySorting } from "../ResearchPageBodySorting";
import "./ResearchPageBody.css";

export const ResearchPageBody = (props) => {
  const [filteredCars, setFilteredCars] = useState([]);

  return (
    <div className="research-page-body-wrapper">
      <div className="research-page-body">
        <div className="research-page-body__title">
          <h1>Страница поиска</h1>
        </div>
        <div className="research-page-body__description">
          <span>Подберите авто, которое больше вам подходит</span>
        </div>
        <ResearchPageBodyFilter {...props} setFilteredCars={setFilteredCars} />
        <ResearchPageBodySorting
          filteredCars={filteredCars}
          setFilteredCars={setFilteredCars}
        />
        <div className="research-page-body__container">
          {filteredCars.map((e, index) => {
            return (
              <CarCard
                key={`fc_${index}${e.price}`}
                brandIcon={e.brand_icon}
                brand={e.brand}
                model={e.model}
                year={e.year}
                bodyType={e.body_type}
                photo={e.photo}
                fuel={e.fuel}
                price={e.price}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
