import {div, write} from "./home.js"

function menuItem(name, description) {
    let item = div("item")
    let x = document.createElement("h3")
    x.classList.add("menuItem")
    x.textContent = name
    let itemImg=document.createElement("img")
    itemImg.classList.add("itemImg")
    itemImg.src = `../img/${name.toLowerCase()}.png`
    itemImg.alt = name
    let itemText=write(description)
    item.appendChild(x)
    item.appendChild(itemImg)
    item.appendChild(itemText)
    return item
}
function loadMenu() {
    let mainMenu = div("mainMenu")

    let menu = document.createElement("h1")
    menu.classList.add("menu")
    menu.textContent = "Menu"
    mainMenu.appendChild(menu)

    let drinksMenu = div("drinksMenu")
    let drinks = document.createElement("h3")
    drinks.classList.add("drinks")
    drinks.textContent = "Drinks"
    drinksMenu.appendChild(drinks)
    drinksMenu.appendChild(menuItem("Juice","Juices available from various fruits."))
    drinksMenu.appendChild(menuItem("Soda","Several sodas available, please ask server for details."))
    mainMenu.appendChild(drinksMenu)

    let sidesMenu = div("sidesMenu")
    let sides = document.createElement("h3")
    sides.classList.add("sides")
    sides.textContent = "Sides"
    sidesMenu.appendChild(sides)
    sidesMenu.appendChild(menuItem("Wings","Chicken wings of the available flavors: BBQ, Buffalo, Lemon Garlic."))
    sidesMenu.appendChild(menuItem("Salad","Fresh salads: Caesar, Garden, Greek"))
    mainMenu.appendChild(sidesMenu)

    let pizzasMenu = div("pizzasMenu")
    let pizzas = document.createElement("h3")
    pizzas.classList.add("pizzas")
    pizzas.textContent = "Pizzas"
    pizzasMenu.appendChild(pizzas)
    pizzasMenu.appendChild(menuItem("Cheese","100% whole milk mozzarella cheese with family-secret red sauce"))
    pizzasMenu.appendChild(menuItem("Pepperoni","Crispy pepperoni with family-secret red sauce"))
    mainMenu.appendChild(pizzasMenu)

    return mainMenu
}
export default loadMenu