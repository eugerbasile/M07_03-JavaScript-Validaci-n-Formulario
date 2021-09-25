const form = document.getElementById("myFormId");

//LOGIN
function loginValidate() {
  var acumErroresLogin = 0;

  form.classList.remove("is-invalid");

  var inputLoginEmail = document.forms["myForm"]["inputLoginEmail"];

  var inputLoginEmail = document.getElementById("inputLoginEmail");

  var inputLoginPassword = document.forms["myForm"]["inputLoginPassword"];

  if (inputLoginEmail.value == "") {
    inputLoginEmail.classList.add("is-invalid");
    document.getElementById("errorEmail").textContent =
      "Es campo es obligatorio";
      acumErroresLogin++;
  } else if (!validar_email_login(inputLoginEmail.value)) {
    inputLoginEmail.classList.add("is-invalid");
    document.getElementById("errorEmailLogin").textContent =
      "El email no cumple el formato";
      acumErroresLogin++;
  }

  if (inputLoginPassword.value == "") {
    inputLoginPassword.classList.add("is-invalid");
    document.getElementById("errorPasswordLogin").textContent =
      "Es campo es obligatorio";
      acumErroresLogin++;
  }

  if (acumErroresLogin > 0) {
    return false;
  } else {
    return true;
  }





  
}

form.addEventListener(
  "blur",
  (event) => {
    console.log(event);
    if (event.target.value != "") event.target.classList.remove("is-invalid");
    loginValidate();
  },
  true
);
//creo funcion que llame anteriormente para validar el email
function validar_email_login(email) {
  var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email) ? true : false;
}

//BUSQUEDA

function searchValidate() {
  var acumErroresSearch = 0;

  form.classList.remove("is-invalid");

  var inputSearch = document.forms["myForm"]["inputSearch"];
  var inputSearch = document.getElementById("inputSearch");

  if (inputSearch.value == "" && inputSearch.value > 3) {
    inputSearch.classList.add("is-invalid");
    document.getElementById("errorSearch").textContent = "";
    acumErroresSearch++;
  } else if (!validar_search(inputSearch.value)) {
    inputSearch.classList.add("is-invalid");
    document.getElementById("errorSearch").textContent = "";
    acumErroresSearch++;
  }

  if (acumErroresSearch  > 0) {
    return false;
  } else {
    return true;
  }
}

form.addEventListener(
  "blur",
  (event) => {
    console.log(event);
    if (event.target.value != "") event.target.classList.remove("is-invalid");
    searchValidate();
  },
  true
);

//REGISTRO
function registerValidate() {
  var acumErrores = 0;

  form.classList.remove("is-invalid");

  var inputEmail = document.forms["myForm"]["inputEmail"];

  var inputEmail = document.getElementById("inputEmail");

  var inputPassword = document.forms["myForm"]["inputPassword"];

  var inputAddress = document.forms["myForm"]["inputAddress"];
  var inputProvince = document.forms["myForm"]["inputProvince"];
  var inputCity = document.forms["myForm"]["inputCity"];
  var inputZip = document.forms["myForm"]["inputZip"];
  var gridCheck = document.forms["myForm"]["gridCheck"];
  var inputSearch = document.forms["myForm"]["inputSearch"];
  var inputSearch = document.getElementById("inputSearch");

  if (inputEmail.value == "") {
    inputEmail.classList.add("is-invalid");
    document.getElementById("errorEmail").textContent =
      "Es campo es obligatorio";
    acumErrores++;
  } else if (!validar_email(inputEmail.value)) {
    inputEmail.classList.add("is-invalid");
    document.getElementById("errorEmail").textContent =
      "El email no cumple el formato";
    acumErrores++;
  }

  if (inputPassword.value == "") {
    inputPassword.classList.add("is-invalid");
    document.getElementById("errorPassword").textContent =
      "Es campo es obligatorio";
    acumErrores++;
  }

  if (inputSearch.value == "" && inputSearch.value < 3) {
    inputSearch.classList.add("is-invalid");
    document.getElementById("errorSearch").textContent = "";
    acumErrores++;
  } else if (!validar_search(inputSearch.value)) {
    inputSearch.classList.add("is-invalid");
    document.getElementById("errorSearch").textContent = "";
    acumErrores++;
  }

  if (inputAddress.value == "") {
    inputAddress.classList.add("is-invalid");
    document.getElementById("errorAddress").textContent =
      "Es campo es obligatorio";
    acumErrores++;
  }

  if (inputProvince.value == "") {
    inputProvince.classList.add("is-invalid");
    document.getElementById("errorProvince").textContent =
      "La provincia es obligatoria";
    acumErrores++;
  }

  if (inputCity.value == "") {
    inputCity.classList.add("is-invalid");
    document.getElementById("errorCity").textContent = "Falta la ciutat";
    acumErrores++;
  }

  if (inputZip.value == "" || inputZip.length != 5) {
    inputZip.classList.add("is-invalid");
    document.getElementById("errorZip").textContent =
      "El codi postal no compleix els requisitis";
    acumErrores++;
  }

  if (!gridCheck.checked) {
    gridCheck.classList.add("is-invalid");
    document.getElementById("errorCheck").textContent = "Acepta las bases";
    acumErrores++;
  }

  if (acumErrores > 0) {
    return false;
  } else {
    return true;
  }
}

form.addEventListener(
  "blur",
  (event) => {
    console.log(event);
    if (event.target.value != "") event.target.classList.remove("is-invalid");
    registerValidate();
  },
  true
);

function validar_email(email) {
  var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email) ? true : false;
}
