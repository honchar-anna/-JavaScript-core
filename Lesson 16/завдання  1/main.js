let obj = $(".obj");
obj.on("click", function () {
  let r = Math.round(Math.random() * 255);
  let g = Math.round(Math.random() * 255);
  let b = Math.round(Math.random() * 255);
  let t = Math.round(Math.random() * 500);
  let l = Math.round(Math.random() * 500);
  let w = Math.round(Math.random() * 150);
  let h = Math.round(Math.random() * 150);
  obj.css("background-color", `rgb(${r},${g},${b})`);
  obj.animate({ top: t, left: l, width: w, height: h },1000,'easeInOutCirc');
});
