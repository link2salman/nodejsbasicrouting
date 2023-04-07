import ProductCard from 'components/ProductCard'
import React from 'react'

const Products = () => {
    return (
        <div className='products'>
            {Array.from({ length: 25 }, (_, i) => {
                return <ProductCard id={i} key={i} />
            })}
        </div>
    )
}

export default Products