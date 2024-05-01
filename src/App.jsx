import Home from "./pages/Home";
import ProductList from "./pages/Productlist";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import Login from "./pages/Login";


const App = () => {
  return (
    <div>
  <Home/>
  <ProductList/>
  <Product/>
  <Register/>
  <Cart/>
  <Login/>
  </div>
  )
};

export default App;