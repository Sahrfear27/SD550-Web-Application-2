import React, { MouseEvent, useContext, useState } from "react";
import GlobalContex from "../../Contex/Contex";
import PublisherObj from "./PublisherObj";
import { useNavigate } from "react-router-dom";

export default function PublisherList() {
  const navigate = useNavigate();
  const { newPublisher } = useContext(GlobalContex);
  const goAddPublisher = (e: MouseEvent<HTMLButtonElement>) => {
    navigate("/addPublisher");
  };
  return (
    <div>
      <h4>Publisher List</h4>
      {newPublisher.map((publishers) => (
        <PublisherObj key={publishers.id} data={publishers} />
      ))}
      <button className="btn btn-success btn-sm" onClick={goAddPublisher}>
        Add Publisher
      </button>
    </div>
  );
}
