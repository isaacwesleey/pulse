import React from 'react';
import './Popup.css';

function Popup(props) {
  const { isOpen, onClose } = props;

  if (!isOpen) {
    return null;
  }

  return (
    <div className='popup'>
      <div className='popup-content'>
        <button id='popup-close' onClick={onClose}>
          X
        </button>
        {props.children}
      </div>
    </div>
  );
}

export default Popup;
