import React,{useContext} from 'react';



// utils
import AppRoute from './../../utils/AppRoute';

//context
import { LayoutContext } from "./../../hooks/context";

//component
import Intro from "./components/Intro";
import Setup from "./components/Setup";

const Presenter = ({match}) => {
    const { data } = useContext(LayoutContext);
    console.log({match})
    return(
        <>
            {/* <AppRoute exact path={match.path} component={Intro}/> */}
            <AppRoute exact path={match.path} component={Intro}/>
            <AppRoute exact path="/:id" component={Setup}/>
            {/* <AppRoute exact path={`${match.path}multichannel/:id`} component={Setup}/> */}
        </>
    )
}
export default Presenter;


