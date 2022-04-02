const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
]

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]
/* <div class="prvw-img active">
  <img src="./img/01.jpg" alt="">
</div>
*/


let imgPrevew = ""
let imgTemeplate = ""



let currentIndex = 0;
for (let i = 0; i < items.length; i++) {
    let classActive = ""
    if (i === currentIndex) {
        classActive = " active"
    }
    imgTemeplate += `<div class="imgs ${classActive} ">
     <img src="${items[i]}">
     <div class="title">
         <h2>"${title[i]}"</h2>
         <p>${text[i]}</p>
     </div>
</div> `
    imgPrevew +=
        `<div class="prvw-img  ${classActive} ">
 <img src="${items[i]}" alt="">
 </div> `
}
//console.log(imgTemeplate)
let imgContainer = document.getElementById("imgContainer")
let prevewContainer = document.querySelector(".preview-img")
imgContainer.innerHTML = imgTemeplate
prevewContainer.innerHTML = imgPrevew

const next = document.getElementById("next")
const prev = document.getElementById("pre")

function nextImg() {
    const imgActive = document.querySelector(".imgs.active")
    imgActive.classList.remove('active')
    const prvwActive = document.querySelector(".prvw-img.active")
    prvwActive.classList.remove('active')
    const imgs = document.getElementsByClassName("imgs")
    imgs[currentIndex].classList.add("active")
    const prvw = document.getElementsByClassName("prvw-img")
    prvw[currentIndex].classList.add("active")

        if(currentIndex == 4){
            currentIndex = 0
        }else currentIndex++
        
}
function prevImg() {
    const imgActive = document.querySelector(".imgs.active")
    imgActive.classList.remove('active')
    const prvwActive = document.querySelector(".prvw-img.active")
    prvwActive.classList.remove('active')
    const imgs = document.getElementsByClassName("imgs")
    imgs[currentIndex].classList.add("active")
    const prvw = document.getElementsByClassName("prvw-img")
    prvw[currentIndex].classList.add("active")

if(currentIndex == 0){
    currentIndex = 4
}else currentIndex--
}







next.addEventListener("click", nextImg)
prev.addEventListener("click", prevImg)








// let firstImg = document.querySelector("div.imgs")

// firstImg.classList.add("active")



// 
// let img = document.getElementById("imgContainer")
// let active = document.getElementsByClassName("active")







//  next.addEventListener('click', nextImg);

//  function nextImg() {
//      if (i <= 4) {
//          active.innerHTML = `
//          <div class="imgs ">
//          <img src="${items[i]}">
//          </div>`
//          currentIndex += 1

//      } else if  (i > 4) 
//          active.innerHTML = `
//          <div class="imgs ">
//          <img src="${items[0]}">
//          </div>`
//          i = 0
//  }




