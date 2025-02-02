import { useParams, useNavigate } from "react-router-dom";
import { useState, useMemo, useContext } from "react";

import { getNote, deleteNote, archiveNote, unarchiveNote } from "../utils/api";
import __Text from "../utils/enTranslation";
import MessageContext from "../context/MessageContext";
import LocaleContext from "../context/LocaleContext";

import Button from "../components/Button";
import NoteCard from "../components/NoteCard";
import Skeleton from "../components/Skeleton";
import { DeleteIcon, ArchiveIcon, UnarchiveIcon } from "../components/Icon";
import Message from "../components/Message";

function NoteDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [note, setNote] = useState({});
  const [load, setLoad] = useState(true);
  const { locale } = useContext(LocaleContext);
  const { message, setDisplayMessage, showMessage, toggleShowMessage } =
    useContext(MessageContext);
  console.log(showMessage);

  useMemo(() => {
    getNote(id).then(({ data }) => {
      setNote(data);
      setLoad(false);
    });
  }, [id]);

  async function handleDelete() {
    await deleteNote(note.id).then((response) => {
      if (response.status !== "success") {
        setDisplayMessage({
          status: response.status,
          message: response.message,
        });
        toggleShowMessage();
        return;
      }
      setNote({});
      setDisplayMessage({
        status: "success",
        message: "Note Successfully Deleted",
      });
      toggleShowMessage();
      navigate("/");
    });
  }

  function handleArchive() {
    if (note.archived) {
      unarchiveNote(note.id).then(() => {
        setDisplayMessage({
          status: "success",
          message: "Note Successfully Unarchived",
        });
        toggleShowMessage();
        setNote((prevNote) => ({ ...prevNote, archived: false }));
      });
    } else {
      archiveNote(note.id).then(() => {
        setDisplayMessage({
          status: "success",
          message: "Note Successfully Archived",
        });
        toggleShowMessage();
        setNote((prevNote) => ({ ...prevNote, archived: true }));
      });
    }
  }

  if (load) {
    return <Skeleton repeat={1} />;
  }

  return (
    <div className="note__detail">
      {showMessage ? (
        <Message
          status={message.status}
          message={__Text(locale, message.message)}
          onClick={() => toggleShowMessage()}
        />
      ) : null}
      <NoteCard notes={note} isDetail={true}>
        <div className="note__action">
          <Button
            label={note.archived ? "Unarchive" : "Archive"}
            icon={note.archived ? <UnarchiveIcon /> : <ArchiveIcon />}
            type="warning"
            onClick={() => handleArchive()}
          />
          <Button
            label="Delete"
            icon={<DeleteIcon />}
            type="danger"
            onClick={() => handleDelete()}
          />
        </div>
      </NoteCard>
    </div>
  );
}

export default NoteDetail;
