const links = document.querySelectorAll(".main-nav__list"),

          toggle = document.querySelector('.main-nav__toggle');

 

    links.forEach(link => {

        link.addEventListener('click', () => {

            toggle.checked = false;

        })

    })