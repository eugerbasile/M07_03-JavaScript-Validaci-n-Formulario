$("#formulario_registro").validate({
  rules: {
    nombre: {
      required: true,
      minlength: 3,
      maxlength: 30,
    },
    email: {
      required: true,
      email: true,
    },
    telefono: {
      required: true,
      number: true,
      minlength: 9,
      maxlength: 12,
    },
    mensaje: {
      required: true,
      minlength: 5,
      maxlength: 200,
    },
  },
});

$("#registrar").click(function () {
  if ($("#formulario_registro").valid() == false) {
    return;
  }
  let nombre = $("#nombre").val();
  let email = $("#email").val();
  let telefono = $("#telefono").val();
  let mensaje = $("#mensaje").val();

  //console.log(nombre);
});
