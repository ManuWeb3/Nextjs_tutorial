import Link from "next/link"
// comment outside JSX is usual JS, as below
// destructured prop passed in Product()
function Product({productId = 100}) {
    return (
    <>
        <Link href="/" legacyBehavior>
            <a>Back to Home page</a>
        </Link>
        <Link href="/product/1" legacyBehavior>
            <a>
                <h1>Product 1</h1>
            </a>
        </Link>
        <Link href="/product/2" legacyBehavior>
            <a>
                <h1>Product 2</h1>
            </a>
        </Link>
        <Link href="/product/3" legacyBehavior replace>
            <a>
                <h1>Product 3</h1>
            </a>
        </Link>
        <Link href={`/product/${productId}`} legacyBehavior>
            <a>
                <h1>Product {`${productId}`}</h1>
                {/* <h1>Product {productId}</h1> --> also works */}
            </a>
        </Link>
    </>
    )
}

export default Product