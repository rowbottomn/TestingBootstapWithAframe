var images = ['assets/images/BlackBerry.png','assets/images/Moss.png','assets/images/Nutcracker.png','assets/images/Plankton.png','assets/images/Salmon.png'];
var image_titles = ['Blackberry','Moss','Nutcracker','Plankton','Salmon'];
var image_captions = ['Blackberries were native to Armenia and Northern Iran.',
                      'Moss does nto reproduce with flowers and pollen but with spores.',
                      'The Nutcracker is an omnivoire eating everthing from berries, small mammals and insects.',
                      'Plankton forms the basis of the ocean food web.',
                      'Salmon young spend up to 3 years in freshwater before leaving for the ocean to mature.'];

var gallery = $('#image_gallery');
//var gallery_container = $('#slide_wrapper');

function onload(){
  images.forEach((value, index)=>
  {
    
    let indicators = document.getElementById('indicators_wrapper');
    console.log(indicators.id);
    let gallery_container = document.getElementById('slide_wrapper');
    console.log(gallery_container.id);

    //make the element 
    //append to its inner html
   // let temp = document.createElement('');
    indicators.innerHTML += '<li data-target="#image_gallery" data-slide-to="0" ></li>';
    gallery_container.innerHTML += `<div class="item">
            <div class="carousel-caption">
          <h3>${image_titles[index]}</h3>
          <p>${image_captions[index]}</p>
        </div>
          <img src=${value} >
        </div>`;
    if (index === 0){
      indicators.children[0].classList.add('active');
      gallery_container.children[0].classList.add('active');
    }
    

  });  

}