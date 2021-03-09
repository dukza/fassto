import React,{useState} from 'react';
import data from './../db/data.json'

import  Modal from './../components/elements/Modal';


export const LayoutContext = React.createContext();

const LayoutProvider = ({children}) => {
    const shops = data.multichannel.shops;
    const [isModal, setModal] = useState(false);
    const toggleModal = (e) => {
        e.preventDefault();
        setModal(!isModal)
    }
    const ModalWrap = ({title,buttonName,chidren}) => {
        return(
            <>
               <Modal
                isModal={isModal}
                toggleModal={toggleModal}
                title={title}
                buttonName={buttonName}
                state={isModal}
               >{chidren}</Modal>
            </>
        )
    }

    return(
        <LayoutContext.Provider value={{shops,isModal,ModalWrap, toggleModal}}>
            {children}
        </LayoutContext.Provider>
    )
}

export default LayoutProvider;