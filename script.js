const search = async () => {
  try {
    const data = await fetch("https://type.fit/api/quotes");
    const quotes = await data.json();
    localStorage.setItem("quotes", JSON.stringify(quotes));
    extract(quotes);
  } catch (e) {
    document.getElementById("visible").style.display = "block";
  }
};
function check() {
  if (localStorage.getItem("quotes") == null) {
    search();
  } else {
    var retrievedObject = localStorage.getItem("quotes");
    var retrievedObject = JSON.parse(retrievedObject);
    extract(retrievedObject);
  }
}

function extract(quotes) {
  let length = quotes.length;
  let index = Math.floor(Math.random() * length);
  let quote = quotes[index];
  process("author", "h2", "~" + quote.author);
  process("text", "h1", quote.text);
}

function process(node, element, item) {
  if (item == "~null") {
    item = "~ Anonymous";
  }
  if (node == "author") {
    document.title = "Quote by " + item;
  }
  const text = document.getElementById(node);
  var textNode = document.createElement(element);
  var textdata = document.createTextNode(item);
  textNode.appendChild(textdata);
  text.appendChild(textNode);
}
