import React, { useContext } from 'react';

// hook
import { LayoutContext } from './context';


export const useData = ()=>{
    const { shops } = useContext(LayoutContext);
    const getData = (id)=>{
        return shops
        .filter(shop => shop.id === id)[0]
    }
    return{
        getData
    }
}