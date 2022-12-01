import React from 'react'
import './App.css';

class App extends React.Component {
  
  state = {
    Valor: '',
    BoxUm: '',
    BoxDois: '',
    TextArea: '',
  }
  
  click = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render(){
    const { Valor, BoxUm, BoxDois, TextArea } = this.state; 

    return (
      <>
        <select name='Valor' value={ Valor } onChange={ this.click }>
          <option value='Valor 1'>Valor 1</option>
          <option value='Valor 2'>Valor 2</option>
          <option value='Valor 3'>Valor 3</option>
        </select>
        <input name='BoxUm' value={ BoxUm } onChange={ this.click }></input>
        <input name='BoxDois' value={ BoxDois } onChange={ this.click }></input>
        <textarea name='TextArea' value={ TextArea } onChange={ this.click }></textarea>
      </>
    )
  }
}
export default App;
