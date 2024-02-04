import Feed from '@/components/Feed'
import RecentPosts from '@/components/RecentPosts'
import './page.scss'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8 pt-2">
      {/* <div className="text-4xl font-extrabold w-1/2 text-center">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-violet-500">
          Pitch & Invest
        </span>
      </div> */}
      {/* <div className="text-4xl font-extrabold w-1/2 text-center">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-violet-500">
          Data Driven Investments
        </span>
      </div> */}
      {/* <div className="text-lg font-light w-3/4 text-center">
        <span className="bg-clip-text text-[rgba(0,0,0,0.75)] text-[16px]">
          Share connects influential innovators and capable investors throughout the world
        </span>
      </div> */}
      <div className='flex'>
        <Feed/>
        <RecentPosts/>
      </div>
    </main>
  )
}
