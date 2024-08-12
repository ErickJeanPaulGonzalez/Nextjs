import Link from 'next/link'
import PostPages from '../page'
import { Suspense } from 'react'


async function loadPost(id) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data = await res.json()
    return data;
}

async function Page({ params }) {

    const post = await loadPost(params.postId)
    //console.log(params)  //esta linea muestra los params (proms.prams) pasados por url 
    console.log(post)
    return (
        <div>
            <h1>{post.id} {post.title}</h1>
            <p>{post.body}</p>
            <hr />
            <h1>Otras publicaciones </h1>
            <Suspense fallback={<div>
                cargando publicaciones...
            </div>}>
                <PostPages />
            </Suspense>

            <Link href={'/'}>
                <h1>Go back </h1>
            </Link>

        </div>

    )

}

export default Page;