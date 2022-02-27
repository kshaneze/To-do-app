"use strict";

const input = document.querySelector(".input");
const button = document.querySelector(".submit");
const tsk = document.querySelector(".tasks");

const list = document.querySelector("#position");
const x = "X";
button.addEventListener("click", function (e) {
  e.preventDefault();
  input.focus();

  if (input.value != "") {
    // create Li
    const li = document.createElement("li");
    li.innerHTML = input.value;
    list.appendChild(li);
    li.classList.add("listo");

    // create span
    const span = document.createElement("button");
    span.innerHTML = x;
    li.appendChild(span);

    span.addEventListener("click", function (e) {
      list.removeChild(li);
    });
    // create edit button
    // TO DO
    // const edit = document.createElement("button");
    // edit.innerHTML = "edit";
    // li.appendChild(edit);
    // edit.classList.add("btn");

    // edit.addEventListener("click", function (e) {
    //   const editLi = list.firstElementChild;
    //   editLi.contentEditable = true;
    //   li.focus();
    // });
  }

  input.value = "";
});
