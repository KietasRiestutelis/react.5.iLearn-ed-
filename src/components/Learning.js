import React from "react";
import { useState } from "react";

function Learning({ name, status, img }) {
  const [postStatus, setPostStatus] = useState({ name, status, img });

  function changeStatus() {
    setPostStatus((previuosState) => {
      return { ...previuosState, status: "Išmokau" };
    });
  }
  return (
    <div className="col-4">
      <div className="card" style={{ width: 18 + "rem" }}>
        <img src={img} className="card-img-top w-50 p-2" alt="img" />
        <div className="card-body">
          <p className="card-text">{name}</p>
          <p>{postStatus.status}</p>
          <button
            onClick={changeStatus}
            type="button"
            className="btn btn-light"
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
}

export default Learning;
