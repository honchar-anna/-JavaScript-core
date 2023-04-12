$(".black").animate({ height: "665px" }, 100, "linear");

setTimeout(() => {
  $(".or").html("<h1>1</h1><br><h2>minute</h2>");
}, 60000);

setTimeout(() => {
  $(".black").animate({ height: "0px" }, 100, "linear");
}, 60000);

setTimeout(() => {
  $(".or").html("<h1>0</h1><br><h2>minute</h2>");
}, 120000);
