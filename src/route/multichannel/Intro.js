import React,{useContext} from 'react';
import {
history
  } from "react-router-dom";

import IndexLink from './../../components/IndexLink';

//context
import { LayoutContext } from "./../../hooks/context";

const Intro = ({match,history}) => {
    // console.log('match',{match})
    const { shops } = useContext(LayoutContext);
    return(
        <>
            <div className="navigation">
                <a className="btnNav btnNav__l" onClick={() => history.goBack()}><i className="fal fa-chevron-left"></i></a><span>쇼핑몰 연동현황</span>  
            </div>
            <div className="content">
                <div className="d-flex flex-column">
                    {
                        shops.map((shop)=>{
                            return(
                            <IndexLink className="text-decoration-none d-flex align-items-center justify-content-between sectionType" to={`${match.url}/${shop.url}`} key={`/multichannel/${shop.id}`}>
                                <div className="d-flex flex-column ">
                                    <div><span className="badge rounded-pill bg-success d-inline font-11">사용중</span></div>
                                    <span className="formLabel">{shop.name}</span>
                                </div>
                                <i className="fal fa-chevron-right text-ink-zone"></i>
                            </IndexLink>
                        )})
                    }                      
                </div>
          
            </div>
        </>
    )
}
export default Intro;


