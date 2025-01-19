import React from "react";
import PropTypes from "prop-types";
import { Route, Routes, useSearchParams } from "react-router-dom";
import {
  getAllNotes,
  deleteNote,
  archiveNote,
  addNote,
} from "../utils/local-data";

import Layout from "../components/Layout";
import NotesList from "../components/NotesList";

import NoteDetail from "./NoteDetail";
import AddNote from "./AddNote";
import NotFound from "./NotFound";

function NotesAppWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get("keyword");

  function changeSearchParams(keyword) {
    setSearchParams({ keyword });
  }

  return (
    <NotesApp defaultKeyword={keyword} keywordChange={changeSearchParams} />
  );
}

class NotesApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getAllNotes(),
      keyword: props.defaultKeyword || "",
    };
  }

  onDeleteHandler = (notes) => {
    deleteNote(notes.id);
    this.setState(() => {
      return {
        notes: getAllNotes(),
      };
    });
  };

  onArchiveHandler = (notes) => {
    archiveNote(notes.id);
    this.setState(() => {
      return {
        notes: getAllNotes(),
      };
    });
  };

  decodeHtml = (html) => {
    var txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  };

  onAddHandler = (notes) => {
    const body = this.decodeHtml(notes.body);
    addNote({ title: notes.title, body: body });
    this.setState(() => {
      return {
        notes: getAllNotes(),
      };
    });
  };

  onKeywordChangeHandler = (keyword) => {
    this.setState(() => {
      return {
        keyword,
      };
    });

    this.props.keywordChange(keyword);
  };

  render() {
    return (
      <>
        <Layout
          keyword={this.state.keyword}
          onKeywordChange={this.onKeywordChangeHandler}
        >
          <section className="notes--list">
            <Routes>
              <Route
                path="/"
                element={
                  <NotesList
                    keyword={this.state.keyword}
                    notes={this.state.notes}
                  />
                }
              />
              <Route
                path="/arsip"
                element={
                  <NotesList
                    keyword={this.state.keyword}
                    notes={this.state.notes}
                    isArchived={true}
                  />
                }
              />
              <Route
                path="/notes/:id"
                element={
                  <NoteDetail
                    onDelete={this.onDeleteHandler}
                    onArchive={this.onArchiveHandler}
                  />
                }
              />
              <Route
                path="/notes/create"
                element={<AddNote onAdd={this.onAddHandler} />}
              />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </section>
        </Layout>
      </>
    );
  }
}

NotesApp.propTypes = {
  defaultKeyword: PropTypes.string,
  keywordChange: PropTypes.func,
};

export default NotesAppWrapper;
