let container = document.getElementsByTagName("ul")[0];
let btns = container.getElementsByClassName("btn");

let btnsArray = document.querySelectorAll(".btn");

let eventListener = (event)=>{
    current = document.querySelector(".active");
    current.classList.remove("active");
    event.target.classList.add("active");
}

btnsArray.forEach((elem)=>{
    elem.addEventListener('click', eventListener);
});

/*
for (let i = 0; i < btns.length; i++) {

    btns[i].addEventListener('click', function(){

      let current = document.getElementsByClassName("active");
    //   current[0].className = current[0].className.replace(" active", "");
      current[0].classList.remove("active");
    //   this.className += " active";
    this.classList.add("active");

    });

  }
  */