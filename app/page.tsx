import './page.scss'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="title">
        Share your ideas
      </h1>
      <input type="text" className='h-[20px] border outline-none p-4 rounded-sm' />
    </main>
  )
}
