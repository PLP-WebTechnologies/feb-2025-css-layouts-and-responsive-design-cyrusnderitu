const navMenu = document.querySelector('.nav__menu')
const navClose = document.querySelector('.nav__close')
const navOpen = document.querySelector('.nav__toggle')
const navItem = document.querySelectorAll('.nav__link')
const scrollUp = document.querySelector('.scroll__up')

navOpen.addEventListener('click', ()=>{
    navMenu.classList.add('show__menu')
})
navClose.addEventListener('click', ()=>{
    navMenu.classList.remove('show__menu')
})


navItem.forEach(item => {
    item.addEventListener('click', ()=>{
        navMenu.classList.remove('show__menu')
    })
});

window.addEventListener('scroll', ()=>{
    if(scrollY > 20){
        const header = document.getElementById('header');
        header.classList.add('scroll__head')
        scrollUp.classList.add('scroll-up')
        }
        else{
            header.classList.remove('scroll__head');
            scrollUp.classList.remove('scroll-up')
        }
})

let mixerOption = mixitup('.products__content', {
    selectors: {
        target: '.products__card'
    },
    animation: {
        duration: 500
    }
});

/// Setting Default Show For Filter
mixerOption.filter('.first')


const activeProduct = document.querySelectorAll('.products__title')

activeProduct.forEach(n =>{
    n.addEventListener('click', ()=>{
        activeProduct.forEach(item =>{
            item.classList.remove('active__product')
        })
        n.classList.add('active__product')
    })
})

scrollUp.addEventListener('click', ()=>{
    document.body.scrollTop = 0; // For Safari Users
    document.documentElement.scrollTop = 0; // For Chrome and Firefox User
})
