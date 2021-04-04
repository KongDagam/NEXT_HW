import requests
from bs4 import BeautifulSoup
import csv
from movie import extract_info #나눈 거 들고오기

file = open('movie.csv', mode='w', newline='')
writer = csv.writer(file)
writer.writerow(["title","mark","img_src","director","actor","release"])

MOVIE_URL = 'https://movie.naver.com/movie/running/current.nhn'
movie_html = requests.get(MOVIE_URL)

movie_soup = BeautifulSoup(movie_html.text,"html.parser")

movie_list_box = movie_soup.find("ul", {"class" : "lst_detail_t1"})
movie_list = movie_list_box.find_all('li') #리스트 모두

final_result = extract_info(movie_list)

for result in final_result:
    row = []
    row.append(result['title'])
    row.append(result['mark'])
    row.append(result['img_src'])
    row.append(result['director'])
    row.append(result['actor'])
    row.append(result['release'])
    writer.writerow(row)
print(final_result)
