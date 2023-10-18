import { createContext,useState } from "react";

export const UserContext = createContext();

export const  UserContextProvider = (props) => {
    const { children } = props;
    // data dung chung
    // bien kiem tra dang nhap
    const [isLogin, setisLogin] = useState(false);
    const [userInfo, setuserInfo] = useState({})
    return (
        <UserContext.Provider value={{ isLogin, setisLogin,userInfo,setuserInfo }}>
            {children}
        </UserContext.Provider>
    )
    
}
