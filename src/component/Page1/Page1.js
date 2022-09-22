import React from 'react'
import UseFetchHook from './UseFetchHook'

const Page1 = () => {
   const {data,isLoading,error}=  UseFetchHook('https://jsonplaceholder.typicode.com/users',(result)=>result.map((item)=>({id:item.id,name:item.name})))
   

   const post = UseFetchHook('https://jsonplaceholder.typicode.com/posts',(result)=>result.map((item)=>({id:item.id,title:item.title})))
   
   const comments = UseFetchHook('https://jsonplaceholder.typicode.com/comments',(result)=>result.map((item)=>({id:item.id,name:item.name})))
   
   
  
  return (
    <div>
        <div style={{display:'flex',justifyContent:'space-between'}}>
            <div>
                {isLoading&& <h1>Loading...</h1>}
                {error&&<h1>{error}</h1>}
                {Array.isArray(data) && data.map((item)=><li key={item.id}>{item.name}</li>)}
            </div>
            <div>
            {post.isLoading&& <h1>Loading...</h1>}
              {post.error&&<h1>{error}</h1>}
              {Array.isArray(post.data)&& post.data.map((item)=><li key={item.id}>{item.title}</li>)}


            </div>
            <div>
            {comments.isLoading&& <h1>Loading...</h1>}
              {comments.error&&<h1>{error}</h1>}
              {Array.isArray(comments.data)&& comments.data.map((item)=><li key={item.id}>{item.name}</li>)}


            </div>

        </div>
      
    </div>
  )
}

export default Page1
