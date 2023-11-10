"use client"
import { Post } from '@/types/posts'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'
import DeleteButton from './DeleteButton'

const PostItem = ({ post }: { post: Post }) => {
    const supabase = createClientComponentClient()
    const router = useRouter()

    const handleCompleted = async () => {
        const { error } = await supabase.from('posts').update({ completed: !post.completed }).eq('id', post.id)
        console.log('hi', error)
        router.refresh()
    }

    return (
        <li onClick={handleCompleted} className="py-3 sm:py-4 cursor-pointer hover:bg-slate-900 rounded-sm p-2 transition" key={post.id}>
            <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                    <img className="w-8 h-8 rounded-full" src={post.profiles.avatar_url!} alt="Neil image" />
                </div>
                <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                        {post.content}
                    </p>
                </div>
                {
                    post.completed ?
                        (
                            <span className="bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">Completed</span>

                        ) : (
                            <span className="bg-red-100 text-red-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">To do</span>
                        )
                }
                <DeleteButton postId={post.id} />
            </div>
        </li>
    )
}

export default PostItem