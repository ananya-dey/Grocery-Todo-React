import "./App.css";
import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import GroceryForm from "./components/GroceryForm";
import GroceryList from "./components/GroceryList";

function App() {
  const [groceries, setGroceries] = useState([]);

  function addGrocery(grocery) {
    setGroceries([...groceries, { id: uuidv4(), ...grocery }]);
  }

  function deleteGroceryHandler(id) {
    const freshGroceryData = groceries.filter((grocery) => grocery.id !== id);
    localStorage.setItem("Groceries", JSON.stringify(freshGroceryData));

    if (groceries.length === 0) {
      localStorage.removeItem("Groceries");
    }
    setGroceries(freshGroceryData);
  }

  function updateGroceryHandler(grocery) {
    setGroceries((prev) =>
      prev.map((item) => (item.id === grocery.id ? grocery : item))
    );
    setEdit({
      isEditable: false,
      value: grocery,
    });
  }

  const [edit, setEdit] = useState({
    isEditable: false,
    value: null,
  });

  function editGroceryHandler(value) {
    console.log(value);
    if (value.groceryItem.id) {
      setEdit({
        isEditable: true,
        value: value.groceryItem,
      });
    }
  }

  useEffect(() => {
    const getGroceryList = JSON.parse(localStorage.getItem("Groceries"));
    if (getGroceryList) {
      setGroceries(getGroceryList);
    }
  }, []);

  useEffect(() => {
    if (groceries.length) {
      localStorage.setItem("Groceries", JSON.stringify(groceries));
    }
  }, [groceries]);

  return (
    <div className="card position-absolute top-50 start-50 translate-middle">
      <div className="crad-body container-fluid">
        <h1>Grocery TODO</h1>
        {edit.isEditable === true ? (
          <GroceryForm edit={edit} onSubmited={updateGroceryHandler} />
        ) : (
          <GroceryForm onSubmited={addGrocery} />
        )}
        <GroceryList
          groceryList={groceries}
          getGroceryEditId={editGroceryHandler}
          getGroceryId={deleteGroceryHandler}
        />
      </div>
    </div>
  );
}

export default App;
