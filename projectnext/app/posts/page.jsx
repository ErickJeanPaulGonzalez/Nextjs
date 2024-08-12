import PostCard from '@/components/postCard'
import "./Posts.css"

async function loadPosts() {                //Funcion asyncrona , consume la api
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();           // convierte la respuesta en json 
    
  //  await new Promise((resolve) => setTimeout(resolve, 3000))

    return data;
}

async function PostPages() {
    const posts = await loadPosts();     //ejecucion de la funcion que consume la api para utilizarla 
    console.log(posts)

    return (
        <div className='grid'>
            {posts.map((post )=> (
                    <PostCard post={post} key={post.id} />
                  
                ))
            }
        </div>)
}


export default PostPages