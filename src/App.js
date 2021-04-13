import Header from "./Components/Header/Header";
import Registration from "./Components/Registration/Registration";
import { BrowserRouter } from 'react-router-dom';
import {Route, Switch} from "react-router-dom";
function App() {
  return (
    <div className="App">
      {/* <Header/>
      <Registration/> */}


      <BrowserRouter>
      <Header/>
        <Switch>
        
          <Route  path='/register'  component={Registration}/>
          <Route path='/' />
          
        </Switch>
      </BrowserRouter>
         
      
    </div>
  );
}

export default App;
