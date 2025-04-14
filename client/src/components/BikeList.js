import React from 'react';
import './BikeList.css';

function BikeList() {
  const bikes = ['Yamaha R15',
  'Royal Enfield Classic 350',
  'Honda Shine',
  'Scooty Zest 110',
  'Bajaj Pulsar 125',
  'Hero Splendor Plus',
  'Bicycle MTB 26',
  'Electric Scooter',
  'Suzuki Gixxer SF',
  'TVS Apache RTR 160',
  'KTM Duke 200',
  'Honda Activa 6G',
  'Vespa SXL 150',
  'Aprilia SR 150',
  'Mahindra Mojo 300',];

  return (
    <div className="bike-list">
      <h2>Available Bikes</h2>
      <ul>
        {bikes.map((bike, index) => (
          <li key={index}>{bike}</li>
        ))}
      </ul>
    </div>
  );
}

export default BikeList;
