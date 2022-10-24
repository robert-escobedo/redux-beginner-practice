import React, {useState} from "react"
import logo from '../logo.svg';
import profilePic from "../images/user.png"
import { useSelector } from "react-redux";

function Navbar() {  
  const [searchText, setSearchText] = useState("");
  const name = useSelector(state => state.user.name);

  function handleChange(e) {
    setSearchText(e.target.value);
  }
  console.log(searchText);
  return (
    <nav className="topMenu">
      <div className="menu-logo">
        <img src={logo} alt="logo" />
        <h1>{`${name}'s App`}</h1>
      </div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="search-bar">
        <input
          type="text"
          name="searchBar"
          value={searchText}
          placeholder="search for something..."
          onChange={handleChange}
        />
      </div>
      <div className="profile-pic">
        <img src={profilePic} alt="profile user" />
        <h3>{name}</h3>
      </div>
    </nav>
  );
}

export default Navbar;