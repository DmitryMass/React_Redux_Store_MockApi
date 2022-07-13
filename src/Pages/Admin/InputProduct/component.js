import React from 'react';

import styles from '../Form/index.m.css';

const InputProduct = ({
  field: { onBlur, onChange, name, value },
  form,
  type,
  id,
}) => {
  const error = form.errors[name] && form.touched[name];

  return (
    <div className={styles.form__input}>
      <label htmlFor={id}>{id}</label>
      <input
        className={error ? 'input__error' : 'input'}
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  );
};

export default InputProduct;
