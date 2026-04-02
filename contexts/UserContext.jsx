import { createContext, useState } from "react";


export const UserContext = createContext()

export const UserProvider = ({ children }) => {
    const [user, setuser] = useState()

    async function login (email, password) {

}
    async function register (email, password) {

    }

    async function logout () {

    }


    return (
     <UserContext.Provider value = {{user, login, register, logout}}>
        {children}
     </UserContext.Provider>      
    )
}


