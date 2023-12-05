import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = (props) => {
    const { children } = props;
    const [isLogin, setisLogin] = useState(false);
    const [isOrder, setisOrder] = useState(false);


    // Lấy thông tin User

    // const [userInfo, setuserInfo] = useState({}); 
    // const [userID, setuserID] = useState(""); 
    const [userInfo, setuserInfo] = useState({});
    const [userID, setuserID] = useState('656efdabdd44641210bd9920');
    const [userAddress, setuserAddress] = useState('Hoang Van Thu');
    const [userRole, setuserRole] = useState(3)
    return (
        <AppContext.Provider value={{ isLogin, setisLogin, isOrder, setisOrder, userInfo, setuserInfo, userID, setuserID, userAddress, setuserAddress, userRole, setuserRole}}>
            {children}
        </AppContext.Provider>
    )
}