import { useState } from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import { store } from "../redux/store";
import { decreaseCount, increaseCount } from "../redux/action";
import { connect } from "react-redux";

function App(props) {
  const handleIncrease = () => {
    props.increaseCount();
  };
  const handleDecrease = () => {
    props.decreaseCount();
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

function mapStatetoProps(state) {
  return {
    count: state.count.count,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    increaseCount: () => store.dispatch(increaseCount()),
    decreaseCount: () => store.dispatch(decreaseCount()),
  };
}
export default connect(mapStatetoProps, mapDispatchToProps)(App);
