import { createContext,useState } from "react";
import AllUser from './AllUser'
export const UserContext = createContext(null)

export const UserProvider = (props)=>{
    const [user,setUser] = useState(AllUser)
    const [Id,setId] = useState('')
    return(
        <UserContext.Provider value={{user,setUser,Id,setId}}>
            {props.children}
        </UserContext.Provider>
    )
}