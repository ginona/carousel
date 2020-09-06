const buttonPrev = document.getElementById('button-prev');
const buttonNext = document.getElementById('button-next');
const track = document.getElementById('track');
const slickList = document.getElementById('slick-list');
const slick = document.querySelectorAll('.slick');

// const API = 'https://api.giphy.com/v1/gifs'; 
// const API_KEY ='TwJ1SaQHCIBd0qczJHRc3ioNpKdTxEYs';

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

// function Move(){
//     let carrousel =  document.getElementById('slick-list');
//     const trackWidth = track.offsetWidth;
//     const listWidth = slickList.offsetWidth;

//     track.style.left == "" ? leftPosition = track.style.left = 0 : leftPosition = parseFloat(track.style.left.slice(0, -2) * -1);

//     // if(leftPosition < (trackWidth - listWidth) && value == 2)
//     const toggle = e =>{
//         if(e.currentTarget.classList.contains("slick-next")){
//             // track.style.left = `${-1 * (leftPosition + slickWidth)}px`;
//             scrollright = scrollright+300;
//             carrousel.scroll(scrollright,0)
//             return;
//         }else /*if(leftPosition > 0  && value == 1)*/{
//             // track.style.left = `${-1 * (leftPosition - slickWidth)}px`
//             scrollright = scrollright-300
//             carrousel.scroll(scrollright,0)
//         }
//     }
//     const toggleButtonsCarrousel = document.querySelectorAll(".slick-arrow"); 
//     toggleButtonsCarrousel.forEach( btn => {
//         btn.addEventListener("click",toggle)
//     }) 
// }

// getTredingCards()

// async function getTredingCards() {
//     const sliderContent = document.getElementById('slider__container-content')
//     const trendingGifData = await getTrending('trending',12);
//     trendingGifData.data.map( function(gif){
//         let cart = createCardComponent(sliderContent,gif)
//         return cart
//     }).join('')
// }

// async function createCardComponent(container,gif){
//     container.insertAdjacentHTML('beforeend',init(gif));
//     // events(gif);
// }

// const getTrending = async (type) => {
//     const apiURL = `${API}/${type}?api_key=${API_KEY}&limit=${12}&rating=g`;
//     try {
//         const response = await fetch(apiURL);
//         const data = await response.json();
//         console.log(data);
//         return data;
//     } catch (error) {
//         console.log('Fetch Error',error);
//     };
// };

// getTrending('trending');





const searchForm = document.getElementById('search-form')
const inputText = document.getElementById('inputText')
const resultsEl = document.getElementById('track')



   function search(q){
    const apikey = 'TwJ1SaQHCIBd0qczJHRc3ioNpKdTxEYs'
    const path = 'https://api.giphy.com/v1/gifs/search?api_key='+apikey+'&q='+q

    fetch(path).then(function(response){
        return response.json() 
        }).then(function(json) { 
         let resultHTML = '';
         json.data.forEach(obj => {
             console.log(obj.images.fixed_width.url)
             const url = obj.images.fixed_width.url
             const width = obj.images.fixed_width.width
             const height = obj.images.fixed_width.height
    
             resultHTML += `<div class="slick">
                                <div>
                                <a href="/"><h4><small>${obj.title}</small></h4>
                                <picture><img src="${url}" alt="${obj.title}"></picture></a>
                                </div>
                            </div>`;
         })
    
         resultsEl.innerHTML = resultHTML
      }).catch(function(err) { 
         console.log(err.message)   
       })

   }

   search()