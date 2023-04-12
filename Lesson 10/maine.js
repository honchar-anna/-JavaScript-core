//  start edit-box function
const getS = (selector) => document.querySelector(selector);
getS(".btn-edit").onclick = function () {
  getS(".edit-block").classList.add("show");
  getS(".style-block").classList.remove("show");

  getS(".edit-area").value = getS(".top-block").innerHTML;
};
//  start save-btn function
getS(".btn-save").onclick = function () {
  getS(".edit-block").classList.remove("show");
  getS(".top-block").innerHTML = getS(".edit-area").value;
};
// end save-btn,edit-box function

//  start style-box function
getS(".btn-style").addEventListener("click", () => {
  getS(".style-block").classList.add("show");
  getS(".edit-block").classList.remove("show");
});
//  start font-size, font-family function
function fontSize() {
  getS(".top-block").style.fontSize = event.target.value;
}
let fF = document.getElementById("fontFamily");
fF.onchange = function (e) {
  getS(`.Choose`).classList.add(`none`)
  getS(".top-block").style.fontFamily = this.value;
};
//  end font-size, font-family function

//  start color-text function
let colors = [
  "rgb(190, 90, 164)",
  " rgb(48, 82, 126)",
  "rgb(230, 233, 179)",
  "rgb(76, 0, 255)",
  "rgb(94, 21, 10)",
  "rgb(87, 162, 101)",
  "rgb(157, 131, 218)",
  "rgb(255, 94, 0)",
  " rgb(255, 0, 0)",
];
for (let i = 0; i < getS(".colors-text").children.length; i++) {
  getS(".colors-text").children[i].style.backgroundColor = colors[i];
  getS(".colors-text").children[i].onclick = function () {
    getS(".top-block").style.color = this.style.backgroundColor;
  };
}
getS(".btn-text-color").onclick = function () {
  getS(".colors-text").classList.remove("hide");
  getS(".colors-bg").classList.add("hide");
};
//  end color-text function

// start bg-style-colors
let color = [
  "cadetblue",
  "darkgreen",
  "darksalmon",
  "cornflowerblue",
  "darkblue",
  " darkslateblue",
  "gold",
  "aquamarine ",
  "palegreen",
];
for (let i = 0; i < getS(".colors-bg").children.length; i++) {
  getS(".colors-bg").children[i].style.backgroundColor = color[i];
  getS(".colors-bg").children[i].onclick = function () {
    getS(".top-block").style.backgroundColor = this.style.backgroundColor;
  };
}
getS(".btn-bg-color").onclick = function () {
  getS(".colors-bg").classList.remove("hide");
  getS(".colors-text").classList.add("hide");
};
// end bg-style-colors

// start fuction bold style
function fontWeight() {
  if (event.target.checked) getS(".top-block").classList.add("bold");
   else  getS(".top-block").classList.remove("bold");
  
}
// end fuction bold style

// start fuction italic style
function fontStyle() {
  if (event.target.checked) getS(".top-block").classList.add("cursive");
  else getS(".top-block").classList.remove("cursive");
  
}
// end italic style, style-box funtion

// start btn-add function
getS(".btn-add").onclick = function () {
  getS(".first").classList.remove("show");
  getS(".second").classList.add("show");
};
// end btn-add function

// start fuction list
const list = document.forms["form-list"];

getS(".list").onclick = function () {
  getS(".create-list").classList.remove("hide");
  getS(".create-table").classList.add("hide");
};

getS(".btn-create-list").onclick = function () {
  const countLi = list.count.value;
  const typeLi = list.type.value;
  getS(".edit-area").value += `<ul style="list-style-type: ${typeLi}">`;
  for (let i = 0; i < countLi; i++) {
    getS(".edit-area").value += `<li>item ${i + 1}</li>`;
  }
  getS(".edit-area").value += "</ul>";

  getS(".first").classList.add("show");
  getS(".second").classList.remove("show");
};
// end fuction list

//  start funtion table
getS(".table").onclick = function () {
  getS(".create-table").classList.remove("hide");
  getS(".create-list").classList.add("hide");
};
const table = document.forms["form-table"];

getS(`.btn-create-table`).onclick = function () {
  const countTR = table.countTr.value;
  const countTD = table.countTd.value;
  const widthTD = table.widthTd.value;
  const heightTD = table.heigthTd.value;
  const borderTD = table.borderW.value;
  const borderType = table.typeOfBorder.value;
  const colorborder = table.colorOfBorder.value;
  
  getS(`.edit-area`).value += `<table>`;
  getS(`.edit-area`).value += `<tbody>`;
  for (let i = 0; i < countTR; i++) {
    getS(`.edit-area`).value += `<tr>`;
    for (let i = 0; i < countTD; i++) {
      getS(
        `.edit-area`
      ).value += `<td style="width:${widthTD}px;height:${heightTD}px; border:${borderTD}px ${borderType} ${colorborder}">TD</td>`;
    }
    getS(`.edit-area`).value += `</tr>`;
  }
  getS(`.edit-area`).value += `<tbody>`;
  getS(`.edit-area`).value += `</table>`;

  getS(`.first`).classList.add(`show`);
  getS(`.second`).classList.remove(`show`);
};
//  end funtion table