import './App.css';
import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom";


//hooks
import LayoutProvider from './hooks/context';

// utils
import AppRoute from './utils/AppRoute';

// components
import Multichannel from "./route/multichannel";
import Setup from "./route/multichannel/Setup";
import Users from "./Users";
function App() {
  return (
    <LayoutProvider>
        {/* <AppRoute exact path='/multichannel' component={Multichannel}/> */}
        {/* <AppRoute exact path='/multichannel/:shop' component={Setup}/> */}
        <Router>
      <header>
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/about">
          <button>About</button>
        </Link>
        <Link to="/users">
          <button>Users</button>
        </Link>
      </header>
      <hr />
      <main>
        <Switch>
          <Route path="/users" component={Users} />
        </Switch>
      </main>
    </Router>  
    </LayoutProvider>
  );
}

export default App;
