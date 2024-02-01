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
            <div className="flex w-full justify-between">
                <div className='flex items-center'>
                    <Link href='/'>
                        <Image className='p-4 cursor-pointer' src='next.svg' alt='logo' width={100} height={100}/>
                    </Link>
                    <h1 className='p-4 text-[22px] font-bold'>Share</h1>
                </div>
                <div className='flex items-center'>
                    <Link href='/post' className='py-2 px-6 cursor-pointer shake border rounded-[48px] bg-green-600 hover:bg-green-700 font-semibold text-white'>Pitch</Link>
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
                        <div onClick={() => signIn()} className='p-3 cursor-pointer'>Log In</div>
                    }
                </div>
            </div>
        </>
    )
}

export default Navbar