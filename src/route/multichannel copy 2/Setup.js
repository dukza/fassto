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

const Setup = ({match,history}) => {
    // const {shop} = useParams();
    // console.log('match',{match})
    const { shops } = useContext(LayoutContext);

    console.log('useParams',useParams())
    

    // const shop = menus.find(menu => menu.url === match.params.shop);    
    const shop = shops.find(shop => shop.url === match.params.shop);    

    return(
        <>
            <div className="navigation">
                <a className="btnNav btnNav__r" onClick={() => history.goBack()}><i className="fal fa-times"></i></a><span>{shop.name}</span>  
            </div>
            <div className="content">
                {shop.components && 
                shop.components.map((component)=>{
                return(
                    <>
                    <div key={component.id} className={`sectionType ${component.classname}`}>
                    {component.label && <div className="section--title">{component.label}</div>}
                    {component.contents && component.contents.map((content)=>{
                    const Type = content.type;
                    return(
                        <>
                        {Type ==='Switch' && <Switch
                        key={content.id}
                        item__classname={content.item__classname}
                        formLabel={content.label}
                        formLabel__classname={content.formLabel__classname}
                        indicator
                        formWrap__classname=""
                        formHint={content.formHint}
                        formHint__classname={content.formHint__classname}
                        checked={content.checked}
                        />}  
                        {Type ==='Input' && <Input
                        key={content.id}
                        type={content.form__type}
                        label__classname={content.label__classname}
                        item__classname={content.item__classname}
                        formLabel={content.label}
                        formLabel__classname={content.formLabel__classname}
                        indicator
                        formWrap__classname={content.formWrap__classname}
                        form__side={content.form__side}
                        formHint={content.formHint}
                        formHint__classname={content.formHint__classname}
                        value={content.value}
                        size={content.size}
                        state=""
                        />}  
                        {Type ==='Select' &&  <Select
                        key={content.id}
                        item__classname={content.item__classname}
                        formLabel={content.label}
                        formLabel__classname={content.formLabel__classname}
                        indicator
                        formWrap__classname={content.formWrap__classname}
                        formHint={content.formHint}
                        formHint__classname={content.formHint__classname}
                        size={content.size}
                        >
                            {content.childrens.map((children,index)=>(
                                <option key={index}>{children}</option>
                            ))}
                        </Select>}  
                        {Type ==='Button' && <Button
                        key={content.id}
                        tag="button"
                        state={content.state}
                        size={content.size}
                        item__classname={content.item__classname}
                        formLabel={content.formLabel}
                        formLabel__classname={content.formLabel__classname}
                        indicator
                        formHint={content.formHint}
                        formHint__classname={content.formHint__classname}
                        >
                        {content.children}{content.icon&& content.icon === "calendar" && <i className="far fa-calendar-check"></i>}
                        </Button>}
                        </>                  
                    )
                    
                    })}    
                    </div>
                    </>
                )})
                }                
            </div>




      {/* <div className="p16-t p16-b border-bottom">
        <Input
        item__classname="d-flex flex-column justify-between align-items-center"
        formLabel={setup[0].Id[0].label}
        formLabel__classname="w-100 formLabel"
        indicator__classname={setup[0].Id[0].indicator && "text-danger"}
        formWrap__classname="w-100 flex-grow-1"
        value="ncp_1abc0d_01"
        size="w-100"
        title="API 연동용 판매자 ID"
        state="danger"
        />
    </div> */}
        </>
    )
}
export default Setup;


