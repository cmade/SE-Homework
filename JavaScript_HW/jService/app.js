class App extends React.Component {
  state = {
    baseURL: 'http://jservice.io/api/random',
    searchURL: '',
    jeopardy: '',
    score: 0,
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
              jeopardy: json[0],
            }),
              (err) => console.log(err);
          });
      }
    );
  };

  render() {
    return (
      <div id="container">
        <h1>Welcome to Jeopardy!</h1>
        <Score score={this.state.score} jeopardy={this.state.jeopardy} />
        <h2>Let's Play!</h2>
        <br></br>
        <br></br>
        <input
          type="submit"
          id="jeopardy"
          onClick={this.handleSubmit}
          onChange={this.handleChange}
          value="Get Question"
        />
        <br></br>
        <br></br>
        {this.state.jeopardy ? <Answer jeopardy={this.state.jeopardy} /> : ''}
        {this.state.jeopardy ? <Question jeopardy={this.state.jeopardy} /> : ''}
      </div>
    );
  }
}

class Score extends React.Component {
  constructor(props) {
    super(props);
    this.state = { score: 0 };
  }

  render() {
    console.log(this.props.jeopardy.value);
    return (
      <div>
        <h2>
          Score:<span id="num">{this.state.score}</span>
        </h2>
        <br></br>
        <br></br>
        <button
          id="decrease"
          onClick={() => {
            if (this.props.jeopardy.value === undefined) {
              this.setState({
                score: 0,
              });
            } else {
              this.setState({
                score: this.state.score - this.props.jeopardy.value,
              });
            }
          }}
        >
          Decrease
        </button>
        <button
          id="increase"
          onClick={() => {
            if (this.props.jeopardy.value === undefined) {
              this.setState({
                score: 0,
              });
            } else {
              this.setState({
                score: this.state.score + this.props.jeopardy.value,
              });
            }
          }}
        >
          Increase
        </button>
        <button
          id="reset"
          onClick={() =>
            this.setState({
              score: 0,
            })
          }
        >
          Reset
        </button>
        <br></br>
        <br></br>
      </div>
    );
  }
}
class Decrease extends React.Component {
  render() {
    return <div></div>;
  }
}

class Answer extends React.Component {
  render() {
    return (
      <div>
        <h2>
          <span>Category:</span>
        </h2>
        <h3>
          <span class="white">{this.props.jeopardy.category.title}</span>
        </h3>
        <br></br>
        <br></br>
        <h2>
          <span>Points:</span>
        </h2>
        <h3>
          <span class="white">{this.props.jeopardy.value}</span>
        </h3>
        <br></br>
        <br></br>
        <h2>
          <span>Answer</span>:
        </h2>
        <h3>
          <span class="white">{this.props.jeopardy.question}</span>
        </h3>
        <br></br>
        <br></br>
      </div>
    );
  }
}

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((state) => ({
      isToggleOn: !state.isToggleOn,
    }));
  }

  render() {
    return (
      <button id="question" onClick={this.handleClick}>
        {this.state.isToggleOn ? (
          'Click to reveal Question'
        ) : (
          <h2>{'What is ' + this.props.jeopardy.answer}</h2>
        )}
      </button>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
