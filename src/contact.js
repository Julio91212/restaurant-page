import {div, write} from "./home.js"

function loadContact() {
    let mainContact = div("mainContact")

    let title = document.createElement("h1")
    title.textContent = "Contact Us"
    mainContact.appendChild(title)
    let contact = div("contact")
    mainContact.appendChild(contact)
    contact.appendChild(write("Address: 123 Main Street"))
    contact.appendChild(write("Phone Number: (800) 123-4567"))
    contact.appendChild(write("Email: Splinter@TMNT.com"))
    let social = document.createElement("ul")
    social.textContent = "Social Media:"
    let x = document.createElement("li")
    let x2 = document.createElement("a")
    x2.href = "https://www.facebook.com/"
    x2.textContent = "Facebook"
    x.appendChild(x2)
    social.appendChild(x)
    let y = document.createElement("li")
    let y2 = document.createElement("a")
    y2.href = "https://www.instagram.com/"
    y2.textContent = "Instagram"
    y.appendChild(y2)
    social.appendChild(y)
    let z = document.createElement("li")
    let z2 = document.createElement("a")
    z2.href = "https://twitter.com/?lang=en"
    z2.textContent = "Twitter"
    z.appendChild(z2)
    social.appendChild(z)
    contact.appendChild(social)

    return mainContact
}
export default loadContact