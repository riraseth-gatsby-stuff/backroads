import React from 'react';
import StyledTitle from '../StyledTitle';
import styles from '../../css/services.module.css';
import services from '../../constants/services';
const Services = () => {
  return (
    <section className={styles.services}>
      <StyledTitle title="our" subtitle="services"></StyledTitle>
      <div className={styles.center}>
        {services.map((service, index) => {
          return (
            <article key={index} className={styles.service}>
              <span>{service.icon}</span>
              <h4>{service.title}</h4>
              <p>{service.text}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
