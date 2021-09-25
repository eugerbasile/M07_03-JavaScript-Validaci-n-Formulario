const formSearch = document.getElementById("myFormIdSearch");

//BUSQUEDA

function searchValidate() {
  var acumErrores = 0;
  //var caracMin = 3;

  formSearch.classList.remove("is-invalid");

  var inputSearch = document.forms["myFormSearch"]["inputSearch"];
  var inputSearch = document.getElementById("inputSearch");

  if (inputSearch.value == "" || inputSearch.value.length <= 2) {
    inputSearch.classList.add("is-invalid");
    document.getElementById("errorSearch").textContent = "";
    acumErrores++;
  }

  if (acumErrores > 0) {
    return false;
  } else {
    return true;
  }
}

formSearch.addEventListener(
  "blur",
  (event) => {
    console.log(event);
    if (event.target.value != "") event.target.classList.remove("is-invalid");
    searchValidate();
  },
  true
);
