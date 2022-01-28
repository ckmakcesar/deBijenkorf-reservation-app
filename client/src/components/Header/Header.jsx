import React from 'react';
import PropTypes from 'prop-types';

const Header = ({
  text,
}) => {
  // TODO

  return (
    <div className='root'>
      <h1>{text}</h1>

    </div>
  );
};

// *********************************************************************************************************************
// PROPS
// *********************************************************************************************************************
Header.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Header;
