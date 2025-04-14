// // 
// import { useParams } from 'react-router-dom';
// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import './BikeDetails.css';

// export default function BikeDetails() {
//   const { id } = useParams(); // Get the bike id from the URL
//   const [bike, setBike] = useState(null); // State to store bike details

//   useEffect(() => {
//     // Fetch the bike details using the id from the API
//     axios.get(`http://localhost:5000/api/bikes/${id}`)
//       .then(res => setBike(res.data)) // Set the data to the state
//       .catch(err => console.error(err)); // Log any errors
//   }, [id]);

//   // Loading state, in case the bike data hasn't been fetched yet
//   if (!bike) return <div className="text-center mt-5">Loading...</div>;

//   return (
//     <div className="container mt-4">
//       <div className="row">
//         <div className="col-md-6">
//           {/* Image of the bike */}
//           <img src={bike.imageUrl} className="img-fluid" alt={bike.name} />
//         </div>
//         <div className="col-md-6">
//           {/* Bike details */}
//           <h2>{bike.name}</h2>
//           <p>{bike.description}</p>
//           <p><strong>Price:</strong> ₹{bike.price}</p>
          
//           {/* Button based on bike type (rent or buy) */}
//           {bike.type === 'rent' ? (
//             <button className="btn btn-warning">Book Now</button>
//           ) : (
//             <button className="btn btn-success">Buy Now</button>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './BikeList.css';

export default function BikeDetails() {
  const { id } = useParams();
  const [bike, setBike] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/bikes/${id}`)
      .then(res => setBike(res.data))
      .catch(err => console.error(err));
  }, [id]);

  if (!bike) return <div className="bike-loading">Loading...</div>;

  return (
    <div className="bike-details">
      <div className="bike-image">
        <img src={bike.imageUrl} alt={bike.name} />
      </div>

      <div className="bike-info">
        <h1>{bike.name}</h1>
        <p className="description">{bike.description}</p>

        <ul className="specs">
          <li><strong>Engine:</strong> {bike.engine}</li>
          <li><strong>Mileage:</strong> {bike.mileage}</li>
          <li><strong>Top Speed:</strong> {bike.topSpeed}</li>
          <li><strong>Price:</strong> ₹{bike.price}</li>
        </ul>

        {bike.type === 'rent' ? (
          <button className="rent-btn">Book Now</button>
        ) : (
          <button className="buy-btn">Buy Now</button>
        )}
      </div>
    </div>
  );
}
