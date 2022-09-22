import React from 'react'
import UseFetchHook2 from './UseFetchHook2'

const Page2 = () => {
    const user = UseFetchHook2('https://jsonplaceholder.typicode.com/users',(result)=>result.map((item)=>({id:item.id,name:item.name})))
    const post = UseFetchHook2('https://jsonplaceholder.typicode.com/posts',(result)=>result.map((item)=>({id:item.id,title:item.title})))
    const comments = UseFetchHook2('https://jsonplaceholder.typicode.com/comments',(result)=>result.map((item)=>({id:item.id,name:item.name})))
    
  return (
    <div>

        <div style={{display:'flex',justifyContent:'space-between'}}>
            <div>
                {user.isLoading&& <h1>Loading...</h1>}
                {user.error&& <h1>{user.error}</h1>}
                {Array.isArray(user.data)&&user.data.map((item)=><li key={item.id}>{item.name}</li>)}
            </div>
            <div>
                {post.isLoading&& <h1>Loading...</h1>}
                {post.error&& <h1>{post.error}</h1>}
                {Array.isArray(post.data)&&post.data.map((item)=><li key={item.id}>{item.title}</li>)}
            </div>
            <div>
                {comments.isLoading&& <h1>Loading...</h1>}
                {comments.error&& <h1>{comments.error}</h1>}
                {Array.isArray(comments.data)&&comments.data.map((item)=><li key={item.id}>{item.name}</li>)}
            </div>

        </div>
      
    </div>
  )
}

export default Page2
