import React,{useContext} from 'react';
import {
    useParams
  } from "react-router-dom";
import Input from "../../components/elements/Input";
import Select from "../../components/elements/Select";
import Switch from "../../components/elements/Switch";
import Button from "../../components/elements/Button";

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
                    <div className="d-flex justify-content-between">
                        <div>
                          {not.name}{not.phone}  
                        </div>
                        <div>{not.state}</div>
                    </div>
                    <div>{not.number}</div>
                    <div>{not.reason}</div>
                    <div>{not.date}</div>
                   </>
               ) 
            }  
            )}
            </div>
        </>
    )
}
export default ShopList;


