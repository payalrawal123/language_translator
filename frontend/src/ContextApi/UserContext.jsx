import { createContext, useState } from "react";

export const UserContext = createContext();
export const UserContextProvider =({children})=>{
const[user, setUser] = useState(null);
const[isLogedIn, setIsLogedIn] = useState(false);

    return (
        
        <UserContext.Provider value={{user, setUser,isLogedIn,setIsLogedIn}}>
            {children}
            </UserContext.Provider>
       
    )
}