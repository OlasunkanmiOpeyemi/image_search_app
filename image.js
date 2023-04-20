const acessKey = "2eN7D-aDqtg05AirXA6xL1yDP4AOuyio8UdTigSgvNY";

const formEl = document.querySelector("form");
const searchInputEl = document.getElementById("search-input");
const searchResultsEl = document.querySelector(".search-results");
const showMore = document.getElementById("show-more");

let inputData = "";
let page = 1;

async function searchImages() {
  inputData = searchInputEl.value;
  const url = `https://api.unsplash.com/search/photos?page=${page}&quary=${inputData}&client_id=${acessKey}`;
  console.log(url);
  const response = await fetch(url);
  const data = await response.json();
  if (page === 1) {
    searchResultsEl.innerHTML = "";
  }
  const result = data.results;

  results.map((result) => {
    
    const imageWrapper = document.createElement("div")
    imageWrapper.classList.add("search-result");
    const image = document.createElement("img");
    image.src = result.urls.small;
    image.alt = result.alt_description;
    const imageLink = document.createElement("a");
    imageLink.href = result.links.html;
    imageLink.target = "_blank";
    console.log(result);
    imageLink.textContent = alt_description;
    
    imageWrapper.appendChild(image);
    imageWrapper.appendChild(imageLink);
    searchResultsEl.appendChild(imageWrapper);
  });

  page++ 

  if (page > 1) {
    showMoreButton.style.display = block; 
  }
}

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  page = 1;
  searchImages();
})

