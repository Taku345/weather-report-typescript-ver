import axios from "axios";

const AREA_URL = "https://www.jma.go.jp/bosai/common/const/area.json"
const WEATHER_URL = "https://www.jma.go.jp/bosai/forecast/data/forecast/"

const getWeatherAPI = async (areaNum: string) => {
  console.log("API getWeather request send");
  const res = await axios.get(`${WEATHER_URL}${areaNum}.json`);
  return res;
}
const getAreaAPI = async () => {
  console.log("API getArea request send");
  const res = await axios.get(AREA_URL);
  return res;
}

export { getWeatherAPI, getAreaAPI };