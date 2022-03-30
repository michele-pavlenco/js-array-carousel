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

{/* <div class="imgs active">
<img src="./img/01.jpg">
</div> */}

let currentIndex = 0;
const next = document.getElementById("next")
let img = document.getElementById("imgContainer")
let active = document.getElementById("active")





// for (i = 0; i < items.length; i++) {
//     img.innerHTML += 
//     `<div class="imgs ">
//      <img src="${items[currentIndex]}">
//      </div>`
     
// };

// next.addEventListener('click', nextImg);

// function nextImg() {
//     if (i <= 4) {
//         active.innerHTML = `
//         <div class="imgs ">
//         <img src="${items[i]}">
//         </div>`
//         d++

//     } else  (i > 4) 
//         active.innerHTML = `
//         <div class="imgs ">
//         <img src="${items[0]}">
//         </div>`
//         i = 0
// }
// console.log(i)


