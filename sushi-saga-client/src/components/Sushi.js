import React, { Fragment } from 'react'

class Sushi extends React.Component {
  constructor(props) {
    super(props)
    let isEaten= this.props.eatenSushi.includes(this.props.sushi) ? true : false
    this.state = {eaten: false}
  }

  eatSushi = () => {
    if(this.props.budget >= this.props.sushi.price && this.state.eaten != true) {
      this.setState({eaten: true})
      this.props.onHandleEat(this.props.sushi)
    } else if (this.state.eaten === true) {
      alert("You've already eaten this sushi.")
    } else {
      alert("You don't have enough $$ to buy this sushi.")
    }
  }

  render() {
  let {name,img_url,price} = this.props.sushi
  return (
    <div className="sushi">
      <div className="plate"
           onClick={this.eatSushi}>
        {this.state.eaten ? null : <img src={img_url} width="100%" />}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  )}
}

export default Sushi
