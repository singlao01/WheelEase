import React from 'react';
import './SellBike.css';

function SellBike() {
  return (
    <div className="sell-bike">
      <h2>Sell Your Bike</h2>
      <form>
        <input type="text" placeholder="Bike Name" />
        <input type="text" placeholder="Model Year" />
        <input type="text" placeholder="Price" />
        <textarea placeholder="Description"></textarea>
        <button type="submit">Post Listing</button>
      </form>
    </div>
  );
}

export default SellBike;
