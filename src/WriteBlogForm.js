import React from "react";
import "./WriteBlogForm.css"




export default function WriteBlogForm(props){

    const [title,setTitle] = React.useState('')
    const [content,setContent] = React.useState(``)
    
    function handleSubmit (event){
        event.preventDefault()

     if (title.trim() === '' || content.trim() === '') {
            alert('Please fill in both title and content fields.');
            return;
        }
    const newPost = {
        title,
        content,
        date: new Date().toISOString()
    }
    props.onPost(newPost)
    setTitle('');
    setContent('');
    }

return (
    <div className="post-container">
        <form onSubmit={handleSubmit}>
        <div>
           <label htmlFor="title">Title:</label>
                  <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
        </div>
            <div>
                <label htmlFor="content">Content:</label>
                <textarea
                    id="content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    required
                ></textarea>
            </div>
        
            <button id="post-btn">Post</button>
        </form>
    </div>
)
    

}