import React,{useContext} from 'react';
import {
    useParams
  } from "react-router-dom";
import Input from "./../../components/elements/Input";
import Select from "./../../components/elements/Select";
import Switch from "./../../components/elements/Switch";
import Button from "./../../components/elements/Button";

//context
import { LayoutContext } from "./../../hooks/context";

const Setup = ({match,history}) => {
    // const {shop} = useParams();
    // console.log('match',{match})
    const { menus,setupCommon,setup } = useContext(LayoutContext);

    console.log('useParams',useParams())
    
    // const shop = menus.find(menu => menu.url === match.params.shop);    
    const shop = menus.find(menu => menu.url === match.params.shop);    
    return(
        <>
            <button onClick={() => history.goBack()}>Back</button>
            {shop.name}
            <div className="p16-t p16-b border-bottom">
                <Switch
                    wrapClassname="d-flex flex-row justify-between align-items-center"
                    formLabel={setupCommon[0].label}
                    formLabelClassname="formLabel"
                    indicator={setupCommon[0].indicator && "*"}
                    indicatorClassname="text-critical indicator"
                    formWrapClassname="flex-grow-1 text-right"
                    value="ncp_1abc0d_01"
                    size="w-100"
                />
            </div>
            <div className="p16-t p16-b border-bottom">
                <Input
                wrap__classname="d-flex flex-column justify-between align-items-center"
                formLabel={setup[0].Id[0].label}
                formLabel__classname="w-100 formLabel"
                indicator__classname={setup[0].Id[0].indicator &&"text-critical indicator"}
                formWrap__classname="w-100 flex-grow-1"
                value="ncp_1abc0d_01"
                size="w-100"
                title="API 연동용 판매자 ID"
                state="danger"
                />
            </div>
        </>
    )
}
export default Setup;


