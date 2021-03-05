import React,{useEffect} from 'react';
import classNames from "classnames";

//component
import Button from './Button';

export default function Modal ({
    title,
    children,
    buttonName,
    state,
    isModal,
    toggleModal
})  {
    useEffect(() => {
        document.addEventListener('keydown', keyPress);
        document.addEventListener('click', stopProgagation);
        return () => {
          document.removeEventListener('keydown', keyPress);
          document.removeEventListener('click', stopProgagation);
        };    
      });
      const keyPress = (e) => {
        e.keyCode === 27 && toggleModal(e);
      }
      
      const stopProgagation = (e) => {
        e.stopPropagation();
      }
      
      
      useEffect(() => {
          handleBodyClass();
        }, [isModal]); 
        
        const handleBodyClass = () => {
          if (document.querySelectorAll('.Modal.is-active').length) {
            document.body.classList.add('modal-is-active');
          } else {
            document.body.classList.remove('modal-is-active');
          }
        }
    const classes = classNames(
        "Modal",
        state && "is-active"
    );
    return(
        <>
        <div className={classes} onClick={toggleModal}>
            <div className="modarl--wrap">
                <div className="modal--title">
                    <div className="title">{title}</div>
                    <div onClick={toggleModal} className="btn--close"><i className="fal fa-times"></i></div>
                </div>   
                <div className="modal--content">
                    {children}
                </div>  
                <div className="modal--footer">
                    <Button 
                    onClick={toggleModal}
                    tag="button"
                    size="56"
                    state="dark"
                    classAdd="w-100"
                    >{buttonName}</Button>                
                </div>  
            </div>
        </div>

        </>
    )
}