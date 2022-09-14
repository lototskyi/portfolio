const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      close = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

close.addEventListener('click', () => {
    menu.classList.remove('active');
});

//skills raiting
const percents = document.querySelectorAll('.skills__tech-perc-item-perc'),
      lines = document.querySelectorAll('.skills__tech-perc-item-progress');

percents.forEach((item, i) => {
    const regex = /-?\d+/;
    const perc = +item.innerHTML.match(regex);

    if (0 <= perc && perc <= 100) {
        lines[i].style.width = `${perc}%`;
    } else if(perc > 100) {
        lines[i].style.width = `100%`;
    } else {
        lines[i].style.width = `0%`;
    }
});
