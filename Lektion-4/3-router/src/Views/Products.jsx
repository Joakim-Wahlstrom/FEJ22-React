import { useState, useEffect } from 'react'
import axios from 'axios'
import ProductListItem from '../components/ProductListItem'

const Products = () => {

  const [products, setProducts] = useState([])

  const getProducts = async () => {
    const res = await axios.get('http://localhost:8080/products')
    setProducts(res.data)
  }

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <div className='shop'>
      {
         products.map(product => (
           <ProductListItem key={product.id} product={product} />
         ))
      }
    </div>
  )
}

export default Products