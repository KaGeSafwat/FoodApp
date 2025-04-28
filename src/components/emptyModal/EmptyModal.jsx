import classes from './EmptyModal.module.css';
import { useContext } from 'react';
import ShowModalContext from '../../store/ShowModalContext';
import Modal from '../../UI/modalUI/Modal.jsx';

export default function EmptyModal() {
  const showModalCtx = useContext(ShowModalContext);

  return (
    <Modal
      isOpen={showModalCtx.showModal === 'empty'}
      onClose={
        showModalCtx.showModal === 'empty'
          ? showModalCtx.closeModalHandler
          : null
      }
      className={classes.modal}
    >
      <div className={classes.modalContent}>
        <h2 className={classes.modalHeader}>Your Cart</h2>
        <div className={classes.emptyCart}>
          <p>Your cart is empty</p>
          <button
            className={classes.continueShopping}
            onClick={showModalCtx.closeModalHandler}
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </Modal>
  );
}
