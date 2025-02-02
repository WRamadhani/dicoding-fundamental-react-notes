import { Link } from "react-router-dom";
import parser from "html-react-parser";
import PropTypes from "prop-types";

import { showFormattedDate } from "../utils";

import Panel from "../components/Panel";

function NoteCard({ children, notes, isDetail = false }) {
  console.log(notes.body);
  return (
    <Panel>
      <div className="note__card">
        <div className={isDetail ? "note__header detail" : "note__header"}>
          <h3>
            <Link to={`/notes/${notes.id}`}>{notes.title}</Link>
          </h3>
          <p>{showFormattedDate(notes.createdAt)}</p>
        </div>
        <div className="note__body">
          <p>{parser(notes.body)}</p>
        </div>
        {children}
      </div>
    </Panel>
  );
}

NoteCard.propTypes = {
  children: PropTypes.node,
  isDetail: PropTypes.bool,
  notes: PropTypes.object.isRequired,
};

export default NoteCard;
