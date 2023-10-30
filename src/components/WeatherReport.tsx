import CityWeather from "./CityWeather";
import PulldownPanel from "./PulldownPanel"
import type * as CSS from 'csstype';

const WeatherReport: React.FC = () => {
  const imgStyle: CSS.Properties = {
    width: '100px',
    height: '100px'
  };
  const divStyle: CSS.Properties = {
    display: 'flex',
    justifyContent: 'center'
  }
  return (
    <div className="App">
      <h1>ウェザーリポート</h1>
      <div style={divStyle}>
        <p>
          気象庁のサーバーから地域区分と予報情報を取得し表示しています。<br />
          使用言語など：TypeScript React Redux 気象庁API<br /><br />
          以下のURL、またはQRコードから実際のプログラムを閲覧できます。<br />
          <a href="https://github.com/Taku345/weather-report-typescript-ver/tree/master/src">
          https://github.com/Taku345/weather-report-typescript-ver/tree/master/src
          </a>
        </p>
        <img style={imgStyle} src={`${process.env.PUBLIC_URL}/QRcode.png`} alt="" />
      </div>
      <PulldownPanel />
      <CityWeather />
    </div>
  )
}

export default WeatherReport;