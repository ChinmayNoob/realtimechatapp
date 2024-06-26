"use client"
import React from 'react'
import { Button } from './ui/button'
import { supabaseBrowser } from '@/lib/supabase/browser'
import { User } from '@supabase/supabase-js'
import { useRouter } from 'next/navigation'
import ChaPresence from './ChatPresence'

function ChatHeader({user}:{user : User | undefined}) {
    const router = useRouter();
    const handleLoginWithGithub = () =>{
        const supabase =supabaseBrowser()
        supabase.auth.signInWithOAuth({
            provider:"github",
            options : {
                redirectTo : location.origin + "/auth/callback",
            }
        })
    }


    const handleLogout = async () =>{
        const supabase = supabaseBrowser();
        await supabase.auth.signOut();
        router.refresh();

    }

      return (
        <div className='h-20'>
            <div className='p-5 border-b flex items-center justify-between h-full'>
                <div>
                    <h1 className='text-xl font-bold'>
                        Live Chat
                    </h1>
                    <ChaPresence/>

                </div>
				{user ? (
					<Button onClick={handleLogout}>Logout</Button>
				) : (
					<Button onClick={handleLoginWithGithub}>Login</Button>
				)}
            </div>
        </div>
    )
}

export default ChatHeader