import React from 'react';
import Presenter from './Presenter';

const Container = ({match}) => {

    return(
        <>
            <Presenter match={match}/>
        </>
    )
}
export default Container;