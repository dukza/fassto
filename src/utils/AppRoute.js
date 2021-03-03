import React from 'react';
import {Route} from "react-router-dom";


 const AppRoute = ({
    component:Component,
    ...rest
 }) => {
    
    return(
        <>
            <Route {...rest} render={((props) => {
                return(
                    <Component {...props}></Component>
                )
            })}>            
            </Route>
        </>
    )
}
export default AppRoute;