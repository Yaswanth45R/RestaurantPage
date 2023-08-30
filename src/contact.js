import { $content,createHtmlElement } from "./index";

function renderContact(){
        const contactContent = createHtmlElement("div",null,["contact-content"],'');
        const $bienvenidos = createHtmlElement(
          "p",
          null,
          ["cursive", "golden"],
          "Bienvenidos"
        );
        const $title = createHtmlElement("h1", null, ["gray"], "Nosotros");
      
        const $hr = document.createElement("hr");
      
        const content =
          " 36, 1st St, CNR Layout, Babusapalya, Nanjappa Garden, Kalyan Nagar, Bengaluru, Karnataka 560043";
        const $p = createHtmlElement("p", null, ["menu-item"], content);

        contactContent.append($bienvenidos,$title,$hr,$p);
        $content.appendChild(contactContent);
}

export{renderContact}