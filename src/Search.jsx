import React from "react";
import "./Search.css";
import search from "./search.jpg";
export default function Search() {
  return (
    <div className="fullcontainer">
      <div className="container container1">
        <div>
          <input type="text" placeholder="Search" />
        </div>

        <button>
          <img src={search} alt="" />
        </button>
      </div>

      <div className="container container2">
        <div>
          <input type="text" placeholder="Search" />
        </div>
        <button>
          <img src={search} alt="" />
        </button>
      </div>

      <div className="container">
        <div className="last2div container3">
          <input type="text" placeholder="Search" />
          <button>
            <img src={search} alt="" />
          </button>
        </div>
      </div>

      <div className="container">
        <div className="last2div container4">
          <input type="text" placeholder="Search" />
          <button>
            <img src={search} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}
