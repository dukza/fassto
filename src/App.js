import './assets/css/styles.css';
import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom";


//hooks
import LayoutProvider from './hooks/context';

// utils
import AppRoute from './utils/AppRoute';

// components
import Multichannel from "./route/multichannel";
import MultichannelNot from "./route/multichannel-not";

function App() {
  return (

    <LayoutProvider>
         <div className="position-fixed">
           <Link to="/multichannel">쇼핑몰연동현황</Link>
         <Link to="/multichannel-not">미연동현황</Link>          
         </div>

         <AppRoute  path='/multichannel' component={Multichannel}/>
        <AppRoute  path='/multichannel-not' component={MultichannelNot}/>
   </LayoutProvider>
   );
}

export default App;
