import "./globals.scss";
import { ThemeProvider } from "@mui/material/styles";
import { muiTheme } from "@/utils/muiTheme";

export const metadata = {
  title: "Online Super Mart",
  description:
    "Online store for wide range of products: mobiles, laptops, daily home needs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={muiTheme}>{children}</ThemeProvider>
      </body>
    </html>
  );
}
