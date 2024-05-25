import React, { useState } from "react"
import "./Nav.css"


export default function Nav(){
    const[search,setSearch] = useState('')
    return(
        <div className="nav-container">
            <form>
                <input 
                 type="text"
                 id="search"
                 value={search}
                 placeholder="Search here"
                 onChange={(e) => setSearch(e.target.value)}
                ></input>
            </form>
            <p>Recent posts</p>
        </div>
    )
}