import { useState } from "react";
import "./ResearchPageBodyFilter.css";

export const ResearchPageBodyFilter = (props) => {
  const allBrands = [...new Set([...props.carData.map((e) => e.brand)])];
  const [filterData, setFilterData] = useState({
    brand: null,
    model: null,
    fuel: null,
    bodyType: null,
  });
  const [models, setModels] = useState([]);
  const [fuelTypes, setFuelTypes] = useState([]);
  const [bodyTypes, setBodyTypes] = useState([]);

  const toggleBrandOption = (element) => {
    if (element.target.value === "Марка") return

    setFuelTypes([]);
    setBodyTypes([]);
    document.getElementById("auto_model").selectedIndex = 0;
    document.getElementById("auto_fuel").selectedIndex = 0;
    document.getElementById("auto_bodyType").selectedIndex = 0;

    const models = [];
    props.carData.forEach((e) => {
      if (e.brand === element.target.value) models.push(e.model);
    });
    setModels(models);
    setFilterData({
      ...filterData,
      brand: element.target.value,
      model: null,
      fuel: null,
      bodyType: null,
    });
  };

  const toggleModelOption = (element) => {
    if (element.target.value === "Модель") return
    setBodyTypes([]);
    document.getElementById("auto_fuel").selectedIndex = 0;
    document.getElementById("auto_bodyType").selectedIndex = 0;

    const fuelTypes = [];
    props.carData.forEach((e) => {
      if (e.model === element.target.value) fuelTypes.push(e.fuel);
    });
    setFuelTypes(fuelTypes);
    setFilterData({
      ...filterData,
      model: element.target.value,
      fuel: null,
      bodyType: null,
    });
  };

  const toggleFuelOption = (element) => {
    if (element.target.value === "Топливо") return
    document.getElementById("auto_bodyType").selectedIndex = 0;
    const bodyTypes = [];
    props.carData.forEach((e) => {
      if (
        e.fuel === element.target.value &&
        e.model === filterData.model &&
        e.brand === filterData.brand
      ) {
        bodyTypes.push(e.body_type);
      }
    });
    setBodyTypes(bodyTypes);
    setFilterData({
      ...filterData,
      fuel: element.target.value,
      bodyType: null,
    });
  };

  const toggleBodyTypeOption = (element) => {
    if (element.target.value === "Кузов") return
    setFilterData({ ...filterData, bodyType: element.target.value });
  };

  const toggleFilterButton = (value) => {
    console.log(filterData);
    if (
      filterData.brand === null &&
      filterData.model === null &&
      filterData.fuel === null &&
      filterData.bodyType === null
    ) {
      props.setFilteredCars(props.carData);
    } else if (
      filterData.model === null &&
      filterData.fuel === null &&
      filterData.bodyType === null
    ) {
      props.setFilteredCars(
        props.carData.filter((e) => e.brand === filterData.brand)
      );
    } else if (filterData.fuel === null && filterData.bodyType === null) {
      props.setFilteredCars(
        props.carData.filter(
          (e) => e.brand === filterData.brand && e.model === filterData.model
        )
      );
    } else if (filterData.bodyType === null) {
      props.setFilteredCars(
        props.carData.filter(
          (e) =>
            e.brand === filterData.brand &&
            e.model === filterData.model &&
            e.fuel === filterData.fuel
        )
      );
    } else {
      props.setFilteredCars(
        props.carData.filter(
          (e) =>
            e.brand === filterData.brand &&
            e.model === filterData.model &&
            e.fuel === filterData.fuel &&
            e.body_type === filterData.bodyType
        )
      );
    }
  };

  return (
    <div className="research-page-body__filter-wrapper">
      <div className="research-page-body__filter">
        <select
          onChange={toggleBrandOption}
          id="auto_brand"
          defaultValue="Марка"
        >
          <option disabled hidden>
            Марка
          </option>
          {allBrands.map((brand, index) => (
            <option key={`${brand}_${index}`} value={brand}>
              {brand}
            </option>
          ))}
        </select>
        <select
          onChange={toggleModelOption}
          id="auto_model"
          defaultValue="Модель"
        >
          <option disabled hidden>
            Модель
          </option>
          {[...new Set(models)].map((model, index) => (
            <option key={`${model}_${index}`} value={model}>
              {model}
            </option>
          ))}
        </select>
        <select
          onClick={toggleFuelOption}
          id="auto_fuel"
          defaultValue="Топливо"
        >
          <option disabled hidden>
            Топливо
          </option>
          {[...new Set(fuelTypes)].map((fuel, index) => (
            <option key={`${fuel}_${index}`} value={fuel}>
              {fuel}
            </option>
          ))}
        </select>
        <select
          onClick={toggleBodyTypeOption}
          id="auto_bodyType"
          defaultValue="Кузов"
        >
          <option disabled hidden>
            Кузов
          </option>
          {[...new Set(bodyTypes)].map((bodyType, index) => (
            <option key={`${bodyType}_${index}`} value={bodyType}>
              {bodyType}
            </option>
          ))}
        </select>
        <div
          className="research-page-body__filter-button"
          onClick={toggleFilterButton}
        >
          <span>Поиск</span>
        </div>
      </div>
    </div>
  );
};
