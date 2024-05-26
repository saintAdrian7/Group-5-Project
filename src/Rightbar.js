import React, { useEffect } from "react";
import styled from 'styled-components';
import { FaEdit, FaTrash, FaBars, FaTimes } from 'react-icons/fa';
import styles from './Sidebar.module.css';

export default function Rightbar({ posts = [], onDelete, onEdit }) {
    const [showRightSidebar, setShowRightSidebar] = React.useState(true);

    const trendingPosts = posts.slice(0, 3);

    function handleDelete(index) {
        const isConfirmed = window.confirm("Are you sure you want to delete this post?");
        if (isConfirmed) {
            onDelete(index);
        }
    }

   
    useEffect(() => {
        function handleClickOutside(event) {
            if (showRightSidebar && !document.querySelector('.right-bar-container').contains(event.target) && !document.querySelector('.hamburger-right-sidebar').contains(event.target)) {
                setShowRightSidebar(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showRightSidebar]);

    return (
        <>
            {showRightSidebar 
                ? <FaTimes className="hamburger-right-sidebar" onClick={() => setShowRightSidebar(!showRightSidebar)} />
                : <FaBars className="hamburger-right-sidebar" onClick={() => setShowRightSidebar(!showRightSidebar)} />}
            
            <div className={`right-bar-container ${showRightSidebar ? 'show' : ''}`}>
                <h4>TBN BLOGGING APP</h4>
                <div className="trending-posts">
                    <h5>Trending Posts</h5>
                    {trendingPosts.length > 0 ? (
                        <ul>
                            {trendingPosts.map((post, index) => (
                                <li key={index}>
                                    <div className="trending-post">
                                        <h7>Title: {post.title}</h7>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>No trending posts</p>
                    )}
                    <hr />
                </div>
                <div className="user-posts">
                    <h6>Your Posts</h6>
                    <ul>
                        {posts.length > 0 ? (
                            posts.map((post, index) => (
                                <li className="user-post" key={index}>
                                    <h7>Title: {post.title}</h7>
                                    <div className={styles.btnEl}></div>
                                    <button onClick={() => onEdit(index)} className={styles.btnEl1}><FaEdit /></button>
                                    <button onClick={() => handleDelete(index)} className={styles.btnEl2}><FaTrash /></button>
                                </li>
                            ))
                        ) : (
                            <p>No posts yet</p>
                        )}
                    </ul>
                </div>
            </div>
        </>
    );
}
