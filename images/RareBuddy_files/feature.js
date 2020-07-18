const subscribe = document.querySelector('.banner__btn button');
const pageBody = document.querySelectorAll('section');
const subscribeBody = document.querySelector('.subscribe-page');
const header = document.querySelector('header');
const footer = document.querySelector('footer');
const body = document.querySelector('body');
const close = document.querySelector('.close');

subscribe.addEventListener('click', () => {
    pageBody.forEach(_body  => {
        _body.style.opacity = 0.1
    });
    header.style.opacity = 0.1;
    footer.style.opacity = 0.1;
    subscribeBody.style.display = 'block';

})

close.addEventListener('click', () => {
    pageBody.forEach(_body  => {
        _body.style.opacity = 1;
    });
    header.style.opacity = 1;
    footer.style.opacity = 1;
    body.classList.remove('body-fixed');
    subscribeBody.style.display = 'none';
})


// Header
const nav = document.querySelector('nav');

// Header
window.onscroll = () => {
    scrollFunction();
}

const scrollFunction = () => {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        nav.classList.add('scrolled');
    }
    else {
        nav.classList.remove('scrolled');
    }
}
