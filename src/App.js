/* eslint-disable no-undef */
/* eslint-disable react/react-in-jsx-scope */
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Store from "./pages/store/Store";
import Navbar from "./shared/navbar/Navbar";
import DetailMenu from "./pages/detailMenu/DetailMenu";
import CreateFooter from "./shared/Footer/CretaeFooter";
import Loading from "./shared/Loading/Loading";
import Cart from "./pages/Cart/Cart";
import Login from "./pages/Login/Login";
import PaymentSuccess from "./pages/payment/payment_success";
import PaymentFailure from "./pages/payment/payment_failure";
import OrderPage from "./pages/OrderPage/OrderPage";
import Reviews from "./pages/reviews/Reviews";
import io from 'socket.io-client'
import About from "./pages/About/About";
export const socket = io.connect('http://localhost:3002')


/*
import PageNotFound from './components/PageNotFound/PageNotFound';
import Home from './components/Home/Home';
*/

function App() {
  window.localStorage.setItem("storeName", JSON.stringify("pepitas"))
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path={"/"} element={<Home />} />
        <Route path="/store" element={<Store />}></Route>
        <Route path="/menu/:id" element={<DetailMenu />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/login" element={<Login />} />
        <Route path="/orderSuccess/:code" element={<PaymentSuccess />} />
        <Route path="/orderFailure/" element={<PaymentFailure />} />
        <Route path="/pedidos" element={<OrderPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/reviews/:orderId" element={<Reviews />} />
        <Route path="*" element={<Loading notfound={true} />}></Route>
      </Routes>
      <CreateFooter />
    </div>
  );
}

export default App;
