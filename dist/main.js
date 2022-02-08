(()=>{"use strict";function e(e){let t=document.createElement("div");return t.classList.add(e),t}function t(e){const t=document.createElement("p");return t.textContent=`${e}`,t}function n(){let t=e("header"),n=e("nav"),d=document.createElement("button");d.classList.add("homeBtn"),d.textContent="Home";let a=document.createElement("button");a.classList.add("menuBtn"),a.textContent="Menu";let l=document.createElement("button");return l.classList.add("contactBtn"),l.textContent="Contact",n.appendChild(d),n.appendChild(a),n.appendChild(l),t.appendChild(n),t}function d(){let n=e("footer"),d=t("copyright C Julio Cardona 2022");return n.appendChild(d),n}function a(n,d){let a=e("item"),l=document.createElement("h5");l.classList.add("menuItem"),l.textContent=n;let i=document.createElement("img");i.classList.add("itemImg"),i.src=`../img/${n.toLowerCase()}.png`,i.alt=n;let p=t(d);return l.appendChild(a),i.appendChild(a),p.appendChild(a),a}let l=document.getElementById("content");function i(){l.appendChild(n()),l.appendChild(function(){let n=e("mainHome"),d=document.createElement("h3");d.classList.add("title"),d.textContent="World's Best Pizza",n.appendChild(d);let a=document.createElement("img");a.src="../img/home.png",a.alt="pizza oven",n.appendChild(a);let l=t("History of restaurant");return n.appendChild(l),n}()),l.appendChild(d()),c()}function p(){for(;l.lastChild;)l.removeChild(l.lastChild)}function c(){document.querySelector("button.homeBtn").addEventListener("click",(()=>{p(),i()})),document.querySelector("button.menuBtn").addEventListener("click",(()=>{p(),l.appendChild(n()),l.appendChild(function(){let t=e("mainMenu"),n=document.createElement("h3");n.classList.add("menu"),t.appendChild(n);let d=e("drinksMenu"),l=document.createElement("h3");l.classList.add("drinks"),d.appendChild(l),d.appendChild(a("Juice","Juices available from various fruits.")),d.appendChild(a("Soda","Several sodas available, please ask server for details.")),t.appendChild(d);let i=e("sidesMenu"),p=document.createElement("h3");p.classList.add("sides"),i.appendChild(p),i.appendChild(a("Wings","Chicken wings of the available flavors: BBQ, Buffalo, Lemon Garlic.")),i.appendChild(a("Salad","Fresh salads: Caesar, Garden, Greek")),t.appendChild(i);let c=e("pizzasMenu"),o=document.createElement("h3");return o.classList.add("pizzas"),c.appendChild(o),c.appendChild(a("Cheese","100% whole milk mozzarella cheese with family-secret red sauce")),c.appendChild(a("Pepperoni","Crispy pepperoni with family-secret red sauce")),t.appendChild(c),t}()),l.appendChild(d()),c()})),document.querySelector("button.contactBtn").addEventListener("click",(()=>{p(),l.appendChild(n()),l.appendChild(function(){let n=e("mainContact"),d=document.createElement("h3");d.textContent="Contact Us",n.appendChild(d);let a=e("contact");n.appendChild(a),a.appendChild(t("Address: 123 Main Street")),a.appendChild(t("Phone Number: (800) 123-4567")),a.appendChild(t("Email: Splinter@TMNT.com"));let l=document.createElement("ul");l.textContent="Social Media:";let i=document.createElement("li");i.textContent="Facebook: link1",l.appendChild(i);let p=document.createElement("li");p.textContent="Instagram: link2",l.appendChild(p);let c=document.createElement("li");return c.textContent="Twitter: link3",l.appendChild(c),a.appendChild(l),n}()),l.appendChild(d()),c()}))}i(),c()})();