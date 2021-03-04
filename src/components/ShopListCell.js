
export default function ShopListCell({id,name,phone,state,number,reason,date}){
    return(
        <>
        <div key={id} className="p16-t p16-b list bg-hover-lighter">
            <div className="d-flex justify-content-between">
                <div className="heading">
                    {name}<span className="circle circle-3"></span>{phone}  
                </div>
                <div className="state">{state}</div>
            </div>
            <div>{reason}</div>
            <div className="font-13 text-ink-muted">{number}</div>
            <div className="date">{date}</div>            
        </div>
        </>
    )
}