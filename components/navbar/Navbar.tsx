'use client'
import Image from 'next/image'
import './navbar.scss'
import Link from 'next/link'
import { useSession, signIn, signOut } from 'next-auth/react'

const Navbar = () => {
    const {data, status} = useSession()
    console.log('da-se', data, status)
    return (
        <>
            <div className="flex w-full justify-around">
                <div className='flex items-center'>
                    <Link href='/'>
                        <Image className='p-4 cursor-pointer' src='next.svg' alt='logo' width={100} height={100}/>
                    </Link>
                    <h1 className='p-4 text-[22px] font-bold'>Share</h1>
                </div>
                <div className='flex items-center'>
                    <Link href='/post' className='p-3 cursor-pointer'>Post</Link>
                    {data ? 
                        <div onClick={() => signOut()} className='p-3 cursor-pointer'>Log Out</div>
                        : 
                        <div onClick={() => signIn()} className='p-3 cursor-pointer'>Log In</div>
                    }
                    
                    <div className='p-3 cursor-pointer'>
                    <div className="w-[40px] h-[40px] border border-[2px] border-[white] rounded-full ml-[-10px] flex justify-center items-center bg-black text-white">M</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar