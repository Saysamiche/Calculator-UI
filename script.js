"use strict";

const zero = function () {
  if (document.querySelector(".zero").textContent === "0") {
    document.querySelector(".display").textContent += "0";
  }
};
const one = function () {
  if (document.querySelector(".one").textContent === "1") {
    document.querySelector(".display").textContent += "1";
  }
};
const two = function () {
  if (document.querySelector(".two").textContent === "2") {
    document.querySelector(".display").textContent += "2";
  }
};
const three = function () {
  if (document.querySelector(".three").textContent === "3") {
    document.querySelector(".display").textContent += "3";
  }
};
const four = function () {
  if (document.querySelector(".four").textContent === "4") {
    document.querySelector(".display").textContent += "4";
  }
};
const five = function () {
  if (document.querySelector(".five").textContent === "5") {
    document.querySelector(".display").textContent += "5";
  }
};
const six = function () {
  if (document.querySelector(".six").textContent === "6") {
    document.querySelector(".display").textContent += "6";
  }
};
const seven = function () {
  if (document.querySelector(".seven").textContent === "7") {
    document.querySelector(".display").textContent += "7";
  }
};
const eight = function () {
  if (document.querySelector(".eight").textContent === "8") {
    document.querySelector(".display").textContent += "8";
  }
};
const nine = function () {
  if (document.querySelector(".nine").textContent === "9") {
    document.querySelector(".display").textContent += "9";
  }
};
const plus = function () {
  if (document.querySelector(".plus").textContent === "+") {
    document.querySelector(".display").textContent += "+";
  }
};
const minus = function () {
  if (document.querySelector(".minus").textContent === "-") {
    document.querySelector(".display").textContent += "-";
  }
};
const multiply = function () {
  if (document.querySelector(".multiply").textContent === "*") {
    document.querySelector(".display").textContent += "*";
  }
};
const percent = function () {
  if (document.querySelector(".percent").textContent === "%") {
    document.querySelector(".display").textContent += "%";
  }
};
const divide = function () {
  if (document.querySelector(".divide").textContent === "/") {
    document.querySelector(".display").textContent += "/";
  }
};
const point = function () {
  if (document.querySelector(".point").textContent === ".") {
    document.querySelector(".display").textContent += ".";
  }
};
const clear = function () {
  if (document.querySelector(".clear").textContent === "AC") {
    document.querySelector(".display").textContent = "";
  }
};
const del = function () {
  if (document.querySelector(".delete").textContent === "DE") {
    document.querySelector(".display").textContent = document
      .querySelector(".display")
      .textContent.toString()
      .slice(0, -1);
  }
};
const equals = function () {
  if (document.querySelector(".equals").textContent === "=") {
    document.querySelector(".display").textContent = eval(
      document.querySelector(".display").textContent
    );
  }
};

document.querySelector(".zero").addEventListener("click", zero);
document.querySelector(".one").addEventListener("click", one);
document.querySelector(".two").addEventListener("click", two);
document.querySelector(".three").addEventListener("click", three);
document.querySelector(".four").addEventListener("click", four);
document.querySelector(".five").addEventListener("click", five);
document.querySelector(".six").addEventListener("click", six);
document.querySelector(".seven").addEventListener("click", seven);
document.querySelector(".eight").addEventListener("click", eight);
document.querySelector(".nine").addEventListener("click", nine);
document.querySelector(".minus").addEventListener("click", minus);
document.querySelector(".plus").addEventListener("click", plus);
document.querySelector(".divide").addEventListener("click", divide);
document.querySelector(".percent").addEventListener("click", percent);
document.querySelector(".multiply").addEventListener("click", multiply);
document.querySelector(".clear").addEventListener("click", clear);
document.querySelector(".delete").addEventListener("click", del);
document.querySelector(".point").addEventListener("click", point);
document.querySelector(".equals").addEventListener("click", equals);

// for(let i = 0; i < you.length; i++) {
//     you[i].addEventListener('click', me)
// };
// document.querySelector('.border').addEventListener('click', calculator);

// const seven = function () {
//   if (document.querySelector(".seven").textContent === "7") {
//     document.querySelector(".display").textContent += "7";
//   }
// };
// document.querySelector('.seven').addEventListener('click', seven);
