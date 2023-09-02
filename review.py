from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
import time
import pandas as pd
import csv



def scrape_reviews(title,url):
    option = Options()
    user_agent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36'

    option.add_experimental_option("detach",True)
    option.add_argument('user-agent=' + user_agent)

    try:
        s = Service(ChromeDriverManager().install())
        driver = webdriver.Chrome(service=s, options=option)
    except Exception as e:
        print(e)
    print(title)
    driver.get(f'{url}')

    driver.find_element(by=By.XPATH, value='//*[@id="yDmH0d"]/c-wiz[2]/div/div/div[2]/div[2]/div/div[1]/div[1]/c-wiz[4]/section/div/div[2]/div[5]/div/div/button/span').click()
    time.sleep(1)

    all_reviews = driver.find_element(by=By.XPATH, value ='//*[@id="yDmH0d"]/div[4]/div[2]/div/div/div/div/div[2]')

    for i in range(12):
        driver.execute_script('arguments[0].scrollTop = arguments[0].scrollHeight', all_reviews)
        time.sleep(3)

    reviews=driver.find_elements(by=By.XPATH, value = '//div[@class="h3YV2d"]')
    data = pd.DataFrame(data=[], columns=['reviews'])
    review_texts = set()

    for review in reviews:
        review_text = review.text
        if review_text not in review_texts:
            tmp = [review_text]
            tmp_df = pd.DataFrame(data=[tmp], columns=data.columns)
            data = pd.concat([data, tmp_df])
            review_texts.add(review_text)

    data.reset_index(drop=True, inplace=True)

    data.to_csv(f'C:/Python/google/{title}.csv', encoding='utf-8-sig')
    print('완료')
    driver.quit()

if __name__ == '__main__':
    app_dic = {}

    with open('game_data.csv', 'r', newline='', encoding='UTF-8') as csv_file:
        csv_reader = csv.DictReader(csv_file)
        for row in csv_reader:
            url = row['url']
            app_title = url.split('=')[-1][4:]
            app_dic[app_title] = url
    
    for title, url in app_dic.items():
        scrape_reviews(title, url)