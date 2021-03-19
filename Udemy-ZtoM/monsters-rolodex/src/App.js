import React, {Component} from 'react'
import {SearchBox} from './components/search-box/search-box.component.jsx'
import {CardList} from './components/card-list/card-list.component.jsx'
import './App.css';

class App extends Component {

  constructor() {
    super ();

    this.state = {
      monsters: [],
      searchField: ''
    }

    // this.handleChange = this.handleChange.bind(this); //this isnt needed because arrow function in handleChange
  }

  handleChange = (e) => { //arrow function binds this within the function
    this.setState({searchField: e.target.value});
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({monsters: users}))
  }

  render () {

    const { monsters, searchField} = this.state; // this is the equivalent of const monsters = this.state.monsters, etc. 
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox 
        onChange={this.handleChange}
        placeholder='search monsters' 
        />
        <CardList monsters={filteredMonsters} />
      </div>
    )
  }

}

export default App;
