import React,{useContext} from 'react';
import {
history
  } from "react-router-dom";
//components
import IndexLink from './../../components/IndexLink';
import ShopLogo from './../../components/ShopLogo';

//context
import { LayoutContext } from "./../../hooks/context";

const Intro = ({match,history}) => {

    const { shops } = useContext(LayoutContext);

    return(
        <>
            <div className="navigation bg-white">
                <a className="btnNav btnNav__l" onClick={() => history.goBack()}><i className="fal fa-chevron-left"></i></a><span>쇼핑몰 연동현황</span>  
            </div>
            <div className="content">
                <div className="d-flex flex-column">
                    {
                        shops.map((shop)=>{
                            return(
                            shop.id === 0 ? '': 
                            <IndexLink key={shop.id} className="text-decoration-none bg-hover-lighter d-flex align-items-center justify-content-between sectionType" to={`${match.url}/${shop.url}`} key={`/multichannel/${shop.id}`}>
                                <div className="d-flex align-items-center">
                                    <ShopLogo url={shop.url}/>
                                    <div className="d-flex flex-column m12-l">
                                        <div>
                                            {shop.state ? <span className="badge badge-info rounded-pill d-inline font-11">사용중</span>:<span className="badge badge-default rounded-pill d-inline font-11">미사용</span>}
                                            
                                        </div>
                                        <span className="formLabel m4-t">{shop.name}</span>
                                    </div>                                    
                                </div>
                                <i className="fal fa-chevron-right text-ink-form"></i>
                            </IndexLink>
                        )})
                    }                      
                </div>
            </div>
        </>
    )
}
export default Intro;


