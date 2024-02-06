// store.js

import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './LoginSlice'; // Path to your loginSlice file

const store = configureStore({
    reducer: {
        login: loginReducer,
        // Other reducers if any
    },
});

export default store;
