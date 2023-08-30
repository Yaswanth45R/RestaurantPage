import { $content,createHtmlElement } from "./index";

const menu = [
    {
        name:"Pan canilla",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat, tellus sit amet",
        price:"20$",
    },
    {
        name: "Pan sobado",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat, tellus sit amet",
        price: "20$",
    },
    {
        name: "Pan Andino",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat, tellus sit amet",
        price: "20$",
    }
]

function renderMenu(){
    const menuContent = createHtmlElement("div",null,["menu-content"],'');
    const $bienvenidos = createHtmlElement(
        "p",
        null,
        ["cursive", "golden"],
        "Bienvenidos"
      );
      const $title = createHtmlElement("h1", null, ["gray"], "Menu");

      const $hr = document.createElement("hr");
      menuContent.append($bienvenidos,$title,$hr);

      menu.forEach((item) => {
        const $div = createHtmlElement("div", null, ["menu-item"], null);
    
        const $name = createHtmlElement("h2", null, ["golden"], item.name);
        const $description = createHtmlElement(
          "p",
          null,
          ["gray"],
          item.description
        );
        const $price = createHtmlElement("h2", null, ["golden"], item.price);
        const $hr = createHtmlElement("hr", null, ["menu-hr"], null);
    
        $div.appendChild($name);
        $div.appendChild($description);
        $div.appendChild($price);
        $div.appendChild($hr);
    
        menuContent.appendChild($div);
      });

    $content.appendChild(menuContent);
}

export{renderMenu}