import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

import styles from '../../styles/misc/Footer.module.css';

const Footer = ({
  reducedPadding,
  id,
  children,
}) => (
  <div className={styles.footerRoot}>
    <hr />

    <div
      {...(id ? { id: `Footer-${id}` } : null)} // optional id - should be unique
      className={clsx(styles.footerWrapper, reducedPadding && styles.footerReducedPadding)}
    >
      {children}
    </div>
  </div>
);

// *********************************************************************************************************************
// PROPS
// *********************************************************************************************************************
Footer.propTypes = {
  reducedPadding: PropTypes.bool,
  id: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Footer.defaultProps = {
  reducedPadding: false,
  id: '',
}

export default Footer;
