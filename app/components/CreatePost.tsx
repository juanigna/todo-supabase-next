"use client"
import React, { useRef } from 'react'
import { addPost } from '../actions'
import CreatePostButton from './CreatePostButton'

const CreatePost = () => {
    const formRef = useRef<HTMLFormElement>(null)

    return (
        <form ref={formRef} action={async (formData) => {
            await addPost(formData)
            formRef.current?.reset()
        }} className='flex items-center justify-center gap-2 text-black'>
            <input className='p-2 border-none' type='text' name='post' placeholder='todo...' />
            <CreatePostButton />
        </form>
    )
}

export default CreatePost