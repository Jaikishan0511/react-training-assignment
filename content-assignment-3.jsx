import React from "react";
import styles from "./index.module.css";
const toggleData = () => {
  let counter = 0;
  const handleBoxClick = event => {
    if (counter < 9 && !event.target.innerText) {
      counter += 1;
      event.target.innerText = counter;
    }
  };

  return (
    <div className={styles.content}>
      <div className={styles.table}>
        <div className={styles.box} onClick={handleBoxClick} />
        <div className={styles.box} onClick={handleBoxClick} />
        <div className={styles.box} onClick={handleBoxClick} />
      </div>
      <div className={styles.table}>
        <div className={styles.box} onClick={handleBoxClick} />
        <div className={styles.box} onClick={handleBoxClick} />
        <div className={styles.box} onClick={handleBoxClick} />
      </div>
      <div className={styles.table}>
        <div className={styles.box} onClick={handleBoxClick} />
        <div className={styles.box} onClick={handleBoxClick} />
        <div className={styles.box} onClick={handleBoxClick} />
      </div>
    </div>
  );
};

export default toggleData;
