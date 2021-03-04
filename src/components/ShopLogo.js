export default function ShopLogo({url}){
    return(
        <>
        <span className={`btn-circle--icon m8-r btn-circle--${url}`}>
            {url ==="shoplinker" ? <span className="icon--icon icon-shoplinker"><span className="path1"></span><span className="path2"></span><span className="path3"></span><span className="path4"></span><span className="path5"></span><span className="path6"></span><span className="path7"></span></span>:
                <span className={`icon--icon icon-${url}`}></span>}
        </span>
        </>
    )
}