from youtube_transcript_api import YouTubeTranscriptApi


def get_transcript(video_id: str):
    transcripts = YouTubeTranscriptApi.get_transcript(video_id)
    transcript_text = " ".join(transcript["text"] for transcript in transcripts)
    return transcript_text
