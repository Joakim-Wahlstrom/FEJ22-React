import React, { Component } from 'react'

export default class Product extends Component {

  // constructor(props) {
  //   super(props)

  // }

  render() {
    const { product } = this.props
    return (
      <div>
        <h2>{product.name}</h2>
      </div>
    )
  }
}
