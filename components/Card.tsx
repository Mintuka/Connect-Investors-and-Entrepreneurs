'use client'
import Image from "next/image"
import { useDetail } from "@/hooks/DetailContext"
import { PostType } from "@/types/Post"
import { useRouter } from "next/navigation"

const Card = ({_id, creator, post, tag, businessName, createdAt}: PostType) => {
    const {setData}:any = useDetail()
    const router = useRouter()

    const handleDetail = () => {
        setData({_id, creator, post, tag})
        router.push(`/post/${_id}`)
    }

    return (
        <div onClick={handleDetail} className="col-3 p-5 m-2 border rounded-lg cursor-pointer bg-slate-50 bg-clip-padding shadow-sm hover:shadow-md" key={_id}>
            <div className="flex mb-4">
                <Image src='assets/images/figma.svg' width={40} height={40} alt='figma' className="mr-2"/>
                <div>
                    <div className="text-[14px]">{creator}</div>
                    <div className="text-[12px] text-gray-500 font-sm">{new Date(createdAt).toDateString()}</div>
                </div>
            </div>
            <div className="font-[600] mb-2">
                {businessName}
            </div>
            <div className="text-[14px] text-sm text-gray-600 mb-4">
                {post.substring(0,120)}...
            </div>
            <div className="flex">
                <Image src='/assets/images/elon.jpg' height={45} width={45} alt="elon" className="w-[40px] h-[40px] border border-[2px] border-[white] rounded-full"></Image>
                <Image src='/assets/images/jeff.jpg' height={45} width={45} alt="jeff"  className="w-[40px] h-[40px] border border-[2px] border-[white] rounded-full ml-[-10px]"></Image>
                <div className="w-[40px] h-[40px] border border-[2px] border-[white] rounded-full ml-[-10px] flex justify-center items-center bg-black text-white">+2</div>
            </div>
            {/* <div>{creator}</div>
            <div>{post}</div>
            <div>{tag}</div> */}
        </div>
    )
}

export default Card