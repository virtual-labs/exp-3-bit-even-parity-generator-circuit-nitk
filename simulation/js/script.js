const quizDiv = document.querySelector(".quiz-div");
const questionDiv = document.querySelector(".question");
const answersDiv = document.querySelector(".answers");
const questionBtnDiv = document.querySelector(".question-btn");
const practiceDiv = document.querySelector(".practice");
const canvas = document.querySelector("#simscreen");

let animationFrameID;

const btnReset = document.querySelector(".btn-reset");
const btnSubmit = document.querySelector(".btn-submit");
const btnTop = document.querySelector(".btn-top");
let w = document.getElementById("wire");
let f = document.getElementById("fault");
let xBtn = document.querySelector("#X");
let yBtn = document.querySelector("#Y");
let zBtn = document.querySelector("#Z");
let X = xBtn.textContent;
let Y = yBtn.textContent;
let Z = zBtn.textContent;
let wireVal = w.options[w.selectedIndex].text;
let falutVal = f.options[f.selectedIndex].text;
let table = document.getElementsByTagName("table")[0];

function handleToggle(id, btn) {
  if (btn.textContent == 0) {
    btn.textContent = 1;
    btn.parentElement.classList.remove("input-toggle--off");
  } else if (btn.textContent == 1) {
    btn.textContent = 0;
    btn.parentElement.classList.add("input-toggle--off");
  }
  updateVariables(btn);
}

function updateVariables(btn) {
  if (btn.id == "X") {
    X = btn.textContent;
  }
  if (btn.id == "Y") {
    Y = btn.textContent;
  }
  if (btn.id == "Z") {
    Z = btn.textContent;
  }
  console.log(X, Y, Z);
}

function out() {
  w = document.getElementById("wire");
  f = document.getElementById("fault");
  xBtn = document.querySelector("#X");
  yBtn = document.querySelector("#Y");
  zBtn = document.querySelector("#Z");
  X = Number(xBtn.textContent);
  Y = Number(yBtn.textContent);
  Z = Number(zBtn.textContent);
  wireVal = w.options[w.selectedIndex].text;
  falutVal = f.options[f.selectedIndex].text;
  table = document.getElementsByTagName("table")[0];
  newRow = table.insertRow(table.rows.length);
  cel1 = newRow.insertCell(0);
  cel2 = newRow.insertCell(1);
  cel3 = newRow.insertCell(2);
  cel4 = newRow.insertCell(3);
  cel5 = newRow.insertCell(4);
  cel6 = newRow.insertCell(5);
  document.getElementById("textValue").innerHTML = output(wireVal, falutVal);
  cel1.innerHTML = X;
  cel2.innerHTML = Y;
  cel3.innerHTML = Z;
  cel4.innerHTML = findW(wireVal, falutVal, X, Y, Z);
  cel5.innerHTML = findP(X, Y, Z);
  cel6.innerHTML = findNewP(wireVal, falutVal, X, Y, Z);
}
xBtn.addEventListener("click", () => handleToggle("X", xBtn));
yBtn.addEventListener("click", () => handleToggle("Y", yBtn));
zBtn.addEventListener("click", () => handleToggle("Z", zBtn));
btnSubmit.addEventListener("click", out);
function displayDiv(ele) {
  const taskScreen = document.querySelectorAll(".task-screen");
  taskScreen.forEach((task) => {
    task.classList.add("hide");
  });

  if (ele.classList.contains("tool-practice")) {
    document.querySelector(".practice").classList.remove("hide");
    taskTitle.textContent = "Simulation";
    btnTop.classList.add("hide");
  }
}

function Refresh() {
  window.location = window.location.href;
}

function output(w, f) {
  if (f == "None") {
    return "&emsp;Equation of fault detected = " + "x⊕y⊕z";
  } else if (f == "SA0") {
    if (w == "x") {
      return "&emsp;Equation of fault detected = " + "y⊕z";
    } else if (w == "y") {
      return "&emsp;Equation of fault detected = " + "x⊕z";
    } else if (w == "z") {
      return "&emsp;Equation of fault detected = " + "x⊕y";
    } else if (w == "w") {
      return "&emsp;Equation of fault detected = " + "z";
    }
  } else if (f == "SA1") {
    if (w == "x") {
      return "&emsp;Equation of fault detected = " + "y̅⊕z";
    } else if (w == "y") {
      return "&emsp;Equation of fault detected = " + "x̅⊕z";
    } else if (w == "z") {
      return "&emsp;Equation of fault detected = " + "(x̅⊕y̅)'";
    } else if (w == "w") {
      return "&emsp;Equation of fault detected = " + "z̅";
    }
  }
}

function findW(w, f, x, y, z) {
  if (x > 1 || x < 0 || y > 1 || y < 0 || z > 1 || z < 0) {
    alert("Wrong input!");
  } else if (f == "None") {
    return x ^ y;
  } else if (f == "SA0") {
    return y;
  } else if (w == "y") {
    return x;
  } else if (w == "z") {
    return x ^ y;
  } else if (w == "w") {
    return 0;
  } else if (f == "SA1") {
    if (w == "x") {
      return ~y + 2;
    } else if (w == "y") {
      return ~x + 2;
    } else if (w == "z") {
      return x ^ y;
    } else if (w == "w") {
      return 1;
    }
  }
}

function findP(x, y, z) {
  if (x > 1 || x < 0 || y > 1 || y < 0 || z > 1 || z < 0) {
  } else {
    return x ^ y ^ z;
  }
}

function findNewP(w, f, x, y, z) {
  if (x > 1 || x < 0 || y > 1 || y < 0 || z > 1 || z < 0) {
  } else {
    if (f == "None") {
      return x ^ y ^ z;
    } else if (f == "SA0") {
      if (w == "x") {
        return y ^ z;
      } else if (w == "y") {
        return x ^ z;
      } else if (w == "z") {
        return x ^ y;
      } else if (w == "w") {
        return z;
      }
    } else if (f == "SA1") {
      if (w == "x") {
        return (~y + 2) ^ z;
      } else if (w == "y") {
        return (~x + 2) ^ z;
      } else if (w == "z") {
        return ~(x ^ y) + 2;
      } else if (w == "w") {
        return ~z + 2;
      }
    }
  }
}
