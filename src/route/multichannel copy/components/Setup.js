import React,{useContext} from 'react';
import {
    useParams
  } from "react-router-dom";


//context
import { LayoutContext } from "../../../hooks/context";

const Setup = () => {
    const {id} = useParams();
    console.log('id',{id})

    const { data } = useContext(LayoutContext);

    // data.multichannel.menus.filter(()=>())
    return(
        <>
        <div>
            Setup
        </div>
        </>
    )
}
export default Setup;


