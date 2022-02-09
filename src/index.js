import {header, loadHome, footer} from "./home.js"
import loadMenu from "./menu.js"
import loadContact from "./contact.js"

let content = document.getElementById("content")

function home() {
    content.appendChild(header())
    content.appendChild(loadHome())
    content.id = "content"
    content.appendChild(footer())
    buttons()
}

function menu() {
    content.appendChild(header())
    content.appendChild(loadMenu())
    content.id = "contentActive"
    content.appendChild(footer())
    buttons()
}

function contact() {
    content.appendChild(header())
    content.appendChild(loadContact())
    content.id = "content"
    content.appendChild(footer())
    buttons()
}

home()
buttons()
function clearContent() {
    while (content.lastChild) {
        content.removeChild(content.lastChild)
    }
}
//create event listeners for each tab
function buttons() {
let homeBtn = document.querySelector("button.homeBtn")
homeBtn.addEventListener("click", () => {
    clearContent()
    home()
})
let menuBtn = document.querySelector("button.menuBtn")
menuBtn.addEventListener("click", () => {
    clearContent()
    menu()
})
let contactBtn = document.querySelector("button.contactBtn")
contactBtn.addEventListener("click", () => {
    clearContent()
    contact()
})}
