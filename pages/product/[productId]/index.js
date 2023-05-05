import { useRouter } from "next/router"

function ProductDeatils() {
    const router = useRouter()
    // console.log(router)
    const productId = router.query.productId
    return <h1>ProductDeatils for Product # {productId}</h1>
}

export default ProductDeatils