import React from "react";
import {useSelector} from "react-redux";

function Sidebar(){
  const name = useSelector(state => state.user.name);   
    return (
      <div className="left-sidebar">
        <ul>
          <li>
            <a href="#.">Homepage</a>
          </li>
          <li>
            <a href="#.">Lists</a>
          </li>
          <li>
            <a href="#.">Products</a>
          </li>
          <li>
            <a href="#.">Groups</a>
          </li>
          <li>
            <a href="#.">Pages</a>
          </li>
          <li>
            <a href="#.">Photos</a>
          </li>
          <li>
            <a href="#.">Videos</a>
          </li>
          <li>
            <a href="#.">Schedule</a>
          </li>
          <li>
            <a href="#.">Wishlist</a>
          </li>
          <li>
            <a href="#.">Settings</a>
          </li>
          <li>
            <a href="#.">{`Logout (${name})`}</a>
          </li>
        </ul>
      </div>
    );
}

export default Sidebar;