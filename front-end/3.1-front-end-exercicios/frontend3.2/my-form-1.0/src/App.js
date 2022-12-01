import React from 'react'
import './App.css';

class App extends React.Component {
  
  state = {
    valor: '',
  }
  
  click = (event) => {
    this.setState({
      valor: event.target.value,
    });
  }

  render(){
    return (
      <>
        <select>
          <option>Valor 1</option>
          <option>Valor 2</option>
          <option>Valor 3</option>
        </select>
        <input value={ this.state.valor } onChange={ this.click }></input>
        <input></input>
        <textarea></textarea>
      </>
    )
  }
}
export default App;
