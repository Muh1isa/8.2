import { createContext, useContext, useState } from "react";



export const AppContext = createContext()

export const AppProvider = ({children}) => {
    const [login, setLogin] = useState(false)


    return (
        <AppContext.Provider value={{
            login, setLogin
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}