const formLogin = document.getElementById("myFormIdLogin");

function loginValidate() {
  var acumErrores = 0;

  formLogin.classList.remove("is-invalid");

  var inputEmailLogin = document.forms["myFormLogin"]["inputEmailLogin"];

  var inputEmailLogin = document.getElementById("inputEmailLogin");

  var inputPasswordLogin = document.forms["myFormLogin"]["inputPasswordLogin"];

  var inputPasswordLogin = document.getElementById("inputPasswordLogin");

  if (inputEmailLogin.value == "") {
    inputEmailLogin.classList.add("is-invalid");
    document.getElementById("errorEmailLogin").textContent =
      "Es campo es obligatorio";
    acumErrores++;
  } else if (!validar_email(inputEmailLogin.value)) {
    inputEmailLogin.classList.add("is-invalid");
    document.getElementById("errorEmailLogin").textContent =
      "El email no cumple el formato";
    acumErrores++;
  }

  if (inputPasswordLogin.value == "") {
    inputPasswordLogin.classList.add("is-invalid");
    document.getElementById("errorPasswordLogin").textContent =
      "Es campo es obligatorio";
    acumErrores++;
  } else if (!validar_password(inputPasswordLogin.value)) {
    inputPasswordLogin.classList.add("is-invalid");
    document.getElementById("errorPasswordLogin").textContent =
      "La contraseña no cumple el formato";
    acumErrores++;
  }

  if (acumErrores > 0) {
    return false;
  } else {
    return true;
  }
}

formLogin.addEventListener(
  "blur",
  (event) => {
    console.log(event);
    if (event.target.value != "") event.target.classList.remove("is-invalid");
    loginValidate();
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
