import React, { useState } from "react";
import axios from "axios";

const RequestAPI = (props) => {
  const [searchType, setSearchType] = useState("people");
  const [searchTypeID, setSearchTypeID] = useState();
  const [searchResult, setSearchResult] = useState({});

  const url = `https://swapi.dev/api/` + searchType + "/" + searchTypeID;

  const FormSubmission = (e) => {
    e.preventDefault();
    axios
      .get(url)
      .then((response) => {
        setSearchResult(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="container">
        <div className="col col-sm-9">
          <h1>What information do you request?</h1>
          <form onSubmit={FormSubmission}>
            <div className="form-group">
              <select
                className="form-control"
                onChange={(e) => setSearchType(e.target.value)}
              >
                <option value="people">People</option>
                <option value="films">Films</option>
                <option value="species">Species</option>
                <option value="planets">Planets</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="">id</label>
              <input
                type="text"
                className="form-group"
                onChange={(e) => setSearchTypeID(e.target.value)}
              />
            </div>

            <input type="submit" value="Search" />
          </form>
        </div>

        <hr />

        <div className="col col-sm-9">
          {searchType === "people" ? (
            <>
              <p>Name: {searchResult.name}</p>
              <p>Hair Color: {searchResult.hair_color}</p>
              <p>Eye Color: {searchResult.eye_color}</p>
              <p>Height: {searchResult.height}</p>
            </>
          ) : (
            ""
          )}

          {searchType === "films" ? (
            <>
              <p>Title: {searchResult.title}</p>
              <p>Release Date: {searchResult.release_date}</p>
            </>
          ) : (
            ""
          )}

          {searchType === "starships" ? (
            <>
              <p>Model: {searchResult.model}</p>
              <p>Cost: {searchResult.cost_in_credits}</p>
              <p>Max Speed: {searchResult.max_atmosphering_speed}</p>
            </>
          ) : (
            ""
          )}

          {searchType === "vehicles" ? (
            <>
              <p>Name: {searchResult.name}</p>
              <p>Model: {searchResult.model}</p>
              <p>Cost: {searchResult.cost_in_credits}</p>
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default RequestAPI;