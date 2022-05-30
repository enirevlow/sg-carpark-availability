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
          <tr scope="row" key={carpark._id}>
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
    <div class="table-responsive">
      <table class="table">
        <thead>
          <tr key="header">
            <th scope="col">Carpark Address</th>
            <th scope="col">Free Parking</th>
            <th scope="col">Availability</th>
          </tr>
        </thead>
        <tbody>{matchCarpark}</tbody>
      </table>
    </div>
  );
};

export default Display;
