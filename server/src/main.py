from fastapi import FastAPI
from src.routes.video import router as video_router

app = FastAPI()

app.include_router(video_router)


@app.get("/")
def read_root():
    return {"Hello": "World"}
