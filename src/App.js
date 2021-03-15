import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {  }
  render() { 
    return ( 
      <>
      <div className="App">
      <p>React app</p>
      <button>Przycisk</button>
      <br/>
      <label>Text 
        <input type="text" />
      </label>
      </div>
      </>
     );
  }
}
 
export default App;