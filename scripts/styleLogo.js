// Changing SVG styling requires using JS
// https://stackoverflow.com/a/4906603
function styleLogo(elid,fillColor='#fff') {
  let svgDoc = document.getElementById(elid).contentDocument;
  let styleElement = svgDoc.createElementNS("http://www.w3.org/2000/svg", "style");
  styleElement.textContent = `svg { fill: ${fillColor}; }`;
  svgDoc.children[0].appendChild(styleElement);
}