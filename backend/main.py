from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import pandas as pd
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
from collections import defaultdict

rev_data  = pd.read_csv('../game_info_keywords.csv')

m = rev_data['review_num'].quantile(0.0)
print(m)
rev_data = rev_data.loc[rev_data['review_num'] >= m]

c = rev_data['rating'].mean()

def weight_rating(x,m=m, c=c):
    v = x['review_num']
    r = x['rating']

    return (v / (v+m)*r)+(m/(v+m) * c)

rev_data['score'] = rev_data.apply(weight_rating, axis = 1)

counter_vector = CountVectorizer(ngram_range = (1,3))
tfidf = TfidfVectorizer(stop_words='english')

tfidf_matrix_keys = tfidf.fit_transform(rev_data['key_words'])
c_vector_keys = counter_vector.fit_transform(rev_data['key_words'])

tfidf_matrix_genres = tfidf.fit_transform(rev_data['genre'])
c_vector_genres = counter_vector.fit_transform(rev_data['genre'])


similarity_genre_c = cosine_similarity(c_vector_genres, c_vector_genres).argsort()[:,::-1]
similarity_genre_t = cosine_similarity(tfidf_matrix_genres, tfidf_matrix_genres).argsort()[:,::-1]

similarity_key_c = cosine_similarity(c_vector_keys, c_vector_keys).argsort()[:,::-1]
similarity_key_t = cosine_similarity(tfidf_matrix_keys, tfidf_matrix_keys).argsort()[:,::-1]

def recommend_movie_list_gc(rev_data, movie_title, top = 7):
    target_movie_index = rev_data[rev_data['Unnamed: 0'] == movie_title].index.values

    sim_index = similarity_genre_c[target_movie_index, :top].reshape(-1)

    sim_index = sim_index[sim_index != target_movie_index]

    result = rev_data.iloc[sim_index].sort_values('score', ascending = False)[:5]

    return result

def recommend_movie_list_gt(rev_data, movie_title, top = 7):
    target_movie_index = rev_data[rev_data['Unnamed: 0'] == movie_title].index.values

    sim_index = similarity_genre_t[target_movie_index, :top].reshape(-1)

    sim_index = sim_index[sim_index != target_movie_index]

    result = rev_data.iloc[sim_index].sort_values('score', ascending = False)[:5]

    return result

def recommend_movie_list_kc(rev_data, movie_title, top = 7):
    target_movie_index = rev_data[rev_data['Unnamed: 0'] == movie_title].index.values

    sim_index = similarity_key_c[target_movie_index, :top].reshape(-1)

    sim_index = sim_index[sim_index != target_movie_index]

    result = rev_data.iloc[sim_index].sort_values('score', ascending = False)[:5]

    return result

def recommend_movie_list_kt(rev_data, movie_title, top = 7):
    target_movie_index = rev_data[rev_data['Unnamed: 0'] == movie_title].index.values

    sim_index = similarity_key_t[target_movie_index, :top].reshape(-1)

    sim_index = sim_index[sim_index != target_movie_index]

    result = rev_data.iloc[sim_index].sort_values('score', ascending = False)[:5]

    return result

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

@app.post("/")
async def receive_modal_data(modal_data: dict):
    global received_modal_data
    received_modal_data = modal_data
    d = defaultdict(int)
    for i in range(len(received_modal_data['DownloadList'])):
        # print(received_modal_data['DownloadList'][i]['name'])
        # print(received_modal_data['DownloadList'][i]['name'])
        a = recommend_movie_list_kt(rev_data, movie_title = received_modal_data['DownloadList'][i]['name'])
        a = a[['Unnamed: 0','score', 'img', 'key_words']]
        for i in range(len(a)):
            d[a.iloc[i][0]] += a.iloc[i][1]
    d =  sorted(d.items(), key=lambda x: -x[1])
    print(d[:5])
    # new_d = []
    # sampleDownload.clear()
    for i in range(len(d[:5])):
        row = rev_data[rev_data['Unnamed: 0'] == d[i][0]]
        
        a = row['img']
        b =  row['Unnamed: 0']
        c = row['key_words']
        print(a.values[0])
        sampleDownload.append({
        "imgUrl": a.values[0],
        "name": b.values[0],
        "keyword": c.values[0]
    })
        
        # sampleDownload.append({"imgUrl": a, "name": b,"keyword": c })
        # sampleDownload.append({"imgUrl": a, "name": b})
        
    # print(received_modal_data['DownloadList'][1]['name'])
    # print(type(sampleDownload))
    
    return {"message": "Data received successfully"}

@app.get('/getSampleDownload')  
async def get_sample_download():
    return sampleDownload

# 백엔드 실행 명령어 : uvicorn main:app --reload
# 프론트엔드 실행 명령어 : npm start