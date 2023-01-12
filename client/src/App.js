import "./App.css";
import { Routes, Route } from "react-router-dom";
import  Home from "./pages/Home.pages";
import  Restaurant  from "./pages/Restaurant.pages";
import GoogleAuth from "./pages/GoogleAuth.pages";
import Overview from "./components/Restaurant/Overview.components";
import OrderOnline from "./components/Restaurant/OrderOnline.components";
import Reviews from "./components/Restaurant/Reviews.components";
import Photos from "./components/Restaurant/Photos.components";
import Menu from "./components/Restaurant/Menu.components";
import Checkout from "./pages/Checkout.pages";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<navigator to="/delivery" />} />
        <Route path="/:type" element={<Home />} />
        <Route path="/restaurant/:id" element={<Restaurant />} />
        <Route path="/google/token" element={<GoogleAuth />} />
        <Route path="//restaurant/:id/overview" element={<Overview />} />
        <Route path="//restaurant/:id/order-online" element={<OrderOnline />} />
        <Route path="//restaurant/:id/reviews" element={<Reviews />} />
        <Route path="//restaurant/:id/photos" element={<Photos />} />
        <Route path="//restaurant/:id/menu" element={<Menu />} />
        <Route path="/checkout/orders" element={<Checkout />} />
      </Routes>
    </>
  );
}

export default App;
