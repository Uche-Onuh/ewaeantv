import * as yup from "yup";

export const signupSchema = yup.object().shape({
  name: yup.string().max(255).required("Name is required"),
  email: yup
    .string()
    .email("Must be a valid email")
    .max(255)
    .required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    // check minimum characters
    .min(8, "Password must have at least 8 characters")
    .max(100),
  confPassword: yup
    .string()
    // match password logic
    .when("password", (password, field) =>
      password
        ? field
            .required("Confirm Password")
            .oneOf([yup.ref("password"), null], "Password must match")
        : field
    ),
});

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Must be a valid email")
    .max(255)
    .required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    // check minimum characters
    .min(8, "Password must have at least 8 characters")
    .max(100),
});
