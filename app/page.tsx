import Feed from '@/components/Feed'
import './page.scss'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 pt-6">
      <h1 className="title">
        Discover and Share your ideas
      </h1>
      <Feed/>
    </main>
  )
}
