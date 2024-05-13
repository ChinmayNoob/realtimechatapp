import React from "react";

export default function ChatAbout() {
	return (
		<div className="flex-1 flex items-center justify-center">
			<div className="text-center space-y-5">
				<h1 className="text-3xl font-bold">Welcome to Live Chat</h1>
				<p className="w-96">
					This is a real time chat application made using NextJS,TailwindCSS,ShadCN-UI and Supabase.
                    Please Login to Continue
				</p>
			</div>
		</div>
	);
}