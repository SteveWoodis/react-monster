import React from 'react';

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
    return(
      <div>
        {items.map(item => <h5 key={item.title} style={{marginLeft: '15px'}}>{item.title}</h5>)}
      </div>
    )
  }
}
export default monsterData;