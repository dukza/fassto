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
         <div className="w-100 position-fixed d-flex flex-column" style={{'zIndex':'-1'}}>
            <Link className="border-bottom text-decoration-none d-flex align-items-center p16" to="/multichannel">쇼핑몰연동현황 퍼블리싱</Link>
            <Link className="border-bottom text-decoration-none d-flex align-items-center p16" to="/multichannel-not">미연동현황 퍼블리싱</Link>          
         </div>
         <AppRoute  path='/multichannel' component={Multichannel}/>
        <AppRoute  path='/multichannel-not' component={MultichannelNot}/>
   </LayoutProvider>
   );
}

export default App;
