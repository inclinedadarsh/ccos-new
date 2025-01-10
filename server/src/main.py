from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from src.routes.video import router as video_router
from src.routes.health import router as health_router

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
app.include_router(video_router)
app.include_router(video_router)
app.include_router(health_router)


@app.get("/")
def read_root():
    return {"Hello": "World"}
