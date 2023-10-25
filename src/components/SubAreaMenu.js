import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { getWeatherWithStatus } from "../store/modules/weather";


const SubAreaMenu = () => {
  const dispatch = useDispatch();
  const subAreaArray = useSelector(state => state.area.subAreaArray);

  // メインエリア変更と連動してサブエリアメニューが更新、それに合わせて予報を1つめのサブエリアで初期化する。
  useEffect(()=>{
    if(subAreaArray.length > 0)dispatch(getWeatherWithStatus(subAreaArray[0][0]));
  },[subAreaArray])

  const handleChange = (e) => {
    dispatch(getWeatherWithStatus(e.target.value));
  }

  return (
    <>
      {
        subAreaArray != []
          ? <select onChange={(e)=>handleChange(e)}>
              {subAreaArray.map((subArea) => <option key={subArea[0]} value={subArea[0]}>{subArea[1]}</option>)}
            </select>
          : "メインエリア初期化中..."
      }
    </>
  );
};

export default SubAreaMenu;