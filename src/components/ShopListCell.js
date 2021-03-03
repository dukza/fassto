export default function ShopListCell({name,phone,state,number,reason,date}){
    return(
        <>
        <div className="p16-t p16-b">
            <div className="d-flex justify-content-between">
                <div>
                {name}{phone}  
                </div>
                <div className="font-12">{state}</div>
            </div>
            <div>{number}</div>
            <div>{reason}</div>
            <div>{date}</div>            
        </div>

        </>
    )
}