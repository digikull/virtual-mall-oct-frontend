import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Forgotpass from "./components/Forgotpass";
import Resetpassword from "./components/Resetpassword";
import Msg from "./components/Msg";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Forgotpass} />
          <Route exact path="/msg" component={Msg} />
          <Route exact path="/Resetpassword/:id" component={Resetpassword} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
