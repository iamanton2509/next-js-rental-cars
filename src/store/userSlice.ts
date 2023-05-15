import {createSlice} from '@reduxjs/toolkit';

interface IRegister {
    email: string;
    token: string | null;
    id: number | null;
    firstname: string | null;
    lastname: string | null;
}

const initialState: IRegister = {
    email: '',
    token: null,
    id: null,
    firstname: null,
    lastname: null
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action) {
            state.email = action.payload.email;
            state.token = action.payload.token;
            state.id = action.payload.id;
            state.firstname = action.payload.firstname;
            state.lastname = action.payload.lastname;
        },
        removeUser(state) {
            state.email = '';
            state.token = null;
            state.firstname = null;
            state.lastname = null;
            state.id = null;
        },
    },
});

export const {setUser, removeUser} = userSlice.actions;
export default userSlice.reducer;