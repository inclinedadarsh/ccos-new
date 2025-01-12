"use client";

import { error } from "node:console";
import Blog from "@/components/Blog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { Loader2, Zap } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function Home() {
	const [videoLink, setVideoLink] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const [blog, setBlog] = useState("");

	const handleGenerateBlog = async () => {
		setIsLoading(true);

		const youtubeRegex =
			/^(https?\:\/\/)?(www\.youtube\.com|youtu\.?be)\/.+$/;
		if (!youtubeRegex.test(videoLink)) {
			toast.error("Invalid YouTube link", {
				description: "Please enter a valid YouTube video link",
			});
			setIsLoading(false);
			return;
		}

		const videoIdMatch = videoLink.match(
			/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/,
		);
		const videoId = videoIdMatch ? videoIdMatch[1] : null;

		if (!videoId) {
			console.log("Failed to extract video ID");
			setIsLoading(false);
			return;
		}

		const API_URL =
			process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

		try {
			const response = await axios.post(
				`${API_URL}/videos/`,
				{
					id: videoId,
				},
				{
					headers: {
						"Content-Type": "application/json",
					},
					withCredentials: true,
				},
			);
			setBlog(response.data.blog);
		} catch (error) {
			console.error("Failed to generate blog", error);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<main className="max-w-[1100px] mx-auto px-4 my-14">
			<h1 className="text-3xl md:text-6xl lg:text-6xl font-bold text-center max-w-[600px] mx-auto lg:leading-tight">
				YouTube Video to{" "}
				<span className="py-1 px-3 bg-gradient-to-br from-indigo-500 to-indigo-800 text-white shadow-md rounded-[8px] font-mono">
					Blog
				</span>{" "}
				Generator
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
			{blog && <Blog blog={blog} setBlog={setBlog} />}
		</main>
	);
}
