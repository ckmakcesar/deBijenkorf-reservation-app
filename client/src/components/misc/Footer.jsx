import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

import styles from '../../styles/misc/Footer.module.css';

const Footer = ({
  reducedPadding,
  children,
}) => (
  <div className={styles.footerRoot}>
    <hr />

    <div className={clsx(styles.footerWrapper, reducedPadding && styles.footerReducedPadding)}>
      {children}
    </div>
  </div>
);

// *********************************************************************************************************************
// PROPS
// *********************************************************************************************************************
Footer.propTypes = {
  reducedPadding: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

Footer.defaultProps = {
  reducedPadding: false,
}

export default Footer;
