import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Switch, Route} from "react-router-dom";
import "./App.css";
import Nav from "./Nav/Nav";
import Home from "./Home/Home";
import List from "./components/List";
import Detail from "./components/Detail";
import EditAdd from "./components/EditAdd";

function App() {
  return (
    
      <BrowserRouter>
        <Nav />

        <Switch>
          <Route path="/todo" exact component={List} />
          <Route path="/todo/:id" component={Detail}/>
          <Route path="/edit/:id" component={EditAdd} />
        </Switch>
      </BrowserRouter>
   
  );
}

export default App;
