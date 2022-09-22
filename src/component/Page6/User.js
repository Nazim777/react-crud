import React,{useState,useContext, useEffect} from 'react'
import { UserContext } from './Context'
import { Link } from 'react-router-dom'


const User = () => {
    const userContext = useContext(UserContext)
    const {user,setUser,setId} = userContext
    
    const handleDelete = (id) =>{
        const filteredUser =user.filter((item)=>item.id!==id)
        setUser([...filteredUser])

    }
    
  return (
    <div>
        <h1>hello this is a user page</h1>
        {
            user&& user.map((item)=><li key={item.id}>
                <p>name: {item.name}</p>
                <p> name: {item.age}</p>
                <Link to='/updateuser'><button onClick={()=>setId(item.id)}>edit</button></Link>
                <button onClick={()=>handleDelete(item.id)}>delete</button>
                
            </li>)
        }

      
    </div>
  )
}

export default User
