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
            <div className="filterBar">
                <a className="btn-plain text-dark font-weight-med">2020.06.05 - 2020.06.05 <i className="fas fa-sort"></i></a>
            </div>
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


