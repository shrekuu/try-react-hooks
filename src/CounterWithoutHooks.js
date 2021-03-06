import React, { Component } from 'react'

export default class CounterWithoutHooks extends Component {

  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  render () {
    const { count } = this.state

    // 这里当然是修改同一个 this.state.count 啦
    return (
      <div>
        <div>counter without hooks</div>
        <button onClick={() => this.setState({ count: count + 1 })}>-</button>
        <span>{count}</span>
        <button onClick={() => this.setState({ count: count - 1 })}>+</button>
      </div>
    )
  }
}