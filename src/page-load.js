export function createPage() {

    const main = document.createElement('main');

    const header = document.createElement('h1');
    header.textContent = "Fig's Restaraunt";
    
    const imageContainer = document.createElement('div');
    imageContainer.classList.add('img-container')

    const img = document.createElement('img');
    img.src = "../src/assets/images/burger-girl.jpg";
    
    const about = document.createElement('p');
    about.innerHTML = "Come eat at Fig's restaraunt! It's made for toddlers. You can spit your food out wherever you want! Order things you used to like but for no reason hate today! Have a tantrum on our lovely padded floors and we have endless staff to feed you, so you don't have to use your hands! <br><br> Everyone is raving about Fig's! So book a table today!"
    about.classList.add('text-container');

    main.appendChild(header);
    imageContainer.appendChild(img);
    main.appendChild(imageContainer);
    main.appendChild(about);

    const content = document.getElementById("content")
    content.appendChild(main);
}