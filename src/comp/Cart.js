import React, { useState } from 'react';
import './Cart.css';

function Cart({ data,RemoveFromCart }) {
  const [quantities, setQuantities] = useState(
    data.map(() => 1) // Initialize each item's quantity to 1
  );

  const handleQuantityChange = (index, value) => {
    const newQuantities = [...quantities];
    newQuantities[index] = value;
    setQuantities(newQuantities);
  };

  const calculateTotalCost = () => {
    return data.reduce((total, item, index) => {
      return total + item.price * 80 * quantities[index];
    }, 0);
  };

  return (
    <div>
      <h2>Cart</h2>
      <table border={1}>
        <thead>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Cost per piece</th>
            <th>No of Pieces</th>
            <th>Total cost</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {data.map((val, key) => (
            <tr key={key}>
              <td><img className='cart-image' src={val.image} alt={val.title} /></td>
              <td>{val.title}</td>
              <td>{val.price * 80}</td>
              <td>
                <input
                  type='number'
                  value={quantities[key]}
                  min={1}
                  onChange={(e) => handleQuantityChange(key, parseInt(e.target.value))}
                />
              </td>
              <td>{val.price * 80 * quantities[key]}</td>
              <td onClick={()=>RemoveFromCart(val.id)}>Delete</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2>Total Cost</h2>
      <p>{calculateTotalCost()}</p>
    </div>
  );
}

export default Cart;
