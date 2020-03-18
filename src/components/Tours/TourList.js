import React, { useState, useEffect } from 'react';
import styles from '../../css/items.module.css';
import Tour from './Tour';
import StyledTitle from '../StyledTitle';
const TourList = ({ edges }) => {
  // const [tours, setTours] = useState([]);
  const [sortedTours, setSortedTours] = useState([]);
  useEffect(() => {
    // setTours(edges);
    setSortedTours(edges);
  }, [edges]);
  console.log(sortedTours);
  if (sortedTours) {
    return (
      <section className={styles.tours}>
        <StyledTitle title="our" subtitle="tours"></StyledTitle>
        <div className={styles.center}>
          {sortedTours.map(({ node }) => {
            return <Tour key={node.contentful_id} {...node}></Tour>;
          })}
        </div>
      </section>
    );
  }
  return null;
};

export default TourList;
