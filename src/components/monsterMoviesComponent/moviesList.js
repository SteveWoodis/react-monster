import React from 'react';
import './movie.css';

class monsterData extends React.Component {
  constructor() {
    super();
    this.state = {startpage: "", items: [], total_pages: ""};
    this.firstList = this.firstList.bind(this);
    // this.previousRecords = this.previousRecords.bind(this);
    // this.nextRecords = this.nextRecords.bind(this);
  }

  firstList() {
    fetch('https://api.themoviedb.org/3/search/movie?api_key=2c8889cb44ec3da352062419180957cf&language=en-US&query=werewolf&page=1&include_adult=false&year=>1960')
      .then(response => response.json())
      .then(({results: items}) => this.setState({items})
       // ({page: items}) => this.setState({startpage}),
       // ({total_pages: total_pages}) => this.setState({total_pages})
      )
    console.log("ITEMS",this.state.items);
    console.log("STARTPAGE", this.state.startpage);
    console.log("TOTALPAGES", this.state.total_pages);
  }

  previousRecords() {
    console.log("Previous records");
  }

  nextRecords() {
    console.log("Next records");
  }

  componentWillMount() {
    this.firstList();
  }

  render() {
    let items = this.state.items
    let imageBaseUrl = "https://image.tmdb.org/t/p/w185_and_h278_bestv2";
    return (
      <div className="main">
        {items.map(item =>
          <div key={item.id} className="movieBox">
            <div><img src={imageBaseUrl + item.poster_path} alt="poster"/></div>
            <div>
              <div className="movieTitle">{item.title}</div>
              <div className="movieOverview">{item.overview}</div>
            </div>
          </div>)}
        <div>
          <button onClick={() => {
            this.previousRecords()
          }}>Previous
          </button>
          <button onClick={() => {
            this.nextRecords()
          }}>Next
          </button>
        </div>
      </div>
    )
  }
}
export default monsterData;