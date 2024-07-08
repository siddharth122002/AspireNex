import {createContext,useState} from "react"

export const UserContext = createContext({});

export default function UserContextProvider({children}){
    const [dark,setDark] = useState(true);
    return (
        <UserContext.Provider value = {{dark,setDark}}>
            {children}
        </UserContext.Provider>
    )
}
