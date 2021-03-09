import React from 'react';
import classNames from "classnames";
import { Frame, Scroll, useCycle, motion } from "framer";

export default function ShopLogo({url,
    icon__classname,
}){
    const iconS = classNames(
        icon__classname && icon__classname,  `btn-circle--${url}`
    )
    const IconS = {
        scale:1.1
    }
    return(
        <>
        <span className="d-inline-block icon--wrap" style={{'padding':'2px'}}>
            <motion.span className={iconS}  whileTap={IconS}>
                {url ==="shoplinker" ? <span className="icon--icon icon-shoplinker"><span className="path1"></span><span className="path2"></span><span className="path3"></span><span className="path4"></span><span className="path5"></span><span className="path6"></span><span className="path7"></span></span>:
                    <span className={`icon--icon icon-${url}`}></span>}
            </motion.span>
        </span>
        </>
    )
}