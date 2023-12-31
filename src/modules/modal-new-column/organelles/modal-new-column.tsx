import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import "../styles/modal-new-column.css";

import { addColumn } from "@stores/projects/actions";
import { doesColumnExist } from "@functions/does-column-exist";
import { RootState } from "@stores/store";
import ReactDOM from "react-dom";

interface IModalNewColumn {
  changeIsAdd: () => void;
  projectNumber: string;
}
export const ModalNewColumn = (props: IModalNewColumn) => {
  const projectState = useSelector((state: RootState) => state.projectsState);
  const inputRef = useRef<HTMLInputElement>(null);
  const [title, setTitle] = useState<string | null>(null);
  const dispatch = useDispatch();
  const handleModalNewColumn = () => {
    if (
      title &&
      !doesColumnExist(props.projectNumber, title, null, projectState.projects)
    ) {
      dispatch(addColumn(props.projectNumber, title));
      props.changeIsAdd();
    } else {
      console.error("A column with the same name already exists");
    }
  };
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);
  return ReactDOM.createPortal(
    <div className="Modal__Fixed" onClick={() => props.changeIsAdd()}>
      <form
        className="ModalNewColumn Modal__Block"
        onClick={(e) => e.stopPropagation()}
        onSubmit={(e) => {
          e.preventDefault();
          handleModalNewColumn();
        }}
      >
        <div className="ModalNewColumn__Title Modal__Block__Title">
          Add of Columns
        </div>
        <input
          ref={inputRef}
          className="ModalNewColumn__Input Modal__Block__Input"
          required
          placeholder="Write heading"
          type="text"
          value={title || ""}
          minLength={4}
          maxLength={40}
          onChange={(event) => setTitle(event.target.value)}
        />
        <button
          className="ModalNewColumn__Button Modal__Block__Button"
          type="submit"
        >
          Create
        </button>
        <button
          className="ModalNewColumn__Button Modal__Block__Button"
          onClick={props.changeIsAdd}
        >
          Cancel
        </button>
      </form>
    </div>,
    document.body
  );
};
