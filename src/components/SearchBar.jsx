import PropTypes from "prop-types";

import Input from "./Input";

function SearchBar({ keyword, onKeywordChange }) {
  return (
    <Input
      className="search__input"
      name={"search"}
      placeholder={"Note 1..."}
      value={keyword}
      onChange={(event) => onKeywordChange(event.target.value)}
    />
  );
}

SearchBar.propTypes = {
  keyword: PropTypes.string.isRequired,
  onKeywordChange: PropTypes.func.isRequired,
};

export default SearchBar;
