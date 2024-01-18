import Image from 'next/image'
import './navbar.scss'

const Navbar = () => {
    return (
        <>
            <div className="flex w-full justify-around">
                <div className='flex items-center'>
                    <Image className='p-4 cursor-pointer' src='next.svg' alt='logo' width={100} height={100}/>
                    <h1 className='p-4 text-[22px] font-bold'>Share</h1>
                </div>
                <div className='flex items-center'>
                    <div className='p-3 cursor-pointer'>Post</div>
                    <div className='p-3 cursor-pointer'>Log In</div>
                    <div className='p-3 cursor-pointer'>
                        <Image width={100} height={100} alt='user' src='vercel.svg'/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar