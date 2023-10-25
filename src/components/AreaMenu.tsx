import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { initAreaWithStatus, getSubArea } from "../store/modules/area";
import { useSelector } from "../store";

const AreaMenu = () => {
  const dispatch = useDispatch();
  //型定義を追加したカスタムセレクタ
  const areaState = useSelector(state => state.area);

  useEffect(()=>{
    dispatch(initAreaWithStatus());
  },[]);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value);
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