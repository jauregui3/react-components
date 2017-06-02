var GroceryList = (props) => (
  <ul>
  {
    props.groceryItems.map( (item) => (
      <GroceryListItem item={item}/>
    ))
  }
  </ul>
);

// var GroceryListItem = (prop) => (
//   <li>{prop.item}</li>
// );

class GroceryListItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      bold: false
    };
  }


  onListItemHover() {
    this.setState({
      bold: !this.state.bold
    });
  }

  render() {

    var style = {
      fontWeight: this.state.bold ? 'bold'  : 'normal'
    }

    return (
      <li style={style} onHover={this.onListItemHover.bind(this)}>{this.props.item}</li>
    );
  };

}

// var Bread = () => (
//   <li>Bread</li>
// );

// var Cheese = () => (
//   <li>Cheese</li>
// );

ReactDOM.render(<GroceryList groceryItems={['Bread', 'Cheese']}/>, document.getElementById("app"));