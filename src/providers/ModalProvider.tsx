

import { createContext, ReactNode, useState } from "react";



export const ModalContext = createContext<{
    isOpen: boolean, openModal: () => void, closeModal: () => void,
}>({
    isOpen: false, openModal: () => {return;}, closeModal: () => {return;},
});




export const ModalProvider = ({ children } : { children: ReactNode}) => {

    const [isOpen, setIsOpen] = useState<boolean>(false);

    const openModal = () => {
        console.log("open modal");
        setIsOpen(true);
    }

    const closeModal = () => {
        console.log("close modal");
        setIsOpen(false);
    }

    return (
        <ModalContext.Provider value={{
            isOpen, openModal, closeModal,
        }}>
            {children}
        </ModalContext.Provider>
    );
};
