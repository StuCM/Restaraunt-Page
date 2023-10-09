import { createPage } from "./page-load";

navBar();
createPage();

function navBar() {
    const container = document.createElement('nav');
    container.classList.add('nav-top');

    const navPages = ['Home', 'Menu', 'Contact']

    navPages.forEach((page) => {
        const a = document.createElement('a');
        a.textContent = page;
        a.href = 'page';
        a.classList.add('nav-link')
        container.appendChild(a);
    })

    const body = document.querySelector('body');
    body.insertBefore(container, body.firstChild)
}