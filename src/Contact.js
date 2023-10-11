export function createContactPage() {
    const container = document.createElement('div');
    const imageContainer = document.createElement('div');
    const image = document.createElement('img');
    const text = document.createElement('p');
    const heading = document.createElement('h2');

    image.src = '../src/assets/images/Fig.jpg'
    imageContainer.appendChild(image);
    imageContainer.classList.add('img-container');

    heading.textContent = "Fig";

    text.innerHTML = "Telephone: 0713453021 <br> Email: IamTheQueen@Figs.com";

    container.appendChild(imageContainer);
    container.appendChild(heading);
    container.appendChild(text);

    const content = document.querySelector('#content');
    content.appendChild(container);
;}