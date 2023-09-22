import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = (props) => {
    const {children} = props;

    const [isLogin, setisLogin] = useState(false);
    const [isOrder, setisOrder] = useState(false)
    return (
        <AppContext.Provider value={{isLogin, setisLogin, isOrder, setisOrder}}>
            {children}
        </AppContext.Provider>
    )
}