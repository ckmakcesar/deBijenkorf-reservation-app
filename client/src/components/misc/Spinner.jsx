import React from 'react';

import styles from '../../styles/misc/Spinner.module.css';

const Spinner = () => (
  <div className={styles.spinnerContainer}>
    <i className={`bx bx-loader bx-spin ${styles.spinner}`} />
  </div>
);

export default Spinner;