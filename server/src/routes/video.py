from fastapi import APIRouter
from src.models.video import Video, VideoOutput
from src.services.video import get_transcript

router = APIRouter()


@router.post("/videos/", response_model=VideoOutput)
def post_video(video: Video):
    transcript = get_transcript(video.id)
    return {"transcript": transcript, "id": video.id}
