import React, { Component } from 'react'
import logo from './logo.svg'

import HeaderHome from './HeaderHome'
import AnuncioHome from './AnuncioHome'



class App extends Component {
  render(){
    return(
      <div className="App">
        <HeaderHome />
           <div className="container">
           <AnuncioHome />
           <AnuncioHome />
           <AnuncioHome />
           </div>
       </div>

    )

  }
}

export default App;
