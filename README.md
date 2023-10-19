# Comment-based-recommendation-system-

# DEMO
<img width="80%" src="https://github.com/KW-Programmers-Algorithm-Study/Comment-based-recommendation-system-/assets/75752289/0f0aeb5d-157d-4834-95e4-4ed515f41603"/>
더 세부적인 내용은 아래의 링크에서 확인하실 수 있습니다. 
<img src ="https://img.shields.io/badge/Velog-20C997.svg?style=flat&logo=Velog&logoColor=white"/>
</br>
</br>

# 서비스 개요

> **한줄 소개**
>
구글 앱 스토어내의 카카오 게임즈들의 사용자 **리뷰 데이터들을 바탕**으로 사용자 맞춤 게임 추천 시스템 구현

> **개발 동기**
> 
게임 튜토리얼이 끝나면 다음과 같이 리뷰를 부탁하는 알림창을 모두 한번쯤 만나 보셨을 것이라고 생각합니다. 왜 이렇게 게임사들은 사용자들이 리뷰를 남겨주기를 바랄까요?? 아마 아직 사용해보지 않은 사용자들에게 **더 많은 정보를 제공**하고, 조금 더 많은 사용자들이 **게임을 이용**했으면 하길 바라기 때문이라고 생각합니다.  
“사용자에게 더 많은 정보를 제공하기 위해서 만들어진 **리뷰 데이터를 직접적으로 추천에 사용**할 수 있다면 더 다채로운 추천이 가능하지 않을까?” 라는 생각에 사용자 기뷰 데이터 기반 추천 시스템을 개발하게 되었습니다. 
</br>
</br>

# Pipe line
웹 크롤링을 통해 추출한 사용자 리뷰, 평점, 전체 리뷰 수 등의 정보가 담긴 데이터를 활용하여 컨텐츠 기반 필터링 과정을 통해 사용자 리뷰에 따른 추천시스템을 구현
![image](https://github.com/KW-Programmers-Algorithm-Study/Comment-based-recommendation-system-/assets/98096178/585b91dc-0ffc-4ea9-a29f-4304ace29be7)  
</br>
</br>

# Crawling
Selenium 을 이용하여 Data Crawling 진행 
총 **91개의 카카오 게임** 선정(review 링크가 안들어가지거나, 동일 장르가 너무 적은 경우는 제외 )
각각의 게임마다 title,genre,rating,review_num,url,img, 500개의 리뷰
</br>
</br>
  

# 키워드 추출
리뷰 데이터 하나에 대하여 한국어로 학습된 [skt/kobert-base-v1](https://huggingface.co/skt/kobert-base-v1) pretrained 모델을 사용하여 keyBert() 진행, **개별 리뷰 키워드,** 
500개의 문장에서 추출된 key world 의 가중치를 계산하여 **게임의 통합 키워드 선정** (통합 키워드를 선정하기 위하여 TF - IDF 진행)  
</br>
</br>

# 컨텐츠 기반 추천 알고리즘
IMDB 에서 제안한 Weight Rating 방식으로 평점 재산정 (기존의 Rating 점수에 리뷰 갯수에 대한 가중치 할당 방식)
**TF - IDF** 를 통해  키워드들에 대한 중요도를 가중치로  벡터 임베딩
**코사인 유사도** 함수 활용  
유사도 계산시 **Genre와 Key_words 두 변수 동시 반영**하여 추천 시스템에 적용  
</br>
</br>

# 결과 분석 
![image](https://velog.velcdn.com/images/taemin-steve/post/1a02a733-cfc4-4980-92bb-662aa1282ed1/image.png)
### 1.사용자 평가 기반 세부카테고리 추천 가능 
'리니지' 라는 키워드와 같이 사용자들이 받아들이는 보다 직관적이고 세부적인 카테고리로 분할하여 추천할 수 있음 
### 2.장르에 국한되지 않는 다채로운 추천 가능
다운로드 항목을 보면 모두 roleplaying 게임이지만, 실제로 추천되는 게임들은 action과 simulation 장르의 게임 또한 추천되는 것을 확인할 수 있다. key word만 겹친다면 장르를 넘어선 추천 가능
</br>
</br>

# Frontend 구현

: React, styled-components

![image](https://github.com/KW-Programmers-Algorithm-Study/Comment-based-recommendation-system-/assets/98096178/981324b9-25f9-4d6e-855f-0f50a5d86dcf)

![image](https://github.com/KW-Programmers-Algorithm-Study/Comment-based-recommendation-system-/assets/98096178/27f833bc-bf4e-4dca-9309-92437d3a4c18)  
</br>
</br>

# 기대 효과

- 리뷰 데이터와 게임의 장르만을 활용한 최소한의 정보를 바탕으로 추천 시스템을 구현함
- 게임 선정에 앞서 사용자가 리뷰를 습득하고자 할때 해당 시간을 단축 할 수 있음
- 게임 선택에 있어서 사용자 경험 정보를 활용 가능해짐
</br>
</br>

## **👨‍👨‍👧‍👦 Members**
| 이름  | 개발분야 |    소개페이지                |  
| -----| -------|------------------------- |
|정태민 | NLP | [Github](https://github.com/taemin-steve)   |
|김주원 | Frontend, Backend| [Github](https://github.com/juwon5272)   |
|박정훈 | Crawling | [Github](https://github.com/pjh9712)   |
|장효영 | NLP |[Github](https://github.com/HyoYoung22)   |
  
  
  
