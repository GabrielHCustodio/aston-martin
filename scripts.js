let car = document.querySelector('#car-1')
let car2 = document.querySelector('#car-2')
let car3 = document.querySelector('#car-3')
let button = document.querySelector('#button')

let bds = document.querySelector('#bds')

bds.addEventListener('click', () => {
    window.scrollBy(0, car.getBoundingClientRect().top)
    document.getElementsByClassName('header').style.color = '#000'
})

document.querySelector('#valhalla').addEventListener('click', () => {
    window.scrollBy(0, car2.getBoundingClientRect().top)
})

document.querySelector('#vantage').addEventListener('click', () => {
    window.scrollBy(0, car3.getBoundingClientRect().top)
})