import React from "react";
import ChatHeader from "@/components/ChatHeader";
import { supabaseServer } from "@/lib/supabase/server";
import InitUser from "@/lib/store/initUser";
import { Input } from "@/components/ui/input";
export default async function Page() {
	const supabase = await supabaseServer();
	const { data } = await supabase.auth.getSession();

	return (
		<>
			<div className="max-w-3xl mx-auto md:py-10 h-screen">
				<div className=" h-full border rounded-md flex flex-col relative">
					<ChatHeader user={data.session?.user} />
					<div className="flex-1 flex flex-col p-5 h-full overflow-y-auto">
						<div className="flex-1"></div>
						<div className="space-y-7">
							{[1, 2, 3, 5, 6, 7, 8, 9, 10].map((value) => {
								return <div className="flex gap-2" key={value}>
									<div className="h-10 w-10 bg-green-500 rounded-full"></div>
									<div className="flex-1">
										<div className="flex items-center gap-1">
											<h1 className="font-bold">Chinmay</h1>
											<h1 className="text-sm text-gray-400">
												{new Date().toDateString()}
											</h1>
										</div>
										<p className="text-gray-300">
											Life is hard, I know, the challenge is always gonna beat us home
											Sometimes our parents make mistakes that affect us until we grown
											Hey, you are a good kid that need good leadership
											Let me be your mentor since your daddy dont teach you shit
											Never let a man piss on your leg, son
											Either you die right there or pop that man in the head, son
											Never fall in the escort business, thats bad religion
										</p>
									</div>
								</div>

							})}
						</div>

					</div>
					<div className="p-5">
						<Input placeholder="send message " />
					</div>
				</div>
			</div>
			<InitUser user={data.session?.user} />
		</>
	);
}