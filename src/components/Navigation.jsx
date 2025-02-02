import { NavLink } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

import LocaleContext from "../context/LocaleContext";
import __Text from "../utils/enTranslation";

import { MenuIcon, CloseIcon, TranslateIcon, SunIcon, MoonIcon } from "./Icon";

function Navigation({ token, onLogout }) {
  const [menuIcon, setMenuIcon] = useState(true);
  const [theme, setTheme] = useState("dark");
  const { locale, toggleLocale } = useContext(LocaleContext);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
    console.log(theme);
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
    }
  }, [theme]);

  const toggleHandler = () => {
    const collapse = document.querySelector(".collapse");

    collapse.classList.toggle("show");
    setMenuIcon(!menuIcon);
  };

  return (
    <header className="header">
      <nav className="nav">
        <div>
          {token ? (
            <>
              <ul>
                <li>
                  <NavLink className={"nav__link"} to={"/"}>
                    {__Text(locale, "Home")}
                  </NavLink>
                </li>
                <li>
                  <NavLink className={"nav__link"} to={"/archive"}>
                    {__Text(locale, "Archive")}
                  </NavLink>
                </li>
              </ul>

              <button
                type="button"
                className={"nav__button"}
                onClick={toggleHandler}
              >
                {menuIcon ? <MenuIcon /> : <CloseIcon />}
              </button>
            </>
          ) : (
            <>
              <h1 style={{ marginBottom: "1rem" }}>
                {__Text(locale, "Note App")}
              </h1>
              <button
                type="button"
                className={"nav__button"}
                onClick={toggleHandler}
              >
                {menuIcon ? <MenuIcon /> : <CloseIcon />}
              </button>
            </>
          )}
        </div>

        <div className="collapse">
          <ul className="nav--extra">
            <li>
              <button className={"nav__link"} onClick={toggleLocale}>
                <span>{locale}</span>
                <span>
                  <TranslateIcon />
                </span>
              </button>
            </li>
            <li>
              <button className={"nav__link"} onClick={toggleTheme}>
                <span>{theme === "dark" ? <SunIcon /> : <MoonIcon />}</span>
              </button>
            </li>
          </ul>
          <ul>
            {token ? (
              <li>
                <button
                  className={"nav__link"}
                  type="button"
                  onClick={onLogout}
                >
                  {__Text(locale, "Log Out")}
                </button>
              </li>
            ) : (
              <>
                <li>
                  <NavLink className={"nav__link"} to={"/register"}>
                    {__Text(locale, "Sign Up")}
                  </NavLink>
                </li>
                <li>
                  <NavLink className={"nav__link"} to={token ? "/login" : "/"}>
                    {__Text(locale, "Sign In")}
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
}

Navigation.propTypes = {
  token: PropTypes.string,
  onLogout: PropTypes.func.isRequired,
};

export default Navigation;
