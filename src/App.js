import './App.css';
import { Provider } from "react-redux";
import store from "./store"
import WeatherReport from './components/WeatherReport';

function App() {
  return (
    <Provider store={store}>
      <WeatherReport />
    </Provider>
  );
}

export default App;