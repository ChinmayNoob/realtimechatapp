import React from "react";
import ChatHeader from "@/components/ChatHeader";
import { supabaseServer } from "@/lib/supabase/server";
import InitUser from "@/lib/store/initUser";
import { Input } from "@/components/ui/input";
import ChatInput from "@/components/ChatInput";
import ListMessages from "@/components/ListMessages";
export default async function Page() {
	const supabase = await supabaseServer();
	const { data } = await supabase.auth.getSession();

	return (
		<>
			<div className="max-w-3xl mx-auto md:py-10 h-screen">
				<div className=" h-full border rounded-md flex flex-col relative">
					<ChatHeader user={data.session?.user} />
					<ListMessages />

					<ChatInput />
				</div>
			</div>
			<InitUser user={data.session?.user} />
		</>
	);
}