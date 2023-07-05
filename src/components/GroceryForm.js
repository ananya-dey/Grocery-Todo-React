import React from "react";
import { useEffect, useState } from "react";

function GroceryForm(props) {
  const [data, setData] = useState({
    name: "",
    quantity: "",
  });

  useEffect(() => {
    if (props.edit) {
      setData({
        id: props.edit.value.id,
        name: props.edit.value.name,
        quantity: props.edit.value.quantity,
      });
    }
  }, [props]);

  function handleChange(e) {
    const { name, value } = e.target;
    setData((preValues) => ({ ...preValues, [name]: value }));
  }

  function submitFormData(e) {
    e.preventDefault();
    if (data.name === "" || data.quantity === "") {
      alert("Please fill up the form");
    } else {
      props.onSubmited(data);
      setData({ name: "", quantity: "" });
    }
  }

  return (
    <>
      <form className="grocery-form-section row g-3" onSubmit={submitFormData}>
        <>
          <div className="col-auto">
            <label>Name</label>
            <input
              type="text"
              name="name"
              className="item-name form-control"
              value={data.name}
              onChange={handleChange}
            />
          </div>
          <div className="col-auto">
            <label>Quantity</label>
            <input
              type="number"
              name="quantity"
              className="item-quantity form-control"
              value={data.quantity}
              onChange={handleChange}
            />
          </div>
          <div className="col-auto">
            <button type="submit" className="add-button btn btn-primary mt-4">
              {props.edit ? "Update Item" : "Add Item"}
            </button>
          </div>
        </>
      </form>
    </>
  );
}

export default GroceryForm;
