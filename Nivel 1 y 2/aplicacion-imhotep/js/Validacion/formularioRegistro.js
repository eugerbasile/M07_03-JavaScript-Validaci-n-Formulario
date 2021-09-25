const form = document.getElementById("myFormId");

function registerValidate() {
  var acumErrores = 0;

  form.classList.remove("is-invalid");

  var inputEmail = document.forms["myForm"]["inputEmail"];

  var inputEmail = document.getElementById("inputEmail");

  var inputPassword = document.forms["myForm"]["inputPassword"];

  var inputPassword = document.getElementById("inputPassword");

  var inputAddress = document.forms["myForm"]["inputAddress"];
  var inputProvince = document.forms["myForm"]["inputProvince"];
  var inputCity = document.forms["myForm"]["inputCity"];
  var inputZip = document.forms["myForm"]["inputZip"];
  var gridCheck = document.forms["myForm"]["gridCheck"];

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
  } else if (!validar_password(inputPassword.value)) {
    inputPassword.classList.add("is-invalid");
    document.getElementById("errorPassword").textContent =
      "La contraseña no cumple el formato";
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

/*La contraseña debe tener al entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula.
NO puede tener otros símbolos.*/

function validar_password(contraseña) {
  var regex = /(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;
  return regex.test(contraseña) ? true : false;
}
