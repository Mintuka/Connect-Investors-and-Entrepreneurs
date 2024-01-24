'use client'
import Image from "next/image"
import { useDetail } from "@/hooks/DetailContext"
import { PostType } from "@/types/Post"
import { useRouter } from "next/navigation"

const Card = ({_id, creator, post, tag}: PostType) => {
    const {setData}:any = useDetail()
    const router = useRouter()

    const handleDetail = () => {
        setData({_id, creator, post, tag})
        router.push(`/post/${_id}`)
    }

    return (
        <div onClick={handleDetail} className="col-3 p-5 m-2 border rounded-lg cursor-pointer bg-slate-50 shadow-sm hover:shadow-md" key={_id}>
            <div className="flex mb-4">
                <Image src='assets/images/figma.svg' width={40} height={40} alt='figma' className="mr-2"/>
                <div>
                    <div className="text-[14px]">Mintesnot</div>
                    <div className="text-[12px] font-[200]">15-02-2024</div>
                </div>
            </div>
            <div className="font-[600] mb-2">
                Enter the answer entered from stake holder interview
            </div>
            <div className="text-[14px] font-[200] mb-4">
                Pay attention to the data of Mr. Plato. Since, he is the CTO of the company.
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