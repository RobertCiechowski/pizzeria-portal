import React from 'react';
import styles from './Tables.scss';
import { Link } from 'react-router-dom';

const Tables = () => {
  return (
    <div className={styles.component}>
      <h2>Tables view</h2>
      <Link to='/panel/tables/booking/new'>New Booking</Link>
      <Link to='/panel/tables/events/new'>New Event</Link>
      <Link to='/panel/tables/booking/:id'>Booking</Link>
      <Link to='/panel/tables/events/:id'>Event</Link>
    </div>
  );
};

export default Tables;