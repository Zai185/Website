const containers = document.querySelectorAll('.img-container')
const imgs = document.querySelectorAll('.img-container > img');
let winH = window.innerHeight;
// let a = window.innerHeight;
// let b = window.innerHeight + container.clientHeight;
// window.addEventListener('scroll', () => {


//     if (container.getBoundingClientRect().top <= window.innerHeight) {
//         if (container.getBoundingClientRect().top < a) {
//             a = container.getBoundingClientRect().top;
//             b = container.getBoundingClientRect().bottom;
//             c++;
//             console.log(true, container.style.objectPosition,c)
//             imgs.style.objectPosition = '50% ' +  + 'vh';



//         } else if (container.getBoundingClientRect().bottom > b) {
//             a = container.getBoundingClientRect().top;
//             b = container.getBoundingClientRect().bottom
//             console.log(false)
//         }
//     }
// })


// window.addEventListener('scroll',()=>{
//     let boxTop = container.getBoundingClientRect().top;
//     let slideRate = boxTop / (55/8);
//     if(boxTop <= winH){
//         imgs.style.objectPosition = '50% '+ (-slideRate)+'vh';
//         console.log(boxTop,slideRate)
//     }
// })

window.addEventListener('scroll', () => {
    for (let i = 0; i < containers.length; i++) {
        // if (containers[i].getBoundingClientRect().top <= winH) {
            imgs[i].style.objectPosition = '50% ' + ((-containers[i].getBoundingClientRect().top / (55 / 4)) )+  'vh';
        // }
    }
})




// for this porfolio project 
const specialEventContainer = document.querySelectorAll('.special-event-section > .flex-container')
const specialEventImg = document.querySelectorAll('.special-event-img')
const specialEventContent = document.querySelectorAll('.special-event-content')

window.addEventListener('scroll', () => {
    for (let i = 0; i < specialEventContainer.length; i++) {
        if (specialEventContainer[i].getBoundingClientRect().top + 100 < window.innerHeight) {
            specialEventImg[i].style.transform = 'none'
            specialEventContent[i].style.opacity = '1'
        }
    }
})



