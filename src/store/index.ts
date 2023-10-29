import { configureStore } from "@reduxjs/toolkit";
import reducer from "./modules/weather"
import areaReducer from "./modules/area";
import { useSelector as rawUseSelector, TypedUseSelectorHook } from 'react-redux';
import { useDispatch } from "react-redux";

const store =  configureStore({
  reducer: {
    weather: reducer,
    area: areaReducer
  }
});

export default store;
//カスタムセレクターとディスパッチを定義、これを使うと型情報が参照される。
export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = rawUseSelector;
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
