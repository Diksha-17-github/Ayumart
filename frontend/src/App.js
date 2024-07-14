
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Blog from './pages/Blog';
import Shop from './pages/Shop';
import Product from './pages/Product';
import Cart from './pages/Cart';
import LoginSignup from './pages/LoginSignup';
import Footer from './components/Footer/Footer';
import ShopContextProvider from './context/ShopContext';
import ProductNotFound from './pages/ProductNotFound';
import ProductDisplay from './components/ProductDisplay/ProductDisplay';
import SingleProduct from './components/ProductDisplay/SingleProduct';
import SignIn from './pages/SigningIn';
import Checkout from './pages/Checkout';

function App() {
  return (
    <ShopContextProvider>
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/login' element={<LoginSignup />} />
            <Route path='/signIn' element={<SignIn />} />
            <Route path='/' element={<Shop />} />
            <Route path='/Blog' element={<Blog />} />
            <Route path='/Product' element={<Product />} />
            <Route path='/products/:id' element={<ProductDisplay />} />
            <Route path='/ProductNotFound' element={<ProductNotFound />} />
            <Route path='/Cart' element={<Cart />} />
            <Route path='/checkout' element={<Checkout />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </ShopContextProvider>
  );
}

export default App;
