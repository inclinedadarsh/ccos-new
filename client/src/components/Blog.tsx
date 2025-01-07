import { BookMarked } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

const Blog = ({
	blog,
	setBlog,
}: { blog: string; setBlog: React.Dispatch<React.SetStateAction<string>> }) => {
	return (
		<div className="mt-10 rounded-lg shadow-lg p-6 border border-border ">
			<div className="flex items-center gap-2 mb-4">
				<BookMarked size={20} className="" />
				<h2 className="text-xl font-medium">Generated Blog Post</h2>
			</div>
			<Tabs defaultValue="preview">
				<TabsList className="grid w-full grid-cols-2">
					<TabsTrigger value="preview">Preview</TabsTrigger>
					<TabsTrigger value="edit">Edit</TabsTrigger>
				</TabsList>
				<TabsContent value="preview">
					<div className="bg-gray-50 p-4 border-border border-2 border-dashed rounded-md max-h-[500px] min-h-[300px] overflow-auto">
						<div className="markdown">
							<ReactMarkdown remarkPlugins={[remarkGfm]}>
								{blog}
							</ReactMarkdown>
						</div>
					</div>
				</TabsContent>
				<TabsContent value="edit">
					<textarea
						className="bg-gray-50 p-4 border-border border-2 border-dashed rounded-md w-full max-h-[500px] min-h-[300px] resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 overflow-auto font-mono"
						value={blog}
						onChange={e => {
							setBlog(e.target.value);
						}}
					/>
				</TabsContent>
			</Tabs>
		</div>
	);
};

export default Blog;
