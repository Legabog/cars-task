import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import StarIcon from "@material-ui/icons/Star";
import SearchIcon from "@material-ui/icons/Search";
import { HeaderMenuItem } from "./components";
import "./HeaderMenu.css";

export const HeaderMenu = (props) => {
  const [activeLink, setActiveLink] = useState();

  const toggleActiveLink = (link) => {
    setActiveLink(link);
  };

  const toggleActiveLinkAfterRender = () => {
    const availableRoutes = ["/", "/research"];

    if (availableRoutes.includes(props.location.pathname)) {
      toggleActiveLink(props.location.pathname);
    }
  };

  useEffect(() => {
    toggleActiveLinkAfterRender();
  });

  return (
    <div className="header-menu">
      <NavLink to={"/"}>
        <HeaderMenuItem
          link={"/"}
          activeLink={activeLink}
          activeIcon={StarIcon}
          Icon={StarIcon}
          toggleActiveLink={toggleActiveLink}
          title={"Главная страница"}
          shortTitle={"Главная"}
        />
      </NavLink>

      <NavLink to={"/research"}>
        <HeaderMenuItem
          link={"/research"}
          activeLink={activeLink}
          activeIcon={SearchIcon}
          Icon={SearchIcon}
          toggleActiveLink={toggleActiveLink}
          title={"Страница поиска"}
          shortTitle={"Поиск"}
        />
      </NavLink>
    </div>
  );
};
