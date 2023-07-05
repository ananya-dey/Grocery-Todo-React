import React from "react";
import { BiEditAlt } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";
import "../App.css";

function Grocery(props) {
  const { id, name, quantity } = props.groceryItem;

  function deleteHandler() {
    props.onDeletedHandler(id);
  }

  function editHandler() {
    props.onEditHandler(props);
  }

  return (
    <>
      <li className="d-flex justify-content-between align-items-start p-2 g-col-6">
        <div className="ms-2 me-auto">
          <div className="fw-bold">{name}</div>
        </div>
        <span className="badge bg-primary rounded-pill">{quantity}</span>
        <div className="col-auto">
          <BiEditAlt onClick={editHandler} />
          <RiDeleteBin6Line onClick={deleteHandler} />
        </div>
      </li>
    </>
  );
}

export default Grocery;
