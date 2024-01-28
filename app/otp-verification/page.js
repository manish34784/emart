"use client";

import { Button, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import OtpInput from "react-otp-input";
import { css } from "glamor";
import styled from "@emotion/styled";
import { styles } from "./styles";
import classes from "./page.module.scss";

function VerifyOtp() {
  const [otp, setOtp] = useState("");
  const [otpError, setOtpError] = useState({ state: false, message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // glamor css used to provide css rules like hover and focus through react element prop style instead of className
  const inputFocusStyles = css({
    ":focus": { border: "1px solid black !important" },
  });

  const assignOtpError = (otpValue) => {
    if (otpValue.length < 6) {
      setOtpError({ state: true, message: "OTP should be 6 digits" });
      return false;
    } else {
      setOtpError({ state: false, message: "" });
      return true;
    }
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
    const isReady = assignOtpError(otp);
    if (isReady) {
      console.log("full otp entered: ", otp);
    } else {
      console.log("Otp not complete: ", otp);
    }
  };

  const StyledButton = styled(Button)({
    alignSelf: "center",
    paddingInline: "2.5rem",
    backgroundColor: "green",
    ["&:hover"]: {
      backgroundColor: "green",
    },
  });

  return (
    // gap, margin convert incoming values to values * 8, minWidth doesn't
    <Stack gap={4} marginTop={8} paddingInline={8} minWidth={"25rem"}>
      <Typography variant="h4" textAlign={"center"}>
        Please verify the OTP sent to your email below
      </Typography>

      <div style={{ alignSelf: "center" }}>
        <OtpInput
          value={otp}
          onChange={(val) => {
            setOtp(val);
            assignOtpError(val);
          }}
          numInputs={6}
          containerStyle={styles.otpContainer}
          renderSeparator={<span>-</span>}
          renderInput={(props) => (
            <input
              {...props}
              type="number"
              style={{ ...styles.otpSingleInput }}
              className={classes.input}
            />
          )}
        />
        {isSubmitted && otpError.state && (
          <p style={styles.errorStyles}>{otpError.message}</p>
        )}
      </div>

      <StyledButton onClick={handleSubmit} variant="contained">
        Submit
      </StyledButton>
    </Stack>
  );
}

export default VerifyOtp;
