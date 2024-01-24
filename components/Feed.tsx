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
                <input type="text" className='h-[20px] border outline-none p-4 mb-4 mt-4 rounded-sm' />
                <Cards posts={posts}/>
            </>
    )
}

export default Feed