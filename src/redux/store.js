import storage from "redux-persist/lib/storage";
import {combineReducers} from "redux";
import {persistReducer, persistStore} from "redux-persist";
import {authReducer} from "./auth/slice";
import {configureStore} from "@reduxjs/toolkit";
import {userReducer} from "./user/slice";

const persistCofig = {
    key: 'root',
    storage,
    whitelist: ['auth','user']
}

const rootReducer = combineReducers({
    auth: authReducer,
    user: userReducer,
})

const persistedReducer = persistReducer(persistCofig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ["persist/PERSIST"],
            },
        }),
});

export const persistor = persistStore(store);