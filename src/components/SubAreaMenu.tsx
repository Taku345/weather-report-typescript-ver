import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { getWeatherWithStatus } from "../store/modules/weather";
import { useAppDispatch, useAppSelector } from "../store";


const SubAreaMenu = () => {
  const dispatch = useAppDispatch();
  const areaState = useAppSelector(state => state.area);

  // メインエリア変更と連動してサブエリアメニューが更新、それに合わせて予報を1つめのサブエリアで初期化する。
  useEffect(()=>{
    if(areaState.subAreaArray.length > 0)dispatch(getWeatherWithStatus(areaState.subAreaArray[0][0]));
  },[areaState.subAreaArray])

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(getWeatherWithStatus(e.target.value));
  }

  return (
    <>
      {
        areaState.subAreaArray.length < 1
          ? <h3>Sub Area Loading...</h3>
          : <select onChange={(e)=>handleChange(e)}>
              {areaState.subAreaArray.map((subArea) => <option key={subArea[0]} value={subArea[0]}>{subArea[1]}</option>)}
            </select>
      }
    </>
  );
};

export default SubAreaMenu;