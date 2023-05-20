let section = document.getElementsByTagName('section');
let pointBtn = document.querySelectorAll('.pointWrap li');

let pageNumber = 0;
let totalNumber = section.length;

for(let i=0; i<pointBtn.length; i++){
  (function(index) {
    pointBtn[index].onclick = function() {
      pageNumber = index;
      pageChangeFunction();

      window.scrollTo({
        top: section[pageNumber].offsetTop,
        behavior:'smooth',
      })
    }
  })(i);
}

window.addEventListener('scroll', function(event) {
  let scroll = window.scrollY;

  for(let i=0; i<totalNumber; i++){
    if(scroll > section[i].offsetTop - this.window.outerHeight / 1.5 && scroll < section[i].offsetTop - this.window.outerHeight / 1.5 + section[i].offsetHeight) {
      pageNumber = i;
      break;
    }
  }
  pageChangeFunction();
})

const pageChangeFunction = () => {
  for(let i=0; i<totalNumber; i++) {
    section[i].classList.remove('active');
    pointBtn[i].classList.remove('active');
  }
  section[pageNumber].classList.add('active');
  pointBtn[pageNumber].classList.add('active');
}

pageChangeFunction();

