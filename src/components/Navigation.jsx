import { NavLink } from "react-router-dom";
import { useContext } from "react";

import LocaleContext from "../context/LocaleContext";
import __Text from "../utils/enTranslation";

import { MenuIcon } from "./Icon";

function Navigation() {
  const { locale } = useContext(LocaleContext);

  return (
    <header className="header">
      <nav className="nav">
        <div>
          <ul>
            <li>
              <NavLink to={"/"}>{__Text(locale, "Home")}</NavLink>
            </li>
            <li>
              <NavLink to={"/arsip"}>{__Text(locale, "Archive")}</NavLink>
            </li>
            <li>
              <NavLink to={"/notes/create"}>
                {__Text(locale, "Add Note")}
              </NavLink>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <NavLink to={"/register"}>{__Text(locale, "Sign Up")}</NavLink>
            </li>
            <li>
              <NavLink to={"/login"}>{__Text(locale, "Log In")}</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
    // <nav>
    //   <ul>
    //     <li>{__Text(locale, "Aplikasi Catatan")}</li>
    //     <li>
    //       <Link to={"/"}>{__Text(locale, "Home")}</Link>
    //     </li>
    //     <li>
    //       <Link to={"/arsip"}>{__Text(locale, "Arsip")}</Link>
    //     </li>
    //     <li>
    //       <Link to={"/notes/create"}>{__Text(locale, "Tambah Catatan")}</Link>
    //     </li>
    //   </ul>

    //   <div>
    //     <ul>
    //       <li>
    //         <Link to={"/register"}>{__Text(locale, "Daftar")}</Link>
    //       </li>
    //       <li>
    //         <Link to={"/login"}>{__Text(locale, "Masuk")}</Link>
    //       </li>
    //     </ul>
    //   </div>
    // </nav>
  );
}

export default Navigation;
