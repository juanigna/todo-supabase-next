import { Post } from '@/types/posts'
import React from 'react'
import PostItem from './Post'

const PostsList = ({ posts }: { posts: Post[] }) => {
    return (

        <div className="w-full mt-2 max-w-xl p-4 max-h-[600px] overflow-y-scroll bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            <div className="flex items-center justify-between mb-4">
                <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Your todos!</h5>

            </div>
            <div className="flow-root">
                <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                    {
                        posts.length > 0 ? (

                            posts.map(post => {
                                return (
                                    <PostItem key={post.id} post={post} />
                                )
                            })
                        ) : (
                            <span>Create your first todo!</span>
                        )
                    }

                </ul>
            </div>
        </div>
    )
}

export default PostsList