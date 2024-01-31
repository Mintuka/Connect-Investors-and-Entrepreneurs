'use client'
import Image from "next/image"
import { PostType } from "@/types/Post"
import { useEffect, useState } from "react"
import Card from "./Card"

const Cards = ({posts}:any) => {
    return (
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {
                posts.map((post: PostType) => {
                    return (
                        <Card {...post} key={post?._id}/>
                    )
                })
            }
        </div>
    )
}

const Feed = () => {
    const [posts, setPosts] = useState<PostType[]>([])
    const [loading, setLoading] = useState(true)

    const fetchPosts = async() => {
        const response = await fetch('api/post')
        const data = await response.json()
        setPosts(data)
        setLoading(false)
    }

    useEffect(() => {
        fetchPosts()
    }, [])

    if (loading) {
        return (
            <Image className="p-4 " src='assets/images/ripple.svg' alt='loading' width={200} height={200}/>
        )
    }
    return (
            <>
                <div className="flex justify-start items-center relative w-full">
                    <i className="fa-solid fa-magnifying-glass absolute left-[20px] font-[400]"></i>
                    <input type="text" className='h-[20px] border outline-none py-4 px-8 my-4 mx-2 rounded-[40px]' placeholder="search"/>
                </div>
                <Cards posts={posts}/>
            </>
    )
}

export default Feed