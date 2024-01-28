"use client";

import React from "react";
import classes from "./page.module.scss";
import { Formik } from "formik";
import TextInput from "@/components/TextInput/TextInput";
import AppButton from "@/components/AppButton/AppButton";
import PhonePicker from "@/components/PhonePicker/PhonePicker";
import { useRouter } from "next/navigation";

function SignUp() {
  const validator = (values) => {
    const { name, email, phone, password } = values;
    const errors = {};
    if (!name) {
      errors.name = "Required";
    } else if (name.length > 15) {
      errors.name = "Must be 15 characters or less";
    }

    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (!email) {
      errors.email = "Required";
    } else if (!emailRegex.test(email)) {
      errors.email = "Invalid email address";
    }

    if (phone.fullValue.length !== phone.format.length) {
      errors.phone = "Incorrect phone number";
    }

    const passwordRegex =
      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    if (!passwordRegex.test(password)) {
      errors.password =
        "Should have length 6 to 16 with 1 number and 1 special character";
    }

    return errors;
  };

  const router = useRouter();

  const handleSubmitClick = (values) => {
    console.log("values: ", values);

    // send values to api and on success response, navigate to OTP verification

    router.push("/otp-verification");
  };

  const formInitialValues = {
    name: "",
    email: "",
    // prettier-ignore
    phone: { countryCode: "in", dialCode: "91", format: "+.. .....-.....", name: "India", fullValue: "+91"},
    password: "",
  };

  return (
    <div className={classes.container}>
      <h2>New here? Sign-up below</h2>
      <div className={classes.formContainer}>
        <Formik
          validate={validator}
          initialValues={formInitialValues}
          onSubmit={handleSubmitClick}
        >
          {(
            // prettier-ignore
            { values, errors, touched, handleChange, handleBlur, handleSubmit, setFieldValue, setFieldTouched }
          ) => (
            <form className={classes.formBox} onSubmit={handleSubmit}>
              <TextInput
                fieldId="name"
                type="text"
                placeholder="Enter your full name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                onFocus={() => {
                  // setFieldTouched("name", true);
                }}
                isTouched={touched.name || false}
                errorVal={errors.name || ""}
              />

              <TextInput
                fieldId="email"
                type="email"
                placeholder="Enter your email"
                value={values.email}
                onChange={handleChange}
                onFocus={() => {}}
                onBlur={handleBlur}
                isTouched={touched.email || false}
                errorVal={errors.email || ""}
              />

              <div>
                <PhonePicker
                  country={values.phone.countryCode}
                  onChange={(c, infoObj, event, fullValue) => {
                    setFieldValue("phone", { ...infoObj, fullValue });
                  }}
                  onBlur={() => {
                    setFieldTouched("phone", true);
                  }}
                />
                {touched.phone && errors.phone && (
                  <p className={classes.errorText}>{errors.phone}</p>
                )}
              </div>

              <TextInput
                fieldId="password"
                type="password"
                placeholder="Set your password"
                value={values.password}
                onChange={handleChange}
                onFocus={() => {}}
                onBlur={handleBlur}
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

export default SignUp;
