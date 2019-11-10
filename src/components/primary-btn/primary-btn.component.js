import React from 'react';
import { Link } from 'react-router-dom';
import styles from './primary-btn.module.scss';

const PrimaryBtn = (props) => (
  <div className={styles.primeBtnContainer}>
    <Link data-testid="addItenararyLink" to="/additenarary" className={styles.primaryBtn} >
      {props.title}
    </Link>
  </div>
)

export default PrimaryBtn;