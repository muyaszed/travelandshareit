import React from 'react';
import styles  from './inputText.module.scss';

const InputText = React.forwardRef(({ email, type, testId, autoFocus=false, onChange, placeHolder }, ref) => {
  return (
    <input 
      className={styles.formControl}
      autoFocus
      data-testid={testId}
      placeholder={placeHolder}
      type={type}
      name={type}
      value={email}
      onChange={onChange}
      ref={ref}
    />
  )
})

export default InputText;