// Static generation without external data
// All content known at the Build time already by the page / developer.

import Link from "next/link"
import { useRouter } from "next/router"

function Home() {

    const router = useRouter()
    const handleClick = () => {
        console.log("Placing your order...")
        router.push("/product")
        
        // router.replace("/product")

        // (1). "at index.js of /product, clicking on "Product#3" and then "back" button
        // still takes to home page (pages/index.js)
        // => Link - "replace" still runs

        //(2). /product/.....whatever you may think to navigae to can be added
        // static / dynamic

        // (3). to replace the history instead of pushing the URL on the stack -> replace
    }

    return (
        <>
            <h1>Hello Duniya!!</h1>
            <Link href="/blog" legacyBehavior>
                <a>To Blog</a>
            </Link>
            <br></br>
            <br></br>
            <Link href="/product" legacyBehavior>
                <a>To Product</a>
            </Link>
            <br></br>
            <br></br>
            <button onClick={handleClick}>
                Place Order
            </button>
        </>
    )
}

export default Home
