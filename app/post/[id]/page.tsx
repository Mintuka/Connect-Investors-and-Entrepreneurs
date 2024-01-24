'use client'
import { useDetail } from "@/hooks/DetailContext"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import Image from "next/image"

const Detail = () => {
    const {data}: any = useDetail()
    const [detail, setDetail] = useState(data)
    const [loading, setLoading] = useState(!data)
    const router = useParams()

    const getPost = async() => {
        const data = await fetch(`/api/post/${router?.id}`)
        const post = await data.json()
        setDetail(post)
        setLoading(false)
    }

    useEffect(() => {
        if (!data){
            getPost()
        }
    },[])

    if (loading){
        return (
            <Image className="p-4 " src='/assets/images/ripple.svg' alt='loading' width={200} height={200}/>
        )
    }
    
    return (
        <>
            <div>Title of the project/business</div>
            <div>{detail?.creator}</div>
            <div>{detail?.post}</div>
            <div>{detail?.tag}</div>
        </>
    )
}

export default Detail