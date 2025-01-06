import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const Blog = ({ blog }: { blog: string }) => {
	return (
		<div className="mt-10 p-4 border rounded markdown">
			<ReactMarkdown remarkPlugins={[remarkGfm]}>{blog}</ReactMarkdown>
		</div>
	);
};

export default Blog;
