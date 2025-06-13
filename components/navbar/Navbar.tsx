'use client'
import Image from 'next/image'
import './navbar.scss'
import Link from 'next/link'
import { useSession, signIn, signOut } from 'next-auth/react'
import { useState } from 'react'

const Navbar = () => {
    const { data, status } = useSession()
    const [userDetailOpened, setUserDetail] = useState(false)

    const handleLogOut = () => {
        signOut()
        .then((res) => {
            setUserDetail(() => !userDetailOpened)
        })
    }

    const showUserDetail = () => {
        setUserDetail(() => !userDetailOpened)
    }

    return (
        <>
            <div className="flex w-full justify-between px-8 mt-2">
                <div className='flex items-center'>
                    <Link href='/'>
                        <Image className='cursor-pointer w-[60px] h-[60px] rounded-full' src='/assets/images/logo.jpg' alt='logo' width={100} height={100}/>
                    </Link>
                    <h1 className='text-[16px] font-bold text-gradient-to-r from-pink-500 to-violet-500'>Share</h1>
                </div>
                <div className='flex items-center'>
                    <div className='mx-3 font-[500] text-[14px] border-b-2 border-black'>All</div>
                    <div className='mx-3 font-[500] text-[14px] text-[rgba(0,0,0,0.5)]'>Tech</div>
                    <div className='mx-3 font-[500] text-[14px] text-[rgba(0,0,0,0.5)]'>Finance</div>
                </div>
                <div className='flex items-center'>
                    <Link href='/post' className='py-2 px-6 cursor-pointer shake border rounded-[48px] hover:bg-[rgba(0,0,0,0.02)] font-semibold text-black'>Pitch</Link>
                    {status == 'authenticated' ? 
                        <div className='p-3 cursor-pointer'>
                            <div className="w-[40px] h-[40px] border border-[2px] border-[white] rounded-full ml-[-10px] flex justify-center items-center bg-black text-white relative" onClick={showUserDetail}>
                                {data?.user?.name && data?.user?.name[0]}
                                <div className={'h-[200vh] w-[200vw] absolute bg-transparent ' + (userDetailOpened ? '' : 'hidden')}></div>
                                <div className={'border bg-slate-400 absolute top-[40px] h-[10px] w-[10px] rotate-45 ' + (userDetailOpened ? '' : 'hidden')}></div>
                                <div className={'bg-slate-400 absolute top-[45px] right-[0px] rounded-md p-2 z-10 ' + (userDetailOpened ? '' : 'hidden')}>
                                    <div className='text-center p-1'>{data?.user?.name && data?.user?.name}</div>
                                    <div className='p-1'>{data?.user?.email}</div>
                                    <div onClick={handleLogOut} className='p-1 cursor-pointer text-center'>Log Out</div>
                                </div>
                            </div>
                        </div>
                        : 
                        <div onClick={() => signIn()} className='cursor-pointer mx-3 font-[500] text-[14px] border-black'>Log In</div>
                    }
                </div>
            </div>
        </>
    )
}

export default Navbar