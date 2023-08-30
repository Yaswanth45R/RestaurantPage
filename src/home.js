import { $content,createHtmlElement } from "./index";

function renderHome(){
        const mainContent = createHtmlElement("div",null,["main-content"],'');
        const pCursive = createHtmlElement("p",null,["cursive","golden"],"Bienvenidos");
        const h1 = createHtmlElement("h1",null,['white'],'La panaderia');
        const hr = createHtmlElement("hr");
        const ptext = createHtmlElement("p",null,["text-center","white",'sub-title'],"El placer de comer con las manos. Bien tierruo!")
        const btnVerMenu = createHtmlElement("button",null,[],"Ver el menu")

        mainContent.append(pCursive,h1,hr,ptext,btnVerMenu);
        $content.appendChild(mainContent);
}

export{renderHome}