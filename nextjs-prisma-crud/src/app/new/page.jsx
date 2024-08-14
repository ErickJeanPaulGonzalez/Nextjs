"use client"

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

function NewPage({ params }) {
    const router = useRouter()
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    useEffect(() => {
        if (params.id){
            fetch(`/api/task/${params.id}`)
            .then(res => res.json())
            .then(data => {
                setTitle(data.title)
                setDescription(data.description)
            })
        }
    }, [])
    const onSubmit = async (e) => {
        e.preventDefault()

        if (params.id){
            const res = await fetch(`/api/task/${params.id}`,{
                method: "PUT",
                body: JSON.stringify({title, description}),
                headers:{
                    "Content-Type": "application/json",
                }
            })
            const data = await res.json();

            console.log(data)
        }else{
            const res = await fetch(`/api/task`, {
                method: 'POST',
                body: JSON.stringify({ title, description }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            console.log(res)
            const data = await res.json()
            console.log(data)
        }
        router.refresh()
        router.push('/')
        //console.log(title, description)
    };
    return (
        <div className="h-screen flex justify-center items-center">
            <form action="" className="bg-slate-800 p-10 lg:w-2/4 w-full"
                onSubmit={onSubmit}
            >
                <label htmlFor="title" className="font-bold text-sm">
                    Titulo de la tarea
                </label>
                <input type="text"
                    id="title"
                    className="border border-gray-400 p-2 mb-4 w-full text-black"
                    placeholder="Titulo"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                />
                <label htmlFor="description" className="font-bold text-sm">
                    Descripcion de la tarea
                </label>
                <textarea rows="3" name="description" id="description"
                    className="border border-gray-400 p-2 mb-4 w-full text-black"
                    placeholder="Describe tu tarea"
                    onChange={(e) => { setDescription(e.target.value) }}
                    value={description}
                ></textarea>
               <div className='flex justify-between'>
                 <button type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    crear
                </button>
                {
                    params.id && (
                        <button className='bg-red-500 
                         hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-4 ' type='button'
                         onClick={ async ()=>{
                            const res = await fetch(`/api/task/${params.id}`,{
                                method: "DELETE",

                            })
                            const data = await res.json()
                            console.log(data)
                            
                            router.push("/")
                            router.refresh()
                         }}
                         >
                            delete
                        </button>
                    )
                }
               </div>
            </form>
        </div>
    )
}

export default NewPage;