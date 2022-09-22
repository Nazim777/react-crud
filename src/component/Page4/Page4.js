import React,{useState,useEffect} from 'react'
import User from '../Page3/User'
import CreateUser from './CreateUser'
import UpdateUser from './UpdateUser'

const Page4 = () => {
    const [user,setUser] = useState([])
    const [Id,setId] = useState('')
    useEffect(()=>{
        setUser([...User])

    },[])
    const handleDelete =(id)=>{
        const filteredUser = user.filter((item)=>item.id!==id)
        setUser([...filteredUser])
    }


  return (
    <div>

        <div>
            <h1>creater user</h1>
            <CreateUser user= {user} setUser={setUser} />
        </div>
        <div>
            <h1>update user</h1>
            <UpdateUser id={Id} user={user} setUser={setUser}/>
        </div>
        {user&& user.map((item)=><li key={item.id}>
            <p>name: {item.name}</p>
            <p>age: {item.age}</p>
            <div>
                <button type='submit' onClick={()=>setId(item.id)}>edit</button>
                <button type='submit' onClick={()=>handleDelete(item.id)}>delete</button>
            </div>
        </li>)}

      
    </div>
  )
}

export default Page4
