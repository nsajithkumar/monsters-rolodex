import React, {Component} from 'react';

import { CardList } from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monstors: [],
      searchKey: ""
    }
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then( response => response.json())
    .then( users => this.setState({monstors: users}));
  }

  handleChange = (e) => {
    this.setState({ searchKey: e.target.value })
  }

  render() {

    const { monstors, searchKey } = this.state;
    const filteredMonstors = monstors.filter( (monstor) => 
      monstor.name.toLowerCase().includes(searchKey.toLowerCase())
    )

    return(
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox 
          placeholder = "Search Monstors"
          handleChange = { this.handleChange }
        />
        <CardList monstors = { filteredMonstors } />
      </div>
    );
  }

}

export default App;
