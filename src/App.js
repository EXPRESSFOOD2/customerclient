import { Routes, Route } from "react-router-dom";
//import { useLocation } from "react-router-dom";
import Home from './pages/home/Home'
import Register from './pages/register/Register';
/*
import PageNotFound from './components/PageNotFound/PageNotFound';
import Home from './components/Home/Home';

import RecipeForm from './components/Forms/Recipe-Form';
import RecipeFull from './components/Recipe/Recipe-Full';
*/


function App() {
  //const location = useLocation();
  //const pathname = location.pathname;
  return (
    <div>
      <Routes>
          <Route exact path={"/"} element={<Home/>}> </Route>
          <Route path="/register" element={<Register/>}></Route>
          {/* <Route path="/menu/:id" element={<RecipeFull />}></Route>
          <Route path="/menu" element={<RecipeForm/>}></Route>
          <Route path="*" element={<PageNotFound/>}></Route> */}
      </Routes>
    </div>
  );
}

export default App;
