import { $content,createHtmlElement } from "./index";

function renderNavbar() {
    const $nav = createHtmlElement("div",null,["navbar"],'');
    const homeBtn = createHtmlElement("div",null,["home","btn"],"Home");
    const menuBtn = createHtmlElement("div",null,['menu','btn'],'Menu');
    const contactBtn = createHtmlElement("div",null,['contact','btn'],'Contact');

    $nav.append(homeBtn,menuBtn,contactBtn);
    $content.appendChild($nav);
}

export{renderNavbar}