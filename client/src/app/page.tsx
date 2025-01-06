import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Zap } from "lucide-react";

export default function Home() {
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
				<Input placeholder="YouTube video link" />
				<Button className="w-full">
					Generate blog <Zap fill="#fff" strokeWidth={0} />
				</Button>
			</div>
		</main>
	);
}
