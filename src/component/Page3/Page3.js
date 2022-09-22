import React,{useState,useEffect} from 'react'
import User from './User'
import shortid from 'shortid'


const CreateUser = ({user,setUser})=>{

    const initialaState = {
        id:shortid.generate(),
        name:'',
        age:''

    }
    const [newUser,setNewUser] = useState(initialaState)
    const handleChange =(e)=>{
        setNewUser({
            ...newUser,
            [e.target.name]:e.target.value
        })

    }

    const handleClick =(e)=>{
        e.preventDefault()
        setUser([...user,newUser])
        setNewUser(initialaState)

    }
    return(
        <form>
            <div>
            <input type="text" name='name' value={newUser.name} placeholder='enter name' onChange={handleChange} />
            </div>
            <div>
                <input type="number" name='age' value={newUser.age} placeholder='enter age' onChange={handleChange} />
            </div>
            <button type='submit' onClick={handleClick}>submit</button>
        </form>
    )
}

const UpdateUser = ({id,user,setUser})=>{


    const initialaState = {
        id:id,
        name:'',
        age:''

    }
    const [updateUser,setUpdateUser] = useState(initialaState)
    const handleChange =(e)=>{
        setUpdateUser({
            ...updateUser,
            [e.target.name]:e.target.value
        })

    }

    
    useEffect(()=>{
       
            const filteredUser = user.find((item)=>item.id==id)
       
        if(filteredUser){
            setUpdateUser({
                id:id,
                name:filteredUser.name,
                age:filteredUser.age
            })
    
        }
    },[id])
    const handleClick =(e)=>{
        e.preventDefault()

        const index = user.map((item)=>item.id).indexOf(id)
        
        const singleUser = user[index]
       singleUser.id= id
       singleUser.name= updateUser.name
       singleUser.age = updateUser.age
        
        setUser([...user])
        setUpdateUser(initialaState)

    }



    return(
        <form>
            <div>
            <input type="text" name='name' value={updateUser.name} placeholder='enter name' onChange={handleChange} />
            </div>
            <div>
                <input type="number" name='age' value={updateUser.age} placeholder='enter age' onChange={handleChange} />
            </div>
            <button type='submit' onClick={handleClick}>update</button>
        </form>
    )

}
const Page3 = () => {

    const [user,setUser] = useState([])
    const [Id,setId] = useState('')
    useEffect(()=>{

        if(User){
            setUser([...User])
        }
    },[])
    
    const handleDelete=(id)=>{
        
        const filteredUser = user.filter((item)=>item.id !==id)
        setUser([...filteredUser])

    }

  return (
    <div>
        <div>
            <h1>create new user</h1>
            <CreateUser user = {user} setUser= {setUser}/>
        </div>
        <div>
            <h1>update user</h1>
            <UpdateUser id= {Id} user = {user} setUser ={setUser}/>
        </div>



        {
            user&& user.map((item)=><li key={item.id}>
                <p>name: {item.name}</p>
                <p>age: {item.age}</p>
                <div>
                    <button onClick={()=>setId(item.id)}>edit</button>
                    <button onClick={()=>handleDelete(item.id)}>delete</button>
                </div>
            </li>)
        }
      
    </div>
  )
}

export default Page3
