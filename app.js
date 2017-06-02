var GroceryList = (prop) => (
  <ul>
  {
    prop.groceryItems.map( (item) => (
      <GroceryListItem item={item}/>
    ))
  }
  </ul>
);

var GroceryListItem = (prop) => (
  <li>{prop.item}</li>
);

// var Bread = () => (
//   <li>Bread</li>
// );

// var Cheese = () => (
//   <li>Cheese</li>
// );

ReactDOM.render(<GroceryList groceryItems={['Bread', 'Cheese']}/>, document.getElementById("app"));