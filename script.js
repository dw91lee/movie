// 탑버튼
document.querySelector('.btn_top').addEventListener('click', function(event) {
  event.preventDefault();
  window.scroll({
    top: 0,
    behavior: 'smooth'
  });
});



//검색버튼 누르면 되게하기
document.querySelector('.search_btn').addEventListener('click', function (event) {
  event.preventDefault();
})



//검색버튼을 클릭하면 나타나고 클릭하면 닫기
//
let nav_search = document.querySelector('.nav_search');
let search_box = document.getElementById('movie_search');
nav_search.addEventListener('click', function () {
  if (search_box.classList.contains('hide')) {
    search_box.classList.add('show')
    search_box.classList.remove('hide')
  } else {
    search_box.classList.add('hide')
    search_box.classList.remove('show')
  }

  // 검색창 옆에 X 클릭하면 닫기
  document.querySelector('.search_btn_close').addEventListener('click',
    function () {
      let search_box = document.getElementById('movie_search');
      search_box.classList.add('hide')
      search_box.classList.remove('show')
    })


  //document.querySelector('#movie_search').classList.add('show-modal')


  //    if (search_box.style.display === 'none') {
  //     console.log(1);
  //      search_box.style.display = 'block';
  //  } else {
  //   console.log(2);
  //      search_box.style.display = 'none';
  //  }
  // /
})


//검색창에서 입력하고 엔터치면 클릭 되도록 하기 
//키를 누를 때마다 엔터 키를 확인하고, 엔터 키가 눌렸을 때 검색 버튼에 대한 클릭 이벤트가 발생함.
//이렇게 하면 텍스트를 입력한 후 엔터 키를 누르면 검색 버튼이 클릭됨
//mdn https://developer.mozilla.org/ko/docs/Web/API/KeyboardEvent/key
/* document.querySelector('.search_txt').addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    document.querySelector('.search_btn').click();
  }
}); */



/*TMDB설치*/
document.addEventListener("DOMContentLoaded", function () {
  let movie_url = 'https://api.themoviedb.org/3/movie/top_rated?language=ko-KR&api_key=3508739bb6efd7ac5c0d7987f4f50eee';
  fetch(movie_url).then(res => res.json()).then(data => {
    let movie_list = data['results'];
    movie_list.forEach(movie_box => {
      let movie_title = movie_box['title'];
      let movie_overview = movie_box['overview'];
      let movie_rating = movie_box['vote_average'];
      let movie_poster = movie_box['poster_path'];
      let movie_date = movie_box['release_date'];

      let movie_year = movie_date.substring(0, 4); //2023-10-10 이렇게 나오는것을 2023만 출력하기 위해서 사용

      let temp_html = `    <div class="card">
                            <p><img src="https://image.tmdb.org/t/p/original${movie_poster}"></p>
                            <h3 class="title">${movie_title}</h3>
                            <div class="txt">${movie_overview}</div>
                            <p class="rating">⭐ ${movie_rating}</p>
                            <p class="movie_date">🎬 ${movie_year}</p>
                          </div>`
      document.querySelector('#card_box').insertAdjacentHTML('beforeend', temp_html)
      // console.log(movie_poster);
    });//data['results'][0]['title'];
  }) //fetch

  // 슬라이드
  /*const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNTA4NzM5YmI2ZWZkN2FjNWMwZDc5ODdmNGY1MGVlZSIsInN1YiI6IjY1MmYzYjYzZWE4NGM3MDEwYzFkZDYzNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2JhSAs7vPbaBQlp1r4qNy6zPm14hpWTUpuWliP6fwRk'
    }
  };

  fetch('https://api.themoviedb.org/3/movie/now_playing?language=ko-KR&page=1', options)
    .then(response => response.json())
    .then(data => {
      let movie_list2 = data['results'];
      movie_list2.forEach(movie_box => {
        let movie_title = movie_box['title'];
        let movie_poster = movie_box['poster_path'];
         let slide_html = `
         <div class="swiper-slide">
         <div class="slide_content">
           <p class="slide_poster"><img src="https://image.tmdb.org/t/p/original${movie_poster}"></p>
           <h3 class="slide_tit">${movie_title}</h3>
         </div>
         </div>
         `;
        document.querySelector('.swiper-wrapper').insertAdjacentHTML('beforeend', slide_html);
      });
    })
    .catch(err => console.error(err));
*/

}); //document ready


document.querySelector('.search_btn').addEventListener('click', function () {
  let searchText = document.querySelector('.search_txt').value;
  // let 영화제목 = document.querySelector('.card .title').innerText;
  let search_movie_list = document.querySelectorAll('.card .title'); //search_movie_list.length의 길이가 '20'으로 출력됨을 확인함
  // 3. 만약에 영화제목(input 텍스트에 입력한 값이)랑 
  for (i = 0; i <= search_movie_list.length; i++) {

    if (search_movie_list[i].innerHTML.includes(searchText)) {
      // console.log('반갑습니다');
      search_movie_list[i].parentElement.style = 'display:block';
    }
    else {
      search_movie_list[i].parentElement.style = 'display:none';

    }
  }

  //console.log(document.querySelectorAll('.card .title').length);

})

//3377 
window.addEventListener('scroll',function(){
  console.log(window.scrollY) })


  window.addEventListener('scroll', function () {
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  
    if (scrollTop >= 3377) {
      document.getElementById('btn_top').classList.add('btn_location');
    } else {
      document.getElementById('btn_top').classList.remove('btn_location');
    }
  });
  