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
    const { shops } = useContext(LayoutContext);
    const shop = shops.find(shop => shop.url === match.params.shop);    
    return(
        <>
            <div className="navigation bg-light">
                <a className="btnNav btnNav__r" onClick={() => history.goBack()}><i className="fal fa-times"></i></a><span>{shop.name}</span>  
            </div>
            <div className="content">
                {
                shop.components.map((component)=>{
                return(
                    <div key={component.id} className={`sectionType ${component.classname}`}>
                    {component.label && <div className="section--title">{component.label}</div>}
                    {component.contents && component.contents.map((content)=>{
                    const Type = content.type;
                    console.log(content.id)
                    return(
                        <>
                        {Type ==='Switch' && <Switch
                        id={content.id}
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
                        id={content.id}
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
                        id={content.id}
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
                        indicator__classname={content.id}
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
                )})
                }                
            </div>
        </>
    )
}
export default Setup;


