import "./HeaderMenuItem.css";

export const HeaderMenuItem = (props) => {
  const headerMenuItemHandler = {
    clickHandler() {
      props.toggleActiveLink(props.link);
    },
  };

  return (
    <>
      <div
        className={
          props.activeLink === props.link
            ? "header-menu__item_active"
            : "header-menu__item"
        }
        onClick={headerMenuItemHandler.clickHandler}
      >
        <div
          className={
            props.activeLink === props.link
              ? "header-menu__item__icon_active"
              : "header-menu__item__icon"
          }
        >
          {props.activeLink === props.link ? (
            <>
              <props.activeIcon fontSize="small" />
            </>
          ) : (
            <props.Icon fontSize="small" />
          )}
        </div>
        <div
          className={
            props.activeLink === props.link
              ? "header-menu__item__text_active"
              : "header-menu__item__text"
          }
        >
          <span>{props.title}</span>
        </div>
        <div
          className={
            props.activeLink === props.link
              ? "header-menu__item__text_2_active"
              : "header-menu__item__text_2"
          }
        >
          <span>{props.shortTitle}</span>
        </div>
      </div>
      {props.activeLink === props.link ? (
        <div className="header-menu__item__underline-wrapper">
          <div className="header-menu__item__underline"></div>
        </div>
      ) : null}
    </>
  );
};
