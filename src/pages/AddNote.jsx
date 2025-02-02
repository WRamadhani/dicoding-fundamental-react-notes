import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";

import MessageContext from "../context/MessageContext";
import { addNote } from "../utils/api";
import useInput from "../hooks/useInput";

import Input from "../components/Input";
import Button from "../components/Button";
import PageHeading from "../components/PageHeading";
import Panel from "../components/Panel";

function AddNote() {
  const navigate = useNavigate();
  const [titleError, title, onTitleChange] = useInput(
    "Title",
    "required|min:3|max:50"
  );
  const [body, setBody] = useState("");
  const { setDisplayMessage, toggleShowMessage } = useContext(MessageContext);

  const decodeHtml = (html) => {
    let txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  };

  const onBodyInputHandler = (event) => {
    setBody(event.target.innerHTML);
  };

  async function onAdd(title, body) {
    body = decodeHtml(body);
    await addNote({ title, body }).then((response) => {
      if (response.status !== "success") {
        setDisplayMessage({
          status: response.status,
          message: response.message,
        });
        toggleShowMessage();
        return;
      }
      setDisplayMessage({
        status: response.status,
        message: "Note Successfully Created",
      });
      toggleShowMessage();
      navigate("/");
    });
  }

  function addNoteHandler(event) {
    event.preventDefault();
    onAdd(title, body);
  }

  return (
    <div style={{ paddingInline: "2rem" }}>
      <PageHeading heading="Tambah Catatan" />
      <Panel>
        <form style={{ marginTop: "2rem" }} onSubmit={addNoteHandler}>
          <Input
            label="Judul"
            type="text"
            name="title"
            id="title"
            placeholder="Judul"
            value={title}
            onChange={onTitleChange}
            error={titleError}
          />
          <div className="form__input">
            <div
              className="form__input--div"
              data-placeholder={"Body"}
              contentEditable={true}
              onInput={onBodyInputHandler}
            ></div>
          </div>
          <Button
            type={"primary"}
            label={"Add Note"}
            isDisabled={titleError ? true : false}
            isSubmit={true}
          />
        </form>
      </Panel>
    </div>
  );
}

export default AddNote;
