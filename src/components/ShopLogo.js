import React from 'react';
import classNames from "classnames";
export default function ShopLogo({url,
    icon__classname,
}){
    const iconS = classNames(
        icon__classname && icon__classname,  `btn-circle--${url}`
    )
    console.log(icon__classname)
    return(
        <>
        <span className={iconS}>
            {url ==="shoplinker" ? <span className="icon--icon icon-shoplinker"><span className="path1"></span><span className="path2"></span><span className="path3"></span><span className="path4"></span><span className="path5"></span><span className="path6"></span><span className="path7"></span></span>:
                <span className={`icon--icon icon-${url}`}></span>}
        </span>
        </>
    )
}