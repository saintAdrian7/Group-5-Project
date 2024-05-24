import React from "react"
import styled from 'styled-components'
import { FaHome,FaCompass,FaPaperPlane,FaUser,FaCog,FaPlusCircle } from "react-icons/fa";
import styles from './Sidebar.module.css'

export default function Nav(props){
    const { isCreate, setIsCreate } = props;

  return (
    
<div className={styles.sidebarContainer}>
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



  )
}
