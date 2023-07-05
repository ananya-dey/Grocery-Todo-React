import React from "react";
import Grocery from "./Grocery";

function GroceryList(props) {
  function onDeletedHandler(id) {
    props.getGroceryId(id);
  }

  function onEditHandler(value) {
    props.getGroceryEditId(value);
  }

  const renderedList = props.groceryList.map((value, key) => (
    <Grocery
      key={key}
      groceryItem={value}
      onEditHandler={onEditHandler}
      onDeletedHandler={onDeletedHandler}
    />
  ));
  return (
    <>
      <ul className="grid gap-0 row-gap-3">{renderedList}</ul>
    </>
  );
}

export default GroceryList;
