"use client"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
  import { Button } from "@/components/ui/button"
import { useMessage } from "@/lib/store/message"
import { supabaseBrowser } from "@/lib/supabase/browser";
import { toast } from "sonner";
  
  export function DeleteAlert() {
    const actionMessage = useMessage((state)=> state.actionMessage);

    const optimisticDeleteMessage = useMessage((state) => state.optimisticDeleteMessage);

    const handleDeleteMessage = async () =>{
        const supabase = supabaseBrowser();
        optimisticDeleteMessage(actionMessage?.id !)

         const {data,error }=await supabase.from("messages").delete().eq("id",actionMessage?.id!)

         if(error){
            toast.error(error.message);
         }else{
            toast.success("Successfully deleted a message")
         }
    }
    return (
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button id="trigger-delete" className="bg-transparent hover:bg-transparent"></Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure to delete the message?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              message and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDeleteMessage}>Delete</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    )
  }
  

  