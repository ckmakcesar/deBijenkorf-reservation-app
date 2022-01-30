import React, { useRef, useEffect } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

import Header from './Header';
import Footer from './Footer';
import Button from './Button';
import { isEscKeyDown } from '../../utils/utils';

import styles from '../../styles/misc/Dialog.module.css';

const Dialog = ({
  isOpen,
  headerTitle,
  confirmButtonText,
  confirmButtonTone,
  onClose,
  onConfirm,
  children,
}) => {
  if (!isOpen) return null;

  const handleConfirm = (payload) => {
    onConfirm(payload);
    onClose();
  };

  // set focus to the overlay, and quit if ESCAPE is pressed
  const focusDiv = useRef();
  useEffect(()=>{
    if (isOpen && focusDiv.current) {
      focusDiv.current.focus();
    }
  },[isOpen]);
  const handleKeyDown = (e) => {
    if (isEscKeyDown(e)) {
      onClose();
    }
  };

  return (
    <div
      className={styles.dialogBackground}
      onClick={onClose} // clicking the opaque background will close the dialog
      ref={focusDiv}
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      <div
        className={clsx(styles.dialogBody, isOpen && styles.openedDialog)}
        onClick={(e) => e.stopPropagation()} // pressing on dialog body should not close the dialog
      >
        <Header text={headerTitle} />

        {/* drawer content -> flex & overflow scrol */}
        <div className='flex-content'>
          {children}
        </div>

        <Footer reducedPadding>
          <div className={styles.dialogButtons}>
            <Button
              className='flex-grow'
              text={confirmButtonText}
              onClick={handleConfirm}
              tone={confirmButtonTone}
            />

            <Button
              className='flex-grow'
              onClick={() => { onClose() }}
              text='Cancel'
              secondary
            />
          </div>
        </Footer>
      </div>

    </div>
  );
}

// *********************************************************************************************************************
// PROPS
// *********************************************************************************************************************
Dialog.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  headerTitle: PropTypes.string.isRequired,
  confirmButtonText: PropTypes.string,
  confirmButtonTone: PropTypes.string,
  onClose: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

Dialog.defaultProps = {
  confirmButtonText: 'Confirm',
  confirmButtonTone: '',
};

export default Dialog;