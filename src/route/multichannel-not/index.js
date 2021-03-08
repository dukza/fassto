import React,{useContext} from 'react';
import { Route } from "react-router-dom";
// utils
import AppRoute from '../../utils/AppRoute';

//context
import { LayoutContext } from "../../hooks/context";

//component
import Intro from "./Intro";

const Multichannel = ({match}) => {
    const { data } = useContext(LayoutContext);
    return(
        <>  
        <div className="App bg-white" id="multichannel--not">
            <AppRoute exact path={match.path} component={Intro}/>         
        </div>

        </>
    )
}
export default Multichannel;


