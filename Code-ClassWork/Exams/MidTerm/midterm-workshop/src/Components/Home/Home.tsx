import React, { MouseEvent } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const goToBookList = (e: MouseEvent<HTMLButtonElement>) => {
    navigate("/books");
  };
  const goToAuthorList = (e: MouseEvent<HTMLButtonElement>) => {
    navigate("/author");
  };
  const goToPublisherList = (e: MouseEvent<HTMLButtonElement>) => {
    navigate("/publisher");
  };
  return (
    <div className="text-center ">
      <div className="row justify-content-start">
        <div className="col-3">
          <div className="d-flex flex-column flex-shrink-0 p-3 border">
            <ul className="nav nav-pills flex-column mb-auto">
              <li className="nav-item">
                <button onClick={goToBookList} className="btn btn-primary">
                  Books
                </button>
              </li>
              <br />

              <li>
                <button onClick={goToAuthorList} className="btn btn-primary">
                  Authors
                </button>
                <br />
                <br />
              </li>
              <li>
                <button onClick={goToPublisherList} className="btn btn-primary">
                  Publisher
                </button>
                <br />
                <br />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
