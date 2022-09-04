import React from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import './app.scss'
import { useState, useEffect } from "react";


function App () {

  const [robots, setRobots] = useState([]);
  const [searchField, setSearchField] = useState('');
  const [count, setCount] = useState(0);
  

useEffect(() => {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response =>  response.json())
    .then(users => setRobots(users))
    console.log(count);
}, [count]) 

  const onSearchChange = (filter) => {
    setSearchField(filter)  
  }


    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase())
    })
    if (!robots.length) {
      return <h1>Loading</h1>
    } else {
      return (
        <div className="tc">
          <h1>RoboFriends</h1>
          <button onClick={() => setCount(count + 1)}>Click Me {count} </button>
          <button onClick={() => setCount(0)}>Reset</button>
          <SearchBox onSearchChange={onSearchChange}/>
          <Scroll>
            <CardList robots={filteredRobots}/>
          </Scroll>
        </div>
      )
    }
}



export default App;