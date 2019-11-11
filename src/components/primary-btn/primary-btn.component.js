import React from 'react';
import { Link } from 'react-router-dom';
import styles from './primary-btn.module.scss';

const PrimaryBtn = ({ title, testid, to="", type, onClick }) => (
  type === 'Link' ? 
  
    <Link data-testid={testid} to={to} className={styles.primaryBtnLink} >
      {title}
    </Link>
  :
  
    <button data-testid={testid} onClick={onClick} className={styles.primaryBtn}>{title}</button>
  
)

export default PrimaryBtn;