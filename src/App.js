import React from "react"
import Blog from "./Blog"
import Authenticate from "./Authenticate"

export default function (){
const [isRegistered, setIsRegistered] = React.useState(false)

    return (
<>
    <h1>TBN BLOGGING APP</h1>
    {isRegistered ?(<Blog /> ) :<Authenticate  setIsRegistered={setIsRegistered} />}
       
     
</>
    )
}