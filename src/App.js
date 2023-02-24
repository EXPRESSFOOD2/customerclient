/* eslint-disable react/react-in-jsx-scope */
import { Routes, Route } from "react-router-dom";
import Home from './pages/home/Home'
// import Register from './pages/register/Register';
import Store from './pages/store/Store'
import Navbar from "./shared/navbar/Navbar";
import DetailMenu from "./pages/detailMenu/DetailMenu";
import Login from "./pages/Login/Login";
import CreateFooter from "./shared/Footer/CretaeFooter";
import Loading from "./shared/Loading/Loading";
import Cart from "./pages/Cart/Cart";


//! socket

import io from 'socket.io-client'
export const socket = io('')

/*
import PageNotFound from './components/PageNotFound/PageNotFound';
import Home from './components/Home/Home';
*/

function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path={"/"} element={<Home />}></Route>
        {/* <Route path="/register" element={<Register />}></Route> */}
        <Route path="/store" element={<Store />}></Route>
        <Route path="/store/menu/:id" element={<DetailMenu />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="*" element={<Loading notfound={true} />}></Route>
      </Routes>
      <CreateFooter />
    </div>
  );
}

export default App;
