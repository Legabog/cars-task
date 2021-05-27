import "./CarCard.css";

export const CarCard = (props) => {
  return (
    <div className="car-card-wrapper">
      <div className="car-card">
        <div className="car-card__header">
          <img src={props.brandIcon} alt="brand-icon" />
          <span>{props.brand}</span>
        </div>
        <div className="car-card__model">
          <span>{props.model}</span>
        </div>
        <div className="car-card__body-type-year">
          <span>
            {props.bodyType} · {props.year}
          </span>
        </div>
        <div className="car-card__photo">
          <img src={props.photo} alt="photo_auto" />
        </div>
        <div className="car-card__fuel">
          <span>Тип топлива: {props.fuel}</span>
        </div>
        <div className="car-card__price">
          <span>
            Цена: {+props.price.slice(0, props.price.length - 1) * 74} ₽
          </span>
          <div className="car-card__button">
            <span>Купить</span>
          </div>
        </div>
      </div>
    </div>
  );
};
