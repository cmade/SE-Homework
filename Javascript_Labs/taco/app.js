class App extends React.Component {
  state = {
    baseURL: 'http://taco-randomizer.herokuapp.com/random/?full-tack=true',
    searchURL: '',
    taco: '',
  };

  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState(
      {
        searchURL: this.state.baseURL,
      },
      () => {
        fetch(this.state.searchURL)
          .then((response) => response.json())
          .then((json) => {
            console.log(json);
            this.setState({
              taco: json,
            }),
              (err) => console.log(err);
          });
      }
    );
  };

  render() {
    return (
      <div>
        <h1>Random Taco</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="submit"
            id="taco"
            onChange={this.handleChange}
            value="Get Taco"
          />
        </form>
        {this.state.taco ? <TacoInfo taco={this.state.taco} /> : ''}
      </div>
    );
  }
}
class TacoInfo extends React.Component {
  render() {
    return (
      <div>
        <h1>
          <span>Shell</span>:{' '}
          <span class="yellow">{this.props.taco.shell.name}</span>
        </h1>
        <p>{this.props.taco.shell.recipe}</p>
        <h1>
          <span>Mixin</span>:{' '}
          <span class="yellow">{this.props.taco.mixin.name}</span>
        </h1>
        <p>{this.props.taco.mixin.recipe}</p>
        <h1>
          <span>Condiment</span>:{' '}
          <span class="yellow">{this.props.taco.condiment.name}</span>
        </h1>
        <p>{this.props.taco.condiment.recipe}</p>
        <h1>
          <span>Seasoning</span>:{' '}
          <span class="yellow">{this.props.taco.seasoning.name}</span>
        </h1>
        <p>{this.props.taco.seasoning.recipe}</p>
        <h1>
          <span>Base Layer</span>:{' '}
          <span class="yellow">{this.props.taco.base_layer.name}</span>
        </h1>
        <p>{this.props.taco.base_layer.recipe}</p>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
