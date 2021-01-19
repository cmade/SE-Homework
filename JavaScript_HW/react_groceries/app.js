class App extends React.Component {
  state = {
    groceries,
    item: '',
    brand: '',
    units: '',
  };
  itemChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  };

  removeItem = (e) => {
    let count = 0;
    var array = [...this.state.groceries]; // make a separate copy of the array
    var index = array.indexOf(groceries[count]);
    this.state.groceries.map((grocery) => {
      if (grocery.item == e.target.id) {
        console.log(array);
        array.splice(index, 1);
        this.setState({ groceries: array });
      }
      count++;
    });
  };
  submit = (event) => {
    event.preventDefault();
    console.log('submit');
    const item = {
      item: this.state.item,
      brand: this.state.brand,
      units: this.state.units,
      quantity: 1,
      isPurchased: false,
    };
    this.setState({
      groceries: [item, ...this.state.groceries],
      item: '',
      brand: '',
      units: '',
    });
  };
  render() {
    return (
      <div>
        <h2>Grocery List</h2>
        <form onSubmit={this.submit}>
          <input
            id="item"
            onChange={this.itemChange}
            type="text"
            value={this.state.item}
            placeholder="Add Item"
          ></input>
          <input
            id="brand"
            onChange={this.itemChange}
            type="text"
            value={this.state.brand}
            placeholder="Add Brand"
          ></input>
          <input
            id="units"
            onChange={this.itemChange}
            type="text"
            value={this.state.units}
            placeholder="Add number of units"
          ></input>
          <button className="button">Submit</button>
        </form>
        <div>
          <ol>
            {this.state.groceries.map((grocery) =>
              !grocery.isPurchased ? (
                <li>
                  {grocery.item}
                  <button
                    onClick={this.removeItem}
                    groceries={this.props.groceries}
                    id={grocery.item}
                    className="buton"
                  >
                    remove
                  </button>
                </li>
              ) : (
                ''
              )
            )}
          </ol>
        </div>
      </div>
    );
  }
}
const groceries = [
  {
    item: 'Juice',
    brand: 'Minute Made',
    units: '1 liters',
    quantity: 1,
    isPurchased: false,
  },
  {
    item: 'Popcorn',
    brand: 'Orville Redenbacher',
    units: '3 oz',
    quantity: 1,
    isPurchased: false,
  },
  {
    item: 'Cookies',
    brand: 'Double Stuffed Oreos',
    units: '16 oz',
    quantity: 1,
    isPurchased: false,
  },
];
ReactDOM.render(<App />, document.querySelector('.container'));
