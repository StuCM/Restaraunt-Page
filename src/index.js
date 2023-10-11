import { createHomePage } from "./page-load";
import { createMenuPage } from "./Menu";
import { createContactPage } from "./Contact";

navBar();
createHomePage();

function navBar() {
    const container = document.createElement('nav');
    container.classList.add('nav-top');

    const navPages = ['Home', 'Menu', 'Contact']

    navPages.forEach((page) => {
        const a = document.createElement('a');
        a.textContent = page;
        a.href = '#';
        a.classList.add('nav-link')
        a.addEventListener('click', () => openPage(page))
        container.appendChild(a);
    })

    const body = document.querySelector('body');
    body.insertBefore(container, body.firstChild)
}

function openPage(page) {
    const content = document.getElementById('content');
    //clear the page
    content.innerHTML = "";

    //run the correct page
    switch (page) {
        case 'Home':
            createHomePage();
            break;       
        case 'Menu':
            createMenuPage();
            break;       
        case 'Contact':
            createContactPage();
            break
    }
}