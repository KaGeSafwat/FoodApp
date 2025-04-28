import { createContext, useReducer } from 'react';
import cartReducer from '../utility/reducerFn';
import getLocalStorageData from '../utility/getLocalStorageData';
import { toast, Zoom } from 'react-toastify';

const CartContext = createContext({
  items: [],
  addItem: () => {},
  removeItem: () => {},
  clearCart: () => {},
  deleteItem: () => {},
});

export const CartContextProvider = ({ children }) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, {
    items: getLocalStorageData('cart'),
  });

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: 'ADD_ITEM', item: item });
    toast.success(`${item.name} added to cart!`, {
      position: 'top-center',
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark',
      transition: Zoom,
    });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: 'REMOVE_ITEM', id: id });
  };

  const clearCartHandler = () => {
    dispatchCartAction({ type: 'CLEAR_CART' });
  };

  const deleteItemFromCartHandler = (id) => {
    dispatchCartAction({ type: 'DELETE_ITEM', id: id });
  };

  const cartContextCtx = {
    items: cartState.items,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    clearCart: clearCartHandler,
    deleteItem: deleteItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContextCtx}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
