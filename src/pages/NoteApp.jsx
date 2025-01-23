import { useState, useEffect, useContext } from "react";
import { useSearchParams } from "react-router-dom";

import { getAllNotes } from "../utils/local-data";
import __Text from "../utils/enTranslation";

import LocaleContext from "../context/LocaleContext";

import SearchBar from "../components/SearchBar";
import NoteList from "./NoteList";

function NoteApp({ isArchived = false }) {
  const [notes, setNotes] = useState(getAllNotes());
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
    return (
      note.archived === isArchived && note.title.toLowerCase().includes(keyword)
    );
  });

  const filteredArchiveNotes = notes.filter((note) => {
    return (
      note.archived === isArchived && note.title.toLowerCase().includes(keyword)
    );
  });

  // console.log(filteredNotes);

  // useEffect(() => {
  //   setNotes(getAllNotes());
  // }, []);

  // useEffect(() => {
  //   getAllNotes().then(({ data }) => {
  //     setNotes(data);
  //   });
  // }, []);

  return (
    <>
      <div>
        <h1>{__Text(locale, "Note App")}</h1>
        <SearchBar keyword={keyword} onKeywordChange={onKeywordChangeHandler} />
      </div>
      <NoteList notes={filteredNotes} />
    </>
  );
}

export default NoteApp;
