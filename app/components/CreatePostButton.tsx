"use client"
import React from 'react'
import { useFormStatus } from 'react-dom'

const CreatePostButton = () => {
    const { pending } = useFormStatus()

    return (
        <button aria-disabled={pending} type="submit" className="p-2 bg-green-100 text-green-800 font-medium  rounded dark:bg-green-900 dark:text-green-300">{pending ? "Creating..." : "Create"}</button>

    )
}

export default CreatePostButton