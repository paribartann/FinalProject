import React, { useState } from "react";
import { connect } from "react-redux";
import addItems from "../actions/add_action";
import addCategories from "../actions/addCategory_action";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  Alert,
  View,
  ScrollView
} from "react-native";
import { CheckBox } from "react-native-elements";
import { Container, Item, Form, Input, Button, Label } from "native-base";
import { Dropdown } from "react-native-material-dropdown";

let AddForm = ({ dispatch, addCategory }) => {
  const [newCategory, setNewCategory] = useState("");
  const [productName, setProductName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [inStock, setInStock] = useState(false);

  console.log("ADD", addCategory);

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      enabled
      behavior="padding"
      keyboardVerticalOffset={100}
    >
      <ScrollView>
        <Container style={styles.container}>
          <View>
            <Text
              style={{ fontSize: 24, fontWeight: "bold", textAlign: "center" }}
            >
              ADD CATEGORY
            </Text>
          </View>
          <Form>
            <Item floatingLabel>
              <Label>New Category </Label>
              <Input
                placeholder="Enter the category name"
                onChangeText={text => {
                  setNewCategory(text);
                }}
                value = {newCategory}
              />
            </Item>

            <Button
              full
              rounded
              success
              style={{ marginTop: 20, backgroundColor: "#ffd147" }}
              onPress={() => {
                if (newCategory !== "") {
                  dispatch(addCategories({ value: newCategory }));
                  setNewCategory("");
                  Alert.alert("New category has been added!");
                } else {
                  Alert.alert("You cannot submit empty form!");
                }
              }}
            >
              <Text>Add Category</Text>
            </Button>
          </Form>
          <Text>{"\n"}</Text>
          <Text>{"\n"}</Text>

          {/*  ADD PRODUCT STARTS HERE!   */}
          <View>
            <Text
              style={{ fontSize: 24, fontWeight: "bold", textAlign: "center" }}
            >
              ADD PRODUCT
            </Text>
          </View>
          <Form style={{ padding: "3%" }}>
            <Item floatingLabel>
              <Label>PRODUCT NAME </Label>
              <Input
                placeholder="Enter the product name"
                onChangeText={text => {
                  setProductName(text);
                }}
                value={productName}
              />
            </Item>

            <Dropdown
              label="Category"
              data={addCategory}
              onChangeText={item => setCategory(item)}
            />

            <Item floatingLabel>
              <Label>PRICE : $</Label>
              <Input
                placeholder="Enter the price"
                onChangeText={text => {
                  setPrice(text);
                }}
                value={price}
              />
            </Item>

            <Item>
              <CheckBox
                checked={inStock}
                onPress={() => setInStock(!inStock)}
              />
              <Text>In Stock</Text>
            </Item>

            <Button
              full
              rounded
              success
              style={{ marginTop: 20, backgroundColor: "#ffd147" }}
              onPress={() => {
                let obj = {
                  category: category,
                  price: "$" + price,
                  stocked: inStock,
                  name: productName
                };
                if(category !== "" && price !== "" && productName !== "")
                { 
                dispatch(addItems(obj));
                setProductName("");
                setPrice("");
                setInStock(false);
                Alert.alert("Your product has been added!");
                }
                else
                {
                  Alert.alert("All items must be filled in!");
                }
              }}
            >
              <Text>Add Product</Text>
            </Button>
          </Form>
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

function mapStateToProps(state) {
  console.log("SearchBar state:", state);

  return {
    addCategory: state.addCategory.CATEGORY,
    checkStock: state.checkStock.inStockOnly,
    search: state.search.filterText
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "papayawhip",
    justifyContent: "center"
  }
});

AddForm = connect(mapStateToProps)(AddForm);
export default AddForm;
