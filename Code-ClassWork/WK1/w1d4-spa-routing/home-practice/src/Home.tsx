import React, { ChangeEvent, MouseEvent } from "react";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
export default function Home() {
  const navigate = useNavigate();
  const goToNews = (e: MouseEvent<HTMLButtonElement>) => {
    navigate("news");
  };
  const goToMessage = (e: MouseEvent<HTMLButtonElement>) => {
    navigate("/goToMessage");
  };
  return (
    <div>
      {/* <NavLink to="/home" className="nav-link"> */}

      <h4>Parent of Home</h4>
      <h4>Home</h4>
      <p>
        Has a link to Add Product component: This will show the add product
        component in new window
      </p>
      <p>
        Also Has a link to its child component which will show in the same
        window
      </p>
      {/* </NavLink> */}

      <br />
      <p>Using Link to Navigate to child inside home</p>
      <Link to="child">Child</Link>
      <br />
      <Link to="second">Second Child</Link>
      <Outlet />
      <br />
      <br />

      <div>
        <h4>Using Button</h4>
        {/* Using useNavigate to navigate to another component */}
        <p>Using useNavigate to display the child inside home</p>
        <button onClick={goToNews}>News:Child</button>

        <br />
        <br />

        <p>Using Link to Navigate to different component</p>
        <Link to="/add">Add Products</Link>
        <br />
        <br />
        <p>Using navigate to navigate to different component</p>
        <button onClick={goToMessage}>Messages</button>
      </div>
    </div>
  );
}
