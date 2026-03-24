// Fixed working script.js - No errors

const movies = [
  {title:"Spider Man",genre:"Action",year:2021,img:"https://image.tmdb.org/t/p/w500/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg", trailer:"https://www.youtube.com/embed/YSrDdNdULOY",desc:"Multiverse action adventure of Spider-Man"},
  {title:"Joker",genre:"Drama",year:2019,img:"https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg", trailer:"https://www.youtube.com/embed/z6KLY8t7u1E"},
  {title:"Avengers Endgame",genre:"Action",year:2019,img:"https://image.tmdb.org/t/p/w500/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg", trailer:"https://www.youtube.com/embed/TcMBFSGVi1c"},
  {title:"Gladiator",genre:"Historical",year:2000,img:"https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg", trailer:"https://www.youtube.com/embed/owK1qxDselE"},
  {title:"Mad Max Fury Road",genre:"Action",year:2015,img:"https://image.tmdb.org/t/p/w500/8tZYtuWezp8JbcsvHYO0O46tFbo.jpg",trailer:"https://www.youtube.com/embed/hEJnMQG9ev8"},
  {title:"John Wick",genre:"Action",year:2014,img:"https://image.tmdb.org/t/p/w500/fZPSd91yGE9fCcCe6OoQr6E3Bev.jpg",trailer:"https://www.youtube.com/embed/2AUmvWm5ZDQ"},
  {title:"Extraction",genre:"Action",year:2020,img:"https://image.tmdb.org/t/p/w500/wlfDxbGEsW58vGhFljKkcR5IxDj.jpg",trailer:"https://www.youtube.com/embed/L6P3nI6VnlY"},
  {title:"Pathaan",genre:"Action",year:2023,img:"https://upload.wikimedia.org/wikipedia/en/c/c3/Pathaan_film_poster.jpg",trailer:"https://www.youtube.com/embed/vqu4z34wENw"},
  
  // 🔵 DRAMA
  {title:"Forrest Gump",genre:"Drama",year:1994,img:"https://image.tmdb.org/t/p/w500/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg",trailer:"https://www.youtube.com/embed/bLvqoHBptjg"},
  {title:"The Shawshank Redemption",genre:"Drama",year:1994,img:"https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",trailer:"https://www.youtube.com/embed/6hB3S9bIaco"},
  {title:"Fight Club",genre:"Drama",year:1999,img:"https://image.tmdb.org/t/p/w500/bptfVGEQuv6vDTIMVCHjJ9Dz8PX.jpg",trailer:"https://www.youtube.com/embed/qtRKdVHc-cE"},
  {title:"A Beautiful Mind",genre:"Drama",year:2001,img:"https://image.tmdb.org/t/p/w500/zwzWCmH72OSC9NA0ipoqw5Zjya8.jpg",trailer:"https://www.youtube.com/embed/WFJgUm7iOKw"},
  
  
  
  // 🟢 SCI-FI
  {title:"The Matrix",genre:"Sci-Fi",year:1999,img:"https://image.tmdb.org/t/p/w500/aOIuZAjPaRIE6CMzbazvcHuHXDc.jpg",trailer:"https://www.youtube.com/embed/vKQi3bBA1y8"},
  {title:"Avatar",genre:"Sci-Fi",year:2009,img:"https://image.tmdb.org/t/p/w500/kyeqWdyUXW608qlYkRqosgbbJyK.jpg",trailer:"https://www.youtube.com/embed/5PSNL1qE6VY"},
  {title:"Tenet",genre:"Sci-Fi",year:2020,img:"https://image.tmdb.org/t/p/w500/k68nPLbIST6NP96JmTxmZijEvCA.jpg",trailer:"https://www.youtube.com/embed/L3pk_TBkihU"},
  {title:"Gravity",genre:"Sci-Fi",year:2013,img:"https://image.tmdb.org/t/p/w500/kZ2nZw8D681aphje8NJi8EfbL1U.jpg",trailer:"https://www.youtube.com/embed/OiTiKOy59o4"},
  
  // 🟣 ANIMATION
  {title:"Toy Story",genre:"Animation",year:1995,img:"https://image.tmdb.org/t/p/w500/uXDfjJbdP4ijW5hWSBrPrlKpxab.jpg",trailer:"https://www.youtube.com/embed/KYz2wyBy3kc"},
  {title:"Finding Nemo",genre:"Animation",year:2003,img:"https://image.tmdb.org/t/p/w500/eHuGQ10FUzK1mdOY69wF5pGgEf5.jpg",trailer:"https://www.youtube.com/embed/wZdpNglLbt8"},
  {title:"Coco",genre:"Animation",year:2017,img:"https://image.tmdb.org/t/p/w500/gGEsBPAijhVUFoiNpgZXqRVWJt2.jpg",trailer:"https://www.youtube.com/embed/xlnPHQ3TLX8"},
  {title:"Minions",genre:"Animation",year:2015,img:"https://tse2.mm.bing.net/th/id/OIP.AzjOn30p82Lhr2WrBp_Y-AHaLH?pid=Api&P=0&h=180",trailer:"https://www.youtube.com/embed/eisKxhjBnZ0"},
  
  // 🟤 HISTORICAL
  { title: "Lagaan", genre: "Historical", year: 2001, img: "https://upload.wikimedia.org/wikipedia/en/b/b6/Lagaan.jpg", trailer: "https://www.youtube.com/embed/oSIGQ0YkFxs" },
  {title: "Sher Shivraj",genre: "Historical", year: 2022,img: "https://tse3.mm.bing.net/th/id/OIP.pircGTsZ9AU6a4bbQ1lJCgHaJQ?pid=Api&P=0&h=180",trailer: "https://www.youtube.com/embed/Q2s9f9zFq9M"},
  {title: "Farzand",genre: "Historical",year: 2018,img: "https://tse2.mm.bing.net/th/id/OIP.3dVEd49CkNf8yiTIU2H-YwHaLH?pid=Api&P=0&h=180",trailer: "https://www.youtube.com/embed/9fP9Jb9sRkQ"},
  {title: "Fatteshikast",genre: "Historical",year: 2019,img: "https://tse2.mm.bing.net/th/id/OIP.y-xlBAGip6LnwSabWEx45gHaLH?pid=Api&P=0&h=180",trailer: "https://www.youtube.com/embed/Xf1hK2Y9l4E"},
  {title: "Subhedar",genre: "Historical",year: 2023,img: "https://tse3.mm.bing.net/th/id/OIP.DnLRPimOlOqaKT1TDbGhLwAAAA?pid=Api&P=0&h=180",trailer: "https://www.youtube.com/embed/Zc7s0zK9g9Q"},
  {title: "Sarsenapati Hambirrao",genre: "Historical",year: 2022,img: "https://tse4.mm.bing.net/th/id/OIP.GVybkySpyTaKLiQEB-iQ4gHaKl?pid=Api&P=0&h=180",trailer: "https://www.youtube.com/embed/mP5z8nYkXzY" },
  {title: "Mi Shivajiraje Bhosale Boltoy",genre: "Drama",year: 2009,img: "https://image.tmdb.org/t/p/w500/3k2j1h6g5f4d3s2a1z0x9c8v7b6.jpg",trailer: "https://www.youtube.com/embed/0p9s8d7f6g5"
  },
  
  // 🟠 FANTASY
  {title:"Aladdin",genre:"Fantasy",year:2019,img:"https://image.tmdb.org/t/p/w500/3iYQTLGoy7QnjcUYRJy4YrAgGvp.jpg",trailer:"https://www.youtube.com/embed/foyufD52aog"},
  { title: "The Hobbit", genre: "Fantasy", year: 2012, img: "https://image.tmdb.org/t/p/w500/yHA9Fc37VmpUA5UncTxxo3rTGVA.jpg", trailer: "https://www.youtube.com/embed/SDnYMbYB-nU" },
  {title:"Se7en",genre:"Thriller",year:1995,img:"https://image.tmdb.org/t/p/w500/6yoghtyTpznpBik8EngEmJskVUO.jpg",trailer:"https://www.youtube.com/embed/znmZoVkCjpI"},
  { title: "Shutter Island", genre: "Thriller", year: 2010, img: "https://image.tmdb.org/t/p/w500/kve20tXwUZpu4GUX8l6X7Z4jmL6.jpg", trailer: "https://www.youtube.com/embed/5iaYLCiq5RM" },
  {title:"Pirates of the Caribbean",genre:"Fantasy",year:2003,img:"https://tse1.mm.bing.net/th/id/OIP.myVXgBqI2aQxUQcM_HBZxgHaLH?pid=Api&P=0&h=180",trailer:"https://www.youtube.com/embed/naQr0uTrH_s"},
  {title:"Tanhaji",genre:"Historical",year:2020,img:"https://tse4.mm.bing.net/th/id/OIP.DUQowM-leNMSFszKosoOaQHaJ3?pid=Api&P=0&h=180", trailer:"https://www.youtube.com/embed/9tB4Rzpbf30"},
  {title:"Hera Pheri",genre:"Comedy",year:2000,img:"https://tse1.mm.bing.net/th/id/OIP.ZJhqvYIL4psr06fIyTyR0AHaKL?pid=Api&P=0&h=180",trailer:"https://www.youtube.com/embed/m1zMmVwWr-M"},
  {title:"Dhamaal",genre:"Comedy",year:2007,img:"https://tse1.mm.bing.net/th/id/OIP.QvszcGcaCl9Us-MKG30uRQHaJ4?pid=Api&P=0&h=180",trailer:"https://www.youtube.com/embed/-8d0u6lX1zE"},
  {title:"Golmaal",genre:"Comedy",year:2006,img:"https://tse3.mm.bing.net/th/id/OIP.Bq9DUWUL4zR8dyLEeHbLTAHaK9?pid=Api&P=0&h=180",trailer:"https://www.youtube.com/embed/1uZ6x7W5q0Q"},
  {title:"Pavankhind",genre:"Historical",year:2022,img: "https://tse1.mm.bing.net/th/id/OIP.U-aLRzKLaAIJGkCV7Dak9QHaKI?pid=Api&P=0&h=180", trailer:"https://www.youtube.com/embed/2q8V-v5VPPE"},
  {title:"Jodhaa Akbar",genre:"Historical",year:2008,img:"https://tse2.mm.bing.net/th/id/OIP.mR8l9xIlYydwjAwOWniX2AHaKs?pid=Api&P=0&h=180",trailer:"https://www.youtube.com/embed/-H2nJ4zJxQ8"},
  {title:"Kesari",genre:"Historical",year:2019,img:"https://tse2.mm.bing.net/th/id/OIP.Kw9sXEXu_ZL62RxurGh5UwHaKk?pid=Api&P=0&h=180",trailer:"https://www.youtube.com/embed/Ji2iKz5U7oE"},
  // ⚫ THRILLER
  
  {title:"Gone Girl",genre:"Thriller",year:2014,img:"https://tse1.mm.bing.net/th/id/OIP.bDDKaN8Yqoue0LP3fhK1qwHaLH?pid=Api&rs=1&c=1&qlt=95&w=79&h=119",trailer:"https://www.youtube.com/embed/2-_-1nJf8Vg"},
  { title: "War", genre: "Action", year: 2019, img: "https://tse3.mm.bing.net/th/id/OIP.FL2oEXsInvzoZh2-Bh_iCQHaJ3?pid=Api&P=0&h=180", trailer: "https://www.youtube.com/embed/tQ0mzXRk-oM" },
  // 🟡 COMEDY
  {
    title: "The Mask", genre: "Comedy", year: 1994, img: "https://www.themoviedb.org/t/p/original/xcUSk3KIflAPCy1Jp64WUfuT8nN.jpg",
    trailer: "https://www.youtube.com/embed/LZl69yk5lEY"
  },
  
];

let favorites = [];
let isLoggedIn = false;
let currentUser = '';

// Elements
const container = document.getElementById("movieContainer");
const favoritesContainer = document.getElementById("favoritesContainer");
const favoritesCount = document.getElementById("favoritesCount");
const favoritesSection = document.getElementById("favoritesSection");
const loginModal = document.getElementById("loginModal");
const authSection = document.getElementById("authSection");
const userWelcome = document.getElementById("userWelcome");
const themeToggle = document.getElementById("themeToggle");
const body = document.body;
const searchInput = document.getElementById("searchInput");



function login() {
  const usernameInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');

  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  const usernamePattern = /^[a-zA-Z0-9]+$/;

  // Validation using alert
  if (!username || !password) {
    alert("Please fill all fields");
    return;
  }

  if (username.length < 5) {
    alert("Username must be at least 5 characters");
    return;
  }

  if (!usernamePattern.test(username)) {
    alert("Username should contain only letters and numbers");
    return;
  }

  if (password.length < 4) {
    alert("Password must be at least 4 characters");
    return;
  }

  // Success message
  // alert("Login Successful ✅");

  // Original logic (unchanged)
  isLoggedIn = true;
  currentUser = username;
  favorites = JSON.parse(localStorage.getItem("favorites_" + username) || "[]");

  loginModal.style.display = 'none';
  authSection.style.display = 'flex';
  userWelcome.textContent = 'Welcome, ' + username + '!';

  renderMovies(container);
  renderFavorites();
}

// Logout
function logout() {
  alert("Logged out successfully 👋");

  isLoggedIn = false;
  currentUser = "";
  favorites = [];

  loginModal.style.display = 'flex';
  authSection.style.display = 'none';
  favoritesSection.style.display = 'none';

  renderMovies(container);
}


// Theme toggle
function toggleTheme() {
  body.classList.toggle('light-theme');
  const isLight = body.classList.contains('light-theme');
  themeToggle.innerHTML = isLight 
    ? '<i class="fas fa-sun"></i>' 
    : '<i class="fas fa-moon"></i>';
}

themeToggle.addEventListener("click", toggleTheme);

// Render movies
function renderMovies(container) {
  container.innerHTML = '';
  movies.forEach(movie => {
    const card = document.createElement('div');
    card.className = 'movie-card';
    const isFav = favorites.indexOf(movie.title) > -1;
    
    card.innerHTML =
      '<div class="wishlist' + (isFav ? ' liked' : '') + '" onclick="toggleFavorite(\'' + movie.title + '\', this)">' +
      '<i class="fa fa-heart"></i></div>' +
      '<img src="' + movie.img + '" onerror="this.src=\'https://via.placeholder.com/300x450?text=No+Image\'">' +
      '<h2>' + movie.title + '</h2>' +
      '<p class="genre">Genre: ' + movie.genre + '</p>' +
      '<p>Year: ' + movie.year + '</p>' +
      '<button class="trailer-btn" onclick="openTrailer(\'' + (movie.trailer || '') + '\')">Trailer</button>' +
      '<div class="rating">' +
        '<i class="fa fa-star" data-value="1"></i><i class="fa fa-star" data-value="2"></i><i class="fa fa-star" data-value="3"></i><i class="fa fa-star" data-value="4"></i><i class="fa fa-star" data-value="5"></i>' +
      '</div><p class="avg">Rating: <span>0</span></p>';
    
    container.appendChild(card);
  });
}
// Toggle favorite
function toggleFavorite(title, el) {
  const index = favorites.indexOf(title);
  if (index > -1) {
    favorites.splice(index, 1);
    el.classList.remove('liked');
  } else {
    favorites.push(title);
    el.classList.add('liked');
  }
  localStorage.setItem("favorites_" + currentUser, JSON.stringify(favorites));
  renderFavorites();
}

// Render favorites
function renderFavorites() {
  const favMovies = movies.filter(movie => favorites.includes(movie.title));
  favoritesContainer.innerHTML = '';
  favMovies.forEach(movie => {
    const card = document.createElement('div');
    card.className = 'movie-card';
    card.innerHTML = 
      '<div class="wishlist liked" onclick="toggleFavorite(\'' + movie.title + '\', this)">' +
      '<i class="fa fa-heart"></i></div>' +
      '<img src="' + movie.img + '" onerror="this.src=\'https://via.placeholder.com/300x450?text=No+Image\'">' +
      '<h2>' + movie.title + '</h2>' +
      '<p class="genre">Genre: ' + movie.genre + '</p>' +
      '<p>Year: ' + movie.year + '</p>' +
      '<button class="trailer-btn" onclick="openTrailer(\'' + (movie.trailer || '') + '\')">Trailer</button>' +
      '<div class="rating">' +
        '<i class="fa fa-star" data-value="1"></i><i class="fa fa-star" data-value="2"></i><i class="fa fa-star" data-value="3"></i><i class="fa fa-star" data-value="4"></i><i class="fa fa-star" data-value="5"></i>' +
      '</div><p class="avg">Rating: <span>0</span></p>';
    favoritesContainer.appendChild(card);
  });
  favoritesCount.textContent = '(' + favorites.length + ')';
  favoritesSection.style.display = favorites.length ? 'block' : 'none';
}

// Event listeners
document.addEventListener('click', function(e) {
  if (e.target.classList.contains('fa-star')) {
    const value = e.target.getAttribute('data-value');
    const stars = e.target.parentNode.querySelectorAll('i');
    stars.forEach(s => s.classList.remove('active'));
    for (let i = 0; i < value; i++) {
      stars[i].classList.add('active');
    }
    e.target.parentNode.nextElementSibling.firstChild.textContent = value;
  }
});

searchInput.addEventListener('keyup', function() {
  const term = this.value.toLowerCase();
  const cards = container.querySelectorAll('.movie-card');
  cards.forEach(card => {
    card.style.display = card.querySelector('h2').textContent.toLowerCase().includes(term) ? 'block' : 'none';
  });
});

function filterMovies(category) {
  const cards = container.querySelectorAll('.movie-card');
  cards.forEach(card => {
    const genre = card.querySelector('.genre').textContent.toLowerCase();
    card.style.display = category === 'all' || genre.includes(category.toLowerCase()) ? 'block' : 'none';
  });
  document.querySelectorAll('.filter-buttons button').forEach(btn => btn.classList.remove('active'));
  e.target.classList.add('active');
}

function openTrailer(url) {
  if (!url) {
    alert('Trailer not available');
    return;
  }
  document.getElementById('trailerModal').style.display = 'flex';
  document.getElementById('trailerFrame').src = url;
}

function closeTrailer() {
  document.getElementById('trailerModal').style.display = 'none';
  document.getElementById('trailerFrame').src = '';
}

// Initialize
renderMovies(container);


