import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from '../../styles/misc/Button.module.css';

const Button = ({
  onClick,
  text,
  disabled,
  isSubmit,
  formId,
  boxIconClassName,
  tone,
  id,
}) => {
  const [hover, setHover] = useState(false);

  const handleClick = (e) => {
    if (!disabled) {
      onClick(e);
    }
  };
  const handleMouseEnter = () => {
    if (!disabled) {
      setHover(true);
    }
  };
  const handleMouseLeave = () => {
    if (!disabled) {
      setHover(false);
    }
  };

  const conditionalColorTone = (disabled
    ? styles.disabled
    : {
      [styles.hover]: hover && !tone,
      [styles[tone]]: !hover && tone,
      [styles[tone + 'Hover']]: hover && tone,
    }
  );

  return (
    <div
      className={clsx(
        styles.buttonContainer,
        conditionalColorTone,
        disabled && styles.disabledBorder
      )}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span
        className={clsx(
          styles.buttonOuter,
          !tone && hover && styles.buttonOuterHover,
          conditionalColorTone
        )}
      >
        {boxIconClassName
          ? <i
            className={clsx(
              'bx', styles.buttonIcon, boxIconClassName,
              conditionalColorTone
            )}
          />
          : null
        }
        <input
          {...(id ? { id: `Button-${id}` } : null)} // optional id - should be unique
          className={clsx(
            styles.button,
            boxIconClassName && styles.buttonReducedLeftPadding,
            conditionalColorTone
          )}
          type={isSubmit ? 'submit' : 'button'}
          form={isSubmit && formId ? formId : ''}
          value={text.toUpperCase()}
        />
      </span>
    </div >
  );
};

// *********************************************************************************************************************
// PROPS
// *********************************************************************************************************************
Button.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string,
  disabled: PropTypes.bool,
  isSubmit: PropTypes.bool,
  formId: PropTypes.string,
  boxIconClassName: PropTypes.string,
  tone: PropTypes.string,
  id: PropTypes.string,
};

Button.defaultProps = {
  onClick: () => { },
  text: 'OK',
  disabled: false,
  isSubmit: false,
  formId: '',
  boxIconClassName: '',
  tone: '',
  id: '',
};

export default Button;
