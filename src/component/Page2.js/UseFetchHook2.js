import React ,{useState,useEffect}from "react";



const UseFetchHook2=(url,cb) =>{
    const [data,setData] = useState(null)
    const [isLoading,setIsLoading] = useState(true)
    const [error,setError] = useState('')

    useEffect(()=>{
        fetchData(url)

    },[url])


    const fetchData = async(url)=>{
        try {
            const respones = await fetch(url)
            const result = await respones.json()
        if(!cb){
            setData(result)
            setIsLoading(false)
            setError('')
        }else{
            setData(cb(result))
            setIsLoading(false)
            setError('')
        }
       
        } catch (error) {
            setIsLoading(false)
            setError('an error occured!')
            
        }


    }

    return{data,isLoading,error}
}

export default UseFetchHook2