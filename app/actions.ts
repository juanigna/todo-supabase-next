"use server"

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { revalidatePath } from "next/cache"
import { cookies } from "next/headers"



export const addPost = async (formData: FormData) => {
    const supabase = createServerComponentClient({ cookies })
    const { data: { user } } = await supabase.auth.getUser()

    const content = formData.get('post')
    await supabase.from('posts').insert({ content, user_id: user?.id })
    revalidatePath('/')
}

export const deletePost = async (postId: string) => {
    const supabase = createServerComponentClient({ cookies })
    const { data: { user } } = await supabase.auth.getUser()
    await supabase.from('posts').delete().eq('id', postId)
    revalidatePath('/')

}