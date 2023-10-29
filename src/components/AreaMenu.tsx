import { useEffect } from "react";
import { initAreaWithStatus, getSubArea } from "../store/modules/area";
import { useAppDispatch, useAppSelector } from "../store";

const AreaMenu = () => {
  //型定義を追加したカスタムdispatch, selector
  const dispatch = useAppDispatch();
  const areaState = useAppSelector(state => state.area);

  useEffect(()=>{
    dispatch(initAreaWithStatus());
  },[]);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(getSubArea(e.target.value));
  }

  return (
    <>
      {
        areaState.status != "取得済"
          ? <h3>{areaState.status}</h3>
          : <select onChange={(e)=>handleChange(e)}>
          {areaState.areaArray.map((area) => <option key={area[0]} value={area[0]}>{area[1].name}</option>)}
        </select>
      }
    </>
  );
};

export default AreaMenu;