import React,{useState,useEffect} from 'react'
import shortid from 'shortid'


const initialState = {
    id:shortid.generate(),
    name:'',
    age:''
}
const CreateUser = ({user,setUser}) => {
    const [newUser,setNewUser] = useState(initialState)
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
