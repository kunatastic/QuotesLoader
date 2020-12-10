const search = async () => {
  const data = await fetch("https://type.fit/api/quotes");
  const quotes = await data.json();

  let length = quotes.length;
  let index = Math.floor(Math.random() * length);
  let quote = await quotes[index];
  process("author", "h2", "~" + quote.author);
  process("text", "h1", quote.text);
};

function process(node, element, item) {
  const text = document.getElementById(node);
  var textNode = document.createElement(element);
  var textdata = document.createTextNode(item);
  textNode.appendChild(textdata);
  console.log(textNode);
  text.appendChild(textNode);
}

search();
