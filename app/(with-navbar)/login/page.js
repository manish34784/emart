"use client";

import React, { useContext, useEffect } from "react";
import classes from "./page.module.scss";
import { Formik } from "formik";
import TextInput from "@/components/TextInput/TextInput";
import AppButton from "@/components/AppButton/AppButton";
import AuthContext from "@/context/AuthContext/AuthContext";
import { useRouter } from "next/navigation";

function Login() {
  const { authToken, setAuthToken } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (authToken) {
      router.replace("/");
    }
  }, [router, authToken]);

  const validator = (values) => {
    // console.log("validator run");
    const { email, password } = values;
    const errors = {};

    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (!email) {
      errors.email = "Required";
    } else if (!emailRegex.test(email)) {
      errors.email = "Invalid email";
    }

    const passwordRegex =
      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    if (!passwordRegex.test(password)) {
      errors.password =
        "Should have length 6 to 16 with 1 number and 1 special character";
    }

    return errors;
  };

  const formInitialValues = {
    email: "",
    password: "",
  };

  const handleSubmitClick = (values) => {
    console.log({ values });
    // setAuthToken(`${values.email}-${Math.random().toFixed(4) * 10000}`);
  };

  return (
    <div className={classes.container}>
      <h2>Login below to access your orders</h2>
      <div className={classes.formContainer}>
        <Formik
          validate={validator}
          initialValues={formInitialValues}
          onSubmit={handleSubmitClick}
        >
          {(
            // prettier-ignore
            { values, errors, touched, handleChange, handleBlur, handleSubmit }
          ) => (
            <form className={classes.formBox} onSubmit={handleSubmit}>
              <TextInput
                fieldId="email"
                type="email"
                placeholder="Enter your email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                onFocus={() => {}}
                isTouched={touched.email || false}
                errorVal={errors.email || ""}
              />
              <TextInput
                fieldId="password"
                type="password"
                placeholder="Enter your password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                onFocus={() => {}}
                isTouched={touched.password || false}
                errorVal={errors.password || ""}
              />

              <AppButton
                title="Submit"
                titleStyle={{ fontWeight: "600", fontSize: "14px" }}
              />
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default Login;

/*

handleChange:-
It updates the values in context object, it identifies which property of values to update by checking the "name" or "id" prop of updated input.
It also re-runs the validate function each time it is triggered so that errors could be updated.

handleBlur:-
It sets the touched.

*/
