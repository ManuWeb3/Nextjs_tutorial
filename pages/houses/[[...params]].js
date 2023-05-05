import { useRouter } from "next/router"

function Houses() {

    const router = useRouter()
    const { params = [] } = router.query
    console.log(params[1])
    if(params[0] >= 1000 && params[1] <= 10000) {
        return <h1>Only house 1 is available</h1>
    }

    return (
        <>
            <h1>House # 1</h1>
            <h1>House # 2</h1>
            <h1>House # 3</h1>
        </>
    )

}

export default Houses
