"use client"
import { Imessage, useMessage } from '@/lib/store/message'
import React, { useEffect } from 'react'
import Message from './Message'
import { DeleteAlert, EditAlert } from './MessageActions'
import { supabaseBrowser } from '@/lib/supabase/browser'
import { toast } from 'sonner'

export default function ListMessages() {
    const {messages,addMessage} = useMessage((state) =>state)

    const supabase = supabaseBrowser();

    useEffect(()=>{
      
      const channel = supabase
      .channel('chat-room')
      .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'messages' }, async payload => {
        console.log('Change received!', payload)
        const {error,data} = await supabase.from("users").select("*").eq("id",payload.new.send_by).single();
        if (error) {
          toast.error(error.message);
        } else {
          const newMessage = {
            ...payload.new,
            users: data,
          };
          addMessage(newMessage as Imessage);
        }



        // addMessage(payload.new)
      })
      .subscribe()

      return () =>{
        channel.unsubscribe;
      }

    },[])

  return (
    <div className="flex-1 flex flex-col p-5 h-full overflow-y-auto">
    <div className="flex-1"></div>
    <div className="space-y-7">
        {messages.map((value,index) => {
            return(
                <Message  key={index} message={value}/>
            )
        })}
    </div>
    <DeleteAlert />
    <EditAlert />

</div>
  )
}
