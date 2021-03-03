import React,{useContext} from 'react';
import {
    useParams
  } from "react-router-dom";

//components
import ShopListCell from "./../../components/ShopListCell";

//context
import { LayoutContext } from "../../hooks/context";

const ShopList = ({match,history}) => {
    // const {shop} = useParams();
    // console.log('match',{match})
    const { shops } = useContext(LayoutContext);   
    return(
        <>
            <div className="filterBar">
                <a className="btn-plain text-dark">2020.06.05 - 2020.06.05 <i class="fas fa-sort"></i></a>
            </div>
            <div>
            {shops[0].nots.map((not)=>{
               return(
                   <>
                    <ShopListCell 
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


