import { Link } from "react-router-dom";
import Panel from "../components/Panel";

function NoteCard({ children, notes }) {
  return (
    <Panel>
      <div className="note__card">
        <div className="note__heading">
          <h3>
            <Link to={`/notes/${notes.id}`}>{notes.title}</Link>
          </h3>
          <p>{notes.createdAt}</p>
        </div>
        <div className="note__body">
          <p>{notes.body}</p>
        </div>
        <div className="note__action">{children}</div>
      </div>
    </Panel>
  );
}

export default NoteCard;
