import React from "react";
import styles from "./AppContainer.module.css";

const AppContainer = (props) => {
  return <div className={styles.left}>{props.children}</div>;
};

export default AppContainer;
