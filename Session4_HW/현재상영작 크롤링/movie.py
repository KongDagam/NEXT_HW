def extract_info(movie_list): #함수 만들기 movie_list-> li 전부(모든 상영작) 
    final_result = []
    for movie in movie_list: #영화 제목, 평점, 이미지 주소, 감독, 출연자, 개봉일자 정보 
        title = movie.find("dt", {"class" : "tit"}).find("a").text
        # mark = movie.find("dd", {"class": "star"}).find("a").text
        mark = movie.find("dd", {"class": "star"}).find_all("span")[2].text
        img_src = movie.find("div", {"class" : "thumb"}).find("img")['src']
        # director = movie.find("span", {"class" : "link_txt"}).find("a").text
        # director = movie.find_all("dd")[5].text
        director = movie.find_all("span", {"class" : "link_txt"})[1].find("a").text
        actor = 'None'
        actor_lists_dd = movie.find("dl", {"class" : "info_txt1"}).find_all("dd")
        if len(actor_lists_dd) >= 3:
            actor_lists = actor_lists_dd[2].find_all("a")
            actor = []
            for actor_list in actor_lists:
                actor.append(actor_list.text)
        # release = movie.find("dd", {"class", "split"}).find("span").text
        release = movie.find("dl", {"class", "info_txt1"}).find("dd").contents[6].strip()#dd에서 6번쨰 내용/ 공백제거

        movie_info = {
            'title' : title,
            'mark' : mark,
            'img_src' : img_src,
            'director' : director,
            'actor' : actor,
            'release' : release
        }
        final_result.append(movie_info)

    return final_result #프린트에 넣을 것
    
