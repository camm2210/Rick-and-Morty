//! parametro: estado
const validation = (userData) => {
  const errors = {};

  if (!/\S+@\S+\.\S+/.test(userData.email)) {
    errors.email = "El email ingresado no es válido";
  }
  if (!userData.email) {
    errors.email = "Debe ingresar un email";
  }
  if (userData.email.length > 35) {
    errors.email = "El email debe tener menos de 35 caracteres";
  }
  if (!/.*\d+.*/.test(userData.password)) {
    errors.password = "la contraseña debe incluir al menos un número";
  }
  if (userData.password.length < 6 || userData.password.length > 10) {
    errors.password = "la contraseña tiene que tener entre 6 y 10 carateres";
  }
  return errors;
};

export default validation;
