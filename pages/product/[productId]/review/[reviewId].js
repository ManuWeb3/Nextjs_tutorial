import { useRouter } from "next/router"

function Review() {
    const router = useRouter()
    // console.log(router)
    const { productId, reviewId } = router.query
    return <h1>Review # {reviewId} for Product # {productId}</h1>
}

export default Review