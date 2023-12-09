import React from "react";
import Image from "next/image";
import { Register } from "@/components/forms/register";
import Link from 'next/link'

export default function LoginPage() {
    return (
        <main className="flex flex-row-reverse items-center justify-between h-screen">
            <div className="w-full flex items-center justify-center bg-amber-300 min-h-screen sm:w-1/3 p-2">
                <Register />
            </div>
            <div className='hidden border h-full sm:w-2/3 bg-[url("/assets/login_signup_bg.jpg")] bg-cover sm:flex justify-center items-center flex-col'>
                <div className=" w-full flex justify-center items-center flex-col gap-4 bg-zinc-900/60 p-7">
                    <p className="text-5xl ">Welcome back!</p>
                    <p className="text-gray-400">Login to continue</p>
                    <Link href={"register"}><p  className="bg-amber-400 rounded-full h-[40px] w-[300px] flex justify-center items-center text-2xl hover:scale-110 transition-all">Log in</p></Link>
                </div>
            </div>
        </main>
    );
}
