from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# CORS 활성화
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

sampleDownload = [
    {
        "imgUrl": "https://playgame-img.kakaogames.com/production/images/j6jp-2022-09-13/18-53-48-050/appIcon.jpeg",
        "name": "천애명월도M",
        "keyword": ""
    },
    {
        "imgUrl": "https://playgame-img.kakaogames.com/production/images/t0u3-2022-06-16/16-34-54-372/appIcon.jpeg",
        "name": "우마무스메 프리티 더비",
        "keyword": ""
    },
    {
        "imgUrl": "https://playgame-img.kakaogames.com/production/images/k5u0-2021-09-07/14-30-15-789/appIcon.png",
        "name": "월드 플리퍼",
        "keyword": ""
    },
    {
        "imgUrl": "https://playgame-img.kakaogames.com/production/images/k5u0-2021-09-07/14-30-15-789/appIcon.png",
        "name": "월드 플리퍼",
        "keyword": ""
    }
]

@app.get('/getSampleDownload')  
async def get_sample_download():
    return sampleDownload

# # uvicorn main:app --reload