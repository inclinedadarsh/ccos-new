from pydantic import BaseModel


class Video(BaseModel):
    id: str


class VideoOutput(Video):
    transcript: str
