import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

def preprocess_data(data_path):
    rev_data = pd.read_csv(data_path)

    m = rev_data['review_num'].quantile(0.9)
    c = rev_data['rating'].mean()

    def weight_rating(x, m=m, c=c):
        v = x['review_num']
        r = x['rating']
        return (v / (v + m) * r) + (m / (v + m) * c)

    rev_data['score'] = rev_data.apply(weight_rating, axis=1)

    for index, row in rev_data.iterrows():
        genre_value = '\'{}\''.format(row['genre'])
        key_words_value = row['key_words'].strip('[]')
        combined_value = f"{genre_value},{key_words_value}"
        rev_data.at[index, 'key_words'] = combined_value

    tfidf = TfidfVectorizer()
    tfidf_matrix_new = tfidf.fit_transform(rev_data['key_words'])
    similarity_new = cosine_similarity(tfidf_matrix_new, tfidf_matrix_new).argsort()[:, ::-1]
    
    return rev_data, similarity_new

def recommend_game_list(data, similarity_matrix, game_title, top=7):
    target_movie_index = data[data['title'] == game_title].index.values
    sim_index = similarity_matrix[target_movie_index, :top].reshape(-1)
    sim_index = sim_index[sim_index != target_movie_index]
    result = data.iloc[sim_index].sort_values('score', ascending=False)[:5]
    return result

def main():
    data_path = 'C:/Python/google/game_info_keywords_new.csv'
    game_title = '오목'
    
    rev_data, similarity_new = preprocess_data(data_path)
    
    recommended_games = recommend_game_list(rev_data, similarity_new, game_title)
    print(recommended_games)

if __name__ == "__main__":
    main()