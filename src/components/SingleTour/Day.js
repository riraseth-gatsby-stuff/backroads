import React, { useState } from 'react';
import { FaAngleDown } from 'react-icons/fa';
import styles from '../../css/day.module.css';
const Day = ({ day, info }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(isOpen => !isOpen);
  };

  return (
    <article className={styles.day}>
      <h4>
        {day}
        <button className={styles.btn} onClick={handleClick}>
          <FaAngleDown></FaAngleDown>
        </button>
      </h4>
      {isOpen && <p>{info}</p>}
    </article>
  );
};

export default Day;
