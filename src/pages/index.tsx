import { Nunito_Sans } from 'next/font/google'
import FeedUI from '@/modules/feed'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { TPost, TUser } from '@/modules/feed/stores/FeedStore/index.types'
import FeedAPI from '@/modules/feed/API'

const inter = Nunito_Sans({ subsets: ['latin'] })

export const getServerSideProps: GetServerSideProps<{
  initialData: {
    posts: TPost[],
    users: TUser[]
  }
}> = async () => {
  const { users, posts } = await FeedAPI.getInitialData();

  return {
    props: {
      initialData: { posts, users }
    }
  }
}

export default function Home({
  initialData
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <main className={`${inter.className}`}>
      <FeedUI initialData={initialData} />
    </main>
  )
}
