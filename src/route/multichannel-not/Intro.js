import React,{useContext} from 'react';
import {
history
  } from "react-router-dom";
//components
import IndexLink from '../../components/IndexLink';
import Select from './../../components/elements/Select';
import ShopList from './ShopList';

//context
import { LayoutContext } from "../../hooks/context";

const Intro = ({match,history}) => {
    // console.log('match',{match})
    const { shops } = useContext(LayoutContext);
    return(
        <>
            <div className="navigation bg-light">
                <a className="btnNav btnNav__l" onClick={() => history.goBack()}><i className="fal fa-chevron-left"></i></a><span>미연동 내역</span>  
            </div>
            <div className="content">
                <div className="d-flex flex-row justify-content-between align-items-center bg-light sectionType">
                    <span className="m8-r formLabel formLabel-multichannel-not">쇼핑몰</span>
                    <Select
                    item__classname ="flex-grow-1"
                    formWrap__classname="flex-grow-1 w-100"
                    >
                    {shops.map((shop)=>{
                        return(
                        <option>{shop.name}</option>
                    )})}
                    </Select>
                </div>
                <ShopList></ShopList>
            </div>
        </>
    )
}
export default Intro;


