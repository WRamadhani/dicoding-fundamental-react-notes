import { useState, useEffect, useContext } from "react";
import { useSearchParams } from "react-router-dom";
import PropTypes from "prop-types";

import { getUserLogged } from "../utils/api";
import __Text from "../utils/enTranslation";

import LocaleContext from "../context/LocaleContext";

import SearchBar from "../components/SearchBar";
import NoteList from "./NoteList";
import useNotes from "../hooks/useNotes";
import Skeleton from "../components/Skeleton";

function NoteApp({ isArchived = false }) {
  const [notes, loading] = useNotes();
  // const [notes, setNotes] = useState(getAllNotes());
  const [username, setUsername] = useState("Note App");
  const [searchParams, setSearchParams] = useSearchParams();
  const [keyword, setKeyword] = useState(() => {
    return searchParams.get("keyword") || "";
  });
  const { locale } = useContext(LocaleContext);

  function onKeywordChangeHandler(keyword) {
    setKeyword(keyword);
    setSearchParams({ keyword });
  }

  const filteredNotes = notes.filter((note) => {
    console.log(note.archived);
    return (
      note.archived === isArchived && note.title.toLowerCase().includes(keyword)
    );
  });

  useEffect(() => {
    getUserLogged().then(({ data }) => {
      setUsername(data.name);
    });
  }, []);

  // if (loading) {
  //   return <h1>asd</h1>;
  // }

  return (
    <>
      <div className="main__title">
        <h1>
          {username !== "Note App"
            ? `Hai, ${__Text(locale, username)}`
            : __Text(locale, username)}
        </h1>
        <SearchBar keyword={keyword} onKeywordChange={onKeywordChangeHandler} />
      </div>
      {loading ? <Skeleton total={5} /> : <NoteList notes={filteredNotes} />}
    </>
  );
}

NoteApp.propTypes = {
  isArchived: PropTypes.bool,
};

export default NoteApp;
