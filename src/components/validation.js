import * as Yup from "yup";

const phoneRegExp = /^([+]\d\d\d|([+]\d\d\d)|\d\d)[-\s./0-9]{0,1}[0-9]{1,4}[-\s./0-9]{0,1}[-\s./0-9]*$/;
const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required("ce champ est obligatoire")
    .min(5, "trop petit!")
    .max(50, "trop long!"),
  firstName: Yup.string()
    .required("ce champ est obligatoire")
    .min(5, "trop petit!")
    .max(50, "trop long!"),
  email: Yup.string()
    .email("email invalide")
    .required("l'email est obligatoire"),
  city: Yup.string().default("").min(5, "trop petit!").max(50, "trop long!"),
  cellphone: Yup.string().matches(
    phoneRegExp,
    "Le numéro de Téléphone doit etre de numerique"
  ),
  password: Yup.string()
    .required("Mot de passe est obligatoire")
    .matches(/([0-9])/, "Au moins un entier")
    .matches(
      /[!"`'#%&,:;<>=@{}~$()*+/\\?[\]^|\]]{1,}/,
      "Au moins un caractère spécial"
    )
    .min(8, "Mot de passe doit être plus grand que 8 caractères")
    .max(50, "Mot de passe doit être plus petit que 50 caractères"),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Le mot de passe de confirmation ne correspond pas"
  ),
  acceptTerms: Yup.bool().oneOf(
    [true],
    "Accepter les conditions est obligatoire"
  ),
});

export { validationSchema };
