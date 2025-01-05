from youtube_transcript_api import YouTubeTranscriptApi
from pydantic_ai import Agent
from dotenv import load_dotenv, find_dotenv

load_dotenv(find_dotenv())


def get_transcript(video_id: str) -> str:
    transcripts = YouTubeTranscriptApi.get_transcript(video_id)
    transcript_text = " ".join(transcript["text"] for transcript in transcripts)
    return transcript_text


async def generate_blog(transcript: str) -> str:
    agent = Agent(
        "gemini-1.5-flash",
        system_prompt="Generate a blog post from the following YouTube transcript. Make sure the blog is in markdown format. Do not return anything other than the markdown blog. Don't even return the backticks, just return the blog itself. Make sure it's in markdown and make it as detailed as possible.",
    )
    result = await agent.run(transcript)
    return result.data
