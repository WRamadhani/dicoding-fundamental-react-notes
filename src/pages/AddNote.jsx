import React from "react";
import PropTypes from "prop-types";
import { showFormattedDate } from "../utils";
import Button from "../components/Button";

class AddNote extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
    };
  }

  onTitleInputHandler = (event) => {
    this.setState(() => {
      return {
        title: event.target.value,
      };
    });
  };

  onBodyInputHandler = (event) => {
    this.setState(() => {
      return {
        body: event.target.innerHTML,
      };
    });
  };

  errorHandler = () => {
    if (this.state.title == "" || this.state.body == "") {
      return { status: true, message: "Judul dan isi note harus diisi" };
    }
    if (this.state.title.length < 3)
      return { status: true, message: "Judul note minimal 3 karakter" };
    if (this.state.body.length < 5)
      return { status: true, message: "Isi note minimal 5 karakter" };
    return { status: false, message: "" };
  };

  render() {
    return (
      <form className="new__note">
        <div className="new__note--heading">
          <div>
            <p>{showFormattedDate(new Date())}</p>
            <input
              required
              type="text"
              placeholder="Judul note..."
              onInput={this.onTitleInputHandler}
            />
          </div>
        </div>
        <div>
          <div
            className="new__note--body"
            data-placeholder="Isi note...."
            contentEditable="true"
            onInput={this.onBodyInputHandler}
          ></div>
        </div>
        <div className="new__note--error">{this.errorHandler().message}</div>
        <div className="new__note--action">
          <Button
            label={"Buat Note"}
            type="tambah"
            funcParams={{ title: this.state.title, body: this.state.body }}
            onClick={this.props.onAdd}
            redirect="/"
            isDisable={this.errorHandler().status}
          />
        </div>
      </form>
    );
  }
}

AddNote.propTypes = {
  onAdd: PropTypes.func.isRequired,
};

export default AddNote;
