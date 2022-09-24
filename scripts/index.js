let imgTag = document.getElementsByClassName("myImageTag")[0];
let realSrc = imgTag.src;

let changeImage = (mediaQuery)=> {
    if (mediaQuery.matches) {
        imgTag.src = "assets/images/me2.png";
    } else {
      imgTag.src = realSrc;
    }
  };
  
  let mediaQuery = window.matchMedia("(max-width: 680px)");
  changeImage(mediaQuery);
  mediaQuery.addEventListener('change', changeImage);
  