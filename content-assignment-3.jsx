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

// Css

.content {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 300px;
  background: black;
}
.table {
  display: flex;
}
.box {
  background: red;
  border: 2px solid black;
  float: left;
  padding: 0;
  width: 80px;
  height: 80px;
  text-align: center;
  font-size: 40px;
  font-weight: bold;
  line-height: 80px;
}
