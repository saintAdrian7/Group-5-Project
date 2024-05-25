import React from "react";
import WriteBlogForm from "./WriteBlogForm";
import Sidebar from "./Sidebar";
import Nav from "./Nav";


export default function Blog(){
const [posts,setPosts] = React.useState([])

const [isCreate,setIsCreate] = React.useState(false)


function handlePost(newPost) {
    
    setPosts([...posts, newPost]);
}
const navProps = {
    isCreate,
    setIsCreate
}

return(
<div className="blog-container"> 
<Sidebar  {...navProps}/>
   <div>
   {isCreate ? (
  <WriteBlogForm onPost={handlePost} />
) : (
  <>
    <Nav />
    <div className="blog-container">
      <ul>
        {posts.map((post, index) => (
          <div className="post" key={index}>
            <li>
              <h3>{post.title}</h3>
              <p>{post.content}</p>
              <p>{post.date}</p>
            </li>
          </div>
        ))}
      </ul>
    </div>
  </>
)}

    </div>
      
    
</div>)


    
}