import React,{useState, useContext} from 'react';
import classNames from "classnames";
import {
history
  } from "react-router-dom";
//components
import IndexLink from '../../components/IndexLink';
import Select from './../../components/elements/Select';
import ShopList from './ShopList';
import ShopLogo from './../../components/ShopLogo';         

//hooks
import {useData} from "./../../hooks/useData";

//context
import { LayoutContext } from "../../hooks/context";
import Modal from '../../components/elements/Modal';

const Intro = ({match,history}) => {
    const {getData} = useData();
    const [isModal, setMadal] = useState(false)
    const [isShop,setShop] = useState(0);
    const [isSelect,setSelect] = useState(0);
    const {nots} = getData(isShop);
    const { shops } = useContext(LayoutContext);
    const toggleShop = (id) => {
        setShop(id)
        setSelect(id)
    }

    const toggleModal = (e) => {
        console.log('toggleModal')
        e.preventDefault();
        setMadal(!isModal)
    }
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
                                    <ShopLogo url={shop.url}/>
                                    <div className="icon--text">{shop.name}</div>
                                </div>
                            </span>
                        )})}
                    </div>
                    
                </div>
                <div className="filterBar">
                    <div className="filterBar--inner">
                        <a onClick={toggleModal} className="font-13 btn-plain">1주일 <span className="d-inline-block m2-x">·</span> 최신순 <i className="fal fa-chevron-down font-12 m2-l"></i></a>
                    </div>
                </div>
                <ShopList nots={nots}></ShopList>
                <Modal 
                isModal={isModal}
                toggleModal={toggleModal}
                title="날짜 선택"
                buttonName="적용"
                state={isModal}>캘린더</Modal>
            </div>
        </>
    )
}
export default Intro;


