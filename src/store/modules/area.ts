import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAreaAPI } from "../../api/getWeatherAPI";
import { current } from "@reduxjs/toolkit";
import { AreaInfo, areaArrayType, initAreaState } from "../../types/types";

const initAreaWithStatus = createAsyncThunk<AreaInfo>(
  'area/get',
  async (_payload) => {
    const response = await getAreaAPI();
    return response.data;
  }
)

const area = createSlice({
  name: 'area',
  initialState: {...(new initAreaState())},
  reducers: {
    getSubArea(state, { type, payload }) {
      const areaObj = current<initAreaState>(state).areaObj
      const subAreaCode = areaObj.centers[payload].children
      const subAreaArray: Array<[string, string]> = subAreaCode.map((code: string)=> {
        return [code,areaObj.offices[code].name]
      })
      state.subAreaArray = subAreaArray;
    }
  },
  extraReducers: (builder) => {
    builder
    .addCase(initAreaWithStatus.pending,(state)=>{
      state.status = 'Area Loading...';
    })
    .addCase(initAreaWithStatus.fulfilled,(state,action)=>{
      state.status = '取得済'
      const areaArray: areaArrayType = [];
      Object.keys(action.payload.centers).forEach((areaNum)=>{
        areaArray.push([areaNum, action.payload.centers[areaNum]]);
      });
      state.areaObj = action.payload;
      state.areaArray = areaArray;
      //サブエリアの初期化
      const firstSubAreaCode = state.areaObj.centers[Object.keys(action.payload.centers)[0]].children
      state.subAreaArray = firstSubAreaCode.map(code=> {
        return [code,state.areaObj.offices[code].name]
      })
    })
    .addCase(initAreaWithStatus.rejected,(state)=>{
      state.status = 'エリア情報取得エラー'
    })
  }
});


const { getSubArea } = area.actions;
const areaReducer = area.reducer;

export default areaReducer;
export { initAreaWithStatus, getSubArea }

