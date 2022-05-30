import React, { useState, useEffect } from "react";
import Display from "../components/Display";
import SearchForm from "../components/SearchForm";
import axios from "axios";
import API from "../api/API";

const Container = () => {
  const [availCarparks, setAvailCarparks] = useState([,]);
  const [carparkList, setCarparkList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);
  const [timeStamp, setTimeStamp] = useState(null);
  const [query, setQuery] = useState("");

  const env = process.env;

  const getCarparkData = async () => {
    const { status, data } = await axios.get(env.REACT_APP_CARPARK_API_URL, {
      params: {
        resource_id: env.REACT_APP_CARPARK_RESOURCE_ID,
        q: query.toLocaleLowerCase(),
      },
    });
    if (status === 200) {
      setCarparkList(data.result.records);
    } else {
      console.log("error", status);
    }
  };

  const setQueryParam = (params) => {
    setQuery(params);
  };

  console.log("query", query);

  const getAvailCarparksData = async () => {
    setLoading(true);
    const { status, data } = await API.get("/carpark-availability");
    if (status === 200) {
      const [{ timestamp, carpark_data }] = data.items;
      setAvailCarparks(carpark_data);
      setTimeStamp(timestamp);
      setLoading(false);
    } else {
      console.log("error", status);
    }
  };

  useEffect(() => {
    getCarparkData();
  }, [query]);

  useEffect(() => {
    getAvailCarparksData();
  }, []);

  return (
    <>
      <h1>Carparks</h1>
      <SearchForm setQueryParam={setQueryParam} />
      {query ? (
        <div>
          <p>Last updated: {timeStamp}</p>
          <Display
            availCarparks={availCarparks}
            carparkList={carparkList}
            loading={loading}
          />
        </div>
      ) : (
        <p>Please enter a search term. Example: bedok</p>
      )}
    </>
  );
};

export default Container;
