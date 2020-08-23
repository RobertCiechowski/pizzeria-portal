import React from 'react';
import styles from './Ordering.scss';
import { Link } from 'react-router-dom';

const Ordering = () => {
  return (
    <div className={styles.component}>
      <h2>Ordering view</h2>
      <Link to="/panel/ordering/order/new">New Order</Link>
      <Link to="/panel/ordering/order/:id">Order</Link>
    </div>
  );
};

export default Ordering;