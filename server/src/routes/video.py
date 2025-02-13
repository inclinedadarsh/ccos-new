from fastapi import APIRouter
from src.models.video import Video, VideoOutput
from src.services.video import get_transcript, generate_blog

router = APIRouter()


@router.options("/videos/")
async def options_video():
    return {"methods": ["POST"], "status": "OK"}


@router.post("/videos/", response_model=VideoOutput)
async def post_video(video: Video):
    print(f"Received video with id: {video.id}")
    try:
        transcript = get_transcript(video.id)
        blog = await generate_blog(transcript)
        return {"blog": blog, "id": video.id}
    except Exception as e:
        print(f"Error: {e}")
        # return {"blog": "Error", "id": video.id}
        raise
