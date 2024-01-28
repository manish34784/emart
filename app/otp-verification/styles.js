import variables from "./page.module.scss";

export const styles = {
  otpContainer: {
    alignSelf: "center",
    gap: "0.5rem",
  },
  otpSingleInput: {
    width: "2rem",
    height: "2rem",
    border: `1px solid ${variables.themeColor}`,
    borderRadius: 6,
    textAlign: "center",
    outline: "none",
  },
  errorStyles: {
    color: "red",
    marginTop: "0.25rem",
    fontSize: "0.75rem",
  },
};
