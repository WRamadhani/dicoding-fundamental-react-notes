import PropTypes from "prop-types";

import NoteCard from "./NoteCard";

function NotesItem({ notes }) {
  return (
    <NoteCard
      notes={{
        id: notes.id,
        title: notes.title,
        body: notes.body,
        archived: notes.archived,
        createdAt: notes.createdAt,
      }}
    />
  );
}

NotesItem.propTypes = {
  notes: PropTypes.object.isRequired,
};

export default NotesItem;
