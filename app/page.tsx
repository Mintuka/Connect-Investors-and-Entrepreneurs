import Feed from '@/components/Feed'
import './page.scss'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 pt-6">
      <div className="text-4xl font-extrabold w-1/2 text-center">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
          Pitch to Millions of Investors & Invest on the Best
        </span>
      </div>
      <Feed/>
    </main>
  )
}
