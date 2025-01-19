import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import SearchBar from "./SearchBar";

function Layout({ children, keyword, onKeywordChange }) {
  const location = useLocation();
  const { pathname } = location;
  return (
    <>
      <Header />
      <main>
        <h1>Notes App</h1>
        {pathname !== "/notes/create" ? (
          <SearchBar keyword={keyword} keywordChange={onKeywordChange} />
        ) : (
          ""
        )}
        {children}
      </main>
      <Footer />
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  keyword: PropTypes.string,
  onKeywordChange: PropTypes.func,
};

export default Layout;
