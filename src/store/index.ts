import { configureStore } from "@reduxjs/toolkit";
import reducer from "./modules/weather"
import areaReducer from "./modules/area";
import { useSelector as rawUseSelector, TypedUseSelectorHook } from 'react-redux';

const store =  configureStore({
  reducer: {
    weather: reducer,
    area: areaReducer
  }
});

//セレクターの型定義
export type RootState = ReturnType<typeof store.getState>;
export const useSelector: TypedUseSelectorHook<RootState> = rawUseSelector;

export default store;