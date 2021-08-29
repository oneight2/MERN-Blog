import { Provider } from "react-redux";
import { store } from "../config";
import Routes from "../config/Routes";
import "./App.css";

function App() {

  return (
  <Provider store={store}>
    <Routes />
  </Provider>
  );
}

export default App;
