import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = (props) => {
    const { children } = props;
    const [isLogin, setisLogin] = useState(false);
    const [isOrder, setisOrder] = useState(false);

    // Lấy thông tin User 
    const [userInfo, setuserInfo] = useState({});
    const [userID, setuserID] = useState('');
    const [userAddress, setuserAddress] = useState('');
    const [userRole, setuserRole] = useState()

    return (
        <AppContext.Provider value={{ isLogin, setisLogin, isOrder, setisOrder, userInfo, setuserInfo, userID, setuserID, userAddress, setuserAddress, userRole, setuserRole}}>
            {children}
        </AppContext.Provider>
    )
}