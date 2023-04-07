import React, { useEffect } from 'react'
import { useRouter } from "next/router";

const ProductDetail = () => {
    const router = useRouter()
    const { product_id } = router?.query
    return (
        <div>ProductDetail {product_id}</div>
    )
}

export default ProductDetail