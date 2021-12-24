import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Logs from "./Pages/Logs/Logs";
import MainPage from "./Pages/MainPage/MainPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/logs" exact component={Logs} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
