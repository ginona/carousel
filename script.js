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
                                <picture><img src="${url}" alt="${obj.title}"></picture>
                            </div>`;
         })
    
         resultsEl.innerHTML = resultHTML
      }).catch(function(err) { 
         console.log(err.message)   
       })

   }

   search()