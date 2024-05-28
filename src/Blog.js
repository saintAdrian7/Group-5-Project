import React from "react";
import WriteBlogForm from "./WriteBlogForm";
import Sidebar from "./Sidebar";
import Nav from "./Nav";
import Rightbar from "./Rightbar";

export default function Blog() {
  const initialPosts = JSON.parse(localStorage.getItem('posts')) || [];
  const [posts, setPosts] = React.useState(initialPosts);
  const [isCreate, setIsCreate] = React.useState(false);
  const [editIndex, setEditIndex] = React.useState(null);
  const [postEdit, setPostEdit] = React.useState(null);
  const [searchTerm, setSearchTerm] = React.useState('');

  React.useEffect(() => {
    localStorage.setItem('posts', JSON.stringify(posts));
  }, [posts]);

  function deletePost(index) {
    const newPosts = [...posts];
    newPosts.splice(index, 1);
    setPosts(newPosts);
  }

  function handlePost(newPost) {
    if (editIndex !== null) {
      const updatedPosts = [...posts];
      updatedPosts[editIndex] = newPost;
      setPosts(updatedPosts);
      setEditIndex(null);
      setPostEdit(null);
    } else {
      setPosts([...posts, newPost]);
    }
    setIsCreate(false);
  }

  function handleEdit(index) {
    setEditIndex(index);
    setPostEdit(posts[index]);
    setIsCreate(true);
}


  const navProps = {
    isCreate,
    setIsCreate,
    searchTerm,
    setSearchTerm
  };

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="blog-container">
      <Sidebar {...navProps} />
      <div>
        {isCreate ? (
          <WriteBlogForm onPost={handlePost} postEdit={postEdit} />
        ) : (
          <>
            <Nav {...navProps} />
            {filteredPosts.length > 0 ? (
              <div className="content-container">
                <ul>
                  {filteredPosts.map((post, index) => (
                    <li className="post" key={index}>
                      <h3>Title: {post.title}</h3>
                      <p>{post.content}</p>
                      <p className="date">Date: {new Date(post.date).toLocaleString()}</p>
                    
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <>
                <p className="message">There are no posts!</p>
                <p className="message2">Click create to add post!</p>
              </>
            )}
          </>
        )}
      </div>
      <div>
        {!isCreate && <Rightbar onEdit={handleEdit} onDelete={deletePost} posts={filteredPosts} />}
      </div>
    </div>
  );
}
