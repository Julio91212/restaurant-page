function loadHome() {
    //create elements
    let mainHome = div("mainHome")
    let title = document.createElement("h3")
    title.classList.add("title")
    title.textContent = "World's Best Pizza"
    mainHome.appendChild(title)
    let img = document.createElement("img")
    img.src= "../img/home.png"
    img.alt = "pizza oven"
    mainHome.appendChild(img)
    let history = write("World's Best Pizza opened in 1902 and has been serving customers with the same amazing pizza ever since. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")
    mainHome.appendChild(history)
    return mainHome
}

//function to create divs
function div(name) {
    let x = document.createElement("div")
    x.classList.add(name)
    return x
}

//create text function
function write(text){
    const paragraph = document.createElement("p")
    paragraph.textContent=`${text}`;
    return paragraph
}

//create header
function header() {
    let header = div("header")
    let nav = div("nav")
    let homeBtn = document.createElement("button")
    homeBtn.classList.add("homeBtn")
    homeBtn.textContent="Home"
    let menuBtn = document.createElement("button")
    menuBtn.classList.add("menuBtn")
    menuBtn.textContent="Menu"
    let contactBtn = document.createElement("button")
    contactBtn.classList.add("contactBtn")
    contactBtn.textContent="Contact"
    nav.appendChild(homeBtn)
    nav.appendChild(menuBtn)
    nav.appendChild(contactBtn)
    header.appendChild(nav)
    return header
}

//create footer
function footer() {
    let footer = div("footer")
    let pageBy = write("Copyright © Julio Cardona 2022")
    footer.appendChild(pageBy)
    return footer
}

export { 
  div,
  write,
  loadHome,
  header,
  footer
};