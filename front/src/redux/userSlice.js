import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    userData: {
        login: false,
        user: {
            id: false,
        },
    },
    userAppointments: [],
};

/*{
	"login": true,
	"user": {
		"id": 1,
		"name": "felipe",
		"email": "felipe@mail.com",
		"birthdate": "23 08 1990",
		"nDni": 1056784
	}
} */

export const userSlice = createSlice({
    name: "actualUser",
    initialState,
    reducers: {
        setUserData: (state, action) => {
            state.userData = action.payload;
        },
        setUserAppointments: (state, action) => {
            state.userAppointments = action.payload;
        },
    },
});

export const {setUserData, setUserAppointments } = userSlice.actions;
export default userSlice.reducer
