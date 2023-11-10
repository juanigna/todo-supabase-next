import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import SignOutButton from './components/SignOutButton'
import PostsList from './components/PostsList'
import { Database } from '@/types/supabase'
import CreatePost from './components/CreatePost'

export default async function Home() {
  const supabase = createServerComponentClient<Database>({ cookies })
  const { data: posts } = await supabase.from('posts').select('*, profiles(full_name, avatar_url, username)')



  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className=' text-center flex flex-col items-center justify-center gap-2'>
        <h1 className='text-xl font-semibold'>Todo App</h1>
        <SignOutButton />
      </div>
      <CreatePost />
      <PostsList posts={posts} />
    </main>
  )
}
