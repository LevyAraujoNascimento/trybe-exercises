import './App.css';
import React from 'react';

class App extends React.Component {
  state = {
    numClick1: 0,
    numClick2: 0,
    numClick3: 0,
  };
  click1 = () => {
    this.setState((estadoAnt, _props) => ({
      numClick1: estadoAnt.numClick1 + 1,
    }));
    console.log(this.state.numClick1);
  }
  click2 = () => {
    this.setState((estadoAnt, _props) => ({
      numClick2: estadoAnt.numClick2 + 1,
    }));
    console.log(this.state.numClick2);
  }
  click3 = () => {
    this.setState((estadoAnt, _props) => ({
      numClick3: estadoAnt.numClick3 + 1,
    }));
    console.log(this.state.numClick3);
  }
  render() {
    return (
    <>
    <button onClick={this.click1}>Botão 1</button>
    <button onClick={this.click2}>Botão 2</button>
    <button onClick={this.click3}>Botão 3</button>
    </>
    )
  }  
}

export default App;
