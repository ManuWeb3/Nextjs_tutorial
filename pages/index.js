import Link from "next/link"

function Home() {
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
        </>
    )
}

export default Home
