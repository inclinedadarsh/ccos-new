import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

const Blog = ({
	blog,
	setBlog,
}: { blog: string; setBlog: React.Dispatch<React.SetStateAction<string>> }) => {
	return (
		<div className="mt-10 p-4 border rounded markdown">
			<Tabs defaultValue="preview">
				<TabsList className="grid w-full grid-cols-2">
					<TabsTrigger value="preview">Preview</TabsTrigger>
					<TabsTrigger value="edit">Edit</TabsTrigger>
				</TabsList>
				<TabsContent value="preview">
					<ReactMarkdown remarkPlugins={[remarkGfm]}>
						{blog}
					</ReactMarkdown>
				</TabsContent>
				<TabsContent value="edit">
					<textarea
						className="w-full h-96 p-4 text-black"
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
