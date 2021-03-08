import React,{useContext} from 'react';
import { Route } from "react-router-dom";
// utils
import AppRoute from './../../utils/AppRoute';

//context
import { LayoutContext } from "./../../hooks/context";

//component
import Intro from "./Intro";
import Setup from "./Setup";

const Multichannel = ({match}) => {
    const { data } = useContext(LayoutContext);
    return(
        <>  
        <div className="App bg-white" id="multichannel">
            <AppRoute exact path={match.path} component={Intro}/>  
            <AppRoute path={`${match.path}/:shop`} component={Setup}/>            
        </div>

        </>
    )
}
export default Multichannel;


