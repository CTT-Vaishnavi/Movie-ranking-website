const ratings = document.querySelectorAll(".rating");

ratings.forEach((ratingDiv)=>{

const stars = ratingDiv.querySelectorAll("i");
const avgText = ratingDiv.parentElement.querySelector("span");

let total = 0;
let count = 0;

stars.forEach((star)=>{

star.addEventListener("mouseover",()=>{
resetStars(stars);
highlightStars(stars, star.dataset.value);
});

star.addEventListener("mouseout",()=>{
resetStars(stars);
});

star.addEventListener("click",()=>{

let value = parseInt(star.dataset.value);

total += value;
count++;

let avg = (total/count).toFixed(1);
avgText.innerText = avg;

resetStars(stars);
highlightStars(stars,value);

});

});

});


function highlightStars(stars,value){

stars.forEach(star=>{
if(star.dataset.value <= value){
star.classList.add("active");
}
});

}

function resetStars(stars){

stars.forEach(star=>{
star.classList.remove("active");
});

}