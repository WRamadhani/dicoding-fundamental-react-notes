import Input from "./Input";

function SearchBar({ keyword, onKeywordChange }) {
  return (
    <Input
      name={"search"}
      placeholder={"Cari Catatan berdasarkan judul..."}
      value={keyword}
      onChange={(event) => onKeywordChange(event.target.value)}
    />
  );
}

export default SearchBar;
