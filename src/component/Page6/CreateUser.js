import React,{useState,useContext} from 'react'
import shortid from 'shortid'
import { UserContext } from './Context'
import { useNavigate } from 'react-router-dom'


const initialState = {
  id:shortid.generate(),
  name:'',
  age:''
}
const CreateUser = () => {
    const navigate = useNavigate()

  const userContext = useContext(UserContext)
  const [newUser,setNewUser] = useState(initialState)
  const {user,setUser} = userContext
  
  const handleChange = (e)=>{
      setNewUser({
          ...newUser,
          [e.target.name] :e.target.value
      })

  }
  const handleClick = (e) =>{
      e.preventDefault()
      setUser([...user,newUser])
     
      
      setNewUser(initialState)
      navigate('/')
  }
  return (
    <div>
        <form>
            <div>
                <input type="text" name='name' value={newUser.name} placeholder='enter name' onChange={handleChange}  />
            </div>
            <div>
                <input type="text" name='age' value={newUser.age} placeholder='enter age' onChange={handleChange} />
            </div>
            <button type='submit' onClick={handleClick}>submit</button>
        </form>
      
    </div>
  )
}

export default CreateUser
