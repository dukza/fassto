import React,{useContext} from 'react';
import {
    useParams
  } from "react-router-dom";

//components
import ShopListCell from "./../../components/ShopListCell";

//context
import { LayoutContext } from "../../hooks/context";

const ShopList = ({nots}) => {
    return(
        <>
            <div>
            {nots.map((not)=>{
               return(
                   <>
                    <ShopListCell 
                    id={not.id}
                    name={not.name}
                    phone={not.phone}
                    state={not.state}
                    number={not.number}
                    reason={not.reason}
                    date={not.date}
                    url={not.url}
                    icon__classname={not.icon__classname}
                    />
                   </>
               ) 
            }  
            )}
            </div>
        </>
    )
}
export default ShopList;


