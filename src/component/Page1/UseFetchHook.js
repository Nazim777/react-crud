import React,{useState,useEffect} from "react"



const UseFetchHook=(url,cb)=>{
    const [data,setData] = useState(null)
    const [isLoading,setIsLoading] = useState(true)
    const [error,setError] = useState('')
    useEffect(()=>{
        fetchData(url)

    },[url])

    const fetchData = async(url)=>{
        try {
            const response = await fetch(url)
            const result = await response.json()
            if(!cb){
                setData(result)
                setIsLoading(false)
                setError('')
            }else{
                setData(cb(result))
                setIsLoading(false)
                setError('')
            }
        }catch (error) {
            setError('an error occured!')
            setIsLoading(false)
            
        }
    }

    return{data,isLoading,error}
}

export default UseFetchHook

















// const UseFetchHook=(url)=>{
//     const [data, setData] = useState();
//     const [error, setError] = useState();
//     const [loading, setLoading] = useState(false);

//     useEffect(() => {
//         fetchAPI(url)
       
//     }, []);


//     const fetchAPI = async (url) => {
//         try {
//             const response = await fetch(url);
//             const data = await response.json();
//             setData(data);
//         } catch (error) {
//             setError(error);
//         } finally {
//             setLoading(false);
//         }
//     };
    




//     return { data, error, loading };
// }

// export default UseFetchHook