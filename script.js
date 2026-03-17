// 🎬 MOVIE DATA
const movies = [
  {title:"Spider Man",genre:"Action",year:2021,img:"https://image.tmdb.org/t/p/w500/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg", trailer: "https://youtu.be/5PSNL1qE6VY?si=4ei0DlRHI0TvUErc"},
  {title:"Wonder Woman",genre:"Adventure",year:2020,img:"https://image.tmdb.org/t/p/w500/8UlWHLMpgZm9bx6QYh0NFoq67TZ.jpg"},
  {title:"Batman",genre:"Action",year:2022,img:"https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg"},
  {title:"Joker",genre:"Drama",year:2019,img:"https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg"},
  {title:"Thor",genre:"Action",year:2022,img:"https://image.tmdb.org/t/p/w500/pIkRyD18kl4FhoCNQuWxWu5cBLM.jpg"},
  {title:"Iron Man",genre:"Action",year:2008,img:"https://image.tmdb.org/t/p/w500/78lPtwv72eTNqFW9COBYI0dWDJa.jpg"},
  {title:"Doctor Strange",genre:"Fantasy",year:2022,img:"https://image.tmdb.org/t/p/w500/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg"},
  {title:"Black Panther",genre:"Action",year:2018,img:"https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8wjKA.jpg"},
  {title:"Deadpool",genre:"Comedy",year:2016,img:"https://image.tmdb.org/t/p/w500/3E53WEZJqP6aM84D8CckXx4pIHw.jpg"},
  {title:"Logan",genre:"Drama",year:2017,img:"https://image.tmdb.org/t/p/w500/fnbjcRDYn6YviCcePDnGdyAkYsB.jpg"},
  {title:"Aquaman",genre:"Adventure",year:2018,img:"https://image.tmdb.org/t/p/w500/5Kg76ldv7VxeX9YlcQXiowHgdX6.jpg"},
  {title:"Flash",genre:"Action",year:2023,img:"https://image.tmdb.org/t/p/w500/rktDFPbfHfUbArZ6OOOKsXcv0Bm.jpg"},
  {title:"Shazam",genre:"Comedy",year:2019,img:"https://image.tmdb.org/t/p/w500/xnopI5Xtky18MPhK40cZAGAOVeV.jpg"},
  {title:"Venom",genre:"Action",year:2018,img:"https://image.tmdb.org/t/p/w500/2uNW4WbgBXL25BAbXGLnLqX71Sw.jpg"},
  {title:"Eternals",genre:"Sci-Fi",year:2021,img:"https://image.tmdb.org/t/p/w500/b6qUu00iIIkXX13szFy7d0CyNcg.jpg"},
  {title:"Matrix",genre:"Sci-Fi",year:1999,img:"https://image.tmdb.org/t/p/w500/aOIuZAjPaRIE6CMzbazvcHuHXDc.jpg"},
  {title:"John Wick",genre:"Action",year:2014,img:"https://image.tmdb.org/t/p/w500/fZPSd91yGE9fCcCe6OoQr6E3Bev.jpg"},
  {title:"Inception",genre:"Sci-Fi",year:2010,img:"https://image.tmdb.org/t/p/w500/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg"},
  {title:"Interstellar",genre:"Sci-Fi",year:2014,img:"https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg"},
  {title:"Avatar",genre:"Sci-Fi",year:2009,img:"https://image.tmdb.org/t/p/w500/jRXYjXNq0Cs2TcJjLkki24MLp7u.jpg"},
  {title:"Titanic",genre:"Romance",year:1997,img:"https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg"},
  {title:"Frozen",genre:"Animation",year:2013,img:"https://image.tmdb.org/t/p/w500/kgwjIb2JDHRhNk13lmSxiClFjVk.jpg"},
  { title: "Avengers Endgame", genre: "Action", year: 2019, img: "https://image.tmdb.org/t/p/w500/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg" },
  {title:"Gladiator",genre:"Historical",year:2000,img:"https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg", trailer:"https://www.youtube.com/embed/owK1qxDselE"},
  { title: "Braveheart", genre: "Historical", year: 1995, img: "https://image.tmdb.org/t/p/w500/or1gBugydmjToAEq7OZY0owwFk.jpg", trailer: "https://www.youtube.com/embed/1NJO0jxBtMo" },
  { title: "Frozen", genre: "Animation", year: 2013, img:"https://image.tmdb.org/t/p/w500/kgwjIb2JDHRhNk13lmSxiClFjVk.jpg", trailer: "https://www.youtube.com/embed/TbQm5doF_Uc" },
  {title:"Harry Potter",genre:"Fantasy",year:2001,img:"https://m.media-amazon.com/images/I/81iqZ2HHD-L._AC_SL1500_.jpg", trailer:"https://www.youtube.com/embed/VyHV0BRtdxo"},
  {title:"Lord of the Rings",genre:"Fantasy",year:2001,img:"https://m.media-amazon.com/images/I/91dSMhdIzTL._SL1500_.jpg", trailer:"https://www.youtube.com/embed/V75dMMIW2B4"},
{title:"Se7en",genre:"Thriller",year:1995,img:"https://m.media-amazon.com/images/I/71c05lTE03L._AC_SL1024_.jpg", trailer:"https://www.youtube.com/embed/znmZoVkCjpI"}, 
];
const container = document.getElementById("movieContainer");
// 🎬 CREATE CARDS
movies.forEach(movie => {
  const card = document.createElement("div");
  card.classList.add("movie-card");

  card.innerHTML = `
  <div class="wishlist" onclick="toggleLike(this)">
    <i class="fa fa-heart"></i>
  </div>

  <img src="${movie.img}" 
       onerror="this.onerror=null; this.src='https://via.placeholder.com/300x450?text=No+Image';">

  <h2>${movie.title}</h2>
  <p class="genre">Genre: ${movie.genre}</p>
  <p>Year: ${movie.year}</p>

<button class="trailer-btn" onclick="openTrailer('${movie.trailer || ""}')">
  ▶ Watch Trailer
</button>

  <div class="rating">
    <i class="fa fa-star" data-value="1"></i>
    <i class="fa fa-star" data-value="2"></i>
    <i class="fa fa-star" data-value="3"></i>
    <i class="fa fa-star" data-value="4"></i>
    <i class="fa fa-star" data-value="5"></i>
  </div>

  <p class="avg">Rating: <span>0</span></p>
`;

  container.appendChild(card);
});
// ⭐ RATING FIX (dynamic)
document.addEventListener("click", function(e){
  if(e.target.classList.contains("fa-star")){
    let star = e.target;
    let value = star.getAttribute("data-value");

    let parent = star.parentElement;
    let allStars = parent.querySelectorAll("i");

    allStars.forEach(s => s.classList.remove("active"));

    for(let i=0;i<value;i++){
      allStars[i].classList.add("active");
    }

    parent.nextElementSibling.querySelector("span").innerText = value;
  }
});
// 🔍 SEARCH
document.getElementById("searchInput").addEventListener("keyup", function(){
  let searchValue = this.value.toLowerCase();
  let cards = document.querySelectorAll(".movie-card");
  cards.forEach(card => {
    let title = card.querySelector("h2").innerText.toLowerCase();
    card.style.display = title.includes(searchValue) ? "block" : "none";
  });
});
// 🎯 FILTER
function filterMovies(category){
  let cards = document.querySelectorAll(".movie-card");
  cards.forEach(card => {
    let genre = card.querySelector(".genre").innerText.toLowerCase();
    if(category === "all"){
      card.style.display = "block";
    }
    else if(genre.includes(category.toLowerCase())){
      card.style.display = "block";
    }
    else{
      card.style.display = "none";
    }
  });
}
function openTrailer(url){
  document.getElementById("trailerModal").style.display = "flex";
  document.getElementById("trailerFrame").src = url;
}
function closeTrailer(){
  document.getElementById("trailerModal").style.display = "none";
  document.getElementById("trailerFrame").src = "";
}
function toggleLike(el){
  el.classList.toggle("liked");
}
function openTrailer(url){
  if(!url){
    alert("Trailer not available");
    return;
  }
  document.getElementById("trailerModal").style.display = "flex";
  document.getElementById("trailerFrame").src = url;
}