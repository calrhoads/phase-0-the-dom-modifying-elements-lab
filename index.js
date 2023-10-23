const mainNode = document.querySelector('main#main');
if (mainNode) {
  const parentNode = mainNode.parentNode;
  parentNode.removeChild(mainNode);
}

const newHeader = document.createElement("h1");
const yourName = "Cal";
newHeader.textContent = `${yourName} is the champion`;
newHeader.setAttribute("id", "victory");