import { Nunito_Sans } from 'next/font/google'
import FeedUI from '@/modules/feed'

const inter = Nunito_Sans({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`${inter.className}`}
    >
      <FeedUI />
    </main>
  )
}
