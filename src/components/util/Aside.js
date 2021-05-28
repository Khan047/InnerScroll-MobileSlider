import React from 'react';
import styles from './Aside.module.css'

const Aside = (props) => {
  return (
    <aside className={styles.aside}>
      <img src={props.img} alt="Right View" className={styles['aside-img']}/>
    </aside>
  );
};

export default Aside;
