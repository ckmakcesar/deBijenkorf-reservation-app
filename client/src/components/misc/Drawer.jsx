import React, { useRef, useEffect } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

import Header from './Header';
import Footer from './Footer';
import Button from './Button';
import { isEscKeyDown } from '../../utils/utils';

import styles from '../../styles/misc/Drawer.module.css';

const Drawer = ({
  isOpen,
  headerTitle,
  formId,
  confirmButtonText,
  confirmButtonTone,
  onClose,
  onConfirm,
  id,
  children,
}) => {
  const bodyRef = useRef(document.querySelector('body'));

  useEffect(() => {
    const updatePageScroll = () => {
      if (isOpen) {
        bodyRef.current.style.overflow = 'hidden';
      } else {
        bodyRef.current.style.overflow = '';
      }
    };
    updatePageScroll();
  }, [isOpen]);

  const handleSubmit = (payload) => {
    onConfirm(payload);
    onClose();
  };

  const confirmButtonOptionalProps = {};
  if (formId) {
    confirmButtonOptionalProps.isSubmit = true;
    confirmButtonOptionalProps.formId = formId;
  } else {
    confirmButtonOptionalProps.onClick = onConfirm;
  }

  // set focus to the overlay, and quit if ESCAPE is pressed
  const focusDiv = useRef();
  useEffect(() => {
    if (isOpen && focusDiv.current) {
      focusDiv.current.focus();
    }
  }, [isOpen]);
  const handleKeyDown = (e) => {
    if (isEscKeyDown(e)) {
      onClose();
    }
  };

  return (
    <div
      {...(id ? { id: `Drawer-${id}` } : null)} // optional id - should be unique
      className={styles.drawerContainer}
      ref={focusDiv}
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      <div className={clsx(styles.drawer, isOpen && styles.openedDrawer)}>
        <Header
          {...(id ? { id: `${id}-drawer` } : null)} // optional id - should be unique
          text={headerTitle}
        />

        {/* drawer content -> flex & overflow scrol */}
        <div className='flex-content'>
          {React.cloneElement(
            children,
            {
              formId,
              onSubmit: handleSubmit,
              onClose,
            }
          )}
        </div>

        <Footer
          {...(id ? { id: `${id}-drawer` } : null)} // optional id - should be unique
        >
          <div className={styles.drawerButtons}>
            <Button
              {...(id ? { id: `${id}-dialog-cancel` } : null)} // optional id - should be unique
              className='flex-grow'
              onClick={() => { onClose() }}
              text='Cancel'
              tone='secondary'
            />

            <Button
              {...(id ? { id: `${id}-drawer-confirm` } : null)} // optional id - should be unique
              className='flex-grow'
              text={confirmButtonText}
              tone={confirmButtonTone}
              {...confirmButtonOptionalProps}
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
Drawer.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  headerTitle: PropTypes.string.isRequired,
  formId: PropTypes.string,
  confirmButtonText: PropTypes.string,
  confirmButtonTone: PropTypes.string,
  onClose: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  id: PropTypes.string,
};

Drawer.defaultProps = {
  formId: '',
  confirmButtonText: 'Confirm',
  confirmButtonTone: '',
  id: '',
};

export default Drawer;