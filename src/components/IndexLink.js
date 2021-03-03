import React from 'react'; 
import {Link} from "react-router-dom";


const IndexLink = ({children,...rest}) => {
    return(
        <>
            <Link {...rest}>{children}</Link>
        </>
    )
}

export default IndexLink;