import logo from '../../assets/Logo.png';
import classes from './Header.module.css';
import { useContext } from 'react';
import CartContext from '../../store/cartcontext.jsx';
import ShowModalContext from '../../store/ShowModalContext.jsx';

export default function Header() {
  const cartCtx = useContext(CartContext);
  const showModalCtx = useContext(ShowModalContext);

  // total quantity of items in cart
  const totalQuantity = cartCtx.items.reduce((currentNumber, item) => {
    return currentNumber + item.quantity;
  }, 0);

  function onClickHandler() {
    if (totalQuantity > 0) {
      showModalCtx.showModalHandler('cart');
    } else {
      showModalCtx.showModalHandler('empty');
    }
  }

  return (
    <>
      <header>
        <div className={classes.overlay}></div>
        <div className={classes.logo}>
          <img src={logo} alt="logo" />
          <span>koshary Safwat</span>
        </div>
        <div className={classes.cart}>
          <button
            className={totalQuantity > 0 ? classes.found : ''}
            onClick={onClickHandler}
          >
            <i className="fa-solid fa-cart-plus"></i>
            <span>{totalQuantity}</span>
          </button>
        </div>
      </header>
    </>
  );
}
