const { body } = require("express-validator");

const createUserValidation = () => {
  return [
    body("name")
      .isString()
      .withMessage("O nome é obrigatório!")
      .isLength({ min: 3 })
      .withMessage("O nome precisa ter no mínimo 3 carcteres"),
    body("email")
      .isString()
      .withMessage("O E-mail é obrigatório!")
      .isEmail()
      .withMessage("Por favor, insira um E-mail válido"),
    body("password")
      .isString()
      .withMessage("A senha é obrigatória!")
      .isLength({ min: 6 })
      .withMessage("A senha precisa ter no mínimo 6 caracteres"),
    body("confirmPassword")
      .isString()
      .withMessage("A confirmação de senha é obrigatória!")
      .custom((value, { req }) => {
        if (value != req.body.password) {
          throw new Error("As senhas não são iguais");
        }
        return true;
      }),
  ];
};

const loginUserValidation = () => {
  return [
    body("email")
      .isString()
      .withMessage("O E-mail é obrigatório!")
      .isEmail()
      .withMessage("Por favor, insira um E-mail válido "),
    body("password")
      .isString()
      .withMessage("A senha é obrigatória!")
      .isLength({ min: 6 })
      .withMessage("A senha precisa ter no mínimo 6 caracteres"),
  ];
};

const updateUserValidation = () => {
  return [
    body("name")
      .optional()
      .isLength({ min: 3 })
      .withMessage("Nome precisa ter pelo menos 3 caracteres!"),
    body("phone")
      .optional()
      .isLength({ min: 8 })
      .withMessage("O número de telefone precisa ter 8 caracteres")
      .contains("+55")
      .withMessage("Por favor, insira o número no formato certo"),
  ];
};

module.exports = {
  createUserValidation,
  loginUserValidation,
  updateUserValidation,
};
