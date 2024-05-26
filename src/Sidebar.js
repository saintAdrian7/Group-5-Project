import React, { useEffect } from "react";
import styled from 'styled-components';
import { FaHome, FaCompass, FaPaperPlane, FaUser, FaCog, FaPlusCircle, FaBars, FaTimes } from "react-icons/fa";
import styles from './Sidebar.module.css';

export default function Nav(props) {
    const { isCreate, setIsCreate } = props;
    const [showSidebar, setShowSidebar] = React.useState(false);

    useEffect(() => {
        function handleClickOutside(event) {
            if (showSidebar && !document.querySelector('.sidebarContainer').contains(event.target) && !document.querySelector('.hamburger-sidebar').contains(event.target)) {
                setShowSidebar(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [showSidebar]);

    return (
        <>
            {showSidebar ? (
                <FaTimes className="hamburger-sidebar" onClick={() => setShowSidebar(!showSidebar)} />
            ) : (
                <FaBars className="hamburger-sidebar" onClick={() => setShowSidebar(!showSidebar)} />
            )}
            <div className={`sidebarContainer ${showSidebar ? 'show' : ''}`}>
                <div className={styles.navItem}>
                    <div className={styles.navIcon} onClick={() => setIsCreate(false)}><FaHome /></div>
                    <div className={styles.navText} onClick={() => setIsCreate(false)}>Home</div>
                </div>
                <div className={styles.navItem}>
                    <div className={styles.navIcon}><FaCompass /></div>
                    <div className={styles.navText}>Explore</div>
                </div>
                <div className={styles.navItem}>
                    <div className={styles.navIcon}><FaPaperPlane /></div>
                    <div className={styles.navText}>Messages</div>
                </div>
                <div className={styles.navItem}>
                    <div className={styles.navIcon}><FaUser /></div>
                    <div className={styles.navText}>Account</div>
                </div>
                <div className={styles.navItem}>
                    <div className={styles.navIcon}><FaCog /></div>
                    <div className={styles.navText}>Settings</div>
                </div>
                <button onClick={() => setIsCreate(true)} className={styles.createButton}>
                    <FaPlusCircle style={{ marginRight: '10px' }} />
                    Create
                </button>
            </div>
        </>
    );
}
