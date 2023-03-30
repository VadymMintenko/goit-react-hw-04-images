// import { Backdrop, ModalWindow } from './modal.styled';
// import { createPortal } from 'react-dom';
// import PropTypes from 'prop-types';
// import React from 'react';
// const modalRoot = document.querySelector('#modal-root');

// export class Modal extends React.Component {
//   componentDidMount() {
//     window.addEventListener('keydown', this.handleKeyDown);
//   }

//   componentWillUnmount() {
//     window.removeEventListener('keydown', this.handleKeyDown);
//   }
//   handleKeyDown = e => {
//     if (e.code === 'Escape') {
//       this.props.closeModal();
//     }
//   };

//   handleBackDropClic = e => {
//     if (e.currentTarget === e.target) {
//       this.props.closeModal();
//     }
//   };

//   render() {
//     return createPortal(
//       <Backdrop className="overlay" onClick={this.handleBackDropClic}>
//         <ModalWindow className="modal">{this.props.children}</ModalWindow>
//       </Backdrop>,
//       modalRoot
//     );
//   }
// }

// Modal.propTypes = {
//   closeModal: PropTypes.func.isRequired,
// };
import { Backdrop, ModalWindow } from './modal.styled';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { useEffect } from 'react';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ closeModal, children }) => {
  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      closeModal();
    }
  };

  const handleBackDropClic = e => {
    if (e.currentTarget === e.target) {
      closeModal();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  return createPortal(
    <Backdrop className="overlay" onClick={handleBackDropClic}>
      <ModalWindow className="modal">{children}</ModalWindow>
    </Backdrop>,
    modalRoot
  );
};

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
