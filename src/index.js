import { renderNavbar } from "./navbar";
import {renderHome} from "./home";
import { renderMenu } from "./menu";
import { renderContact } from "./contact";

const $content = document.getElementById('content');

function createHtmlElement(type,id,arrayClasses,content){
    const element = document.createElement(type);
    if(id) element.id = id;
    if(arrayClasses) arrayClasses.forEach((myClass)=> element.classList.add(myClass));  
    if(content) element.innerText = content;

    return element;
}

function home(){
    $content.innerHTML="";
    renderNavbar();
    renderHome();
}
function menu(){
    $content.innerHTML="";
    renderNavbar();
    renderMenu();
}
function contact(){
    $content.innerHTML="";
    renderNavbar();
    renderContact();
}

home(); 

document.addEventListener('click',(e)=>{
    const target = e.target.innerText;
     if(target==="Home")home();
     if(target==="Menu"||target==='VER EL MENU') menu();
     if(target==="Contact") contact();
})

export {$content, createHtmlElement};