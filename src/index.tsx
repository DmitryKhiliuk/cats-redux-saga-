import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider, TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {combineReducers, configureStore} from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga'
import {catsReducer} from "./catState";
import {catSaga} from "./catSaga";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const saga = createSagaMiddleware();

export const rootReducer = combineReducers({
    catsReducer
})

const store = configureStore({
    reducer: rootReducer,
    middleware: [saga]
})

saga.run(catSaga)

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector;

export type AppRootStateType = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
