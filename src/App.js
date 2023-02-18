import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Home from './pages/home/Home'
import Register from './pages/register/Register';
import Store from './pages/store/Store'
import Navbar from "./components/home/navbar/Navbar";
import DetailMenu from "./pages/detailMenu/DetailMenu";
/*
import PageNotFound from './components/PageNotFound/PageNotFound';
import Home from './components/Home/Home';
*/


function App() {
  const location = useLocation();
  const pathname = location.pathname;
  return (
    <div>
      {pathname !== "/" && <Navbar />}
      <Routes>
        <Route exact path={"/"} element={<Home />}> </Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/store" element={<Store />}></Route>
        <Route path="/store/menu/:id" element={<DetailMenu />}></Route>
        {/* <Route path="*" element={<PageNotFound/>}></Route> */}
      </Routes>
    </div>
  );
}

export default App;
