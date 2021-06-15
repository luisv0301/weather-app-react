import React from "react";
import "./Searchbar.css";

export default function Searchbar({ state, dispatch, fetchData }) {
  return (
    <>
      <form role="search" className="form">
        <div className="form-container">
          <input
            type="search"
            placeholder="Search for a city"
            aria-required="true"
            required
            value={state.cityName}
            onChange={(e) =>
              dispatch({ type: "ADD_CITY", payload: e.target.value })
            }
            className={state.searchWarning ? "input error" : "input"}
          />
          <button
            type="button"
            onClick={fetchData}
            aria-label="search"
            className="button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </form>
    </>
  );
}
