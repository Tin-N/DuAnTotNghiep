import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = (props) => {
    const {children} = props;
    const [isLogin, setisLogin] = useState(false);
    const [isOrder, setisOrder] = useState(false);
    const [userID, setuserID] = useState('6543aef3e99b70c1f167b727')
    return (
        <AppContext.Provider value={{isLogin, setisLogin, isOrder, setisOrder, userID, setuserID}}>
            {children}
        </AppContext.Provider>
    )
}