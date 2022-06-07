import React, { Component } from 'react'
import './App.css';
import AddProductForm from './components/AddProductForm';
import Product from './components/Product';

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      products: [
        { id: Date.now().toString(), name: 'Product 1', desc: 'produktbeskrivning' }
      ]
    }
  }

  componentDidMount() {
    console.log('mounted')
  }
  componentDidUpdate() {
    console.log('updated')
  }

  addProduct = (product) => {
    this.setState({ products: [...this.state.products, product] })
  }

  render() {
    const { products } = this.state
    return (
      <div>
        <AddProductForm addProduct={this.addProduct} />
        {
          products.map(product => (
            <Product key={product.id} product={product} />
          ))
        }
      </div>
    )
  }
}
