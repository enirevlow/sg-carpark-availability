import React from "react";

const Display = ({ availCarparks, carparkList, loading }) => {
  const matchCarpark = carparkList.map((carpark) => {
    if (loading) {
      return <h2>Loading...</h2>;
    }
    const match = availCarparks.find(
      (availCarpark) => availCarpark.carpark_number === carpark.car_park_no
    );
    if (match) {
      const { carpark_info } = match;
      const [{ lots_available }] = carpark_info;
      if (lots_available > 0) {
        return (
          <tr key={carpark._id}>
            <td>
              {carpark.address} <br /> {carpark.car_park_no}
            </td>
            <td>{carpark.free_parking}</td>
            <td>{lots_available}</td>
          </tr>
        );
      }
    }
  });

  return (
    <table>
      <thead>
        <tr key="header">
          <th>Carpark Address</th>
          <th>Free Parking</th>
          <th>Availability</th>
        </tr>
      </thead>
      <tbody>{matchCarpark}</tbody>
    </table>
  );
};

export default Display;
