import {div, write} from "./home.js"

function loadContact() {
    let mainContact = div("mainContact")

    let title = document.createElement("h3")
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
    x.textContent = "Facebook: link1"
    social.appendChild(x)
    let y = document.createElement("li")
    y.textContent = "Instagram: link2"
    social.appendChild(y)
    let z = document.createElement("li")
    z.textContent = "Twitter: link3"
    social.appendChild(z)
    contact.appendChild(social)

    return mainContact
}
export default loadContact