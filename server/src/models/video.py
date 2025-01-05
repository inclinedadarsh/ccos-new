from pydantic import BaseModel


class Video(BaseModel):
    id: str


class VideoOutput(Video):
    blog: str
