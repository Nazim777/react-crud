import React,{useState,useContext,useEffect} from 'react'
import { UserContext } from './Context'
import { useNavigate } from 'react-router-dom'




const initialState = {
  id:'',
  name:'',
  age:''
}
const UpdateUser = () => {
  const navigate = useNavigate()
  const userContext = useContext(UserContext)
  const [updateuser,setUpdateUser] = useState(initialState)
  const {user,setUser,Id} = userContext

useEffect(()=>{
  const filteredUser = user.find((item)=>item.id==Id)
  if(filteredUser){
    setUpdateUser({
      id:Id,
      name:filteredUser.name,
      age:filteredUser.age
    })
  }

},[Id])
  const handleChange = (e)=>{
    setUpdateUser({
        ...updateuser,
        [e.target.name] :e.target.value
    })

}
const handleClick = (e) =>{
    e.preventDefault()
    if(Id){
      const index  = user.findIndex((item)=>item.id==Id)
    const a = user[index]
    a.id = updateuser.id
    a.name = updateuser.name
    a.age = updateuser.age
    setUser([...user])
    navigate('/')
    }
}
  return (
    <div>
        <h1>hello this is a update user page</h1>



        <form>
            <div>
                <input type="text" name='name' value={updateuser.name} placeholder='enter name' onChange={handleChange}  />
            </div>
            <div>
                <input type="text" name='age' value={updateuser.age} placeholder='enter age' onChange={handleChange} />
            </div>
            <button type='submit' onClick={handleClick}>submit</button>
        </form>
      
    </div>
  )
}

export default UpdateUser
