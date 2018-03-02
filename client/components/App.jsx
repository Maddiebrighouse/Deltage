import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Login from './Login'
import Graph from './Graph'
import Volumes from './Volumes'
import BestTrade from './BestTrade'
import DollarValues from './DollarValues'
import ExchangeDisplay from './ExchangeDisplay'

class App extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return (
      <Router>
        <div className = 'app'>
          <Graph />
          <BestTrade/>
          <DollarValues />
          <ExchangeDisplay />
        </div>
      </Router>
    )
  }

}

export default App
