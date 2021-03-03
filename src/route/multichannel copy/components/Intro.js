import React,{useContext} from 'react';
import {
    useParams
  } from "react-router-dom";

import IndexLink from './../../../components/IndexLink';

//context
import { LayoutContext } from "../../../hooks/context";

const Intro = () => {
    const { data } = useContext(LayoutContext);
    const {id} = useParams();
    // console.log('data',data.multichannel[0].menus[0].url)
    console.log({id})
    return(
        <>
        {
            data.multichannel[0].menus.map((menu)=>{
                return(
                <IndexLink to={`/multichannel/${menu.url}`} key={`/multichannel/${menu.id}`}>{menu.name}</IndexLink>
            )})
        }
        </>
    )
}
export default Intro;


