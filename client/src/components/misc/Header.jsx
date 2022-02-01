import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

import styles from '../../styles/misc/Header.module.css';

const Header = ({
  text,
  smaller,
  id,
}) => (
  <div className={styles.headerContainer}>
    <div
      {...(id ? { id: `Header-${id}` } : null)} // optional id - should be unique
      className={clsx(styles.headerText, smaller && styles.reducedHeaderText)}
    >
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
  id: PropTypes.string,
};

Header.defaultProps = {
  smaller: false,
  id: '',
}

export default Header;
