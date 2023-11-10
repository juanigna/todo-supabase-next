import { cookies } from "next/headers"
import { createServerActionClient, createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import AuthButton from "../components/AuthButton"


const Login = async () => {
    return (
        <section className='min-h-screen flex flex-col items-center justify-center'>
            <div className="w-full max-w-[800px] mx-auto p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                <h5 className="mb-5 text-3xl font-bold text-gray-900 dark:text-white">Login with Github!</h5>
                <div className="items-center  justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
                    <AuthButton />
                </div>
            </div>
        </section>
    )
}

export default Login