'use client'
import { useDetail } from "@/hooks/DetailContext"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import Image from "next/image"
import { useSession } from "next-auth/react"

const Detail = () => {
    const { data, status } = useSession()
    console.log('d', data, typeof data)
    const {post}: any = useDetail()
    const [detail, setDetail] = useState(post)
    const [loading, setLoading] = useState(!post)
    const router = useParams()

    const getPost = async() => {
        const data = await fetch(`/api/post/${router?.id}`)
        const post = await data.json()
        setDetail(post)
        setLoading(false)
    }

    useEffect(() => {
        if (!post){
            getPost()
        }
    },[])

    if (loading){
        return (
            <div className="w-full flex justify-center items-center h-[calc(100vh-100px)]">
                <Image className="p-4 " src='/assets/images/ripple.svg' alt='loading' width={200} height={200}/>
            </div>
        )
    }
    
    return (
        <>
            <div className="w-full p-6 flex">
                <div className="w-1/3">
                    <div className="w-full h-[150px] border p-4 rounded-md">
                        <div className="flex items-start">
                            <Image src={'/next.svg'} width={40} height={40} alt='user' className="w-[40px] h-[40px] p-2 rounded-full border"></Image>
                            <div className="px-2">
                                <div className="text-[14px] font-[400]">
                                    {data?.user?.name}
                                </div>
                                <div className="text-[12px] font-[300]">
                                    {data?.user?.email}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        Tags
                    </div>
                    <div>
                        Capital
                    </div>
                    <div>
                        Team Size
                    </div>
                    <div>
                        Achievements
                    </div>
                    <div>
                        Target Areas
                    </div>
                    <div>
                        Investors
                    </div>
                </div>
                <div className="w-2/3">
                    <div className="flex items-center justify-evenly relative">
                        <button className="absolute left-[20px] rounded-full w-[25px] h-[25px] bg-[rgba(255,255,255,0.75)] hover:bg-white shadown-md text-[12px] border">
                            <i className="fa-solid fa-chevron-left text-[rgba(0,0,0,0.75)] hover:text-black"></i>
                        </button>
                        <button className="absolute right-[20px] rounded-full w-[25px] h-[25px] bg-[rgba(255,255,255,0.75)] hover:bg-white shadow-md text-[12px] border">
                            <i className="fa-solid fa-chevron-right text-[rgba(0,0,0,0.75)] hover:text-black"></i>
                        </button>
                        <Image src={'/assets/images/coffee_1.jpg'} width={200} height={100} alt="pitch" className="w-1/3 h-[150px] p-2 "></Image>
                        <Image src={'/assets/images/coffee_2.jpg'} width={200} height={100} alt="pitch" className="w-1/3 h-[150px] p-2 "></Image>
                        <Image src={'/assets/images/coffee_3.jpg'} width={200} height={100} alt="pitch" className="w-1/3 h-[150px] p-2 "></Image>
                    </div>
                    <div className="w-full flex justify-center">
                        <div className="w-[5px] h-[5px] bg-[rgba(0,0,0,0.75)] m-2 rounded-full"></div>
                        <div className="w-[5px] h-[5px] bg-[rgba(0,0,0,0.25)] m-2 rounded-full"></div>
                        <div className="w-[5px] h-[5px] bg-[rgba(0,0,0,0.25)] m-2 rounded-full"></div>
                    </div>
                    <div className="w-full text-[13px] text-justify font-[400] p-4 my-2 border rounded-md">
                        Introducing "BrewHub," a dynamic coffee business poised to revolutionize the industry. At BrewHub, we understand that coffee is not just a beverage; it's a cultural experience. Our business pitch revolves around crafting an exceptional coffee journey for our customers, sourcing only the finest beans from sustainable and ethical suppliers. We prioritize quality, flavor, and variety, offering a meticulously curated selection of single-origin blends and artisanal roasts. What sets BrewHub apart is our commitment to community engagement; we envision each BrewHub location as a local hub for coffee enthusiasts, fostering a sense of belonging through carefully designed spaces for work, relaxation, and socializing. Whether it's the morning commuter seeking a quick pick-me-up or the connoisseur craving a unique tasting experience, BrewHub is dedicated to delivering the perfect cup of coffee, consistently elevating the coffee culture and experience for our diverse customer base. Join us in the BrewHub movement, where every sip tells a story.
                    </div>
                </div>

                {/* <div>Title of the project/business</div>
                <div>{detail?.creator}</div>
                <div>{detail?.post}</div>
                <div>{detail?.tag}</div> */}
            </div>                
        </>
    )
}

export default Detail