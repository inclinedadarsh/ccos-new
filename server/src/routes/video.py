from fastapi import APIRouter
from src.models.video import Video, VideoOutput
from src.services.video import get_transcript, generate_blog

router = APIRouter()


@router.post("/videos/", response_model=VideoOutput)
async def post_video(video: Video):
    transcript = get_transcript(video.id)
    blog = await generate_blog(transcript)
    return {"blog": blog, "id": video.id}
