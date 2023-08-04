import { Nunito_Sans } from 'next/font/google'
import FeedUI from '@/modules/feed'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { TPost, TUser } from '@/modules/feed/stores/FeedStore/index.types'
import FeedAPI from '@/modules/feed/API'
import Head from 'next/head'

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
    <>
      <Head>
        <title>ShareFree</title>
        <meta name="description" content="Welcome to our internal company social media web app! Connect, collaborate, and engage with your colleagues in a secure and friendly environment. Share updates, knowledge, and ideas effortlessly, fostering a strong sense of community within our organization. Enhance communication, productivity, and teamwork as you stay informed about company news, events, and projects. Join us and be a part of the vibrant network that powers our company's success." />
      </Head>

      <main className={`${inter.className}`}>
        <FeedUI initialData={initialData} />
      </main>
    </>
  )
}
