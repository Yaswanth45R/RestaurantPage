(()=>{"use strict";var e={d:(n,t)=>{for(var l in t)e.o(t,l)&&!e.o(n,l)&&Object.defineProperty(n,l,{enumerable:!0,get:t[l]})},o:(e,n)=>Object.prototype.hasOwnProperty.call(e,n)};function n(){const e=i("div",null,["navbar"],""),n=i("div",null,["home","btn"],"Home"),t=i("div",null,["menu","btn"],"Menu"),a=i("div",null,["contact","btn"],"Contact");e.append(n,t,a),l.appendChild(e)}e.d({},{b:()=>l,U:()=>i});const t=[{name:"Pan canilla",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat, tellus sit amet",price:"20$"},{name:"Pan sobado",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat, tellus sit amet",price:"20$"},{name:"Pan Andino",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat, tellus sit amet",price:"20$"}],l=document.getElementById("content");function i(e,n,t,l){const i=document.createElement(e);return n&&(i.id=n),t&&t.forEach((e=>i.classList.add(e))),l&&(i.innerText=l),i}function a(){l.innerHTML="",n(),function(){const e=i("div",null,["main-content"],""),n=i("p",null,["cursive","golden"],"Bienvenidos"),t=i("h1",null,["white"],"La panaderia"),a=i("hr"),o=i("p",null,["text-center","white","sub-title"],"El placer de comer con las manos. Bien tierruo!"),c=i("button",null,[],"Ver el menu");e.append(n,t,a,o,c),l.appendChild(e)}()}a(),document.addEventListener("click",(e=>{const o=e.target.innerText;"Home"===o&&a(),"Menu"!==o&&"VER EL MENU"!==o||(l.innerHTML="",n(),function(){const e=i("div",null,["menu-content"],""),n=i("p",null,["cursive","golden"],"Bienvenidos"),a=i("h1",null,["gray"],"Menu"),o=document.createElement("hr");e.append(n,a,o),t.forEach((n=>{const t=i("div",null,["menu-item"],null),l=i("h2",null,["golden"],n.name),a=i("p",null,["gray"],n.description),o=i("h2",null,["golden"],n.price),c=i("hr",null,["menu-hr"],null);t.appendChild(l),t.appendChild(a),t.appendChild(o),t.appendChild(c),e.appendChild(t)})),l.appendChild(e)}()),"Contact"===o&&(l.innerHTML="",n(),function(){const e=i("div",null,["contact-content"],""),n=i("p",null,["cursive","golden"],"Bienvenidos"),t=i("h1",null,["gray"],"Nosotros"),a=document.createElement("hr"),o=i("p",null,["menu-item"]," 36, 1st St, CNR Layout, Babusapalya, Nanjappa Garden, Kalyan Nagar, Bengaluru, Karnataka 560043");e.append(n,t,a,o),l.appendChild(e)}())}))})();