let obj = $(".obj");
function random() {
  let r = Math.round(Math.random() * 255);
  let g = Math.round(Math.random() * 254);
  let b = Math.round(Math.random() * 255);
  let rs = Math.round(Math.random() * 255);
  let gs = Math.round(Math.random() * 254);
  let bs = Math.round(Math.random() * 255);
  let rb = Math.round(Math.random() * 255);
  let gb = Math.round(Math.random() * 254);
  let bb = Math.round(Math.random() * 255);
  let t = Math.round(Math.random() * 500);
  let l = Math.round(Math.random() * 500);
  let radius = Math.round(Math.random() * 150);
  obj.css("background-color", `rgb(${r},${g},${b})`);
  obj.animate({ top: t, left: l, width:radius, height:radius }, 1000, "easeOutQuart");
  obj.css('boxShadow',`0 0 15px rgb(${rs},${gs},${bs})`);
  obj.css("border", `3px solid rgb(${rb},${gb},${bb})`);

}
setInterval(random,150);