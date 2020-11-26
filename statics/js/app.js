/**
 * Abas (Missão Visão Valores)
 */

function openTab(event, tabName) {
  let i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(tabName).style.display = "block";
  event.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();

/**
 * Formulario Labels
 */

let input = document.getElementsByTagName("input");
let textarea = document.getElementsByTagName("textarea");

for (let i = 0; i < input.length; i++) {
  input[i].onfocus = function () {
    var e = this.parentNode.firstElementChild;
    if (this.value.length == 0) {
      e.classList.toggle("label-active");
    }
  };
  textarea[0].onfocus = function () {
    var e = this.parentNode.firstElementChild;
    if (this.value.length == 0) {
      e.classList.toggle("label-active");
    }
  };

  input[i].onblur = function () {
    var j = this.parentNode.firstElementChild;
    if (this.value.length == 0) {
      j.classList.toggle("label-active");
    }
  };

  textarea[0].onblur = function () {
    var e = this.parentNode.firstElementChild;
    if (this.value.length == 0) {
      e.classList.toggle("label-active");
    }
  };
}

/**
 * Menu Mobile
 */

function openNav() {
  let x = document.getElementById("menu-top");
  let burger = document.getElementsByTagName("i");

  if (x.style.height === "") {
    x.style.height = "300px";
    burger[0].className = burger[0].className.replace(
      "fa fa-bars",
      "fa fa-times"
    );
  } else {
    x.style.height = "";
    burger[0].className = burger[0].className.replace(
      "fa fa-times",
      "fa fa-bars"
    );
  }
}
