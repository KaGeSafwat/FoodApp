import Header from './components/headerComponent/Header';
import Items from './components/itemsComponent/Items';
import CartModal from './components/cartModalComponent/CartModal';
import CheckModal from './components/checkModalComponent/CheckModal';
import OrderModal from './components/orderModalComponent/OrderModal';
import EmptyModal from './components/emptyModal/EmptyModal';
import { ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <Header />
      <OrderModal />
      <CheckModal />
      <CartModal />
      <EmptyModal />
      <main>
        <Items />
      </main>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Zoom}
      />
    </>
  );
}

export default App;
