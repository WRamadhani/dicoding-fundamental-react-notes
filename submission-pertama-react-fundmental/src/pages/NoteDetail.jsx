import { useParams } from "react-router-dom";
import PropTypes from "prop-types";

import { getNote } from "../utils/local-data";

import { ArchiveIcon, UnarchiveIcon, DeleteIcon } from "../components/Icon";
import Button from "../components/Button";
import NoteCard from "../components/NoteCard";

function NoteDetail({ onDelete, onArchive }) {
  const { id } = useParams();
  const notes = getNote(id);

  return (
    <NoteCard
      notes={{
        id: notes.id,
        title: notes.title,
        body: notes.body,
        archived: notes.archived,
        createdAt: notes.createdAt,
      }}
    >
      <div className="notes__action">
        {!notes.archived ? (
          <Button
            label={"Arsip"}
            type="arsip"
            icon={<ArchiveIcon />}
            funcParams={{ id: notes.id }}
            onClick={onArchive}
          />
        ) : (
          <Button
            label={"Pulihkan"}
            type="pulih"
            icon={<UnarchiveIcon />}
            funcParams={{ id: notes.id }}
            onClick={onArchive}
          />
        )}

        <Button
          label={"Hapus"}
          type="hapus"
          icon={<DeleteIcon />}
          funcParams={{ id: notes.id }}
          onClick={onDelete}
          redirect="/"
        />
      </div>
    </NoteCard>
  );
}

NoteDetail.propTypes = {
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
};

export default NoteDetail;
