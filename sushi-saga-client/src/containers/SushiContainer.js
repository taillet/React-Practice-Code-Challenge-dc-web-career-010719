import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const API = "http://localhost:3000/sushis"


class SushiContainer extends React.Component{
  constructor(){
    super()
    this.state = {sushi: [], currentIndex:0}
  }

  componentDidMount() {
    this.fetchSushi()
  }

  fetchSushi = () => {
    fetch(API)
    .then(res=>res.json())
    .then(sushi=>this.setState({sushi}))
  }

  moreSushi = () => {
      this.setState({currentIndex: this.state.currentIndex+4})
  }

  render()  {
    let i = this.state.currentIndex
  return (
    <Fragment>
      <div className="belt">
        {this.state.sushi.slice(i,i+4).map(sushi=><Sushi key={sushi.id} sushi={sushi} onHandleEat={this.props.onHandleEat} budget={this.props.budget} eatenSushi={this.props.eatenSushi}/>)
        }
        <MoreButton moreSushi={this.moreSushi}/>
      </div>
    </Fragment>
  )
  }
}

export default SushiContainer
