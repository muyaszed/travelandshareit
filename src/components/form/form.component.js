import React from 'react';
import styles from './form.module.scss';

const Form = ({ children, title }) => {

  return (
    <div className={styles.formContainer}>
      <div className={styles.form}>
        <h1>{title}</h1>
        { children }
      </div>
      
    </div>
    
  )
}

export default Form;