import React,{useState, useContext} from 'react';
import classNames from "classnames";
import {
history
  } from "react-router-dom";
//components
import IndexLink from '../../components/IndexLink';
import Select from './../../components/elements/Select';
import ShopList from './ShopList';


//hooks
import {useData} from "./../../hooks/useData";

//context
import { LayoutContext } from "../../hooks/context";

const Intro = ({match,history}) => {
    const {getData} = useData();
    const [isShop,setShop] = useState(0);
    const [isSelect,setSelect] = useState(0);
    const {nots} = getData(isShop);
    const { shops } = useContext(LayoutContext);
    const toggleShop = (id) => {
        setShop(id)
        setSelect(id)
    }
    const shop = shops.find(shop => shop.url === match.params.shop);  
 
    return(
        <>
            <div className="navigation bg-brand-greenLight">
                <a className="btnNav btnNav__l" onClick={() => history.goBack()}><i className="fal fa-chevron-left"></i></a><span>미연동 내역</span>  
            </div>
            <div className="content" >
                <div style={{'overflowX':"hidden"}}>
                    <div className="d-flex flex-row justify-content-between align-items-center bg-brand-greenLight sectionType" style={{'overflowX':"auto"}}>

                        {shops.map((shop)=>{
                            const classes = classNames(
                                "btn-circle",
                                isSelect === shop.id && "active"
                            ); 
                            return(
                            <span key={shop.id} onClick={()=>toggleShop(shop.id)}>
                                <div className={classes}>
                                    <span className="icon">
                                        {shop.url ==="shoplinker" ? <span className="icon--icon icon-shoplinker"><span className="path1"></span><span className="path2"></span><span className="path3"></span><span className="path4"></span><span className="path5"></span><span className="path6"></span><span className="path7"></span></span>:<span className={`icon--icon icon-${shop.url}`}></span>}
                                    </span>
                                    <div className="icon--text">{shop.name}</div>
                                </div>
                            </span>
                        )})}
                    </div>
                    
                </div>

                <ShopList nots={nots}></ShopList>
            </div>
        </>
    )
}
export default Intro;


