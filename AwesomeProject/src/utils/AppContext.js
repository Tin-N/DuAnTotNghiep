import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = (props) => {
    const { children } = props;
    const [isLogin, setisLogin] = useState(false);
    const [isOrder, setisOrder] = useState(false);


    // Lấy thông tin User
    const [userInfo, setuserInfo] = useState({});
    const [userID, setuserID] = useState('654627d67137a3bf678fb544');
    return (
        <AppContext.Provider value={{ isLogin, setisLogin, isOrder, setisOrder, userInfo, setuserInfo, userID, setuserID }}>
            {children}
        </AppContext.Provider>
    )
}