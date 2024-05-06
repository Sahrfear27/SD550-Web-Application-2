import React, { MouseEvent, useContext } from "react";
import { nanoid } from "nanoid";
import GlobalContex from "../../Contex/Contex";
import AuthorObj from "./AuthorObj";
import { useNavigate } from "react-router-dom";

export default function AuthorList() {
  const navigate = useNavigate();
  const { author } = useContext(GlobalContex);
  const goToAdd = (e: MouseEvent<HTMLButtonElement>) => {
    navigate("/addAuthor");
  };
  return (
    <div>
      <h4>Author List </h4>
      {author.map((auhors) => (
        <AuthorObj key={nanoid()} data={auhors} />
      ))}
      <button className="btn btn-success btn-sm" onClick={goToAdd}>
        Add New Author
      </button>
    </div>
  );
}
