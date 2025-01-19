import PropTypes from "prop-types";
import NotesItem from "./NotesItem";
import NotFound from "../pages/NotFound";

function NotesList({ notes, keyword, isArchived = false }) {
  const filteredNotes = notes.filter((note) => {
    return (
      note.archived === isArchived && note.title.toLowerCase().includes(keyword)
    );
  });
  console.log(!filteredNotes);
  console.log(filteredNotes);
  if (!filteredNotes.length) {
    return <NotFound />;
  }
  return (
    <>
      {filteredNotes.reverse().map((note) => (
        <NotesItem key={note.id} notes={note} />
      ))}
    </>
  );
}

NotesList.propTypes = {
  notes: PropTypes.array.isRequired,
  keyword: PropTypes.string.isRequired,
  isArchived: PropTypes.bool,
};

export default NotesList;
