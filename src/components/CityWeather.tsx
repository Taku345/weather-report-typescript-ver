import { useSelector } from "react-redux";
import { useAppSelector } from "../store";

const CityWeather = () => {
  const weatherState = useAppSelector(state => state.weather);
  

  const status = weatherState.status;
  const weathers = weatherState.weathers;
  // const weathers = useSelector(state => state.weather.weathers);
  console.log(weathers)
  const timeArray = weathers[0]?.timeSeries[0].timeDefines;
  
  let dateArray: string[] = []
  if (timeArray) {
    dateArray = timeArray.map((time) => {
      return time.split("T")[0];
    });
  }

  return (
    <div className="App">
      {status != "取得済"
        ? <h3>{status}</h3>
        : weathers[0]?.timeSeries[0].areas.map((area) => {
          let key = 0;
          return (
            <div key={area.area.name}>
              <h3>---{area.area.name}---</h3>
              {area.weathers.map((weather) => {
                return <p key={area.area.name + key}>{dateArray[key++]} : {weather}</p>
              })}
            </div>
          )
        })
      }

    </div>
  )
}

export default CityWeather;