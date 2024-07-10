// Write your code here

import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  onIncresed = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state

    return (
      <div className="container">
        <h1>The Button as been Clicked by {count}times </h1>

        <p>Click the button incressed the count</p>
        <button className="button" onClick={this.onIncresed} alt="button">
          ClickMe
        </button>
      </div>
    )
  }
}
export default ClickCounter
