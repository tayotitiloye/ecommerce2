// import { configureStore } from "@reduxjs/toolkit";
// import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
// import { cartSlice } from "./features/cartSlice";
// import AsyncStorage from '@react-native-async-storage/async-storage';
// //persist
// //import storage from "redux-persist/lib/storage";
// import { persistReducer } from "redux-persist";
// import { combineReducers } from "@reduxjs/toolkit";


// const persistConfig = {
//   key: "root",
//   version: 1,
//  // storage,
//    storage: AsyncStorage,
// };

// const reducer = combineReducers({
//   cart: cartSlice.reducer,
// });

// const persistedReducer = persistReducer(persistConfig, reducer);

// export const store = configureStore({
//   reducer: persistedReducer,
// });


// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
// export const useAppDispatch: () => AppDispatch = useDispatch;
// export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;


// persist test in documentation

import { configureStore } from '@reduxjs/toolkit'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
//import storage from 'redux-persist/lib/storage'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { PersistGate } from 'redux-persist/integration/react'
 import { combineReducers } from "@reduxjs/toolkit";
import { cartSlice } from './features/cartSlice';
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";


const persistConfig = {
  key: 'root',
  version: 1,
  //storage,
  storage: AsyncStorage,
}

const reducer = combineReducers({
  cart: cartSlice.reducer,
});


const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

let persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;




// import { configureStore } from "@reduxjs/toolkit";
// import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
// import { cartSlice } from "./features/cartSlice";

// export const store = configureStore({
//   reducer: {
//     cart: cartSlice.reducer,
//   },
// });

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
// export const useAppDispatch: () => AppDispatch = useDispatch;
// export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
