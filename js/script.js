let slider = document.querySelector('.slide')
let testimony = document.querySelector('.review p')
let idName = document.querySelector('.name p')
let portfolio = document.querySelector('.portfolio p')
let nextBtn = document.querySelector('.next')
let prevBtn = document.querySelector('.prev')
let contents = document.querySelector('.contents')
let images = [
    'images/image-tanya.jpg',
    'images/image-john.jpg'
]

let review = [
    `“ I’ve been interested in coding for a while but never taken the jump, until now. 
    I couldn’t recommend this course enough. I’m now in the job of 
    my dreams and so excited about the future. ”`,
    `“ If you want to lay the best foundation possible I’d recommend taking this course. 
    The depth the instructors go into is incredible. I now feel so 
    confident about starting up as a professional developer. ”` 
]

let names = [
    "Tanya Sinclair",
    "John Tarkpor"
]

let portfolios = [
    "UX Engineer",
    "Junior Front-end Developer"
]

let count = 0

nextBtn.addEventListener('click', () => {
    count++
    if(count >= images.length) {
        count = 0
    }

    testimony.innerHTML = review[count]
    idName.innerHTML = names[count]
    portfolio.innerHTML = portfolios[count]
    slider.src = images[count]
})

prevBtn.addEventListener('click', () => {
    count--
    if(count < 0) {
        count = images.length - 1
    }

    testimony.innerHTML = review[count]
    idName.innerHTML = names[count]
    portfolio.innerHTML = portfolios[count]
    slider.src = images[count]
})


