import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import TrendingDownIcon from "@material-ui/icons/TrendingDown";
import "./ResearchPageBodySorting.css";

export const ResearchPageBodySorting = (props) => {
  const sortByTrueYear = () => {
    props.setFilteredCars(
      [...props.filteredCars].sort((a, b) => (a.year < b.year ? 1 : -1))
    );
  };

  const sortByFalseYear = () => {
    props.setFilteredCars(
      [...props.filteredCars].sort((a, b) => (a.year > b.year ? 1 : -1))
    );
  };

  const sortByTruePrice = () => {
    props.setFilteredCars(
      [...props.filteredCars].sort((a, b) =>
        +a.price.slice(0, a.price.length - 1) * 74 <
        +b.price.slice(0, b.price.length - 1) * 74
          ? 1
          : -1
      )
    );
  };

  const sortByFalsePrice = () => {
    props.setFilteredCars(
      [...props.filteredCars].sort((a, b) =>
        +a.price.slice(0, a.price.length - 1) * 74 >
        +b.price.slice(0, b.price.length - 1) * 74
          ? 1
          : -1
      )
    );
  };

  return (
    <div className="research-page-body__sorting">
      <div className="research-page-body__sorting__group">
        <div
          className="research-page-body__sorting__item"
          onClick={sortByTruePrice}
        >
          <TrendingDownIcon />
          <span>Цена (по убыванию)</span>
        </div>
        <div
          className="research-page-body__sorting__item"
          onClick={sortByFalsePrice}
        >
          <TrendingUpIcon />
          <span>Цена (по возрастанию)</span>
        </div>
      </div>
      <div className="research-page-body__sorting__group">
        <div
          className="research-page-body__sorting__item"
          onClick={sortByTrueYear}
        >
          <TrendingDownIcon />
          <span>Год (по убыванию)</span>
        </div>
        <div
          className="research-page-body__sorting__item"
          onClick={sortByFalseYear}
        >
          <TrendingUpIcon />
          <span>Год (по возрастанию)</span>
        </div>
      </div>
    </div>
  );
};
