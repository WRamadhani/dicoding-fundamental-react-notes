import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import parser from "html-react-parser";

import { showFormattedDate } from "../utils";

function NoteCard({ notes, hoverable = false, children }) {
  return (
    <div className={hoverable ? "notes__card hoverable" : "notes__card"}>
      <div className="notes__heading">
        <div>
          <h2>
            <Link to={`/notes/${notes.id}`}>{notes.title}</Link>
          </h2>
          <p>{showFormattedDate(notes.createdAt)}</p>
        </div>
      </div>
      <div className="notes__body">
        <p>{parser(notes.body)}</p>
      </div>
      {children}
    </div>
  );
}

NoteCard.propTypes = {
  notes: PropTypes.object.isRequired,
  hoverable: PropTypes.bool,
  children: PropTypes.node,
};

export default NoteCard;
