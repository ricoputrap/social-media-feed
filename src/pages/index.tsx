import Image from 'next/image'
import { Inter, Nunito_Sans } from 'next/font/google'
import Button from '@/modules/feed/components/Button/index'

const inter = Nunito_Sans({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <Button variant='primary' label="Share" onClick={() => { }} />
    </main>
  )
}
