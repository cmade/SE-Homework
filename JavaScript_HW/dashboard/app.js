//Visitor class with the chart from the chartjs library
class Visitors extends React.Component {
  render() {
    return (
      <div className="item5 visitors ">
        <h2>
          Website Visitors: <span className="p2">148,825</span>
        </h2>

        <canvas id="myChart" width="800" height="290"></canvas>
      </div>
    );
  }
}
//Sentiment class with sentiment analysis
class Sentiment extends React.Component {
  render() {
    return (
      <div className="item4 sentiment">
        <h2>Sentiment Analysis</h2>
        <p className="p2">966</p>
        <p className="p2">364</p>
        <p className="p2">763</p>
      </div>
    );
  }
}
//Rating class with rating data
class Rating extends React.Component {
  render() {
    return (
      <div className="item3 rating">
        <h2> Average Rating</h2>
        <p className="p1">4.7</p>
      </div>
    );
  }
}
//Reviews class with review data
class Reviews extends React.Component {
  render() {
    return (
      <div className="item2 reviews">
        <h2>Reviews</h2>
        <p className="p1">2,304</p>
      </div>
    );
  }
}
//Sidebar class with navigation
class Sidebar extends React.Component {
  render() {
    return (
      <nav className="item1">
        <a href="https://github.com/cmade" target="_blank" className="active">
          <img src="https://avatars2.githubusercontent.com/u/10188746?s=460&u=ebd07b3fe70fbaf057d8305f7e611d70be2448e1&v=4" />
        </a>
        <a href="#Dashboard" className="active">
          Dashboard
        </a>
        <a href="#Widget">Widget</a>
        <a href="#Reviews">Reviews</a>
        <a href="#Customers">Customers</a>
        <a href="#Analysis">Online Analysis</a>
        <a href="#Settings">Settings</a>
      </nav>
    );
  }
}
//App class containing all components of the dashboard
class App extends React.Component {
  render() {
    return (
      <div className="main">
        <Sidebar />
        <Reviews />
        <Rating />
        <Sentiment />
        <Visitors />
      </div>
    );
  }
}
//Render app to html
ReactDOM.render(<App />, document.querySelector('main'));
//Chartjs: font color
Chart.defaults.global.defaultFontColor = '#c20245';
//Chartjs: font size
Chart.defaults.global.defaultFontSize = 18;
//Chartjs: number of visits
var visits = [5850, 52122, 148825];
//Chartjs: months
var months = ['November', 'December', 'January'];
//Chartjs: target myChart id in visitors compononent
var ctx = document.getElementById('myChart').getContext('2d');
//Chartjs: gradient added to line chart background
var gradientFill = ctx.createLinearGradient(800, 0, 100, 0);
gradientFill.addColorStop(0, 'rgba(244, 144, 128, 1)');
gradientFill.addColorStop(1, 'rgba(128, 182, 244, 0.6)');
//Chartjs: describe new chart object
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: months,
    datasets: [
      {
        label: 'Number of Visitors',
        data: visits,
        backgroundColor: gradientFill,
        pointBorderColor: 'red',
      },
    ],
  },
});
