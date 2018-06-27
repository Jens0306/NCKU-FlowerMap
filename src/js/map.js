var intro = document.getElementById('Intro');
var flowerName = document.getElementById('flowerName');
var flowerInfo = document.getElementById('flowerInfo');
//var flowerName = document.getElementsByTagName("discript > h1");
var map = document.getElementsByClassName('Map')[0];

var bar = document.getElementById('sidebar');
var btn = document.getElementById('tbtn');

window.change = async function(id1, id2, id3){
  var f = document.getElementById(id1);
  var m = document.getElementById(id2);
  var flowerImg = document.getElementById("flowerImg");
  var mapImg = document.getElementById("mapImg");
  var bg = document.getElementsByClassName("layer-bg")[0];


  //put away sidebar
  $("#sidebar").toggleClass("active");


  //f.style.display = "none";
  //f.style.transition = "0s";
  f.style.left = "-1000px";

  m.style = "z-index : 0";
  m.style.display = "block";
  m.style.left = "-600px";
  await delay(280);

  switch (id3) {
    case 'one':
      bg.style = "background-image : url('../imgs/hero_blur1.jpg')";
      f.style = "background-color : pink";
      flowerImg.src = "./imgs/1.jpg";
      mapImg.src = "./imgs/map.png";
      flowerName.textContent = "Sakura";
      flowerInfo.textContent = "Maecenas placerat malesuada nisi ac tempor. Fusce hendrerit vestibulum lorem eget consectetur. Integer quis turpis ultrices, fringilla enim nec, venenatis massa. Sed ornare urna quis malesuada scelerisque. Suspendisse feugiat commodo augue, in laoreet nunc facilisis eget. Aliquam mi risus, tincidunt non tellus sit amet, fermentum molestie odio. Maecenas eu placerat nisl. Duis imperdiet dignissim vulputate. Donec imperdiet cursus libero, et venenatis lorem congue ut."
      break;
    case 'two':
      bg.style = "background-image : url('../imgs/hero_blur2.jpg')";
      f.style = "background-color : #FFED9F";
      flowerImg.src = "./imgs/2.jpg";
      mapImg.src = "./imgs/map2.png";
      flowerName.textContent = "Flamboyanttree";
      flowerInfo.textContent = "Maecenas placerat malesuada nisi ac tempor. Fusce hendrerit vestibulum lorem eget consectetur. Integer quis turpis ultrices, fringilla enim nec, venenatis massa. Sed ornare urna quis malesuada scelerisque. Suspendisse feugiat commodo augue, in laoreet nunc facilisis eget. Aliquam mi risus, tincidunt non tellus sit amet, fermentum molestie odio. Maecenas eu placerat nisl. Duis imperdiet dignissim vulputate. Donec imperdiet cursus libero, et venenatis lorem congue ut."
      break;
    case 'three':
      bg.style = "background-image : url('../imgs/hero_blur3.jpg')";
      f.style = "background-color : #E8820C";
      flowerImg.src = "./imgs/3.jpg";
      mapImg.src = "./imgs/map3.png";
      flowerName.textContent = "Golden shower";
      flowerInfo.textContent = "Maecenas placerat malesuada nisi ac tempor. Fusce hendrerit vestibulum lorem eget consectetur. Integer quis turpis ultrices, fringilla enim nec, venenatis massa. Sed ornare urna quis malesuada scelerisque. Suspendisse feugiat commodo augue, in laoreet nunc facilisis eget. Aliquam mi risus, tincidunt non tellus sit amet, fermentum molestie odio. Maecenas eu placerat nisl. Duis imperdiet dignissim vulputate. Donec imperdiet cursus libero, et venenatis lorem congue ut."
      break;
    case 'four':
      bg.style = "background-image : url('../imgs/hero_blur4.jpg')";
      f.style = "background-color : #A5B0FF";
      flowerImg.src = "./imgs/4.jpg";
      mapImg.src = "./imgs/map.png";
      flowerName.textContent = "Yellow Pui";
      flowerInfo.textContent = "Maecenas placerat malesuada nisi ac tempor. Fusce hendrerit vestibulum lorem eget consectetur. Integer quis turpis ultrices, fringilla enim nec, venenatis massa. Sed ornare urna quis malesuada scelerisque. Suspendisse feugiat commodo augue, in laoreet nunc facilisis eget. Aliquam mi risus, tincidunt non tellus sit amet, fermentum molestie odio. Maecenas eu placerat nisl. Duis imperdiet dignissim vulputate. Donec imperdiet cursus libero, et venenatis lorem congue ut."
      break;
    case 'five':
      bg.style = "background-image : url('../imgs/hero_blur5.jpg')";
      f.style = "background-color : #5B9960";
      flowerImg.src = "./imgs/5.jpg";
      mapImg.src = "./imgs/map.png";
      flowerName.textContent = "Cotton Tree";
      flowerInfo.textContent = "Maecenas placerat malesuada nisi ac tempor. Fusce hendrerit vestibulum lorem eget consectetur. Integer quis turpis ultrices, fringilla enim nec, venenatis massa. Sed ornare urna quis malesuada scelerisque. Suspendisse feugiat commodo augue, in laoreet nunc facilisis eget. Aliquam mi risus, tincidunt non tellus sit amet, fermentum molestie odio. Maecenas eu placerat nisl. Duis imperdiet dignissim vulputate. Donec imperdiet cursus libero, et venenatis lorem congue ut."
      break;
    case 'six':
      bg.style = "background-image : url('../imgs/hero_blur6.jpg')";
      f.style = "background-color : #A57555";
      flowerImg.src = "./imgs/6.jpg";
      mapImg.src = "./imgs/map.png";
      flowerName.textContent = "台灣欒樹";
      flowerInfo.textContent = "Maecenas placerat malesuada nisi ac tempor. Fusce hendrerit vestibulum lorem eget consectetur. Integer quis turpis ultrices, fringilla enim nec, venenatis massa. Sed ornare urna quis malesuada scelerisque. Suspendisse feugiat commodo augue, in laoreet nunc facilisis eget. Aliquam mi risus, tincidunt non tellus sit amet, fermentum molestie odio. Maecenas eu placerat nisl. Duis imperdiet dignissim vulputate. Donec imperdiet cursus libero, et venenatis lorem congue ut."
      break;
  }
  f.style.display = "flex";
  f.style.transition = "1s";
  await delay(250);
  if (innerWidth > 800)
    f.style.left = "18%";
  else
    f.style.left = "5%";

  await delay(130);
  if (innerWidth > 800)
    m.style.left = "55%";
  else
    m.style.left = "0";
  //m.style.display = "block";
}
function delay(interval) {
    return new Promise((resolve) => {
        setTimeout(resolve, interval);
    });
};

window.gotop = function() {
  //map.style.display = "block";
  var m = document.getElementById('map');

}
