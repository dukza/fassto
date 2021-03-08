
import React from 'react';
import ShopLogo from './ShopLogo';

export default function ShopListCell({id,name,phone,state,number,reason,date,url,icon__classname}){
    return(
        <>

        <div key={id} className="p16-t p16-b list border-bottom-lighter">
            <div className="d-flex justify-content-between ">
                <div style={{"width":"75%"}}>
                    <div className="text-blue font-12">{number}</div>            
                    <div className="text-dark text-overflow">
                        <div className="text-overflow--wrap font-weight-med">
                        {reason}  
                        </div>
                    </div>
                    <div className="font-12 date">{date}</div> 
                    <div className="font-12  d-flex align-items-center m8-t">
                        {name} {phone}  
                    </div>                         
                </div>
                <div className="d-flex flex-column align-items-end">
                    <div className="mb-auto state">{state}</div>    
                    <ShopLogo url={url} icon__classname={icon__classname}/>                      
                </div>
            </div>
        </div>
        </>
    )
}