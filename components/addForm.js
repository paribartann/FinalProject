import React from "react";
import { connect } from "react-redux";
import addItems from "../actions/add_action";

import "../css/addForm.css";

let AddForm = ({ dispatch }) => {
  let name, category, price, inStock;

  return (
    <div id="formContainer">
      <h3>Please add the details</h3>
      <form
        id="formC"
        onSubmit={e => {
          e.preventDefault();
          var obj = {
            category: category.value,
            price: price.value,
            stocked: inStock,
            name: name.value
          };
          dispatch(addItems(obj));
          category.value = "";
          price.value = "";
          name.value = "";
        }}
      >
        <div>
          <label className="theLabels"> Product Name: </label>
          <input
            placeholder="PRODUCT NAME"
            ref={node => {
              name = node;
            }}
          />
        </div>

        <div>
          <label className="theLabels"> Product Category: </label>
          <input
            placeholder="CATEGORY NAME"
            ref={node => {
              category = node;
            }}
          />
        </div>

        <div>
          <label className="theLabels"> Product 's Price:</label>
          <input
            placeholder="PRICE"
            ref={node => {
              price = node;
            }}
          />
        </div>

        <div>
          <label className="theLabels"> In Stock: </label>
          <input
            type="radio"
            id="stockChoice1"
            name="InStock"
            value="true"
            onChange={ () => inStock = true}
            checked
          />
          <label> Yes </label>

          <input
            type="radio"
            id="stockChoice2"
            name="InStock"
            value="false"
            onChange={ () => inStock = false}
          />
          <label> No </label>
        </div>
        <input type="submit" />
      </form>
    </div>
  );
};

AddForm = connect()(AddForm);
export default AddForm;
