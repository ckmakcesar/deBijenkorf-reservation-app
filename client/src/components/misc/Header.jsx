import React from 'react';
import PropTypes from 'prop-types';

import styles from '../../styles/misc/Header.module.css';

const Header = ({
  text,
}) => (
  <div className={styles.headerRoot}>
    <div className={styles.headerText}>
      {text}
    </div>
  </div>
);

// *********************************************************************************************************************
// PROPS
// *********************************************************************************************************************
Header.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Header;
