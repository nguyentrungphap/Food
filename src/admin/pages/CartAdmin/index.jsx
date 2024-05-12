import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCartAdminItems } from "../../redux/cartAdmin/selector";

function CartAdmin() {
  // const dispatch = useDispatch();
  const Items = useSelector(selectCartAdminItems);
  console.log({ Items });

  const renderCartAdmin = () => {
    console.log("a", Items);
    return Items.map((item) => (
      <tr key={item.id}>
        <td>{item.productName}</td>
        <td>{item.quatity}</td>
        <td>
          <button onClick={() => onUpdateCart(item.id, item.quantity + 1)}>
            +
          </button>
          <button
            onClick={() => onUpdateCart(item.id, item.quantity - 1)}
            disabled={item.quantity <= 1}
          >
            -
          </button>
          <button onClick={() => onRemoveFromCart(item.id)}>Remove</button>
        </td>
      </tr>
    ));
  };

  return (
    <div>
      <h1>Admin Cart Management</h1>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{renderCartAdmin()}</tbody>
      </table>
    </div>
  );
}

export default CartAdmin;
