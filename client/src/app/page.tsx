"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2, Zap } from "lucide-react";
import { useState } from "react";

export default function Home() {
	const [videoLink, setVideoLink] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	const handleGenerateBlog = async () => {
		// Call the API to generate blog
		// const response = await fetch("/api/generate-blog", {
		// 	method: "POST",
		// 	body: JSON.stringify({ videoLink }),
		// 	headers: {
		// 		"Content-Type": "application/json",
		// 	},
		// });

		// if (response.ok) {
		// 	const { blog } = await response.json();
		// 	console.log(blog);
		// } else {
		// 	console.error("Failed to generate blog");
		// }
		setIsLoading(true);
		setTimeout(() => {
			console.log("Blog generated successfully!");
			setIsLoading(false);
		}, 2000);
		console.log("Generating blog from video link:", videoLink);
	};

	return (
		<main className="max-w-[1100px] mx-auto px-4 my-14">
			<h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-center">
				YouTube Video to Blog Generator
			</h1>
			<p className="text-gray-700 font-medium max-w-[400px] mx-auto text-center mt-8">
				Just paste the link of any YouTube video link here, and get a
				blog created from it!
			</p>
			<div className="max-w-[600px] mx-auto mt-8 space-y-6">
				<Input
					placeholder="YouTube video link"
					value={videoLink}
					onChange={e => setVideoLink(e.target.value)}
				/>
				<Button
					className="w-full"
					onClick={handleGenerateBlog}
					disabled={isLoading}
				>
					{isLoading ? (
						<>
							Generating <Loader2 className="animate-spin" />
						</>
					) : (
						<>
							Generate blog <Zap fill="#fff" strokeWidth={0} />
						</>
					)}
				</Button>
			</div>
		</main>
	);
}
