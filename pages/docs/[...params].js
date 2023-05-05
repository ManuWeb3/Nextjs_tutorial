import { useRouter } from "next/router"

function Docs() {
    const router = useRouter()
    const { params = [] } = router.query    // avoid a runtime error getting thrown
    console.log(params)
  
    if(params.length == 3) {
        return ( 
            <h1>
                Docs page for {params[0]}, {params[1]}, {params[2]}
            </h1>
        )
    }
    else if(params.length == 2) {
        return ( 
            <h1>
                Docs page for {params[0]}, {params[1]}
            </h1>
        )
    }
    else if(params.length == 1) {
        return ( 
            <h1>
                Docs page for {params[0]}
            </h1>
        )
    }
}
export default Docs
