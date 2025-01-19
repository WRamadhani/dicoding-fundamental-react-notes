import PropTypes from "prop-types";

function SearchBar({ keyword, keywordChange }) {
  return (
    <section className="search">
      <input
        value={keyword}
        onChange={(event) => {
          keywordChange(event.target.value);
        }}
        type="text"
        placeholder="Cari catatan berdasarkan judul..."
      />
    </section>
  );
}

SearchBar.propTypes = {
  keyword: PropTypes.string.isRequired,
  keywordChange: PropTypes.func.isRequired,
};

export default SearchBar;
