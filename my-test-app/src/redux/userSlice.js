import {createSlice} from "@reduxjs/toolkit";
import profileImg from "../images/user.png"

const userSlice = createSlice({
    name:"user",
    initialState:{
        name:"Robert",
        email: "rob@gmail.com",
        profileImage: profileImg
    },
    reducers:{
        update: (state,action) => {
            state.name = action.payload.name;
            state.email = action.payload.email;
        },
        remove: (state) => state = {
            name: "",
            email: "",
            profileImage: profileImg
        }  
    }
})

export const {update,remove} = userSlice.actions;
export default userSlice.reducer; 