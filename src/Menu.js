const menuItems = ['Crunchwrap', 'General Tsos Jackfruit', 'Gnocchi', 'Homemade Beans', 'Lentil Soup', 'Tacos']

const menuDescriptions = {
    Crunchwrap: 'This delicious Mexican wrap contains everything a baby loves, beans, cheese, sauce, tomatoes and bread',
    GeneralTsosJackfruit: "Who is general Tsos? I don't know but the spices he blends with his Jackfruit is divine",
    Gnocchi: "It's potatoe but kind of like pasta? Fig is not a fan but hopefully your child is. Mixed together with a beautiful cheese, tomatoe and basil base",
    HomemadeBeans: "Who doesn't love baked beans? This is Fig's spin on the classic. Have it as a stew or we can dollop them on toast for you",
    LentilSoup: "Always need to offer a soup. This one is packed full of protein and has a delicious blend of Indian spices. It's a curry in a cup",
    Tacos: "Do we love Mexican food? Yes we do! Tacos is a staple! Here we have deepfried cauliflower with a tantalizing chipotle chilli sauce"   
}

const menuItem = (item) => {
    const container = document.createElement('div');
    container.classList.add('menu-item');

    const imageContainer = document.createElement('div');
    const img = document.createElement('img');
    img.src = `../src/assets/images/Menu/${item}`
    imageContainer.classList.add('img-container');
    imageContainer.appendChild(img);

    const textContainer = document.createElement('div');
    textContainer.classList.add('text-container')
    const heading = document.createElement('h2');
    heading.textContent = item;
    const text = document.createElement('p');
    menuItems.forEach((recipe) => {
        const recipeKey = recipe.replace(" ","");
        text.textContent = menuDescriptions[recipeKey]
    })
    text.classList.add('text-container')
    textContainer.appendChild(heading);
    textContainer.appendChild(text);

    container.appendChild(imageContainer);
    container.appendChild(textContainer);

    return container;
}

export function createMenuPage() {
    const content = document.getElementById('content')
    const menu = document.createElement('div');
    menu.classList.add('menu-container');

    console.log(menuItems, "menu")
    menuItems.forEach((item) => {
        const menuItemElement = menuItem(item);
        console.log(menuItemElement);
        menu.appendChild(menuItemElement);
    });

    if(content) content.appendChild(menu)
}

