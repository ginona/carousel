const buttonPrev = document.getElementById('button-prev');
const buttonNext = document.getElementById('button-next');
const track = document.getElementById('track');
const slickList = document.getElementById('slick-list');
const slick = document.querySelectorAll('.slick');

const slickWidth = 275;


buttonPrev.onclick = () => Move(1);
buttonNext.onclick = () => Move(2);


function Move(value){

    let carrousel =  document.getElementById('slick-list');
    const trackWidth = track.offsetWidth;
    const listWidth = slickList.offsetWidth;

    track.style.left == "" ? leftPosition = track.style.left = 0 : leftPosition = parseFloat(track.style.left.slice(0, -2) * -1);

    if(leftPosition < (trackWidth - listWidth) && value == 2){
        track.style.left = `${-1 * (leftPosition + 275)}px`;
        carrousel.scroll(track.style.left,0)
        return;
    }else if(leftPosition > 0  && value == 1){
        track.style.left = `${-1 * (leftPosition - 275)}px`
        carrousel.scroll(track.style.left,0)
    }
}


const searchForm = document.getElementById('search-form')
const inputText = document.getElementById('inputText')
const resultsEl = document.getElementById('track')



//    function search(q){
//     const apikey = 'TwJ1SaQHCIBd0qczJHRc3ioNpKdTxEYs'
//     const path = 'https://api.giphy.com/v1/gifs/search?api_key='+apikey+'&q='+q

//     fetch(path).then(function(response){
//         return response.json() 
//         }).then(function(json) { 
//          let resultHTML = '';
//          json.data.forEach(obj => {
//             //  console.log(obj.images.fixed_width.url)
//              const url = obj.images.fixed_width.url
//              const width = obj.images.fixed_width.width
//              const height = obj.images.fixed_width.height
    
//              resultHTML += `<div class="slick">
//                                 <img src="${url}" alt="${obj.title}">
//                                 <div class="card">
//                                 <div class="group-icons">
//                                     <div id="${obj.id}-remove" class="icons icon-delete"></div>
//                                     <div id="${obj.id}-add" class="icons icon-heart"></div>
//                                     <div id="${obj.id}-download" class="icons icon-download"></div>
//                                     <div id="${obj.id}-max" class="icons icon-max"></div>
//                                 </div>
//                                 </div>
//                             </div>`;
//          })
    
//          resultsEl.innerHTML = resultHTML
//       }).catch(function(err) { 
//          console.log(err.message)   
//        })

//    }

function search(data){
    let resultHTML = '';
    data.data.forEach(obj => {
         const url = obj.images.fixed_width.url
         const width = obj.images.fixed_width.width
         const height = obj.images.fixed_width.height

         resultHTML += `<div class="slick">
                            <img src="${url}" alt="${obj.title}">
                            <div class="card">
                            <div class="group-icons">
                                <div id="${obj.id}-remove" class="icons icon-delete"></div>
                                <div id="${obj.id}-add" class="icons icon-heart"></div>
                                <div id="${obj.id}-download" class="icons icon-download"></div>
                                <div id="${obj.id}-max" class="icons icon-max"></div>
                            </div>
                            </div>
                        </div>`;
     })

     resultsEl.innerHTML = resultHTML
}

   function addToLocalStorage(name,value) {
    let existing = localStorage.getItem(name);
    existing = existing ? JSON.parse(existing) : [];
    existing.push(value);
    localStorage.setItem(name,JSON.stringify(existing)); 
}

function addtoFavorites(gif) {
    document.getElementById(`${gif.id}-add`).classList.add('icon-heart--active')
    addToLocalStorage('Favorites',gif)
}

async function getGif(){
    const API_KEY = 'TwJ1SaQHCIBd0qczJHRc3ioNpKdTxEYs'
    const API = 'https://api.giphy.com/v1/gifs/trending'; 

    const apiURL = API+'?api_key='+API_KEY+'&limit=5&rating=g';

    const response = await fetch(apiURL);
    const data = await response.json();
    console.log(data);
    search(data);
}

getGif()