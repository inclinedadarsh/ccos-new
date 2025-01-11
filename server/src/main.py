from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from src.routes.video import router as video_router
from src.routes.health import router as health_router

app = FastAPI()

origins = [
    "https://ccos-ia.vercel.app",
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["GET", "POST"],
    allow_headers=["*"],
    expose_headers=["*"],
    max_age=600,
)
app.include_router(video_router)
app.include_router(video_router)
app.include_router(health_router)


@app.get("/")
def read_root():
    return {"Hello": "World"}
