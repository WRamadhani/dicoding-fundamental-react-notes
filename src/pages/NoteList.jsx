import { useContext, useState } from "react";
import PropTypes from "prop-types";

import LocaleContext from "../context/LocaleContext";
import MessageContext from "../context/MessageContext";
import __Text from "../utils/enTranslation";

import Button from "../components/Button";
import { AddNoteIcon } from "../components/Icon";
import PageHeading from "../components/PageHeading";
import Message from "../components/Message";
import NoteCard from "../components/NoteCard";

function NoteList({ notes }) {
  const { locale } = useContext(LocaleContext);
  const { message, setDisplayMessage, showMessage, toggleShowMessage } =
    useContext(MessageContext);
  console.log(message);
  //   if (!notes.length) return console.log("Kosong");

  return (
    <>
      {showMessage ? (
        <Message
          status={message.status}
          message={message.message}
          onClick={() => toggleShowMessage()}
        />
      ) : null}
      <div className="heading--container">
        <PageHeading
          heading={!notes[0].archived ? "Active Notes" : "Archived Notes"}
        />
        <Button
          type={"primary"}
          icon={<AddNoteIcon />}
          label={__Text(locale, "Add Note")}
          onClick={() => {
            setDisplayMessage({
              status: "success",
              message: "Email already use",
            });
            toggleShowMessage();
          }}
        />
      </div>
      {notes.map((note) => (
        <NoteCard key={note.id} notes={note} />
      ))}
    </>
  );

  //   return console.log(notes);
}

NoteList.propTypes = {
  notes: PropTypes.array.isRequired,
};

export default NoteList;
