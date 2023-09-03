// Array extraño
const strangeArray = [
  "Zero",
  function () {
    alert("Hola soy una función en un array");
  },
  22,
  null,
  "Go lang",
  undefined,
  "Cobol",
  "I'm programmer",
  -2000,
  "Hello world",
  `One is ${1}`,
  { name: "Info", lastname: "last info" },
  () => true,
  function showNumbers() {
    return "1, 2, 3, 4";
  },
  "Another String",
  ["Hola mundo!"],
  "b is a letter",
  "JavaScript",
];

// Función que recibe por parámetro un array y muestra sus elementos en pantalla
function showList(array) {
  const container = document.getElementById("list");
  container.innerHTML = "";
  // Más info de forEach => https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
  array.forEach((element) => {
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(element));
    container.appendChild(li);
  });
}

document.addEventListener("DOMContentLoaded", (e) => {
  // Nuevo array que contendrá los objetos de tipo string
  let filterStrangeArray = [];

  // Función que filtra el array
  strangeArray.filter((objeto) => {
    if (typeof objeto === "string") {
      filterStrangeArray.push(objeto);
    }
  })

  //Función que ordena alfabeticamente
  function ordenarAlf (a, b) {
    if (a.toLowerCase() < b.toLowerCase()) {return -1};
    if (a.toLowerCase() > b.toLowerCase()) {return 1};
  }

  filterStrangeArray.sort(ordenarAlf);

  showList(filterStrangeArray);
});


