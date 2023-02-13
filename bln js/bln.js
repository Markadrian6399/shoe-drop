let s1 = document.querySelector("section:first-child");
let s2 = document.querySelector("section:last-child");
let btn = document.querySelectorAll("button");
for (i = 1; i <= 43; i++) {
  let sizeStart = 50;
  let ColorStart = 1;
  s1.innerHTML += `<div style ="--size:${sizeStart + i * 20}px;
    --color:rgba(255,255,255,${ColorStart - i * 0.017})"></div>`;
  s2.innerHTML += `<div style ="--size:${
    sizeStart + i * 20
  }px;--color:rgba(255,255,255,${ColorStart - i * 0.017})"></div>`;
}

let shoeImg = [
  "./bln_img/blueshoe.png",
  "./bln_img/redshoe.png",
  "./bln_img/orangeshoe.png",
  "./bln_img/greenshoe.png",
];

btn.forEach((item, i) => {
  item.onclick = function (e) {
    document.body.setAttribute("id", e.target.classList[0]);
    document.querySelector(".she").src = shoeImg[i];
  };
});

// let shoecolo = ["Cobalt Blue", "Vermilion", "Tangerine", "Emerald"];

// function Cobalt(){
//   document.getElementsByClassName(".fit").innerHTML="Cobalt Blue"
// }

// function Vermilion(){
//   document.getElementsByClassName(".fit").innerHTML="Vemilion"
// }