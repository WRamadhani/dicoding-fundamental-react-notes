import { useContext } from "react";
import PropTypes from "prop-types";

import LocaleContext from "../context/LocaleContext";
import MessageContext from "../context/MessageContext";
import __Text from "../utils/enTranslation";

import { AddNoteIcon } from "../components/Icon";
import PageHeading from "../components/PageHeading";
import Message from "../components/Message";
import NoteCard from "../components/NoteCard";
import NotFound from "./NotFound";
import { Link } from "react-router-dom";

function NoteList({ notes }) {
  const { locale } = useContext(LocaleContext);
  const { message, showMessage, toggleShowMessage } =
    useContext(MessageContext);
  //   if (!notes.length) return console.log("Kosong");

  if (!notes.length) return <NotFound message={"Note Not Found"} />;

  return (
    <>
      {showMessage ? (
        <Message
          status={message.status}
          message={__Text(locale, message.message)}
          onClick={() => toggleShowMessage()}
        />
      ) : null}
      <PageHeading
        align={"right"}
        heading={!notes[0].archived ? "Active Notes" : "Archived Notes"}
      >
        <Link to={"/notes/create"} className="btn primary">
          <span className="btn--icon">
            <AddNoteIcon />
          </span>
          <span className="btn--label mobile">
            {__Text(locale, "Add Note")}
          </span>
        </Link>
      </PageHeading>
      <div className="note__list">
        {notes.map((note) => (
          <NoteCard key={note.id} notes={note} />
        ))}
      </div>
    </>
  );
}

NoteList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default NoteList;
