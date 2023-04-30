import { createSlice } from '@reduxjs/toolkit';

const LoginSlice = createSlice({
    name: "login",
    initialState: null,
    reducers: {
        login: (state, action) => {
            return {
                    name: action.payload.name,
                    email: action.payload.email,
                  };
             },

        logout: () => {
            return null;
        },
        
    },
})

export { LoginSlice };
export const { login, logout } = LoginSlice.actions;