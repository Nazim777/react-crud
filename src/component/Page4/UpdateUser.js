import React,{useState,useEffect} from 'react'

const inititialState = {
    id:'',
    name:'',
    age:''
}
const UpdateUser = ({id,user,setUser}) => {
    const [updateUser,setUpdateUser] = useState(inititialState)
    useEffect(()=>{
        const filterredUser =user.find((item)=>item.id==id)
        if(filterredUser){
            setUpdateUser({
                id:id,
                name:filterredUser.name,
                age:filterredUser.age

            })
        }

    },[id])
    const handleChange=(e)=>{
        setUpdateUser({
            ...updateUser,
            [e.target.name] :e.target.value
        })
        

    }
    const handleClick =(e)=>{
        e.preventDefault()
        if(id){
            const index= user.map((item)=>item.id).indexOf(id)
        const updatedUser = user[index]
        updatedUser.id = updateUser.id
        updatedUser.name = updateUser.name
        updatedUser.age = updateUser.age
        setUser([...user])

        }
    }
  return (
    <div>
        <form>
            <div>
                <input type="text" value={updateUser.name}  name='name' placeholder='name' onChange={handleChange}/>
            </div>
            <div>
                <input type="text" value={updateUser.age} name='age' placeholder='age' onChange={handleChange}/>
            </div>
            <button type='submit' onClick={handleClick}>update</button>
        </form>
      
    </div>
  )
}

export default UpdateUser
