import React, {useState} from "react"
import {useSelector, useDispatch} from "react-redux"
import { update,remove } from "../redux/userSlice";
import {logoBash,logoCPlusPlus,logoPhotoshop} from "../images";

function Update(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    console.log(name, email);

    const user = useSelector(state => state.user);
    const dispatch = useDispatch();
    

    function handleSubmit(e){
      e.preventDefault();
      dispatch(update({name,email}));
    }

    function handleDelete(e){
      e.preventDefault();
      dispatch(remove());
    }

    return (
      <div className="update">
        <h2>Update Your Account (Hello {user.name}!)</h2>  
        <button onClick={handleDelete}>Delete Account</button>      
        <hr/>
        <label>Profile Picture</label><br/><br/>
        <img src={user.profileImage} alt="user"/><br/><br/>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Username: </label><br/><br/>
          <input
            name="name"
            id="name"
            type="text"            
            placeholder={user.name}
            onChange={(e) => setName(e.target.value)}
          />
          <br/>
          <br/>
          <label htmlFor="email">Email: </label><br/><br/>
          <input
            name="email"
            id="email"
            type="text"            
            placeholder={user.email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br/>
          <br/>
          <button>Update</button>
        </form>
        <img src={logoBash} alt="" />
        <img src={logoCPlusPlus} alt="" />
        <img src={logoPhotoshop} alt="" />
      </div>
    );

}

export default Update;