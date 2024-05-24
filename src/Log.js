import React from "react"
import Blog from "./Blog"

export default function (){
const [email,setEmail] = React.useState('')
const [password,setPassword] = React.useState('')
const [ConfirmPassword,setConfirmPassword] = React.useState('')
const [error,setError]  = React.useState('')
const [isRegistered, setIsRegistered] = React.useState(false)

function handleSubmit(event){
    event.preventDefault()

if(password !== ConfirmPassword){
setError("The password do not match!")
return

}else{
    localStorage.setItem('user', JSON.stringify({ email, password }));
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setError('');
    setIsRegistered(true);
}

}




    return (
<>
    <h1>TBN BLOGGING APP</h1>
    {isRegistered ?(<Blog /> ) :(<div className="container">

       
<div className="img-container">
    <img src="./picture1.jpg" alt="image"  />
    <img src="./picture2.jpg" alt="people picture" />
</div>

<div className="form-container">
    <form onSubmit={handleSubmit}>
    <label htmlFor="email">Email:</label>
            <input
                type="email"
                id="email"
                value={email}
                placeholder="Enter email"
                onChange={(event) =>setEmail(event.target.value)}
                required
            />
    <label htmlFor="password">Password:</label>
            <input
                type="text"
                id="password"
                value={password}
                placeholder="Enter Password"
                onChange={(event) => setPassword(event.target.value)}
                required
            />
     <label htmlFor="confirm-password">Confirm Password:</label>
            <input
                type="text"
                id="confrim-password"
                value={ConfirmPassword}
                placeholder="Confirm Password"
                onChange={(event) => setConfirmPassword(event.target.value)}
                required
            />

         {error && <p className="error">{error}</p>}  
    <button id="sign-btn">SIGN UP</button>
        
    </form>
</div>

</div>)}
       
     
</>
    )
}