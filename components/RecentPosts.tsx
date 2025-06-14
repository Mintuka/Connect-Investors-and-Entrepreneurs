"use client"
import { PostType } from "@/types/Post"
import { useState, useEffect } from "react"
import Image from "next/image"
import Recent from "./Recent"

const Cards = ({posts}:any) => {
    return (
        <div className="w-full grid grid-cols-1">
            {
                posts.map((post: PostType) => {
                    return (
                        <Recent {...post} key={post?._id}/>
                    )
                })
            }
        </div>
    )
}

const RecentPosts = () => {
    const [posts, setPosts] = useState([])
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

    // if (loading) {
    //     return (
    //         <Image className="p-4 " src='assets/images/ripple.svg' alt='loading' width={200} height={200}/>
    //     )
    // }

    return (
        !loading && 
        <div className="w-1/4 px-4">
            <div className="font-bold text[16px] py-2">Browse by Capital</div>
            <div className="flex flex-wrap">
                <div className="p-1 flex items-center px-4 rounded-[20px] text-[13px] bg-[rgba(0,0,0,0.1)] my-1 mr-1 cursor-pointer">Series A</div>
                <div className="p-1 flex items-center px-4 rounded-[20px] text-[13px] bg-[rgba(0,0,0,0.1)] my-1 mr-1 cursor-pointer">Series B</div>
                <div className="p-1 flex items-center px-4 rounded-[20px] text-[13px] bg-[rgba(0,0,0,0.1)] my-1 mr-1 cursor-pointer">Series C</div>
                <div className="p-1 flex items-center px-4 rounded-[20px] text-[13px] bg-[rgba(0,0,0,0.1)] my-1 mr-1 cursor-pointer">Series D</div>
                <div className="p-1 flex items-center px-4 rounded-[20px] text-[13px] bg-[rgba(0,0,0,0.1)] my-1 mr-1 cursor-pointer">Series E</div>
                <div className="p-1 flex items-center px-4 rounded-[20px] text-[13px] bg-[rgba(0,0,0,0.1)] my-1 mr-1 cursor-pointer">Series F</div>
            </div>
            <div className="font-bold text[16px] py-2">Recent Posts</div>
            <div className="flex flex-wrap max-h-[350px] overflow-y-scroll">
                <Cards posts={posts}/>
            </div>
        </div>
    )
}

export default RecentPosts