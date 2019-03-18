import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
import Form from './components/Form';


// Endpoint!
class App extends Component {
  state = {budget: 100, eatenSushi: []}

  onHandleEat = (sushi) => {
    this.setState({budget: this.state.budget-sushi.price, eatenSushi: [...this.state.eatenSushi, sushi]})
  }

  onAddMoney = (event) => {
    event.preventDefault()
    this.setState({budget:this.state.budget+=parseInt(event.target[0].value)})
  }

  render() {
    return (
      <div className="app">
        <SushiContainer onHandleEat={this.onHandleEat} budget={this.state.budget} eatenSushi={this.state.eatenSushi}/>
        <Table budget={this.state.budget} eatenSushi={this.state.eatenSushi}/>
        <Form onAddMoney={this.onAddMoney}/>
      </div>
    );
  }
}

export default App;
