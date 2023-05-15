import {configureStore} from '@reduxjs/toolkit';
import {featureReducer} from './featureSlice';
import userReducer from './userSlice';

const store = configureStore({
    reducer: {
        features: featureReducer,
        user: userReducer,
    }
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;