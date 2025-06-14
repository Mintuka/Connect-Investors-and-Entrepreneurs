'use client'
import Image from "next/image"
import { useDetail } from "@/hooks/DetailContext"
import { PostType } from "@/types/Post"
import { useRouter } from "next/navigation"

const Recent = ({_id, creator, post, tag}: PostType) => {
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
                    <div className="text-[14px]">Andrew</div>
                    <div className="text-[12px] font-[200]">15-02-2024</div>
                </div>
            </div>
            <div className="font-[600] mb-2">
                Andrew Lee
            </div>
            <div className="text-[14px] font-[200] mb-4">
                Pay attention {creator} raised 4M in first round with YC.
            </div>
        </div>
    )
}

export default Recent