import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {

  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(false)

  const getProduct = async () => {
    setLoading(true)
    const res = await axios.get('http://localhost:8080/products/' + id)
    setProduct(res.data)
    setLoading(false)
  } 

  useEffect(() => {
    getProduct()
  }, [])

  return (
    <div>
      {loading && <p>Loading...</p>}
      { product &&
        <div className='product-details'>
          <div className="product-title">{product.name}</div>
          <div className="product-desc">{product.desc.slice(0,300)}</div>
          <p className="red product-price">Price: ${product.price}</p>
        </div>
      }
    </div>
  )
}

export default ProductDetails