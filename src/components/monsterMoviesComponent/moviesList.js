import React from 'react';
import './movie.css';

class monsterData extends React.Component{
  constructor(){
    super();
    this.state = {items: []}
  }
  componentWillMount(){
    fetch('https://api.themoviedb.org/3/search/movie?api_key=2c8889cb44ec3da352062419180957cf&language=en-US&query=fairy&page=1&include_adult=false&region=fairy&year=>1960')
      .then(response => response.json())
      .then( ({results: items}) => this.setState({items}))
  }

  render(){
    let items = this.state.items
    let imageBaseUrl = "https://image.tmdb.org/t/p/w185_and_h278_bestv2";
    return(
      <div className="main">
        {items.map(item =>
          <div key={item.id} className="movieBox">
             <div className="backdropPic"><img src={imageBaseUrl + item.backdrop_path}/></div>
              <div className="info">
                <div className="movieTitle">{item.title}</div>
                <div className="movieOverview">{item.overview}</div>
              </div>
          </div>)}
      </div>
    )
  }
}
export default monsterData;