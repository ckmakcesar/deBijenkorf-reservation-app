import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

import styles from '../../styles/misc/Header.module.css';

const Header = ({
  text,
  smaller,
}) => (
  <div className={styles.headerContainer}>
    <div className={clsx(styles.headerText, smaller && styles.reducedHeaderText)}>
      {text}
    </div>
  </div>
);

// *********************************************************************************************************************
// PROPS
// *********************************************************************************************************************
Header.propTypes = {
  text: PropTypes.string.isRequired,
  smaller: PropTypes.bool,
};

Header.defaultProps = {
  smaller: false,
}

export default Header;
