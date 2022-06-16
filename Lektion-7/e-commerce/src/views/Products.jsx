import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader/Loader'
import ProductCard from '../components/ProductCard'
import { getProductCatalog } from '../store/actions/productCatalogActions'

const Products = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProductCatalog())
  }, [dispatch])

  const { products, loading, error } = useSelector(state => state.productCatalog)



  return (
    <>
      { loading && <Loader /> }
      { error && <p>{error}</p> }

      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        { products.map(product => (
          <ProductCard key={product._id} product={product} />
        )) }
      </div>
    </>
  )
}

export default Products