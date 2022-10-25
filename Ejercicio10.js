function removeHTMLTags(str) {
    if (str === null || str === "") { //Si me introduzco una cadena vacia o nula me devolvera false.
      return false;
    } else {    //Si no me lo pasara a un string.
      str.toString();
    }
    return str.replace(/(<([^>]+)>)/gi, "");    //Es una reg.exp que me quitara las etiquetas tipicas de html.
  }

  const result = removeHTMLTags(
    "<div><span>lorem</span><strong>ipsum</strong></div>"
  );
  console.log(result); // loremipsum