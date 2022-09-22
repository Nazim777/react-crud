import React,{useState,useEffect} from 'react'
import axios from 'axios'
import shortid from 'shortid'


const CreateUser = ({setstatus})=>{


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


    const handleClick = async(e)=>{
        e.preventDefault()
        await axios.post('http://localhost:5000/user',newUser)
        setstatus(true)

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


const UpdateUser = ({id,user,setUser,setstatus})=>{



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
const handleClick = async(e)=>{
    e.preventDefault()
     await axios.put(`http://localhost:5000/user/${id}`, updateUser)
   setstatus(true)

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



const Page7 = () => {
    const [user,setUser] = useState([])
    const [status,setstatus] = useState(false)
    const [Id,setId] = useState('')
    
    useEffect(()=>{
        const alluser = async()=>{
            const result = await axios.get('http://localhost:5000/user')
            setUser([...result.data])

        }
        alluser()

    },[])
    const handleDelete= async(id)=>{
      await axios.delete(`http://localhost:5000/user/${id}`)
     
     setstatus(true)
    }
    
        if(status){
            return <Page7/>
        }

   
  return (
    <div>
        <h1>hello this is a page 7</h1>
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

        <div>
            <h1>create more user</h1>
            <CreateUser setstatus= {setstatus}/>
            
        </div>
        <div>
            <h1>update user</h1>
            <UpdateUser id = {Id} user = {user} setUser = {setUser} setstatus = {setstatus}/>
        </div>
      
    </div>
  )
}

export default Page7
