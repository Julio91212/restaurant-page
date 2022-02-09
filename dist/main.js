(()=>{"use strict";function e(e){let t=document.createElement("div");return t.classList.add(e),t}function t(e){const t=document.createElement("p");return t.textContent=`${e}`,t}function n(){let t=e("header"),n=e("nav"),d=document.createElement("button");d.classList.add("homeBtn"),d.textContent="Home";let a=document.createElement("button");a.classList.add("menuBtn"),a.textContent="Menu";let i=document.createElement("button");return i.classList.add("contactBtn"),i.textContent="Contact",n.appendChild(d),n.appendChild(a),n.appendChild(i),t.appendChild(n),t}function d(){let n=e("footer"),d=t("Copyright © Julio Cardona 2022");return n.appendChild(d),n}function a(n,d){let a=e("item"),i=document.createElement("h3");i.classList.add("menuItem"),i.textContent=n;let l=document.createElement("img");l.classList.add("itemImg"),l.src=`../img/${n.toLowerCase()}.png`,l.alt=n;let o=t(d);return a.appendChild(i),a.appendChild(l),a.appendChild(o),a}let i=document.getElementById("content");function l(){i.appendChild(n()),i.appendChild(function(){let n=e("mainHome"),d=document.createElement("h3");d.classList.add("title"),d.textContent="World's Best Pizza",n.appendChild(d);let a=document.createElement("img");a.src="../img/home.png",a.alt="pizza oven",n.appendChild(a);let i=t("World's Best Pizza opened in 1902 and has been serving customers with the same amazing pizza ever since. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.");return n.appendChild(i),n}()),i.id="content",i.appendChild(d()),c()}function o(){for(;i.lastChild;)i.removeChild(i.lastChild)}function c(){document.querySelector("button.homeBtn").addEventListener("click",(()=>{o(),l()})),document.querySelector("button.menuBtn").addEventListener("click",(()=>{o(),i.appendChild(n()),i.appendChild(function(){let t=e("mainMenu"),n=document.createElement("h1");n.classList.add("menu"),n.textContent="Menu",t.appendChild(n);let d=e("drinksMenu"),i=document.createElement("h3");i.classList.add("drinks"),i.textContent="Drinks",d.appendChild(i),d.appendChild(a("Juice","Juices available from various fruits.")),d.appendChild(a("Soda","Several sodas available, please ask server for details.")),t.appendChild(d);let l=e("sidesMenu"),o=document.createElement("h3");o.classList.add("sides"),o.textContent="Sides",l.appendChild(o),l.appendChild(a("Wings","Chicken wings of the available flavors: BBQ, Buffalo, Lemon Garlic.")),l.appendChild(a("Salad","Fresh salads: Caesar, Garden, Greek")),t.appendChild(l);let c=e("pizzasMenu"),p=document.createElement("h3");return p.classList.add("pizzas"),p.textContent="Pizzas",c.appendChild(p),c.appendChild(a("Cheese","100% whole milk mozzarella cheese with family-secret red sauce")),c.appendChild(a("Pepperoni","Crispy pepperoni with family-secret red sauce")),t.appendChild(c),t}()),i.id="contentActive",i.appendChild(d()),c()})),document.querySelector("button.contactBtn").addEventListener("click",(()=>{o(),i.appendChild(n()),i.appendChild(function(){let n=e("mainContact"),d=document.createElement("h1");d.textContent="Contact Us",n.appendChild(d);let a=e("contact");n.appendChild(a),a.appendChild(t("Address: 123 Main Street")),a.appendChild(t("Phone Number: (800) 123-4567")),a.appendChild(t("Email: Splinter@TMNT.com"));let i=document.createElement("ul");i.textContent="Social Media:";let l=document.createElement("li"),o=document.createElement("a");o.href="https://www.facebook.com/",o.textContent="Facebook",l.appendChild(o),i.appendChild(l);let c=document.createElement("li"),p=document.createElement("a");p.href="https://www.instagram.com/",p.textContent="Instagram",c.appendChild(p),i.appendChild(c);let s=document.createElement("li"),r=document.createElement("a");return r.href="https://twitter.com/?lang=en",r.textContent="Twitter",s.appendChild(r),i.appendChild(s),a.appendChild(i),n}()),i.id="content",i.appendChild(d()),c()}))}l(),c()})();