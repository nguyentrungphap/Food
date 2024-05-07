import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCartItems } from "../redux/cart/selector";

import Footer from "../components/Footer";

function App(props) {
  const cartItems = useSelector(selectCartItems)
  const handleIncrease = () => {
  };
  const handleDecrease = () => {
  };
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      <div>
        <h1>{props.count}</h1>
        <button onClick={handleIncrease}>+ Them</button>
        <button onClick={handleDecrease}>- Xoa di</button>
      </div>
    </>
  );
}


export default App;
